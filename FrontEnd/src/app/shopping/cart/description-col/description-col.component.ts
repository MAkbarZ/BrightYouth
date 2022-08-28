import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-col',
  templateUrl: './description-col.component.html',
  styleUrls: ['./description-col.component.scss']
})
export class DescriptionColComponent implements OnInit {


  @Input() descriptionText: string;
  @Input() wordLimit: number;
  showMore:boolean;

  constructor() {
    this.descriptionText = '';
    this.wordLimit = 0;
    this.showMore = false;
   }

  ngOnInit(): void {
  }

}
