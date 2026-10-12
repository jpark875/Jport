// Files under public/ need the base path prefixed by hand; next/link adds it on its own.
export function asset(path: string): string {
  return path.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}` : path;
}
