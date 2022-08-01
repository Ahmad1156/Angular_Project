import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent implements OnInit {
  ContactInfo: BookTable = new BookTable();
  constructor(private apiCaller: HttpClient) { }

  ngOnInit(): void {

  }
  postDatatoApi() {
    this.apiCaller.post<any>('https://angularrestaurent.herokuapp.com/api/BookTable',
       this.ContactInfo
    ).subscribe(data => { })

    
  }
  CompleteLogin(login : NgForm){
    setInterval(()=>{
       login.reset();
    },2000)
     
  }

}

export class BookTable {
  name: string = '';
  email: string = '';
  PhoneNumber: String = '';
  Date: String = '';
  Time: string = '';
  nbOfPeople: number = 0;
  message: String = '';
}