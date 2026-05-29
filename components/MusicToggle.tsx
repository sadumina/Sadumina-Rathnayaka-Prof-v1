"use client";

import { motion } from "framer-motion";
import { Music2, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "sadumina-portfolio-music";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.22;

    const onPlay = () => {
      setPlaying(true);
      setHasError(false);
    };
    const onPause = () => setPlaying(false);
    const onError = () => {
      setHasError(true);
      setPlaying(false);
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("error", onError);

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("error", onError);
    };
  }, []);

  useEffect(() => {
    const preference = window.localStorage.getItem(STORAGE_KEY);
    if (preference === "on") {
      setInteracted(true);
    }
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    setInteracted(true);
    setHasError(false);

    if (playing) {
      audio.pause();
      setPlaying(false);
      window.localStorage.setItem(STORAGE_KEY, "off");
      return;
    }

    try {
      audio.volume = 0.22;
      await audio.play();
      setPlaying(true);
      window.localStorage.setItem(STORAGE_KEY, "on");
    } catch {
      setHasError(true);
      setPlaying(false);
      window.localStorage.setItem(STORAGE_KEY, "off");
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/background-music.mp3" loop preload="auto" />
      <motion.button
        type="button"
        aria-label={playing ? "Pause background music" : "Play background music"}
        onClick={toggleMusic}
        initial={{ opacity: 0, y: 18, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ y: -3, scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/55 px-2.5 py-2.5 text-sm font-semibold text-white/78 shadow-neon backdrop-blur-xl transition hover:border-purple-200/40 hover:text-white sm:bottom-5 sm:right-5 sm:gap-3 sm:px-4 sm:py-3"
      >
        <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-200/10 text-purple-100 sm:h-9 sm:w-9">
          {playing ? <Volume2 size={17} /> : interacted ? <VolumeX size={17} /> : <Music2 size={17} />}
          {playing ? <span className="absolute inset-0 animate-ping rounded-full bg-purple-300/20" /> : null}
        </span>
        <span className="hidden sm:inline">{hasError ? "Tap Again" : playing ? "Music On" : "Music Off"}</span>
      </motion.button>
    </>
  );
}
