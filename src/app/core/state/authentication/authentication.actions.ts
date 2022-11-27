import { AuthenticateMemberModel, ResetPasswordModel } from '../../api/models';

export class AuthenticationAction {
  public static readonly type = '[Authentication] Add item';
  constructor(public payload: AuthenticateMemberModel) {}
}

export class PasswordForgetAction {
  static readonly type = '[Authentication] Password Forget';
  constructor(public payload: ResetPasswordModel) {}
}
