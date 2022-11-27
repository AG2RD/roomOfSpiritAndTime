import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

export interface ApplicationStateModel {
  name?: string;
}
@State<ApplicationStateModel>({
  name: 'application',
  defaults: {},
})
@Injectable()
export class ApplicationState {}
