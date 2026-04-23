import { Component } from '@angular/core';
import { BookService } from '../book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  imports: [FormsModule],
  templateUrl: './add-book.html'
})
export class AddBookComponent {

  title = '';
  author = '';

  constructor(private bookService: BookService) {}

  addBook() {
    this.bookService.addBook({
      title: this.title,
      author: this.author
    });

    this.title = '';
    this.author = '';
    alert('Book added!');
  }
}