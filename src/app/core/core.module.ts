import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';

import { CoreRoutingModule } from './core-routing.module';
import { ApplicationState } from './state/application/application.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgxsModule.forRoot([ApplicationState], {
      developmentMode: !environment.production,
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({
      name: 'Envestboard store',
      disabled: environment.production,
    }),
    NgxsStoragePluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
  ],
})
export class CoreModule {}
