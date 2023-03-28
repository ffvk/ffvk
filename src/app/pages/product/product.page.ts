import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
 
  
  constructor() {
  }

  ngOnInit() {
  }

   yellowCardVisible: boolean = false;
  redCardVisible: boolean = false;
  blackCardVisible: boolean = false;

  showYellow() {
    this.yellowCardVisible = true;
    this.redCardVisible = false;
    this.blackCardVisible = false;
  }

  showRed() {
    this.yellowCardVisible = false;
    this.redCardVisible = true;
    this.blackCardVisible = false;
  }

  showBlack() {
    this.yellowCardVisible = false;
    this.redCardVisible = false;
    this.blackCardVisible = true;
  }

}

