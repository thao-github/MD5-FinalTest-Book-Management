import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BookListComponent} from "./book/book-list/book-list.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BookViewComponent } from './book/book-view/book-view.component';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookDeleteComponent } from './book/book-delete/book-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookViewComponent,
    BookCreateComponent,
    BookEditComponent,
    BookDeleteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
