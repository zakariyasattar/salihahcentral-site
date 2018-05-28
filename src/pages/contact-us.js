import React from "react";
import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';
import Ribbon from "../components/Ribbon";

const ExampleForm = () => (
<div>
<Ribbon/>
  <Form render={({
    submitForm
  }) => (
    <form onSubmit={submitForm}>
    <br/>
    <br/>
    <br/>
      <tab1></tab1><Text field="firstName" placeholder='First Name (required)' />
      <br/>
      <br/>
      <tab1></tab1><Text field="lastName" placeholder='Last Name (required)' />
      <br/>
      <br/>
      <tab1></tab1><Text field="email" placeholder='Email (required)' />
      <br/>
      <br/>
      <font color="white">
      <tab1></tab1><span>Message:</span>
      </font>

      <tab6></tab6><TextArea field="message" />
      <tab1></tab1><button type="submit">Submit</button>
    </form>
  )} />
</div>
)

  export default ExampleForm;
