import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./redux";

const TaskForm = (props) => {
  

  const [item, setItem] = useState("");
  const [shop, setShop] = useState("");
  const dispatch = useDispatch();


  const clickSubmit = (event) => {
    // relaod the border color
    document.querySelector('#name').classList.remove("error")
    document.querySelector('#shop').classList.remove("error")


    event.preventDefault();
    console.log(shop)
    
    // Test if all is complete
    if(item !== "" && shop !== ""){
      dispatch(
        addItem({
          name:item,
          shop:shop
        })
      )
      setItem("");
      document.querySelector('#shop').value = "select"
      setShop("")
    }else{

      // if have erro borde red
      if(item === ""){
        document.querySelector('#name').classList.add("error")
      }else{
        document.querySelector('#shop').classList.add("error")

      }
    }
    
  };

  return (
    // Create the form
    <div id="form" >
      <form onSubmit={clickSubmit}>
        <input 
          className="idle" 
          type="text" 
          id="name" 
          placeholder="Name" 
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        
        <select className="idle"  name="shop" id="shop" onChange={(e)=>setShop(e.target.value)}>
          <option value="select" hidden>Select shop</option>
          <option value="maxima">Maxima</option>
          <option value="rimi">Rimi</option>
          <option value="selver">Selver</option>
        </select>
        <CreateButton id="btn-add" value="add">Add</CreateButton>
      </form>
    </div>
  );
};

// function for create button
function CreateButton ({id,value,children}) 
{
    return   <button type="submit" value={value} id={id} >{children}</button>
}

export default TaskForm;
