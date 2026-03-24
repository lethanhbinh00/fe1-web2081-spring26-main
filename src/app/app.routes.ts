import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { ProductDetail } from './pages/product.detail/product.detail';
import { Stories } from './pages/stories/stories';
import { AddStory } from './pages/add-story/add-story';
import { Register } from './pages/register/register';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'products', component: Products },
    { path: 'products/:slug', component: ProductDetail },
    { path: 'stories', component: Stories },
    {path: 'add-story', component: AddStory},
    {path: 'register', component: Register},
];
