import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { BooksComponent } from './books/books';
import { AddBookComponent } from './add-book/add-book';
import { BookService } from './book';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'books', component: BooksComponent },
  { path: 'add-book', component: AddBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}