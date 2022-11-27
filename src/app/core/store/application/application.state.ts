import { State, Selector } from '@ngxs/store';

export interface ApplicationStateModel {
    items: string[];
}

@State<ApplicationStateModel>({
    name: 'application',
    defaults: {
        items: []
    }
})
export class ApplicationState {

    @Selector()
    public static getState(state: ApplicationStateModel) {
        return state;
    }

}
