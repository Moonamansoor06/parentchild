import React from "react"

function Child(props){

        return (
            <div id= "childdiv" style={{ background: 'blue' }}>
               
      
      
        <p>Student Name : {props.studentName}</p>
        
        <p>Student Age : {props.studentAge}</p>
        <p> Student Address : {props.studentAddress}</p>

                
  
            </div>
        )
}

export default Child
