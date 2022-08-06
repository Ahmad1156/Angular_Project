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
   if(!this.ContactInfo.name || !this.ContactInfo.PhoneNumber || !this.ContactInfo.Time || !this.ContactInfo.nbOfPeople || !this.ContactInfo.email){
    alert("Warning : please fill out all fields in order to submit your reservation.");
    return
   }
    this.apiCaller.post<any>('https://angularrestaurent.herokuapp.com/api/BookTable',
       this.ContactInfo
    ).subscribe(data => { })
    
    this.ContactInfo.name='';
    this.ContactInfo.email='';
    this.ContactInfo.PhoneNumber='';
    this.ContactInfo.Date='';
    this.ContactInfo.Time='';
    this.ContactInfo.nbOfPeople=0;
    this.ContactInfo.message='';
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