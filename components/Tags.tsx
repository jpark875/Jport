import { meta } from "@/lib/ui";

export default function Tags({ label, tags, year }: { label: string; tags: string[]; year?: string }) {
  return (
    <ul aria-label={label} className={`flex flex-wrap gap-x-3 gap-y-1 tracking-[0.02em] ${meta}`}>
      {year ? <li>[ {year} ]</li> : null}
      {tags.map((tag) => (
        <li key={tag}>[ {tag} ]</li>
      ))}
    </ul>
  );
}
