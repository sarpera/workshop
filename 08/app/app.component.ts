import { Component } from '@angular/core';
import { ICocktail } from './cocktail';

@Component({
    selector   : 'np-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent {

    cocktails: ICocktail[];

    cocktail: ICocktail;

    constructor () {

    }

    onCocktailSelect (cocktail: ICocktail) {

        if (this.cocktail && this.cocktail.id === cocktail.id) {
            this.cocktail = null;
        } else {
            this.cocktail = cocktail;
        }
    }

}
