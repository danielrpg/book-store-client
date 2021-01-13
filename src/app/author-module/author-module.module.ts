import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorModuleRoutingModule } from './author-module-routing.module';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorAddComponent } from './author-add/author-add.component';

@NgModule({
  declarations: [AuthorListComponent, AuthorAddComponent],
  imports: [
    CommonModule,
    AuthorModuleRoutingModule
  ]
})
export class AuthorModuleModule { }
