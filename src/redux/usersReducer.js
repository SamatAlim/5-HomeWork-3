import { types } from "./types";


const initialState = {
   users: [],
   newInfo: null,
}
export default function usersReducer(state = initialState, action){
   switch (action.type){
      case types.USERS:
         return {...state, users:action.payload}
      case types.GET_MORE_INFO:
         return {...state, newInfo:action.payload }
      default : return state
      }
}

