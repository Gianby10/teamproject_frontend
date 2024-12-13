import { clsx, type ClassValue } from "clsx";
import { cookies } from "next/headers";
import { twMerge } from "tailwind-merge";
import jwt from "jsonwebtoken";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
