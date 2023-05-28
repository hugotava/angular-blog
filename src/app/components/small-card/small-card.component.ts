import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string = ""

  @Input()
  cardTitle:string = "Anunciada uma nova série Star Wars na Dysney Plus"

  @Input()
  Id="0"

  constructor() { }

  ngOnInit(): void {
  }

}
