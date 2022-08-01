import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Offers: Offer[] = [];
  menu: Menu[] = [];
  chef: Chefs[]=[];
  title = 'Restaurent';
  constructor(private apiCaller: HttpClient) {

  }
  ngOnInit(): void {
    this.getOffersData();
    this.getMenuItems();
    this.getChefs();
  }
  getChefs():void{
    this.apiCaller.get(' https://angularrestaurent.herokuapp.com/api/Chefs')
    .subscribe((json: any) => {
      json.Chefs.forEach((element: any) => {
       const chef= new Chefs;
       chef.name = element['Name'];
       chef.role = element['Role'];
       chef.image = element['image'];
       chef.description = element['description'];
      this.chef.push(chef);
      });
    })
  }
  getMenuItems(): void {
    this.apiCaller.get('https://angularrestaurent.herokuapp.com/api/Menu')
      .subscribe((json: any) => {
        json.Menu.forEach((element: any) => {
          const menu = new Menu;
          menu.name = element['Name'];
          menu.ingrediants = element['ingrediants'];
          menu.image = element['image'];
          menu.price = element['price'];
          this.menu.push(menu);
        });
      })
  }
  getOffersData(): void {
    this.apiCaller.get('https://angularrestaurent.herokuapp.com/api/Offers')
      .subscribe((json: any) => {
        json.Offers.forEach((element: any) => {
          const offer = new Offer;
          offer.icon = element['icon'];
          offer.title = element['title'];
          offer.description = element['description'];
          this.Offers.push(offer);
        });
      })
  }
}
export class Offer {
  icon: string = '';
  title: string = '';
  description: string = '';
}
export class Menu {
  name: string = '';
  ingrediants: string = '';
  image: string = '';
  price: number = 0;
}
export class Chefs {
  name: string = '' ;
  role: string = '' ;
  image: string = '' ;
  description: string = '' ;
}

