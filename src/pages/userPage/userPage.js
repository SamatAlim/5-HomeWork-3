import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction } from "../../redux/actions";
import User from "../../components/user";


function UserPage(){

   const {users} = useSelector(state=>state.usersReducer)
   const dispatch = useDispatch()

   const getUsers = ()=>{
      dispatch(fetchUsersAction())
   }
   return(
      <div>
         <button onClick={getUsers}>get users</button>
         {users.map(user => <User userInfo={user}/> )}
      </div>
   )
}
export default UserPage;
