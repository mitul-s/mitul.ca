import Link from "next/link";
import React from "react";

const Smol = () => {
  return (
    <p className="text-gray-11 text-[12px]">
      Previous years [
      <Link
        className="text-blue-9 hover:text-blue-10 hover:underline"
        href="https://futureland.tv/@mitul/entry/385302"
        target="_blank"
        rel="noreferrer noopener"
      >
        2023
      </Link>
      ]
    </p>
  );
};

export default Smol;
