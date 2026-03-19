import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-add-story',
  imports: [ReactiveFormsModule],
  templateUrl: './add-story.html',
  styleUrl: './add-story.css',
})
export class AddStory {
  addForm: FormGroup;

  loading = false;
  error = '';
  success = '';

  constructor(
    private fb: FormBuilder,
    private storyService: StoryService,
  ) {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      author: [''],
      views: [0],
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
    });
  }

  get title() {
    return this.addForm.get('title');
  }

  get author() {
    return this.addForm.get('author');
  }

  get views() {
    return this.addForm.get('views');
  }

  get name() {
    return this.addForm.get('name');
  }

  get price() {
    return this.addForm.get('price');
  }

  submitForm() {
    this.loading = true;
    this.error = '';
    this.success = '';

    if (this.addForm.invalid) {
      this.addForm.markAllAsTouched();
      this.loading = false;
      return;
    }

    const data = this.addForm.value;

    this.storyService.addStory(data).subscribe({
      next: () => {
        this.loading = false;
        this.success = 'Thêm dữ liệu thành công';
        this.addForm.reset({
          title: '',
          author: '',
          views: 0,
          name: '',
          price: 0,
        });
      },
      error: () => {
        this.loading = false;
        this.error = 'Có lỗi xảy ra';
      },
    });
  }
}