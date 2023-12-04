import { useDispatch, useSelector } from "react-redux";
import { changeTitileAction } from "../../redux/actions";


function MainPage(){

   const title = useSelector(state => state.titleReducer.title)
   const dispatch = useDispatch()
 
   return(
      <div>
         <h1>{title}</h1>
         <button onClick={()=> dispatch(changeTitileAction())}>change title</button>
      </div>
   )
}
export default MainPage

