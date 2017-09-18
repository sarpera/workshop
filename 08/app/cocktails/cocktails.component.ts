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

    showEditor = false;

    constructor (private cocktailService: CocktailService) {

    }

    fetchCocktails () {
        this.cocktailService.getCocktails().subscribe(cocktails => this.cocktails = cocktails);
    }

    ngOnInit () {
        this.fetchCocktails();
    }

}
