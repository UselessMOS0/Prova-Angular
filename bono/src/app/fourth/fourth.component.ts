import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  name:string;
  constructor() {
    this.name='quarto'
   }

  ngOnInit(): void {
  }

}
