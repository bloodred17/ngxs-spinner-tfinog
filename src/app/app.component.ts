import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { SpinnerState } from './store/spinner.state';
import { ToggleShow, ToggleHide, ChangeColor } from './store/spinner.actions';

@Component({
  selector: 'my-app',
  template: `
    <app-loading *ngIf="loading|async as loader"
      [loading]="loader.show" 
      [color]="loader.color">
    </app-loading>

    <p>Component: {{(loading|async).color}}</p>
    <input [(ngModel)]="inputColor" (change)=Change()>
    <p>Input: {{inputColor}}</p>
  <div>
    <button (click)="Show()">Show</button>
    <button (click)="Hide()">Hide</button>
  </div>
  `
})
export class AppComponent  {
  @Select(SpinnerState) loading: Observable<boolean>;

  inputColor: string;

  constructor(private store: Store) { }

  Show() {
    this.store.dispatch(new ToggleShow());
  }

  Hide() {
    this.store.dispatch(new ToggleHide());
  }

  Change() {
    this.store.dispatch(new ChangeColor(this.inputColor));
  }
}
