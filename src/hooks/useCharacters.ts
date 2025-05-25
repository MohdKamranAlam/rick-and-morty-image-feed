import { useQuery } from "@tanstack/react-query";

export interface Character {
  id: number;
  name: string;
  image: string;
}

export const useCharacters = (episodeCharacterUrls?: string[]) => {
  return useQuery<Character[]>({
    queryKey: ["characters", episodeCharacterUrls ?? "initial"],
    queryFn: async () => {
      if (!episodeCharacterUrls) {
        const res = await fetch("https://rickandmortyapi.com/api/character");
        if (!res.ok) throw new Error("Failed to fetch characters");
        const data = await res.json();
        return data.results;
      }
      const ids = episodeCharacterUrls.map(url => url.split("/").pop()).join(",");
      const res = await fetch(`https://rickandmortyapi.com/api/character/${ids}`);
      if (!res.ok) throw new Error("Failed to fetch episode characters");
      const data = await res.json();
      return Array.isArray(data) ? data : [data];
    },
    enabled: episodeCharacterUrls !== undefined,
    staleTime: 1000 * 60 * 5
  });
};