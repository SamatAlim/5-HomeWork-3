import { types } from "./types";

export function changeTitileAction(){
   return{
      type: types.CHANGE_TITLE
   }
}

export function asyncFunctionAction(){
   return function (dispatch){
      setTimeout(()=>{
         alert('KG!')
      }, 2000)
   }
}

export function getUsersAction(users){
   return{
      type: types.USERS,
      payload: users
   }
}

export function getMoreInfo(user){
   return{
      type:types.GET_MORE_INFO,
      payload: user
   }
}



export function fetchUsersAction(){
   return async function (dispatch){
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      dispatch (getUsersAction(data))
   }
}


export function fetchUserOneInfo(id){
   return async function (dispatch){
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      const data = await response.json()
      dispatch(getMoreInfo(data))
   }
}