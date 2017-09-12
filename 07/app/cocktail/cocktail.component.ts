import { Component, OnInit } from '@angular/core';
import { ICocktail } from '../cocktail';
import { CocktailService } from '../cocktail.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector   : 'np-cocktail',
    templateUrl: './cocktail.component.html',
    styleUrls  : ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

    cocktail: ICocktail;

    constructor (private route: ActivatedRoute, private cocktailService: CocktailService) { }

    ngOnInit () {

        this.route.params
            .subscribe((params: Params) => {
                this.cocktailService.getCocktail(params['id']).subscribe(cocktail => this.cocktail = cocktail);
            });

    }

}
