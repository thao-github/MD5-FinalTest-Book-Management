import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/book";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../service/book.service";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  bookForm = new FormGroup({
    'id': new FormControl(null, Validators.required),
    'title': new FormControl(null, Validators.required),
    'author': new FormControl(null, Validators.required),
    'description': new FormControl(null, Validators.required),
  })

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
  }

  createBook() {
    const book = this.bookForm.value;
    this.bookService.addBook(book).subscribe(() => {
      this.bookForm.reset();
      alert('Book CREATED.')
    }, error => {
      console.log(error);
    })
  }

}
