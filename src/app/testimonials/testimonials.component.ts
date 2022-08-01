import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
   @Input() Name:String='';
   @Input() description:String='';
   @Input() Image:String='';
  constructor() { }

  ngOnInit(): void {
  }

}
