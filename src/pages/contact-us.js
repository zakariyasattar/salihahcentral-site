import React from "react";
import { Form, Text, Radio, RadioGroup, TextArea, Checkbox } from 'react-form';
import Ribbon from "../components/Ribbon";

const ExampleForm = () => (
<div>
<Ribbon/>
              <form method="post" action="../pages/#action_page.php">
            <div className="field half first">
              <label htmlFor="name"><font color="powderblue"><tab1></tab1>Name</font></label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email"><font color="powderblue"><tab1></tab1>Email</font></label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message"><font color="powderblue"><tab1></tab1>Message</font></label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <br/>
            <ul className="actions">
              <li><tab1></tab1><input type="submit" value="Send Message" className="special" /></li>
            </ul>
        </form>
</div>
)

  export default ExampleForm;
