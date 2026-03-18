import { Component } from '@angular/core';

@Component({
  selector: 'app-stories.ts',
  imports: [],
  templateUrl: './stories.ts.html',
  styleUrl: './stories.ts.css',
})
export class StoriesTs {
  stories = [
    {
      title: 'Dragon Ball',
      author: 'Akira Toriyama',
      views: 100000,
      year: 1984,
      category: 'Action',
      image: 'https://via.placeholder.com/80?text=Dragon+Ball'
    },
    {
      title: 'Attack On Titan',
      author: 'Hajime Isayama',
      views: 95000,
      year: 2009,
      category: 'Dark Fantasy',
      image: 'https://via.placeholder.com/80?text=Titan'
    },
    {
      title: 'Bleach',
      author: 'Tite Kubo',
      views: 85000,
      year: 2001,
      category: 'Supernatural',
      image: 'https://via.placeholder.com/80?text=Bleach'
    }
  ];
}
