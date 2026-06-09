import { clsx, type ClassValue } from "clsx";

/** Joins conditional class names together, skipping falsy values. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
