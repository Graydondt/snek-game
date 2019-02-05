import { Injectable } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  context: CanvasRenderingContext2D;
  loadAssets(canvasElement: HTMLCanvasElement): Promise<void> {
    this.context = canvasElement.getContext('2d');
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}
