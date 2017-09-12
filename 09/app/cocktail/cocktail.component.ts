import { Component, OnInit } from '@angular/core';
import { ICocktail } from '../cocktail';
import { CocktailService } from '../cocktail.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector   : 'np-cocktail',
    templateUrl: './cocktail.component.html',
    styleUrls  : ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

    showEditor: false;

    cocktail: ICocktail;

    constructor (private route: ActivatedRoute, private router: Router, private cocktailService: CocktailService) { }

    fetchCocktail (id?: string) {
        this.cocktailService.getCocktail(this.cocktail ? this.cocktail.id : id)
            .subscribe(cocktail => this.cocktail = cocktail);
    }

    deleteCocktail () {
        this.cocktailService.deleteCocktail(this.cocktail.id)
            .subscribe(() => this.router.navigate(['../']));
    }

    ngOnInit () {

        this.route.params
            .subscribe((params: Params) => {
                this.fetchCocktail(params['id']);
            });

    }

}
