import {Component, OnInit} from '@angular/core';
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id!: number;
  bookForm: any;


  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>
      // @ts-ignore
      this.id = +paramMap.get('id'))
    const book = this.getBookById(this.id);
    this.bookForm = new FormGroup({
      // @ts-ignore
      id: new FormControl(book.id, Validators.required),
      // @ts-ignore
      title: new FormControl(book.title, Validators.required),
      // @ts-ignore
      author: new FormControl(book.author, Validators.required),
      // @ts-ignore
      description: new FormControl(book.description, Validators.required)
    })
  }

  ngOnInit(): void {
  }

  getBookById(id: number) {
    return this.bookService.findBookById(id).subscribe(book => {
        this.bookForm = new FormGroup({
          'id': new FormControl(book.id),
          'title': new FormControl(book.title),
          'author': new FormControl(book.author),
          'description': new FormControl(book.description),
        })
      console.log("book -->",this.bookForm)
      }
    )
  }

  updateBook(id: number) {
    const book = this.bookForm.value;
    this.bookService.updateBook(id, book).subscribe(() => {
      alert('Book UPDATED.')
    }, error => {
      console.log(error)
    })

  }


}
