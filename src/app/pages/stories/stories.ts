import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Story {
  id: number;
  title: string;
  author: string;
  views: number;
  image?: string;
}

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stories.html',
  styleUrls: ['./stories.css'],
})
export class Stories implements OnInit {
  stories: Story[] = [];

  loading: boolean = false;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getStories();
  }

  getStories() {
    this.loading = true;
    this.error = '';

    this.http.get<Story[]>('http://localhost:3000/stories').subscribe({
      next: (data) => {
        this.stories = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Không thể tải dữ liệu';
        this.loading = false;
      },
    });
  }

  deleteStory(id: number) {
    const confirmDelete = confirm('Bạn có chắc muốn xóa không?');
    if (!confirmDelete) return;

    this.loading = true;

    this.http.delete(`http://localhost:3000/stories/${id}`).subscribe({
      next: () => {
        this.stories = this.stories.filter((story) => story.id !== id);
        this.loading = false;
        alert('Xóa thành công');
      },
      error: () => {
        this.loading = false;
        alert('Xóa thất bại');
      },
    });
  }
}