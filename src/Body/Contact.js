import React from 'react'
import './contact.css'
export default function Contact() {
    return (
        <div className='contact'>

            <h2 style={{paddingBottom : '10px', color:'green'}}>Contact Us</h2>
<form>
  <div class="form-group mx-4">
    <label for="exampleInputEmail1" >Enter your Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    <label for="exampleInputEmail1">Enter Your Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name"/>

  </div>

  <div class="form-group mx-3">
    <label for="exampleFormControlTextarea1">Enter your Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div class="text-center">
	<button type="button" class="btn btn-primary my-3">Sumbit</button>
</div>
  </form>
</div>
    )
}
