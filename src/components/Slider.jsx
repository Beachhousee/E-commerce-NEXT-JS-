"use client";
import { useEffect, useState } from "react";
import React from "react";
import Image from "next/image";
import styles from "@/styles/home/Hero.module.css";

const images = [
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692941008275-headphone3.jpg",
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692255251854-xbox.jpg",
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057474498-earphone.jpg",
  "https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1691057718636-headphone5.jpg",
];

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentValue) => {
        if (currentValue === images.length - 1) {
          return 0;
        } else {
          return currentValue + 1;
        }
      });
    }, 2000
  );
  return ()=>{
    clearInterval(interval);
  }
  }, []);
  return (
    <div className={styles.imageSection}>
      <div className={styles.slider}>
        {images.map((image, index) => (
          <Image
            alt={"Slide" + index}
            key={"Slide" + index}
            className={`${styles.slide} ${
              currentSlide == index && styles.active
            }`}
            src={image}
            fill
          />
        ))}
      </div>
    </div>
  );
}
