export class ApplicationAction {
    public static readonly type = '[Application] Add item';
    constructor(public payload: any) { }
}
