import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoadingComponent } from './loading/loading.component';

import { NgxsModule, State, Action, StateContext } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { SpinnerState } from './store/spinner.state';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    NgxsModule.forRoot([SpinnerState], { developmentMode: true }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  declarations: [ AppComponent, HelloComponent, LoadingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
