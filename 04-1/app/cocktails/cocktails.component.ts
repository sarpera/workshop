import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cocktail } from '../cocktail';
import { CocktailService } from '../cocktail.service';

@Component({
    selector   : 'np-cocktails',
    templateUrl: './cocktails.component.html',
    styleUrls  : ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit {

    cocktails: Cocktail[];

    @Output()
    onSelect = new EventEmitter();

    constructor (private service: CocktailService) { }

    selectCocktail (cocktail: Cocktail) {
        this.onSelect.next(cocktail);
    }

    ngOnInit () {

        this.cocktails = this.service.getCocktails();
    }

}
