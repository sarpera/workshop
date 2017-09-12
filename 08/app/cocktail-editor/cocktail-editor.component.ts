import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CocktailService } from '../cocktail.service';
import { ICocktail } from '../cocktail';

@Component({
    selector   : 'np-cocktail-editor',
    templateUrl: './cocktail-editor.component.html',
    styleUrls  : ['./cocktail-editor.component.scss']
})
export class CocktailEditorComponent implements OnInit {

    @Output() saved = new EventEmitter();

    @Input()
    cocktail: Partial<ICocktail> = {
        name       : '',
        description: '',
        steps      : [''],
        ingredients: [''],
        rating     : 0,
        image      : '',
    };

    cocktailForm: FormGroup;

    isFormBusy = false;

    constructor (private fb: FormBuilder, private cocktailService: CocktailService) {

    }

    get name (): AbstractControl {
        return this.cocktailForm.get('name');
    }

    get steps (): FormArray {
        return this.cocktailForm.get('steps') as FormArray;
    }

    get ingredients (): FormArray {
        return this.cocktailForm.get('ingredients') as FormArray;
    }

    get ingredient (): FormControl {
        return new FormControl('', [Validators.required, Validators.maxLength(64)]);
    }

    get step (): FormControl {
        return new FormControl('', [Validators.required, Validators.maxLength(255)]);
    }

    ngOnInit () {

        this.cocktailForm = this.fb.group({
            name       : ['', [Validators.required, Validators.maxLength(64)]],
            description: ['', [Validators.required, Validators.maxLength(255)]],
            steps      : this.fb.array([this.step]),
            ingredients: this.fb.array([this.ingredient]),
            rating     : ['', [Validators.min(0), Validators.max(5)]],
            image      : ['', [Validators.pattern('https?://.+')]]
        });

        this.setFormValues();
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

        if (this.cocktail.id) {

            this.cocktailService.saveCocktail(this.cocktail.id, this.cocktailForm.value).subscribe(() => {
                this.saved.next(this.cocktailForm.value);
            });

        } else {

            this.cocktailService.addCocktail(this.cocktailForm.value).subscribe(() => {
                this.revert();
                this.saved.next(this.cocktailForm.value);
            });

        }

    }

    setFormValues () {

        for (let index = this.steps.length - 1; index >= 0; index--) {
            this.removeStep(index);
        }

        for (let index = this.ingredients.length - 1; index > 0; index--) {
            this.removeIngredient(index);
        }

        this.cocktail.steps.forEach((step, index) => {
            this.steps.setControl(index, this.step);
        });

        this.cocktail.ingredients.forEach((ingredient, index) => {
            this.ingredients.setControl(index, this.ingredient);
        });

        this.cocktailForm.reset(this.cocktail);

    }

    revert () { this.setFormValues(); }

}
