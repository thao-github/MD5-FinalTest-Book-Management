import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from "./book/book-list/book-list.component";
import {BookViewComponent} from "./book/book-view/book-view.component";
import {BookCreateComponent} from "./book/book-create/book-create.component";
import {BookEditComponent} from "./book/book-edit/book-edit.component";
import {BookDeleteComponent} from "./book/book-delete/book-delete.component";

const routes: Routes = [
  {path: "", component: BookListComponent},
  {path: "books/view/:id", component: BookViewComponent},
  {path: "books/create", component: BookCreateComponent},
  {path: "books/edit/:id", component: BookEditComponent},
  {path: "books/delete/:id", component: BookDeleteComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
