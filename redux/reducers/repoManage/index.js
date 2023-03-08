import * as type from "../../types";

const initialState = {
    repoList: [],
    name: "",
  };

const main = (state = initialState, action) => {
  switch(action.type){
    case type.FIND_GIT:
      return { 
        ...state,
        name: action.data
      };
      case type.ASSIGN_REPO:
      return { 
        ...state,
        repoList: action.payload
      };
    
    default:
      return {...state};
    }
}

export default main;