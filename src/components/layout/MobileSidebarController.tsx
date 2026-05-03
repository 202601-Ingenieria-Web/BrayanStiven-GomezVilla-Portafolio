"use client";

import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { LeftSidebar } from "@/components/layout/LeftSidebar";
import { RightSidebar } from "@/components/layout/RightSidebar";

type ActiveSidebar = "left" | "right" | null;
type GestureDirection = "horizontal" | "vertical" | null;

const EDGE_SWIPE_AREA = 28;
const OPEN_THRESHOLD = 0.35;
const LEFT_SIDEBAR_WIDTH = 320;
const RIGHT_SIDEBAR_WIDTH = 96;
const DESKTOP_BREAKPOINT = 1280;
const TRANSITION_DURATION = 220;
const GESTURE_DIRECTION_THRESHOLD = 8;

export function MobileSidebarController() {
    const [activeSidebar, setActiveSidebar] = useState<ActiveSidebar>(null);
    const [openProgress, setOpenProgress] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const activeSidebarRef = useRef<ActiveSidebar>(null);
    const openProgressRef = useRef(0);
    const startXRef = useRef(0);
    const startYRef = useRef(0);
    const startProgressRef = useRef(0);
    const draggingSidebarRef = useRef<ActiveSidebar>(null);
    const gestureDirectionRef = useRef<GestureDirection>(null);
    const closeTimeoutRef = useRef<number | null>(null);

    const getSidebarWidth = (sidebar: ActiveSidebar) => {
        if (sidebar === "left") {
            return Math.min(LEFT_SIDEBAR_WIDTH, window.innerWidth * 0.84);
        }

        return Math.min(RIGHT_SIDEBAR_WIDTH, window.innerWidth * 0.26);
    };

    const updateActiveSidebar = (sidebar: ActiveSidebar) => {
        activeSidebarRef.current = sidebar;
        setActiveSidebar(sidebar);
    };

    const updateOpenProgress = (progress: number) => {
        const safeProgress = Math.min(1, Math.max(0, progress));

        openProgressRef.current = safeProgress;
        setOpenProgress(safeProgress);
    };

    const clearCloseTimeout = () => {
        if (closeTimeoutRef.current) {
            window.clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    };

    const startDraggingSidebar = (sidebar: Exclude<ActiveSidebar, null>, touchX: number, touchY: number, initialProgress: number) => {
        clearCloseTimeout();

        draggingSidebarRef.current = sidebar;
        gestureDirectionRef.current = null;
        startXRef.current = touchX;
        startYRef.current = touchY;
        startProgressRef.current = initialProgress;

        updateActiveSidebar(sidebar);
        updateOpenProgress(initialProgress);
        setIsDragging(true);
    };

    const openSidebar = (sidebar: Exclude<ActiveSidebar, null>) => {
        clearCloseTimeout();
        updateActiveSidebar(sidebar);
        updateOpenProgress(1);
    };

    const closeSidebar = () => {
        updateOpenProgress(0);
        setIsDragging(false);
        draggingSidebarRef.current = null;
        gestureDirectionRef.current = null;

        closeTimeoutRef.current = window.setTimeout(() => {
            updateActiveSidebar(null);
        }, TRANSITION_DURATION);
    };

    useEffect(() => {
        const handleTouchStart = (event: TouchEvent) => {
            if (window.innerWidth >= DESKTOP_BREAKPOINT) {
                return;
            }

            const touch = event.touches[0];
            const touchX = touch.clientX;
            const touchY = touch.clientY;
            const startsFromLeftEdge = touchX <= EDGE_SWIPE_AREA;
            const startsFromRightEdge = touchX >= window.innerWidth - EDGE_SWIPE_AREA;
            const currentSidebar = activeSidebarRef.current;

            clearCloseTimeout();

            if (startsFromLeftEdge) {
                startDraggingSidebar("left", touchX, touchY, currentSidebar === "left" ? openProgressRef.current : 0);
                return;
            }

            if (startsFromRightEdge) {
                startDraggingSidebar("right", touchX, touchY, currentSidebar === "right" ? openProgressRef.current : 0);
                return;
            }

            if (currentSidebar) {
                startDraggingSidebar(currentSidebar, touchX, touchY, openProgressRef.current);
            }
        };

        const handleTouchMove = (event: TouchEvent) => {
            const draggingSidebar = draggingSidebarRef.current;

            if (!draggingSidebar) {
                return;
            }

            const touch = event.touches[0];
            const currentX = touch.clientX;
            const currentY = touch.clientY;
            const deltaX = currentX - startXRef.current;
            const deltaY = currentY - startYRef.current;

            // Vertical gestures must remain free so the user can scroll the sidebar content on mobile.
            if (!gestureDirectionRef.current) {
                const absoluteDeltaX = Math.abs(deltaX);
                const absoluteDeltaY = Math.abs(deltaY);

                if (absoluteDeltaY > GESTURE_DIRECTION_THRESHOLD && absoluteDeltaY > absoluteDeltaX) {
                    draggingSidebarRef.current = null;
                    gestureDirectionRef.current = "vertical";
                    setIsDragging(false);
                    return;
                }

                if (absoluteDeltaX > GESTURE_DIRECTION_THRESHOLD && absoluteDeltaX > absoluteDeltaY) {
                    gestureDirectionRef.current = "horizontal";
                }
            }

            if (gestureDirectionRef.current !== "horizontal") {
                return;
            }

            event.preventDefault();

            const sidebarWidth = getSidebarWidth(draggingSidebar);
            const movement = draggingSidebar === "left" ? deltaX : -deltaX;
            const nextProgress = startProgressRef.current + movement / sidebarWidth;

            updateOpenProgress(nextProgress);
        };

        const handleTouchEnd = () => {
            const draggingSidebar = draggingSidebarRef.current;

            if (!draggingSidebar) {
                return;
            }

            setIsDragging(false);
            draggingSidebarRef.current = null;
            gestureDirectionRef.current = null;

            if (openProgressRef.current >= OPEN_THRESHOLD) {
                updateActiveSidebar(draggingSidebar);
                updateOpenProgress(1);
                return;
            }

            closeSidebar();
        };

        window.addEventListener("touchstart", handleTouchStart, { passive: true });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);

            if (closeTimeoutRef.current) {
                window.clearTimeout(closeTimeoutRef.current);
            }
        };
    }, []);

    const leftSidebarStyle: CSSProperties = {
        transform: `translateX(${activeSidebar === "left" ? (openProgress - 1) * 100 : -100}%)`,
        transition: isDragging ? "none" : `transform ${TRANSITION_DURATION}ms ease-out`,
        touchAction: "pan-y",
    };

    const rightSidebarStyle: CSSProperties = {
        transform: `translateX(${activeSidebar === "right" ? (1 - openProgress) * 100 : 100}%)`,
        transition: isDragging ? "none" : `transform ${TRANSITION_DURATION}ms ease-out`,
        touchAction: "pan-y",
    };

    const overlayStyle: CSSProperties = {
        opacity: activeSidebar ? openProgress * 0.55 : 0,
        pointerEvents: activeSidebar && openProgress > 0 ? "auto" : "none",
    };

    return (
        <>
            <div className="fixed inset-0 z-[8990] bg-slate-950 transition-opacity duration-200 xl:hidden" style={overlayStyle} onClick={closeSidebar} />

            <button type="button" aria-label="Abrir panel izquierdo" onClick={() => openSidebar("left")} className="fixed left-2 top-1/2 z-[8980] flex h-12 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-md backdrop-blur transition hover:bg-emerald-500 hover:text-white dark:bg-slate-900/90 dark:text-slate-300 xl:hidden">
                <PanelLeftOpen size={18} />
            </button>

            <button type="button" aria-label="Abrir panel derecho" onClick={() => openSidebar("right")} className="fixed right-2 top-1/2 z-[8980] flex h-12 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-md backdrop-blur transition hover:bg-emerald-500 hover:text-white dark:bg-slate-900/90 dark:text-slate-300 xl:hidden">
                <PanelRightOpen size={18} />
            </button>

            {/* The desktop sidebars are reused here as mobile panels controlled by horizontal touch gestures. */}
            <LeftSidebar mode="mobile" style={leftSidebarStyle} />
            <RightSidebar mode="mobile" style={rightSidebarStyle} />
        </>
    );
}