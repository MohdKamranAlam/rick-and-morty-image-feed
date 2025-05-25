import Image from "next/image";
import { Character } from "../hooks/useCharacters";

interface Props {
  characters: Character[] | undefined;
  title: string;
}

export default function CharacterGrid({ characters, title }: Props) {
  if (!characters) return <p>Loading characters…</p>;
  return (
    <section className="flex-1 p-6">
      <h1 className="text-xl font-semibold mb-4">{title}</h1>
      <div style={{display:'grid',gap:'1rem',gridTemplateColumns:'repeat(auto-fill,minmax(120px,1fr))'}}>
        {characters.map((ch) => (
          <figure key={ch.id} className="flex flex-col items-center text-center">
            <Image src={ch.image} alt={ch.name} width={120} height={120}
              className="rounded shadow object-cover w-[120px] h-[120px]" />
            <figcaption className="mt-1 text-sm">{ch.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}