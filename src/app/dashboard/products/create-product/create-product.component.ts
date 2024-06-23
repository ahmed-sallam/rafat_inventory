import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [],
  templateUrl: './create-product.component.html',
  styles: ``
})
export class CreateProductComponent {

  // router = inject(Router);
  //
  // formGroup = new FormGroup({
  //   category: new FormControl('', [Validators.required, Validators.minLength(3)]),
  // });
}
