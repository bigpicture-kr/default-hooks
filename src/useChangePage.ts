import { Dispatch, SetStateAction, useCallback, useMemo } from "react";

export type PageDirection = "prev" | "next";

const useChangePage = (
  currentPage: number,
  setCurrentPage: Dispatch<SetStateAction<number>>,
  totalPage: number
) => {
  const handler = useCallback(
    (direction: PageDirection) => {
      if (direction === "prev") {
        setCurrentPage(currentPage - 1);
      } else {
        setCurrentPage(currentPage + 1);
      }
    },
    [currentPage, setCurrentPage]
  );

  const disabled = useMemo(() => {
    return {
      prev: currentPage === 0,
      next: totalPage === currentPage + 1
    };
  }, [currentPage, totalPage]);

  const title = {
    prev: "이전 페이지로",
    next: "다음 페이지로"
  };

  return {
    handler,
    disabled,
    title
  };
};

export default useChangePage;
