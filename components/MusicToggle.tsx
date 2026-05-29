"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Headphones, Music2, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "sadumina-portfolio-music";
const WELCOME_KEY = "sadumina-portfolio-welcome-seen";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [interacted, setInteracted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

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

    const welcomeSeen = window.localStorage.getItem(WELCOME_KEY);
    if (!welcomeSeen) {
      const timer = window.setTimeout(() => setShowWelcome(true), 850);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const playMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return false;

    setInteracted(true);
    setHasError(false);

    try {
      audio.volume = 0.22;
      await audio.play();
      setPlaying(true);
      window.localStorage.setItem(STORAGE_KEY, "on");
      return true;
    } catch {
      setHasError(true);
      setPlaying(false);
      window.localStorage.setItem(STORAGE_KEY, "off");
      return false;
    }
  };

  const dismissWelcome = () => {
    window.localStorage.setItem(WELCOME_KEY, "true");
    setShowWelcome(false);
  };

  const enableFromWelcome = async () => {
    await playMusic();
    dismissWelcome();
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      window.localStorage.setItem(STORAGE_KEY, "off");
      return;
    }

    await playMusic();
  };

  return (
    <>
      <audio ref={audioRef} src="/background-music.mp3" loop preload="auto" />
      <AnimatePresence>
        {showWelcome ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end justify-center bg-black/45 px-4 pb-5 backdrop-blur-sm sm:items-center sm:pb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Enable background music"
              className="glass-line relative w-full max-w-md overflow-hidden rounded-2xl p-6 shadow-panel"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div aria-hidden="true" className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-purple-300/15 blur-2xl" />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-purple-200/10 text-purple-100">
                  <Headphones size={22} />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-purple-200/70">
                  Best Experience
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-white">
                  Before you explore, turn on the music.
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/62">
                  For a more cinematic portfolio experience, enable the background track while you browse Sadumina&apos;s work.
                </p>
                {hasError ? (
                  <p className="mt-3 text-xs text-purple-100/70">
                    If playback was blocked, tap the music button again.
                  </p>
                ) : null}
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={enableFromWelcome}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-purple-100"
                  >
                    <Volume2 size={17} />
                    Turn On Music
                  </button>
                  <button
                    type="button"
                    onClick={dismissWelcome}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.045] px-5 py-3 text-sm font-semibold text-white transition hover:border-purple-200/60 hover:bg-purple-300/10"
                  >
                    Explore Silently
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
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
