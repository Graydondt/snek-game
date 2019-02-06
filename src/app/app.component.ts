import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  Map
} from './classes/map';
import {
  MapService
} from './sevices/map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'snek-game';
  initializing = false;
  timeElapsed = 0;
  map: Map;

  private timeFinished: EventEmitter<boolean> = new EventEmitter();

  constructor(private mapService: MapService) {
    this.map = new Map();
  }

  ngOnInit(): void {
    this.initializing = true;
    this.recursive();
    this.timeFinished.subscribe(() => {
      this.initializing = false;
    });
  }
  ngAfterViewInit(): void { }

  ngOnDestroy(): void {
    this.timeFinished.unsubscribe();
  }
  recursive(): void {
    if (this.timeElapsed < 1) {
      this.timeElapsed++;
      // console.warn(`${this.timeElapsed}'s`);
      setTimeout(() => {
        this.map.height = this.timeElapsed * 100;
        this.map.width = this.timeElapsed * 100;
        this.recursive();
      }, 1000);
    } else {
      this.timeFinished.emit();
    }
  }
}
