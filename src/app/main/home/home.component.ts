import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [
  	"./assets/videos/medyfi_1.mp4",
  	"./assets/videos/medyfi_2.mp4"
  ]

  url = '';

   
  constructor(){
  	var num =Math.floor( Math.random() * this.images.length);
  	this.url = this.images[num];
  	console.log("aqui =>", num)
  }

  ngOnInit(): void {
  }

}
