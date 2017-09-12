import { Component, OnInit } from '@angular/core';
import { ICocktail } from '../cocktail';
import { CocktailService } from '../cocktail.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
    selector   : 'np-cocktails',
    templateUrl: './cocktails.component.html',
    styleUrls  : ['./cocktails.component.scss'],
    animations : [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(300)
            ]),
            transition('* => void', [
                animate(300, style({ transform: 'translateX(100%)' }))
            ])
        ])
    ]
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
