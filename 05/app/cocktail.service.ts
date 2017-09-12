import { Injectable } from '@angular/core';
import { ICocktail } from './cocktail';
import { Cocktails } from './cocktails.data';

@Injectable()
export class CocktailService {

    constructor () { }

    getCocktails (): Array<ICocktail> {

        return Cocktails;

    }

    getCocktail (id: string): ICocktail {
        return Cocktails.find((cocktail) => cocktail.id === id);
    }

}
