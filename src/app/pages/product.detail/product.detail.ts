import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product.detail',
  imports: [CommonModule],
  templateUrl: './product.detail.html',
  styleUrl: './product.detail.css',
})
export class ProductDetail {
  slug: string = '';

  constructor(private route: ActivatedRoute) {
    this.slug = this.route.snapshot.params['slug'];
  }
}
