import { Component, OnInit } from '@angular/core';
import { ICocktail } from '../cocktail';
import { CocktailService } from '../cocktail.service';

@Component({
    selector   : 'np-cocktails',
    templateUrl: './cocktails.component.html',
    styleUrls  : ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit {

    cocktails: ICocktail[];

    constructor (private cocktailService: CocktailService) {

    }

    ngOnInit () {
        this.cocktailService.getCocktails().subscribe(cocktails => this.cocktails = cocktails);
    }

}
