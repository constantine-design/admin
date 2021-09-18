export const SET_USERS = "SET_USERS";
export const NEW_USER = "NEW_USER";
export const DELETE_USER = "DELETE_USER";
export const UPDATE_USER = "UPDATE_USER";

const initialState = {
  users: false
};

const reducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case(SET_USERS):
      return {...state,
        users: payload
      }
    case(NEW_USER):
      return {...state, 
        users: [ ...state.users, payload ]
      };
    case(DELETE_USER):
      return {...state,
        users: state.users.filter(user=>user.id!==payload)
      };
    case(UPDATE_USER):
      return {...state,
        users: state.users.map(user=> user.id===payload.id ? payload : user )
      };
    default:
      return state;
  }
}

export default reducer;
