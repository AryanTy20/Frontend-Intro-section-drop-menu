import { useEffect, useState } from "react";

export const useWindowResize = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const Resize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", Resize);

    return () => {
      removeEventListener("resize", Resize);
    };
  }, []);

  return [height, width];
};
