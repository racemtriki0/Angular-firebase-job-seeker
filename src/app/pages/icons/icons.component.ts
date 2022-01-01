import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styles: [`
  :host >>> .alert-custom {
    color: #99004d;
    background-color: #f169b4;
    border-color: #800040;
  }
`]
})
export class IconsComponent implements OnInit {

  public copy: string;
  constructor() { }

  ngOnInit() {
  }
}
