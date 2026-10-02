"use client";

import { motion } from "framer-motion";
import styles from "./imageslider.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/portfolio-04.png", width: 900, height: 1200 },
  { src: "/portfolio-05.png", width: 1200, height: 900 },
  { src: "/portfolio-06.png", width: 1400, height: 900 },
  { src: "/portfolio-07.png", width: 1200, height: 900 },
  { src: "/portfolio-08.png", width: 1200, height: 900 },
  { src: "/portfolio-09.png", width: 1200, height: 900 },
  { src: "/portfolio-10.png", width: 1200, height: 900 },
  { src: "/portfolio-11.png", width: 1200, height: 900 },
];

const loopImages = [...images, ...images];

export default function ImageSlider() {
  const [active, setActive] = useState<number>(0);
  const [offsets, setOffsets] = useState<number[]>([]);

  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const measure = () => {
      const positions = slideRefs.current.map(
        (slide) => slide?.offsetLeft ?? 0,
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
