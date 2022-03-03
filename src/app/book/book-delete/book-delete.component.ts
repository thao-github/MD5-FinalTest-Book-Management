import { Component, OnInit } from '@angular/core';
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  id!: number;
  bookForm: any;


  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) =>
      // @ts-ignore
      this.id = +paramMap.get('id'))
    const book = this.getBookById(this.id);
    this.bookForm = new FormGroup({
      // @ts-ignore
      id: new FormControl(book.id),
      // @ts-ignore
      title: new FormControl(book.title),
      // @ts-ignore
      author: new FormControl(book.author),
      // @ts-ignore
      description: new FormControl(book.description)
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
      }
    )
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() => {
      this.router.navigate([""])
    },error => {
      console.log(error)
    })
  }
}
