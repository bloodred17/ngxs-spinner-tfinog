export class ToggleShow {
  static readonly type = '[Toggle] Show';
}​
export class ToggleHide {
  static readonly type = '[Toggle] Hide';
}​
export class ChangeColor {
  static readonly type = '[Color] ChangeColor';
  constructor(public colorPayload: string) {
  }
}