import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { CocktailService } from './cocktail.service';

@NgModule({
  declarations: [
    AppComponent,
    CocktailComponent,
    CocktailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CocktailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
