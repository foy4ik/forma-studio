import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** "1 240" style thousands separator for area/stat figures. */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}
