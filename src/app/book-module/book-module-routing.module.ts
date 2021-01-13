import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';
import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  { path: '', component: BookListComponent },
  { path: 'book-add', component: BookAddComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookModuleRoutingModule { }
