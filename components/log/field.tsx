"use client";

import { cn } from "@/lib/utils";
import { useId } from "react";
import styles from "./log.module.css";

interface FieldProps {
  value: string;
  label: string;
  name: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field = ({
  value,
  label,
  onChange,
  name,
  placeholder,
  ...props
}: FieldProps) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-y-1">
      <label className="font-medium text-[14px]" htmlFor={id}>
        {label}
      </label>
      <input
        type="text"
        name={name}
        id={id}
        placeholder={placeholder}
        required
        autoComplete="off"
        autoCorrect="off"
        className={cn(
          "bg-[#101B1D]/30 focus:bg-gray-1 transition-all focus:placeholder:text-gray-9 text-[16px] outline-none text-gray-2 focus:text-gray-12 font-normal rounded-[6px] p-3 w-full placeholder:text-[white]/40 ",
          styles.input
        )}
        onChange={onChange}
        value={value}
        {...props}
      />
    </div>
  );
};

export default Field;
