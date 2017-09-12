import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { CocktailService } from './cocktail.service';
import { AppRoutingModule } from './app-routing.module';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { IngredientService } from './ingredients/ingredient.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        CocktailComponent,
        CocktailsComponent,
        IngredientsComponent
    ],
    imports     : [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    bootstrap   : [AppComponent],
    providers   : [CocktailService, IngredientService]
})
export class AppModule {}
