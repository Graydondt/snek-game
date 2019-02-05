import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cage',
  templateUrl: './cage.component.html',
  styleUrls: ['./cage.component.scss']
})
export class CageComponent implements OnInit {

  @Input() map: any;
  constructor() { }

  ngOnInit() {
  }

}
