import { forEach, keys } from "lodash";
import { useEffect, useState } from "react";

const screenSizes: Record<string, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const useMedia = () => {
  const [media, setMedia] = useState<Record<string, boolean>>({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    "2xl": false,
  });

  useEffect(() => {
    const temp: Record<string, boolean> = {};
    forEach(keys(screenSizes), (key) => {
      temp[key] = window.innerWidth > screenSizes[key];
    });
    setMedia(temp);
  }, []);

  return media;
};
