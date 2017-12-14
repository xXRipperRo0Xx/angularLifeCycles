import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p style="font-size:10px">
      Hola mundo... style normal
    </p>

    <p [ngStyle]="{ 'font-size': size + 'px'}">
      Hola mundo... [ngStyle]
    </p>

    <p [style.fontSize.px]="size2">
      Hola mundo... [style]
    </p>

    <button class="btn btn-primary" (click)="size = size + 5">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary" (click)="size = size - 5">
      <i class="fa fa-minus"></i>
    </button>

  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  size = 20;
  size2 = 30;


  constructor() { }

  ngOnInit() {
  }

}
