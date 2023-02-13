import {Component} from '@angular/core';
import {CategoryInterface} from "../../../models/category.interface";
import {Category} from "../../../models/category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories: CategoryInterface[];
  isModalOpen: boolean;

  categorySelected: CategoryInterface;

  constructor() {
    this.categories = Category.all;
    this.isModalOpen = false;
    this.categorySelected = {} as CategoryInterface;
  }

  get details(): CategoryInterface[] {
    return Category.getDetails(this.categorySelected);
  }

  setCategorySelectedAndShowModal(categorySelected: CategoryInterface) {
    this.categorySelected = categorySelected;
    this.showModal(true);
  }

  closeModal() {
    this.showModal(false);
  }

  private showModal(value: boolean) {
    this.isModalOpen = value;
  }
}
