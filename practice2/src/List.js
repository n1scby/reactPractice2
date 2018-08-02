import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const List = (props) => {
    //const todo = props.list;
   return (
   <ul>
        {props.list.map((item, index) => 
            (<li className='list-item' key={index}>
            <span className='item1'>{index + 1}</span>
            <span className='item2' style={{textDecoration: item.done ? 'line-through' : 'none'}}>{item.todo}</span> 
            <span className='item3'>
            <FontAwesomeIcon icon={item.done ? ["far", "check-circle"] : ["far","circle"] }  color="green" onClick={() => props.done(index)}/>
            </span>
            <span className='item4'>
            <FontAwesomeIcon icon={["fas", "times"]} color="red"  onClick={()=>props.delete(index)}/> 
            </span> 
            </li>)
        )}
        
    </ul>  
   );  
}


export default List;