import Input from "../../components/Input/Input";
import Modal from "../../components/Modal/Modal";
import Login from '../Login'
import React from "react";
import validator from "validator";

const SignIn = () => {
    return (
        <Modal title={"Sign in"}>
            <h2>Create a new account</h2>
            <form action="" className="log-sign-form">
                <Input type="text" placeholder="username" message={hints.username} />
                <Input type="email" placeholder={"Email Address"} message={hints.email} />
                <Input type="password" placeholder= "password" message={hints.password}/>
                <button type="submit">Sign in</button>
                <Login/>
            </form>
        </Modal>
    )
}

const hints = {
    username: (value) => {
        if (value === "")
            return "Enter First name"
    },
    email: (value) => {
        if(value === "")
            return "Enter Email Address"
        else if(!validator.isEmail(value))
            return "Enter valid Email"
    },
    password: (value) => {
        if(value === "")
            return "Enter Password"
        else if(value.length < 6 )
            return "password must be 6 words"

    }
}

export default SignIn