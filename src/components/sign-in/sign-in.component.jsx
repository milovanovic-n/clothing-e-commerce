import React from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

//import { auth } from "../../firebase/firebase.utils";

import { SignInContainer, SignInTitle, ButtonsContainer } from "./sign-in.styles";

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

 
class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const {email, password} = this.state;

    emailSignInStart(email, password);

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   // Clear state
    //   this.setState({email: "", password: ""})
    // } catch(err) {
    //   console.log(err);
    // }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value})
  }

  render() {
    const { googleSignInStart } = this.props;

    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your e-mail and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput 
            type="email" 
            name="email" 
            value={this.state.email} 
            handleChange={this.handleChange} 
            label="email"
            required 
          />

          <FormInput 
            type="password" 
            name="password" 
            value={this.state.password} 
            handleChange={this.handleChange} 
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
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);