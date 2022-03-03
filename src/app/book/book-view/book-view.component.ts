import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  id!: number;
  book!: Book;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.getBookById(this.id);
    })
  }

  ngOnInit(): void {
  }

  getBookById(id: number) {
    return this.bookService.findBookById(id).subscribe(book =>{
      this.book = book;
    })
  }

}
