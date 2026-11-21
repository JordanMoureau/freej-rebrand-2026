"use client";

import { motion } from "framer-motion";
import styles from "./personalslider.module.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const images = [
  { src: "/personal-01.jpeg", width: 900, height: 1200 },

  { src: "/personal-02.jpeg", width: 900, height: 1200 },

  { src: "/personal-04.jpeg", width: 900, height: 1200 },

  { src: "/personal-05.jpeg", width: 900, height: 1200 },
  { src: "/fam.JPG", width: 900, height: 1200 },
  { src: "/blueflowers.jpg", width: 900, height: 1200 },
  { src: "/deskscone.jpg", width: 1200, height: 900 },
  { src: "/personal-06.jpeg", width: 900, height: 1200 },
  { src: "/familygif.gif", width: 900, height: 1200 },
];

const loopImages = [...images, ...images];

export default function PersonalSlider() {
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
