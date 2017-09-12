import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICocktail } from '../cocktail';

@Component({
    selector   : 'np-cocktails',
    templateUrl: './cocktails.component.html',
    styleUrls  : ['./cocktails.component.scss']
})
export class CocktailsComponent {

    @Input()
    cocktails: ICocktail[];

    @Output() onSelect = new EventEmitter();

    constructor () { }

    selectCocktail (cocktail: ICocktail) {
        this.onSelect.emit(cocktail);
    }
}
