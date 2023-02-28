import { useState } from "react";

 function Loginform() {

const [Emailaddress, setEmailaddress] = useState("");
const {Password, setPassword} = useState("");
const {ConfirmPassword, setConfirmPassword} = useState("");



const EmailAddressChangeHandler =(e) => {
    console.log("input values: ", e.target.value);
    setEmailaddress(e.target.value)

}

const PasswordChangeHandler =(e) => {
    console.log("input values: ", e.target.value);
    setPassword(e.target.value)

}
    
const ConfirmPasswordChangeHandler = (e) => {
    console.log("input values: ", e.target.value);
    setConfirmPassword(e.target.value)

}


return (
        <div>
       
       <h3 className="center">Welcome to Login-Form</h3>

       <form className={"form"}>
       
       <div className={"form-group"}>
      <label>"Email Address"</label>
      <input 
      name={"emailAddress"}
      value={Emailaddress}
      onChange={EmailAddressChangeHandler} 
       />
       </div>

       <br />

       <div className={"form-group"}>
      <label>"Password"</label>
      <input 
      name={"Password"}
      value={Password}
      type={"Password"}
      onChange={PasswordChangeHandler} 
       />
       </div>
       <br />

       <div className={"form-group"}>
      <label>"Confirm Password"</label>
      <input 
      name={"Confirm Password"}
      value={ConfirmPassword}
      type={"Password"}
      onChange={ConfirmPasswordChangeHandler} 
       />
       </div>


       <button 
       type={"button"}> 
       
       Register Now
       </button>
       </form>

        </div>
    )
}

export default Loginform;