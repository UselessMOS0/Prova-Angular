import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-macchina',
  templateUrl: './macchina.component.html',
  styleUrls: ['./macchina.component.css']
})
export class MacchinaComponent implements OnInit {
  @Input() macchina:string = "";
  madre_porta = ['viti','bulloni','ferro'] 
  constructor() {
   }

  ngOnInit(): void {
  }

}
