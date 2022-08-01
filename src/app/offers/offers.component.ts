import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  @Input() icon='';
  @Input() title='';
  @Input() description='';
  constructor() { }

  ngOnInit(): void {
  }

}
