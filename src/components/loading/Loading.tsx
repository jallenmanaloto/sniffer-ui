"use client"

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from 'react';

function Phrases() {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const phrases = [
    "Scanning page...",
    "Checking domain...",
    "Verifying certificate...",
    "Analyzing content...",
    "Loading forms...",
    "Processing request...",
  ];

  useEffect(() => {
    const phraseInterval = setInterval(() => {
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setCurrentPhrase(randomPhrase);
    }, Math.random() * (5000 - 3000) + 3000);

    return () => clearInterval(phraseInterval);
  }, []);

  return (
    <div className="h-4">
      <p className="text-base text-gray-500 animate-pulse">
        {currentPhrase}
      </p>
    </div>
  )
}

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const duration = 25;
  const maxInterval = 1000;
  const minInterval = 300;

  useEffect(() => {
    let timeoutId: number;
    const incrementPerSec = 100 / duration;

    const updateProgress = () => {
      setProgress((prev: number) => {
        const nextIncrement = Math.random() * incrementPerSec;
        const nextProgress = prev + nextIncrement;
        if (nextProgress >= 100) {
          return 100;
        }

        return nextProgress;
      });
    }

    const schedNextUpdate = () => {
      const nextInterval = Math.random() * (maxInterval - minInterval) + minInterval;
      timeoutId = setTimeout(() => {
        updateProgress();
        schedNextUpdate();
      }, nextInterval) as unknown as number;
    }

    schedNextUpdate();
    return () => clearTimeout(timeoutId);
  }, [])

  return (
    <div className="flex justify-center py-24 md:py-10">
      <div className="flex flex-col justify-center items-center md:h-3/5 md:w-3/5 lg:h-2/5 lg:w-2/5">
        <DotLottieReact
          src="https://lottie.host/f7d0b8c8-ea8a-413e-bfa5-e526748a5456/iDwkYGtOaL.lottie"
          loop
          autoplay
        />
        <Phrases />
        <Progress value={progress} className="w-[60%] h-1 mt-4" />
      </div>
    </div>
  )
}
