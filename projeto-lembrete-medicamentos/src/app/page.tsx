'use client'
import { useState } from 'react'

import HomePage from "./components/Home/Home";
import SplashScreen from './components/SplashScreen/SplashScreen';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <HomePage />
      )}
    </>
  );
}
