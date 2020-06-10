import React from "react"

function Child(props){

        return (
            <div style={{ background: 'yellow' }}>
               
      <form>
        <h1>Student input</h1>
        <p>Enter Student Name:</p>
        <input id="studentName"
        value={props.studentName}
          type="text"
        />
        <input id="studentAge"
        value={props.studentAge}
          type="text"
        />

    
      </form>
                
  
            </div>
        )
}

export default Child
