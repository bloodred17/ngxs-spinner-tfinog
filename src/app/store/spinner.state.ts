import { State, Action, StateContext } from '@ngxs/store';
import { ToggleShow, ToggleHide, ChangeColor } from '../store/spinner.actions';

interface SpinnerModel {
  show: boolean;
  color: string;
}

@State<SpinnerModel>({
  name: 'spinner',
  defaults: {
    show: true,
    color: 'blue'
  }
})
export class SpinnerState {
  @Action(ToggleShow)
  toggleShow(store: StateContext<boolean>) {
    const state = store.getState();
    store.setState({
      ...state,
      show: true
    });
  } 

  @Action(ToggleHide)
  toggleHide(store: StateContext<boolean>) {
    const state = store.getState();
    store.setState({
      ...state,
      show: false
    });
  } 

  @Action(ChangeColor)
  changeColor(store: StateContext<string>, action: ChangeColor) {
    const state = store.getState();
    store.setState({
      ...state,
      color: action.colorPayload
    });
  }
}