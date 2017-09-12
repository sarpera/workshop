import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Ingredient } from './ingredient';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IngredientService {

    private ingredientsUrl = 'http://localhost:3000/ingredients';

    constructor (private http: HttpClient) { }

    getAllIngredients (): Observable<Ingredient[]> {

        return this.http.get<Ingredient[]>(this.ingredientsUrl);

    }

    searchIngredients (name: string): Observable<Ingredient[]> {

        // const params = new HttpParams().set('name', name);

        return this.http.get<Ingredient[]>(`${this.ingredientsUrl}?name_like=${name}`);
    }

    getIngredient (id: string): Observable<Ingredient> {

        return this.http.get<Ingredient>(`${this.ingredientsUrl}/${id}`);

    }

}
