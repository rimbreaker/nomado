import { useEffect } from "react";

export const useComponentDragable = (
  ref: React.MutableRefObject<HTMLDivElement | null>
) => {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  const dragMouseDown = (e: MouseEvent) => {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  useEffect(() => {
    if (ref.current) {
      ref.current!.style.bottom = "0px";
      ref.current!.onmousedown = dragMouseDown;
    }
    return () => closeDragElement();
    // eslint-disable-next-line
  }, [ref]);

  const elementDrag = (e: MouseEvent) => {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    ref.current!.style.top = ref.current!.offsetTop - pos2 + "px";
    ref.current!.style.left = ref.current!.offsetLeft - pos1 + "px";
  };

  const closeDragElement = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  };
};
