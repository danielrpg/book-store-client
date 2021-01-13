import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from '../model/author';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`${Utils.AUTHOR_API_URL}`);
  }

  getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`${Utils.AUTHOR_API_URL}/${id}`);
  }
}
