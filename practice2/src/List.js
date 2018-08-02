import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const List = (props) => {
    //const todo = props.list;
   return (
   <ul>
        {props.list.map((item, index) => 
            (<li key={index}>
            <span style={{textDecoration: item.done ? 'line-through' : 'none'}}>{item.todo}</span> 
            <FontAwesomeIcon icon={item.done ? ["far", "check-circle"] : ["far","circle"] } color="green" onClick={() => props.done(index)}/>
            <FontAwesomeIcon icon={["fas", "times"]} color="red" onClick={()=>props.delete(index)}/>  
            </li>)
        )}
        
    </ul>  
   );  
}


export default List;