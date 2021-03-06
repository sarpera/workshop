import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { CocktailService } from './cocktail.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CocktailEditorComponent } from './cocktail-editor/cocktail-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        CocktailComponent,
        CocktailsComponent,
        CocktailEditorComponent
    ],
    imports     : [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    bootstrap   : [AppComponent],
    providers   : [CocktailService]
})
export class AppModule {}
