import { useState, useEffect } from "react";
import { throttle } from "lodash";

export const useScrollHandler = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isNormalScroll, setIsNormalScroll] = useState(false);

  const handleWheel = throttle((event) => {
    if (!isNormalScroll) {
      setScrollIndex((prevIndex) => {
        const newIndex =
          event.deltaY > 0
            ? Math.min(prevIndex + 1, 4)
            : Math.max(prevIndex - 1, 0);
        console.log(newIndex);
        return newIndex;
      });
    }
  }, 200);

  useEffect(() => {
    if (scrollIndex === 4) {
      setIsNormalScroll(true);
    } else {
      setIsNormalScroll(false);
    }
  }, [scrollIndex]);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isNormalScroll]);

  return [scrollIndex, isNormalScroll];
};
