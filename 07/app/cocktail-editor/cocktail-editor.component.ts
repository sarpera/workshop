import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CocktailService } from '../cocktail.service';

@Component({
    selector   : 'np-cocktail-editor',
    templateUrl: './cocktail-editor.component.html',
    styleUrls  : ['./cocktail-editor.component.scss']
})
export class CocktailEditorComponent implements OnInit, OnChanges {

    @Output() saved = new EventEmitter();

    cocktailForm: FormGroup;

    isFormBusy = false;

    constructor (private fb: FormBuilder, private cocktailService: CocktailService) { }

    get name (): AbstractControl {
        return this.cocktailForm.get('name');
    }

    get steps (): FormArray {
        return this.cocktailForm.get('steps') as FormArray;
    }

    get step () {
        return new FormControl('', [Validators.required, Validators.maxLength(255)]);
    }

    get ingredients (): FormArray {
        return this.cocktailForm.get('ingredients') as FormArray;
    }

    get ingredient () {
        return new FormControl('', [Validators.required, Validators.maxLength(64)]);
    }

    ngOnInit () {

        this.cocktailForm = this.fb.group({
            name       : ['', [Validators.required, Validators.maxLength(64)]],
            description: ['', [Validators.required, Validators.maxLength(255)]],
            steps      : this.fb.array([this.step]),
            ingredients: this.fb.array([this.ingredient]),
            rating     : [0, [Validators.min(0), Validators.max(5)]],
            image      : ['', [Validators.pattern('https?://.+')]]
        });

    }

    addStep () {
        this.steps.push(this.step);
    }

    removeStep (index: number) {
        this.steps.removeAt(index);
    }

    addIngredient () {
        this.ingredients.push(this.ingredient);
    }

    removeIngredient (index: number) {
        this.ingredients.removeAt(index);
    }

    onSubmit () {
        this.cocktailService.addCocktail(this.cocktailForm.value).subscribe(() => {
            this.saved.next(this.cocktailForm.value);
            this.revert();
        });
    }

    revert () { this.ngOnChanges(); }

    ngOnChanges () {

        for (let index = this.steps.length - 1; index > 0; index--) {
            this.removeStep(index);
        }

        for (let index = this.ingredients.length - 1; index > 0; index--) {
            this.removeIngredient(index);
        }

        this.cocktailForm.reset({
            name       : '',
            description: '',
            steps      : [''],
            ingredients: [''],
            rating     : 0,
            image      : ''
        });

    }

}
