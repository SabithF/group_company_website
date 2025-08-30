import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const Typewriter = ({
  text = "",
  speed = 100,       // ms per character
  delay = 0,         // extra delay before starting once in view
  className = "",
  showCursor = true,
  inViewAmount = 0.35, // how much must be visible to start
  once = true,         // start only once
}) => {
  const [displayed, setDisplayed] = useState("");
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);
  const spanRef = useRef(null);

  // Detect visibility
  const isInView = useInView(spanRef, { amount: inViewAmount, once });

  useEffect(() => {
    // Don’t start until it's in view
    if (!isInView) return;

    const full = String(text ?? "");
    let i = 0;

    // optional delay after becoming visible
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        if (i < full.length) {
          setDisplayed(full.slice(0, i + 1));
          i += 1;
        } else {
          clearInterval(intervalRef.current);
        }
      }, speed);
    }, delay);

    // cleanup (handles React Strict Mode double-invocation too)
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isInView, text, speed, delay]);

  return (
    <motion.span
      ref={spanRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: inViewAmount, once }}
      transition={{ duration: 0.25 }}
      className={className}
    >
      {displayed}
      {showCursor && <span className="animate-pulse">|</span>}
    </motion.span>
  );
};

export default Typewriter;
