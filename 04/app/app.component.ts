import { Component } from '@angular/core';
import { ICocktail } from './cocktail';
import { Cocktails } from './cocktails.data';

@Component({
    selector   : 'np-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent {

    cocktails: ICocktail[] = Cocktails;

    cocktail: ICocktail;

    onCocktailSelect (cocktail: ICocktail) {

        if (this.cocktail && this.cocktail.id === cocktail.id) {
            this.cocktail = null;
        } else {
            this.cocktail = cocktail;
        }
    }

}
