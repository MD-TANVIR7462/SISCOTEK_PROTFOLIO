import { useEffect, useState } from "react";

export const useInfinitySlider = <T,>(initialItems: T[]) => {
  const [sliderItems, setSliderItems] = useState(initialItems);

  useEffect(() => {
    let tempSliderItem: T;

    const interval = setInterval(() => {
      setSliderItems((prev) => {
        tempSliderItem = prev[0];
        return [...prev.slice(1)];
      });

      setTimeout(() => {
        setSliderItems((prev) => {
          return [...prev, tempSliderItem];
        });
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return sliderItems;
};
