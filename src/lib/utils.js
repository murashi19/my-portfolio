import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names, with Tailwind conflict resolution.
 *
 * Same contract as the `cn` helper shadcn generates, so any component
 * copied from the shadcn registry drops in unchanged.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
