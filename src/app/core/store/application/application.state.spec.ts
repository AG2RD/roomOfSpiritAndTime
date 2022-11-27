import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { ApplicationState, ApplicationStateModel } from './application.state';

describe('Application state', () => {
    let store: Store;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [NgxsModule.forRoot([ApplicationState])]
        }).compileComponents();
        store = TestBed.get(Store);
    }));

    it('should create an empty state', () => {
        const actual = store.selectSnapshot(ApplicationState.getState);
        const expected: ApplicationStateModel = {
            items: []
        };
        expect(actual).toEqual(expected);
    });

});
