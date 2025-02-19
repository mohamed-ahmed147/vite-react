// show-recipe.services .ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import { Meal, MealResponse } from '../interfaces/search-by-name';
// import { SByName } from '../interfaces/search-by-name';

@Injectable({
  providedIn: 'root'
})
export class ShowRecipesService {

  constructor(private _HttpClient: HttpClient) { }

  getAllMeals(Cat : string = ''): Observable<MealResponse> {
    return this._HttpClient.get<MealResponse>(`${environment.baseUrl}/search.php?s=${Cat}`);
  }
}
