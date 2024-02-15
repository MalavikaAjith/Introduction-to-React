import React from 'react'


function Func1() {
  return (
    <div>
      <h2>I am a Car!</h2>
    </div>
  )
}

function Garage(){
    return (
        <div>
            <h1>Who lives in my Garage?</h1>
            <Func1/>
        </div>
    )
}
export default Garage
