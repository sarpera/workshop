import { Component, OnInit } from '@angular/core';
import { IngredientService } from './ingredient.service';
import { Subject } from 'rxjs/Subject';
import { Ingredient } from './ingredient';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector   : 'np-ingredients',
    templateUrl: './ingredients.component.html',
    styleUrls  : ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

    ingredients: Ingredient[];

    inputChange: Subject<string>;

    constructor (private ingredientService: IngredientService) {

    }

    onChange (e) {
        this.inputChange.next(e);
    }

    search (name: string) {
        this.ingredientService.searchIngredients(name).subscribe((items) => this.ingredients = items);
    }

    ngOnInit () {

        this.ingredientService.getAllIngredients().subscribe((items) => this.ingredients = items);

        this.inputChange = new Subject();

        this.inputChange.distinctUntilChanged().debounceTime(300).subscribe(val => this.search(val));

    }

}
