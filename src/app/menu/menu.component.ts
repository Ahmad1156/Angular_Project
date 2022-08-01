import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() name:String='';
  @Input() ingrediants:String='';
  @Input() Image:String='';
  @Input() Price:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
