import { MouseEventHandler, useState } from "react";

const useMouseHover = (): [
  boolean,
  {
    onMouseEnter: MouseEventHandler<HTMLDivElement>;
    onMouseLeave: MouseEventHandler<HTMLDivElement>;
  }
] => {
  const [hoverd, setHoverd] = useState<boolean>(false);

  const onMouseEnter = () => setHoverd(true);
  const onMouseLeave = () => setHoverd(false);

  return [
    hoverd,
    {
      onMouseEnter,
      onMouseLeave
    }
  ];
};
export default useMouseHover;
