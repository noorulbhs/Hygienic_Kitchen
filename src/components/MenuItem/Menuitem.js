import React from "react";
import Auxillary from "../../HOC/Auxillary";
import {items} from "./Item";

const MenuItem=(props)=>{
    
    return(
        <Auxillary>
            <ul>
                {items.map((item,index)=>
                    {if(item.item.toUpperCase().includes(props.input.toUpperCase())){
                      return  <li key={index} onClick={()=>props.clicked(item)} style={{listStyleType:"none"}}>{item.item}</li>
                    }
                    else{
                        return null;
                    }
                }
                    )}
            </ul>
        </Auxillary>
    )
}

export default MenuItem;