import Head from "next/head";
import { useState } from "react";
import CharacterGrid from "../components/CharacterGrid";
import EpisodeList from "../components/EpisodeList";
import { Episode, useEpisodes } from "../hooks/useEpisodes";
import { useCharacters } from "../hooks/useCharacters";

export default function Home() {
  const { data: episodes } = useEpisodes();
  const [selected, setSelected] = useState<Episode | null>(null);
  const { data: characters } = useCharacters(selected?.characters);

  return (
    <>
      <Head>
        <title>Rick & Morty Image Feed</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="h-screen flex">
        <EpisodeList
          episodes={episodes}
          selectedEpisodeId={selected?.id ?? null}
          onSelect={setSelected}
        />
        <CharacterGrid
          characters={characters}
          title={
            selected
              ? `${characters?.length ?? 0} Characters in episode "${selected.name}"`
              : "Rick & Morty Characters"
          }
        />
      </main>
    </>
  );
}