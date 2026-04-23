import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: any[] = [
    { title: 'Angular Basics', author: 'John' }
  ];

  getBooks() {
    return this.books;
  }

  addBook(book: any) {
    this.books.push(book);
  }
}