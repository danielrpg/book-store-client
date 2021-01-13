import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-root',
    pathMatch: 'full'
  },
  {
    path: 'book-list',
    loadChildren: () => import('./book-module/book-module.module').then(b=>b.BookModuleModule)
  },
  {
    path: 'author-list',
    loadChildren: () => import('./author-module/author-module.module').then(a=>a.AuthorModuleModule)
  }/*,
  {
    path: 'book-add',
    loadChildren: () => import('./book-module/book-module.module').then(b => b.BookModuleModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
