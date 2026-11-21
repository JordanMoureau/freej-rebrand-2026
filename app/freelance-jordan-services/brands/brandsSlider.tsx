"use client";

import { motion } from "framer-motion";
import styles from "./brandsSlider.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/branding-01.webp", width: 900, height: 900 },
  { src: "/branding-02.png", width: 1200, height: 600 },
  { src: "/branding-03.png", width: 1000, height: 1200 },
  { src: "/branding-05.png", width: 900, height: 1000 },
  { src: "/portfolio-06.png", width: 900, height: 900 },
];

const loopImages = [...images, ...images];

export default function BrandSlider() {
  const [active, setActive] = useState<number>(0);
  const [offsets, setOffsets] = useState<number[]>([]);

  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const measure = () => {
      const firstPosition = slideRefs.current[0]?.offsetLeft ?? 0;

      const positions = slideRefs.current.map(
        (slide) => (slide?.offsetLeft ?? 0) - firstPosition,
      );

      setOffsets(positions);
    };

    measure();

    window.addEventListener("resize", measure);

    return () => {
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (!offsets.length) return;

    const interval = setInterval(() => {
      setActive((prev) => prev + 1);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [offsets]);

  useEffect(() => {
    if (active === images.length) {
      const timeout = setTimeout(() => {
        setActive(0);
      }, 300);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [active]);

  const x = offsets[active] !== undefined ? -offsets[active] : 0;

  return (
    <div className={styles.imageSlider}>
      <motion.div
        className={styles.track}
        animate={{ x }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 16,
        }}
      >
        {loopImages.map((image, index) => (
          <div
            className={styles.slide}
            key={`${image.src}-${index}`}
            ref={(el) => {
              slideRefs.current[index] = el;
            }}
          >
            <Image
              src={image.src}
              alt=""
              width={image.width}
              height={image.height}
              className={styles.image}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
