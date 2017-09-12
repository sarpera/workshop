import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Ingredient } from './ingredient';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class IngredientService {

    private ingredientsUrl = 'http://localhost:3000/ingredients';

    constructor (private http: HttpClient) { }

    getAllIngredients (): Observable<Ingredient[]> {

        const params = new HttpParams().set('_sort', 'name');

        return this.http.get<Ingredient[]>(this.ingredientsUrl, { params });

    }

    searchIngredients (name: string): Observable<Ingredient[]> {

        const params = new HttpParams().set('name_like', name).set('_sort', 'name');

        return this.http.get<Ingredient[]>(this.ingredientsUrl, { params });
    }

    getIngredient (id: string): Observable<Ingredient> {

        return this.http.get<Ingredient>(`${this.ingredientsUrl}/${id}`);

    }

}
