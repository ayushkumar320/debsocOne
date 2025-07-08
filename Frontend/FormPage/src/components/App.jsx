import React from "react";
import Input from "./input";
import Button from "./button";
function App(){
    return <div>
         <Input type="email" placeholder="enter the userId" />
         <br />
        <Input type="password" placeholder="enter the password" />
        <br />
        <Button label="Submit" /> 
       
    </div>

}

export default App;