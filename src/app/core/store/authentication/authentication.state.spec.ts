import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { AuthenticationState, AuthenticationStateModel } from './authentication.state';

describe('Authentication state', () => {
    let store: Store;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([AuthenticationState])]
        }).compileComponents();
        store = TestBed.get(Store);
    }));

    it('should create an empty state', () => {
        const actual = store.selectSnapshot(AuthenticationState.getState);
        const expected: AuthenticationStateModel = {
            items: []
        };
        expect(actual).toEqual(expected);
    });

});
