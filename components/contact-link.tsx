"use client";
import Item from "./item";
import React from "react";

const Contact = () => {
  const classes = "text-gray-11 hover:text-gray-1";
  const [copied, setCopied] = React.useState(false);
  const handleCopy = (text: string) => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <Item>
      <div className={classes}>Email</div>
      <button className={classes} onClick={() => handleCopy("@typicalmitul")}>
        {copied ? "Copied handle!" : "Discord"}
      </button>
      <div className={classes}>Twitter</div>
      <div className={classes}>Instagram</div>
    </Item>
  );
};

export default Contact;
