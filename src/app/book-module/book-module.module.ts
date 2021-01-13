import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { BookModuleRoutingModule } from './book-module-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookService } from '../services/book.service';


@NgModule({
  declarations: [BookListComponent, BookAddComponent],
  imports: [
    CommonModule,
    BookModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[BookService]
})
export class BookModuleModule { }
