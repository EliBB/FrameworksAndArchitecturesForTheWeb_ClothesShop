import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
import "../globalStyles.css";
import "./login.css";
import WhiteButton from "../components/whiteButton";
import BlackButton from "../components/blackButton";
import Profile from "./profile";
import { getCustomers, postCustomer } from "../APIcalls";

export default function Login() {
    const { user, login } = useContext(UserContext);
    const [inputs, setInputs] = useState({firstname:"", lastname: "", email: "", password: ""});
    const [errors, setErrors] = useState([]);
    const [isSubmit, setIsSubmit] = useState(false);
    const [customer, setCustomer] = useState([]);
   
        useEffect(() => {
            async function setCustomers(){
                const data = await getCustomers();
                setCustomer(data);
            }
            setCustomers();
            // eslint-disable-next-line react-hooks/exhaustive-deps
        },[1]); 


    const handleChange = event => {
        const {name, value} = event.target;
        setInputs({...inputs, [name]:value });
    }

    function handleSubmit(event){
        event.preventDefault();
        setErrors(validate(inputs));
        if(errors.length === 0){
            setIsSubmit(true);
        }

        if(isSubmit === true){
            const id = customer.length + 1;
            login(inputs.firstname, id);

            postCustomer({id: id, firstname: inputs.firstname, surname: inputs.lastname, basket: []})
        }
    }

    function validate(input){
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if(!input.firstname){
            errors.firstname = "First name is required";
            setIsSubmit(false);
        }
        if(!input.lastname){
            errors.lastname = "Last name is required";
            setIsSubmit(false);
        }
        if(!input.email){
            errors.email = "Email is required";
            setIsSubmit(false);
        } else if(!regex.test(input.email)){
            errors.email = "This is not a valid email"
            setIsSubmit(false);
        }
        if(!input.password){
            errors.password = "Password is required";
            setIsSubmit(false);
        } else if(input.password.length < 4){
            errors.password = "Password must be at least 4 characters"
            setIsSubmit(false);
        } 
        return errors;
    }

    const navigate = useNavigate(); 

    return(
        user.auth ? <Profile/> :
        <div className="login-container">
            
            <h2>Please login or create an account </h2>
            <br/>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-container">
                    <label>First name:</label>
                    <p>{errors.firstname}</p>
                    <input 
                        type="text"
                        name="firstname"
                        onChange={handleChange} 
                        value={inputs.firstname}
                        />

                    <label>Last name:</label>
                    <p>{errors.lastname}</p>
                    <input 
                        type="text"
                        name="lastname"
                        onChange={handleChange} 
                        value={inputs.lastname}
                        />
                        
                    <label>E-mail:</label>
                    <p>{errors.email}</p>
                    <input 
                        type="email"
                        name="email"
                        onChange={handleChange} 
                        value={inputs.email}
                        />
                        
                    <label>Password:</label>
                    <p>{errors.password}</p>
                    <input 
                        type="password"
                        name="password"
                        onChange={handleChange} 
                        value={inputs.password}
                        />      
                </div>              

                <WhiteButton
                    text="Login"
                    type="submit"
                    />
            </form>
                <br/>
                <BlackButton
                    text="Cancel"
                    onClick={()=> navigate(-1)}
                    />
            </div>
    )
}
