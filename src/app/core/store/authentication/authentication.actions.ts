export class AuthenticationAction {
  public static readonly type = '[Authentication] Login by email';
  constructor(public payload: any) {}
}
