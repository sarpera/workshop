import { Injectable } from '@angular/core';
import { ICocktail } from './cocktail';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
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

    addCocktail (cocktailData: Partial<ICocktail>) {
        return this.http.post<ICocktail[]>(this.cocktailsUrl, cocktailData);
    }

    saveCocktail (id: string, cocktailData: Partial<ICocktail>) {
        return this.http.patch<ICocktail[]>(`${this.cocktailsUrl}/${id}`, cocktailData);
    }

    deleteCocktail (id: string): Observable<any> {
        return this.http.delete(`${this.cocktailsUrl}/${id}`);
    }

}
