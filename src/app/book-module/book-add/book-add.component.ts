import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Author } from 'src/app/model/author';
import { Book } from 'src/app/model/book';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  authorList: Author[] = [];
  newBook: Book; 
  newAuthor: Author;
  bookForm: FormGroup;
  constructor(private authorService: AuthorService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data) => {
      this.authorList = data;
    });
    this.newAuthor = new Author();
    this.newBook = new Book();

    this.bookForm = this.fb.group({
      title: [''],
    });
  }

  onSelect(event: any) {
    let authorId = event.target.value;
    this.authorService.getAuthorById(authorId).subscribe((data) => {
      this.newAuthor = data;
    })
  }

  onSubmit() {
    console.log(this.bookForm);
    this.newBook.title = this.bookForm.value.title;
    this.newBook.authorList = [this.newAuthor];
    console.log(this.newBook);
    
  }

}
