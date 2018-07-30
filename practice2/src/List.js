import React from 'react';

const List = (props) => {
    //const todo = props.list;
   return (
   <ul>
        {props.list.map((item, index) => <li key={index}>{item}</li> )}
        
    </ul>  
   );  
}


export default List;