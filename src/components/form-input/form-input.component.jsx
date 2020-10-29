import React from "react";

import { GroupContainer, FormInputContainer, FormLabelContainer } from "./form-input.styles";


const FormInput = ({handleChange, label, ...otherProps}) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...otherProps} />
    {
      label ?
      (<FormLabelContainer className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}>
        {label}
      </FormLabelContainer>)
      : 
      null
    }
  </GroupContainer>
);

export default FormInput;