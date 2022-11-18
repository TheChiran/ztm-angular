import { Books } from './store/books';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Books[]>('http://localhost:3000/books');
  }
}
