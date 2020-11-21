import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { SignInContainer, SignInTitle, ButtonsContainer } from "./sign-in.styles";

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

 
const SignIn = ({ googleSignInStart, emailSignInStart }) => {

  const [userCredentials, serCredentials] = useState({email: "", password: ""});
  
  const {email, password} = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  }

  const handleChange = e => {
    const { name, value } = e.target;
    serCredentials({...userCredentials, [name]: value})
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your e-mail and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          type="email" 
          name="email" 
          value={email} 
          handleChange={handleChange} 
          label="email"
          required 
        />

        <FormInput 
          type="password" 
          name="password" 
          value={password} 
          handleChange={handleChange} 
          label="password"
          required 
        />
        <ButtonsContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with Google</CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);