import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works!
    </p>
  `,
  styles: [ `
    p{
      color: red;
      font-size:2 0px;
    }`
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
