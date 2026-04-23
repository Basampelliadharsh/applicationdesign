import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../book';

@Component({
  selector: 'app-books',
  imports: [CommonModule],
  templateUrl: './books.html'
})
export class BooksComponent {

  books: any[] = [];

  constructor(private bookService: BookService) {
    this.books = this.bookService.getBooks();
  }
}