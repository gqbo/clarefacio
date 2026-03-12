"use client";

import { useRef, useEffect } from "react";

const FADE_OUT_START = 7.5;
const FADE_IN_END = 0.5;
const VIDEO_DURATION = 8;
const FADE_OUT_DURATION = VIDEO_DURATION - FADE_OUT_START; // 1.5s
const FADE_IN_DURATION = FADE_IN_END;                      // 1.8s

export default function VideoBackground({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const overlay = overlayRef.current;
    if (!video || !overlay) return;

    function onTimeUpdate() {
      const { currentTime, duration } = video!;
      if (!duration) return;

      if (duration - currentTime <= FADE_OUT_DURATION) {
        overlay!.style.transition = `opacity ${FADE_OUT_DURATION}s ease-in-out`;
        overlay!.style.opacity = "1";
      } else if (currentTime < FADE_IN_END) {
        overlay!.style.transition = `opacity ${FADE_IN_DURATION}s ease-in-out`;
        overlay!.style.opacity = "0";
      }
    }

    video.addEventListener("timeupdate", onTimeUpdate);
    return () => video.removeEventListener("timeupdate", onTimeUpdate);
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        autoPlay
        loop
        muted
        playsInline
      />
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1, opacity: 0, backgroundColor: "black" }}
      />
    </>
  );
}
