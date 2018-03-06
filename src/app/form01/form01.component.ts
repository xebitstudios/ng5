import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form01',
  templateUrl: './form01.component.html',
  styleUrls: ['./form01.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Form01Component implements OnInit {

  model = {
    firstname: '',
    lastname: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submitted...');
  }

}
