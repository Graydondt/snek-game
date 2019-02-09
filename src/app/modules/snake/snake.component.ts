import { AfterViewInit, Component, ElementRef, HostListener, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Movedirection } from 'src/app/movedirection.enum';
import { Snakeproperties } from 'src/app/classes/snakeproperties';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  constructor(private elem: ElementRef) { }
  snake: Snakeproperties = new Snakeproperties();
  currentKey = Movedirection.None;
  previousKey = Movedirection.None;
  cage;
  ngOnInit() {
    this.cage = this.elem.nativeElement;
    this.snake.snakeElement = this.elem.nativeElement.querySelectorAll('.snake')[0];
    this.getStartingPosition();
  }
  ngOnDestroy() {
  }
  ngAfterViewInit() {
  }
  ngOnChanges() {
  }
  @HostListener('window:keyup', ['$event'])
  keyPress(event: KeyboardEvent) {
    const keyPressed = event.key.toLowerCase();
    if (keyPressed as Movedirection !== this.previousKey) {
      this.currentKey = keyPressed as Movedirection;
    }
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
        if (this.checkMove()) { return; }
        this.snake.left += 10;
        this.moveRight();
      }, this.calcSpeed());
    }
  }
  moveLeft() {
    if (this.currentKey === Movedirection.Left) {
      setTimeout(() => {
        if (this.checkMove()) { return; }
        this.snake.left -= 10;
        this.moveLeft();
      }, this.calcSpeed());
    }
  }
  moveUp() {
    if (this.currentKey === Movedirection.Up) {
      setTimeout(() => {
        if (this.checkMove()) { return; }
        this.snake.top -= 10;
        this.moveUp();
      }, this.calcSpeed());
    }
  }
  moveDown() {
    if (this.currentKey === Movedirection.Down) {
      setTimeout(() => {
        if (this.checkMove()) { return; }
        this.snake.top += 10;
        this.moveDown();
      }, this.calcSpeed());
    }
  }

  calcSpeed(): number {
    let speed = 200;
    speed = speed / this.snake.speedStep;
    return speed;
  }

  checkMove(): boolean {
    // Constraints Of Cage
    const cageLC = 0 + this.snake.snakeElement.clientWidth;
    const cageRC = this.cage.clientWidth - this.snake.snakeElement.clientWidth;
    const cageTC = 0 + this.snake.snakeElement.clientHeight;
    const cageBC = this.cage.clientHeight - this.snake.snakeElement.clientHeight;


    if (this.snake.top < cageTC && (this.currentKey === Movedirection.Up)) { // Check if Snake hit Top
      return true;
    } else if (this.snake.top >= cageBC && (this.currentKey === Movedirection.Down)) { // Check if Snake hit bottom
      return true;
    } else if (this.snake.left < cageLC && (this.currentKey === Movedirection.Left)) { // Check if Snake hit left
      return true;
    } else if (this.snake.left >= cageRC && (this.currentKey === Movedirection.Right)) { // Check if Snake hit right
      return true;
    } else {
      return false;
    }

  }

  getStartingPosition() {
    this.snake.top = this.getRandomIntScale(this.cage.clientHeight / 10, this.snake.snakeElement.clientHeight);
    this.snake.left = this.getRandomIntScale(this.cage.clientWidth / 10, this.snake.snakeElement.clientWidth);
  }

  getRandomIntScale(max, scale) {
    return this.getRandomInt(max) * scale;
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
