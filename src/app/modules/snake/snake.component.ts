import { AfterViewInit, Component, ElementRef, HostListener, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Movedirection } from 'src/app/movedirection.enum';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  constructor(private elem: ElementRef) { }
  snake;
  top = 0;
  left = 0;
  speedStep = 1;
  currentKey = Movedirection.None;
  previousKey = Movedirection.None;
  ngOnInit() {
  }
  ngOnDestroy() {
  }
  ngAfterViewInit() {
    this.snake = this.elem.nativeElement.querySelectorAll('.snake')[0];
  }
  ngOnChanges() {
  }
  @HostListener('window:keyup', ['$event'])
  keyPress(event: KeyboardEvent) {
    console.log(event);
    const keyPressed = event.key.toLowerCase();
    this.currentKey = keyPressed as Movedirection;
    if (this.currentKey !== this.previousKey) {
      switch (this.currentKey) {
        case Movedirection.Right:
          this.moveRight();
          break;
        case Movedirection.Left:
          this.moveLeft();
          break;
        case Movedirection.Up:
          this.moveUp();
          break;
        case Movedirection.Down:
          this.moveDown();
          break;
        default:
          break;
      }
      this.previousKey = this.currentKey;
    }
  }

  moveRight() {
    if (this.currentKey === Movedirection.Right) {
      setTimeout(() => {
        this.left += 1;
        this.moveRight();
      }, this.calcSpeed());
    }
  }
  moveLeft() {
    if (this.currentKey === Movedirection.Left) {
      setTimeout(() => {
        this.left -= 1;
        this.moveLeft();
      }, this.calcSpeed());
    }
  }
  moveUp() {
    if (this.currentKey === Movedirection.Up) {
      setTimeout(() => {
        this.top -= 1;
        this.moveUp();
      }, this.calcSpeed());
    }
  }
  moveDown() {
    if (this.currentKey === Movedirection.Down) {
      setTimeout(() => {
        this.top += 1;
        this.moveDown();
      }, this.calcSpeed());
    }
  }

  calcSpeed(): number {
    let speed = 10;
    speed = speed / this.speedStep;
    return speed;
  }
}
