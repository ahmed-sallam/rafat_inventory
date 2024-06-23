import {Component, inject} from '@angular/core';
import {
  FormControl,
  FormGroup,
  isFormGroup,
  ReactiveFormsModule, Validators
} from "@angular/forms";
import {Router} from "@angular/router";
import {addDoc, collection, Firestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-create-category',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-category.component.html',
  styles: ``
})
export class CreateCategoryComponent {
  router = inject(Router);
  firestore = inject(Firestore)
  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1)]),
  });

  onFormSubmit() {
    this.formGroup.markAllAsTouched();
    if (!isFormGroup(this.formGroup) || this.formGroup.invalid) {
      return;
    }
    console.log(this.formGroup.value);
    addDoc(collection(this.firestore, 'categories'), this.formGroup.value).then(() => {
      this.router.navigate(['/dashboard/categories']);
    }).catch((error) => {
      console.error("Error adding document: ", error);
    });

  }
}
