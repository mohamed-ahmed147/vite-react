import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../shared/services/categories.service';
import { Category } from '../../shared/interfaces/categories';
import { RouterLink, RouterLinkActive } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterLink, RouterLinkActive]
})
export class HeaderComponent implements OnInit {

  CategoriesList!: Category[];

  constructor(private _CategoriesService: CategoriesService) {}

  getAllCategories(): void {
    this._CategoriesService.getCategories().subscribe({
      next: (categoryData) => {
        if (categoryData && categoryData.categories && categoryData.categories.length > 0) {
          this.CategoriesList = categoryData.categories;
        } else {
          Swal.fire({
            icon: 'error',
            title: 'No Categories Found',
            text: 'We could not find any categories.',
          });
        }
      },
      error: (err) => {
        Swal.fire({
          title: "The Internet?",
          text: "That thing is still around?",
          icon: "question"
        });
      }
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
  }
}
