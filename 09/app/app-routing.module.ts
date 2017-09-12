import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { CocktailComponent } from './cocktail/cocktail.component';

const routes: Routes = [
    {
        path      : '',
        pathMatch : 'full',
        redirectTo: 'cocktails'
    },
    {
        path     : 'ingredients',
        loadChildren: './ingredients/ingredients.module#IngredientsModule'
    },
    {
        path     : 'cocktails',
        component: CocktailsComponent
    },
    {
        path     : 'cocktails/:id',
        component: CocktailComponent
    }
];

@NgModule({
    imports  : [RouterModule.forRoot(routes)],
    exports  : [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
