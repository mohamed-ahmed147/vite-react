import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../../shared/services/details.service';
import { Meal } from '../../shared/interfaces/recipe-details';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  DetailsList!: Meal[];
  id!: number;

  constructor(
    private _DetailsService: DetailsService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  getProductDetails(): void {
    this._ActivatedRoute.params.subscribe({
      next: (params) => {
        this.id = params['Id'];
        if (isNaN(this.id) || this.id <= 0) {
          Swal.fire({
            icon: 'error',
            title: 'Invalid ID',
            text: 'The ID provided is not valid!',
          });
          return;
        }

        this._DetailsService.getDetails(this.id).subscribe({
          next: (response) => {
            if (response && response.meals && response.meals.length > 0) {
              this.DetailsList = response.meals;
            } else {
              Swal.fire({
                icon: 'error',
                title: 'No Data Found',
                text: 'The product details could not be found.',
              });
            }
          },
          error: (err) => {
            Swal.fire({
              title: "The Internet?",
              text: "That thing is still around?",
              icon: "question",
            });
          },
        });
      },
      error: (err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      },
    });
  }


  ngOnInit(): void {
    this.getProductDetails();
  }
}
