import React, { useMemo } from "react";

export  function useFilter({ task }) {
  return useMemo(() => {
    return task.filter((val) => {
      return val.status === true;
    });
  }, [task]);
}

