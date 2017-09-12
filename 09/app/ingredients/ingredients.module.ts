import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientsComponent } from './ingredients.component';
import { IngredientService } from './ingredient.service';
import { IngredientsRoutingModule } from './ingredients-routing.module';

@NgModule({
    imports     : [
        CommonModule,
        IngredientsRoutingModule
    ],
    declarations: [
        IngredientsComponent
    ],
    providers   : [IngredientService]
})
export class IngredientsModule {}
