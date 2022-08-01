import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
  @Input() image:String='';
  @Input() name:String='';
  @Input() role:string='';
  @Input() description:String='';
  constructor() { }

  ngOnInit(): void {
  }

}
