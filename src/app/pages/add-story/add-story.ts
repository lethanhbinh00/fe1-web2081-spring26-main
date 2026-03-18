import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-story',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  private fb = inject(FormBuilder);

  addForm = this.fb.group({
    name: ['', [Validators.required]],
    price: [null, [Validators.required, Validators.min(1)]],
    category: ['', [Validators.required]],
  });

  get name() {
    return this.addForm.get('name');
  }

  get price() {
    return this.addForm.get('price');
  }

  get category() {
    return this.addForm.get('category');
  }

  onSubmit() {
    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      return;
    }

    console.log(this.addForm.value);
    alert('Thêm Product thành công!');
    this.addForm.reset();
  }
}