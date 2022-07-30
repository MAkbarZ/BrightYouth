import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-col',
  templateUrl: './description-col.component.html',
  styleUrls: ['./description-col.component.scss']
})
export class DescriptionColComponent implements OnInit {


  @Input() text: string;
  @Input() wordLimit: number;
  showMore:boolean;

  constructor() {
    this.text = '';
    this.wordLimit = 0;
    this.showMore = false;
   }

  ngOnInit(): void {
  }

}
