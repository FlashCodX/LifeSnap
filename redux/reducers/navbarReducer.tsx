import { HeaderStates } from "../../types";
const reducer = (state = HeaderStates.home, action: any) => {
  switch (action.type) {
    case "setNavState":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
