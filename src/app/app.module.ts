import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CageComponent } from './Modules/cage/cage.component';
import { MenuComponent } from './Modules/menu/menu.component';
import { SnakeComponent } from './modules/snake/snake.component';

@NgModule({
  declarations: [
    AppComponent,
    CageComponent,
    MenuComponent,
    SnakeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
