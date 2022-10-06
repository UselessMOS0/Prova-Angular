import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  macchine_cantiere :string[]
  constructor() {
    this.macchine_cantiere = ['ruspa','autocarro','gru','escavatori','manipale','rulli','carrelli elevatori','minipale','dumper','camion']
   }

  ngOnInit(): void {
  }

}
