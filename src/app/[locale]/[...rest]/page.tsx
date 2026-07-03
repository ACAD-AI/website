import { notFound } from "next/navigation";

// Any unmatched path under a locale (e.g. /en/does-not-exist) falls through
// to here and triggers the themed not-found.tsx within the locale layout.
export default function CatchAllPage() {
  notFound();
}
