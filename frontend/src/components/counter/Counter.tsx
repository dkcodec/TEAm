"use client";

import React, { useEffect, useState } from "react";

type counterProps = {
  val: number;
  time: number;
};

function Counter({ val, time }: counterProps) {
  const [currVal, setCurrVal] = useState(0);

  useEffect(() => {
    currVal !== val && setTimeout(setCurrVal, time, currVal + 1);
  }, [currVal]);

  return <div>{currVal}</div>;
}

export default Counter;
