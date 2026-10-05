export default function Tags({ label, tags }: { label: string; tags: string[] }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2 text-xs font-mono">
      {tags.map((tag) => (
        <li key={tag} className="rounded-md border border-[#1E293B] px-2 py-1 text-[#94A3B8]">
          {tag}
        </li>
      ))}
    </ul>
  );
}
