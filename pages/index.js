"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showElement, setShowElement] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 4000);
  }, []);

  return (
    <>
      {showElement && <SplashScreen text=">Joseph" delay={200} />}
      {!showElement && router.push("/about")}
    </>
  );
}

const SplashScreen = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <div className="grid place-items-center h-dvh">
      <h1 className="text-5xl sm:text-7xl font-gilroysemibold">
        {" "}
        {currentText}{" "}
      </h1>
    </div>
  );
};
