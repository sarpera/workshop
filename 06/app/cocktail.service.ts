import { Injectable } from '@angular/core';
import { ICocktail } from './cocktail';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CocktailService {

    private cocktailsUrl = 'http://localhost:3000/cocktails';

    constructor (private http: HttpClient) { }

    getCocktails (): Observable<ICocktail[]> {
        return this.http.get<ICocktail[]>(this.cocktailsUrl);
    }

    getCocktail (id: string): Observable<ICocktail> {
        return this.http.get<ICocktail>(`${this.cocktailsUrl}/${id}`);
    }

}
