import { Component, OnInit, OnChanges, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit, OnChanges, AfterViewInit {

  constructor(private elem: ElementRef) { }

  snake;
  top = 100;
  left = 200;

  ngOnInit() {
    this.top = 100;
    this.left = 100;
  }
  ngAfterViewInit() {
    this.snake = this.elem.nativeElement.querySelectorAll('.snake')[0];
  }
  ngOnChanges() {

  }

}
