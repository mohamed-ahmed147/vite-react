import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import { MainCategories } from '../interfaces/categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient: HttpClient) { }

  getCategories(): Observable<MainCategories> {
    return this._HttpClient.get<MainCategories>(`${environment.baseUrl}/categories.php`);
  }
}
