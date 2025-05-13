export interface NamedAPIResource {
    name: string;
    url: string;
  }
  
  export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: NamedAPIResource[];
  }
  
  export function toPokemonListResponse(data: any): PokemonListResponse {
    return {
      count: data.count,
      next: data.next,
      previous: data.previous,
      results: data.results.map((p: any) => ({
        name: p.name,
        url: p.url
      }))
    };
  }
  