import React from "react"

function Child(props){

        return (
            <div id= "childdiv" style={{ background: 'green' }}>
               
      
      
        <p>Student Name : {props.studentName}</p>
        
        <p>Student Age :
        {props.studentAge}
        
        </p>

    
    
                
  
            </div>
        )
}

export default Child
