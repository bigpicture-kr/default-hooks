import React, { Dispatch, SetStateAction, useEffect } from "react";

const useOutsideClick = (
  ref: React.RefObject<HTMLElement>,
  setter: Dispatch<SetStateAction<boolean>>
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 상단바에서 Link 의 클릭이 되도록 버블링을 제거
      event.stopPropagation();
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setter(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setter]);
};

export default useOutsideClick;
