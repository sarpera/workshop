import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';
import { Cocktails } from './cocktail.data';

@Injectable()
export class CocktailService {

    constructor () { }

    getCocktails (): Cocktail[] {
        return Cocktails;
    }

    getCocktail (id: string): Cocktail {
        return Cocktails.find(cocktail => cocktail.id === id);
    }

}
