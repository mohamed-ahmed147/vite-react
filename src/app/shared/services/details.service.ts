import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import { RecipeDetails } from '../interfaces/recipe-details';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  constructor(private _HttpClient: HttpClient) {}

  getDetails(id: number): Observable<RecipeDetails> {
    return this._HttpClient.get<RecipeDetails>(`${environment.baseUrl}/lookup.php?i=${id}`);
  }
}
