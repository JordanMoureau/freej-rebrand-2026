"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import styles from "./trustBar.module.css";

const trustMessages = [
  "Client Satisfaction",
  "Real Impact",
  "Communication",
  "Follow Through",
];

function StarIcon() {
  return (
    <svg
      className={styles.star}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 9.19 10.8"
      aria-hidden="true"
    >
      <path
        d="M3.14.22c-.12.23-.11,1.11.02,2.74.06.81.08,1.55.04,1.62-.04.07-.72.43-1.49.79C.27,6.04-.08,6.31.01,6.7s.44.47,1.88.45c.77-.01,1.46-.02,1.52-.02.07.01.14.38.21,1.24.06.66.18,1.47.26,1.79.14.48.2.57.42.62.14.04.34.01.44-.05.11-.07.47-.76.81-1.54.34-.78.66-1.49.71-1.56.09-.14.58.01,1.62.52.85.42,1.44.19,1.28-.48-.03-.14-.43-.73-.88-1.3-.46-.58-.82-1.09-.82-1.15,0-.05.27-.55.61-1.09.47-.79.58-1.04.53-1.27-.15-.61-.65-.61-1.87,0-.4.21-.76.35-.79.32-.05-.03-.46-.71-.94-1.5-.47-.8-.94-1.51-1.05-1.59-.24-.16-.7-.09-.8.13Z"
        fill="#f5f1e6"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default function TrustBar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        return (currentIndex + 1) % trustMessages.length;
      });
    }, 3000);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <div className={styles.bar}>
      <div className={styles.stars} aria-label="Five stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} />
        ))}

        <span className={styles.handwritten}>&apos;s for</span>
      </div>

      <div className={styles.message}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={trustMessages[activeIndex]}
            className={styles.service}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 8,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={
              shouldReduceMotion
                ? {
                    opacity: 1,
                  }
                : {
                    opacity: 0,
                    y: -8,
                  }
            }
            transition={{
              duration: 0.35,
              ease: "easeOut",
            }}
          >
            {trustMessages[activeIndex]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
