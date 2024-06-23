import {Component, OnInit, inject} from '@angular/core';
import {
  collection, collectionData,
  Firestore,
} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './categories.component.html',
  styles: ``
})

export class CategoriesComponent implements OnInit {

  firestore = inject(Firestore)
  categories$!: Observable<Category[]> ;
  ngOnInit(): void {
      this.getDate();
  }

  getDate() {
         const categoriesCollection =  collection(this.firestore, 'categories');
        this.categories$ = collectionData<Category|any>(categoriesCollection);
    }

}

interface Category{
  name: string;
  id: string;
}
