"use client";

import dynamic from "next/dynamic";

const P5AsciiTree = dynamic(() => import("@/components/tree"), {
  ssr: false,
  loading: () => <div className="w-[900px] h-[720px]" />,
});

const TreeClient = () => {
  return <P5AsciiTree />;
};

export default TreeClient;
