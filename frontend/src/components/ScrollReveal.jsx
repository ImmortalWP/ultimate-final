import React, { useRef, useEffect } from "react";

/**
 * Wraps children and fades them in when scrolled into view.
 * @param {string} className - Extra classes for the wrapper div
 * @param {number} delay - Transition delay in ms (for staggered effects)
 * @param {'up'|'down'|'left'|'right'|'fade'} direction - Slide-in direction
 * @param {number} threshold - How much of element must be visible (0–1)
 */
export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.1,
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Set initial hidden state via inline style (avoids FOUC)
    const transforms = {
      up: "translateY(28px)",
      down: "translateY(-28px)",
      left: "translateX(28px)",
      right: "translateX(-28px)",
      fade: "translateY(0)",
    };
    el.style.opacity = "0";
    el.style.transform = transforms[direction] || transforms.up;
    el.style.transition = `opacity 0.65s ease-out ${delay}ms, transform 0.65s ease-out ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0)";
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction, threshold]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
