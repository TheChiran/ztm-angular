import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  name: string='tonmoy chiran';
  images = [
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/237/500/500',
    'https://picsum.photos/id/237/500/500'
  ];
  currentDate = new Date();
  cost = 2000;
  temperature = 25.3;
  pizza = {
    toppings: ['pepperoni','bacon'],
    size: 'large'
  };
  blueClass = false;
  fontSize = 16;

  getName(): string{
    return this.name;
  }

  // changeImage(event: KeyboardEvent){
  //   this.imgURL = (event.target as HTMLInputElement).value; // type assertion
  // }

  logImg(event: string){
    console.log(event);
  }
}