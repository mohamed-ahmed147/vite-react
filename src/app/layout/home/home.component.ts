import { Component, OnInit } from '@angular/core';
import { Meal } from '../../shared/interfaces/search-by-name';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import Swal from 'sweetalert2';
import { ShowRecipesService } from '../../shared/services/show-recipes.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _ShowRecipesService: ShowRecipesService, private _ActivatedRoute: ActivatedRoute) {}


  MealsList!: Meal[];

  getAllRecipes(): void {
    this._ActivatedRoute.params.subscribe({
      next: (param) => {
        const category = param['category'] || '';
        this._ShowRecipesService.getAllMeals(category).subscribe({
          next: (data) => {
            if (data && data.meals && data.meals.length > 0) {
              this.MealsList = data.meals;
            } else {
              Swal.fire({
                icon: 'error',
                title: 'No Recipes Found',
                text: `No recipes found for category: ${category || 'Default Category'}.`,
              });
            }
          },
          error: (error) => {
            Swal.fire({
              title: "The Internet?",
              text: "That thing is still around?",
              icon: "question"
            });
          }
        });
      },
      error: (error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    });
  }

  ngOnInit(): void {
    this.getAllRecipes();
  }
}
