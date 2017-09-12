import { Component } from '@angular/core';
import { Cocktails } from './cocktails.data';
import { ICocktail } from './cocktail';

@Component({
    selector   : 'np-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss']
})
export class AppComponent {

    cocktails: ICocktail[] = Cocktails;

}
