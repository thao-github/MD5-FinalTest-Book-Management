import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "../model/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBookList(): Observable<any>{
    return this.http.get<any>(`http://localhost:3000/books`);
  }

  findBookById(id: number): Observable<any>{
    return this.http.get<any>(`http://localhost:3000/books/${id}`)
  }

  addBook(book: Book): Observable<any>{
    return this.http.post<any>(`http://localhost:3000/books`, book)
  }

  updateBook(id: number, book: Book):Observable<any>{
    return this.http.put<any>(`http://localhost:3000/books/${id}`, book)
  }

  deleteBook(id:number):Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/books/${id}`)
  }
}
