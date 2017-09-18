import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';

@Component({
    selector   : 'np-cocktail',
    templateUrl: './cocktail.component.html',
    styleUrls  : ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

    @Input()
    cocktail: Cocktail;

    constructor () { }

    ngOnInit () {
    }

}
