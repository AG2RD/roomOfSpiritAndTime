import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsStoreModule } from 'src/app/core/store/store.module';

import ButtonComponent from '../stories/button.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TaskComponent } from './stories/task/task.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, TaskComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, NgxsStoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
