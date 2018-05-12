import React from 'react'

const Contact = () => (
  <div>
    <form>
<font color="white">
Email address:
 </font>
 <input type="text" name="Email" align="middle" />
 <font color="white">
 <tab1>Subject:</tab1><br />
 </font>
 <input type="text" name="Subject" align="middle"/>
 <font color="white">
 Your Message: <br/>
 </font>
 <input type="text" name="Content" align="middle"/>
</form>


<tab1><button>Send Email</button></tab1>
<a href="/">
<tab1>
<button>
Go back To The Homepage
</button>
</tab1>
</a>
</div>
)

export default Contact
