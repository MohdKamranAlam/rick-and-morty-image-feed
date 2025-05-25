import { useQuery } from "@tanstack/react-query";

export interface Episode {
  id: number;
  name: string;
  episode: string;
  characters: string[];
}

export const useEpisodes = () => {
  return useQuery<Episode[]>({
    queryKey: ["episodes"],
    queryFn: async () => {
      const res = await fetch("https://rickandmortyapi.com/api/episode");
      if (!res.ok) throw new Error("Failed to fetch episodes");
      const data = await res.json();
      return data.results;
    },
    staleTime: 1000 * 60 * 5
  });
};