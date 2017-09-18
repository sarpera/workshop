import { Component } from '@angular/core';
import { Cocktail } from './cocktail';
import { Cocktails } from './cocktail.data';

@Component({
    selector   : 'np-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent {

    cocktails: Cocktail[] = Cocktails;

    cocktail: Cocktail;

    onCocktailSelect (cocktail: Cocktail) {

        if (this.cocktail && this.cocktail.id === cocktail.id) {
            this.cocktail = null;
        } else {
            this.cocktail = cocktail;
        }

    }

}
