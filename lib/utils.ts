import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pick(object: Record<string, any>, keys: string[]) {
  return keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {} as Record<string, any>);
}

export const getRandomRotation = () => {
  const isNegative = Math.random() < 0.5;
  const angle = Math.floor(Math.random() * 60);
  return isNegative ? -angle : angle;
};
