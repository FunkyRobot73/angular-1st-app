import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoboGarden - First Angular App with Emmanuel';
  mission = 'Boldly going where no one has gone before';

  imageURL= "https://img.freepik.com/premium-photo/space-rocket-launch-ship-concept-business-product-market-spaceship-takes-off-starry-sky-rocket-space-ship-mixed-media_338491-12881.jpg";
  url = "https://www.youtube.com";

  numColumnCollapse=2;
  cssClass = "border green";
  bgColor= "orange";
  name = "John Wick";
  showBlueColor = true;
  names = ["George", "Ringo", "John", "Paul"];
  currentTab = 8;


  onSubmit(){
    alert('I just Got clicked!')
  }

};

// NOTE   -  A Page is a component of made out of multiple components.

//  Components are reusable.
