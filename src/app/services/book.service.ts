import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getListBook(): Observable<Book[]> {
    return this.http.get<Book[]>(`${Utils.BOOK_API_URL}`);
  }
}
