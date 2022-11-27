import { State, Selector } from '@ngxs/store';

export interface AuthenticationStateModel {
    items: string[];
}

@State<AuthenticationStateModel>({
    name: 'authentication',
    defaults: {
        items: []
    }
})
export class AuthenticationState {

    @Selector()
    public static getState(state: AuthenticationStateModel) {
        return state;
    }

}
