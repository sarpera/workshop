export type CocktailRating = 0 | 1 | 2 | 3 | 4 | 5;

export interface ICocktail {
    id: string;
    name: string;
    description: string;
    steps: string[];
    ingredients: string[];
    rating?: CocktailRating;
    image?: string;
}
