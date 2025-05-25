"use client";
import styles from "./EpisodeItem.module.css";
import { Episode } from "../hooks/useEpisodes";

interface Props {
  episodes: Episode[] | undefined;
  selectedEpisodeId: number | null;
  onSelect: (episode: Episode | null) => void;
}

export default function EpisodeList({ episodes, selectedEpisodeId, onSelect }: Props) {
  if (!episodes) return <p>Loading episodes…</p>;
  return (
    <aside className="overflow-y-auto h-full p-4 border-r border-gray-200 min-w-[180px]">
      <h2 className="text-lg font-medium mb-2">Episodes</h2>
      {episodes.map((ep) => (
        <div
          key={ep.id}
          className={`${styles.item} ${selectedEpisodeId === ep.id ? styles.active : ""}`}

          onClick={() => onSelect(selectedEpisodeId === ep.id ? null : ep)}
        >
          {ep.name}
        </div>
      ))}
    </aside>
  );
}