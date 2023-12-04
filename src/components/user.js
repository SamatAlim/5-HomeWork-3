import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserOneInfo } from "../redux/actions";


function User({userInfo}){

   const dispatch = useDispatch()
   const {newInfo} = useSelector(state => state.usersReducer)
   const getOneUser = (event)=>{
      dispatch(fetchUserOneInfo(event.target.value))
   }

   return(
      <ul>
         <li>user: {userInfo.name}</li>
         <li>email: {userInfo.email}</li>


        
         <button value={userInfo.id} onClick={getOneUser}>get mode</button>

         {newInfo && (
        <div style={{ margin: '10px', border: '1px solid #ddd', padding: '10px' }}>
          <h2>Details of selected user:</h2>
          <p>Name: {newInfo.name}</p>
          <p>Email: {newInfo.email}</p>
        </div>
      )}
      </ul>
   )
}
export default User;
