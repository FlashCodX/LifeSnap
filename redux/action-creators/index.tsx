import { HeaderStates } from "../../types";

export const setNavState = (state: HeaderStates) => {
  return (dispatch: any) => {
    dispatch({
      type: "setNavState",
      payload: state,
    });
  };
};
