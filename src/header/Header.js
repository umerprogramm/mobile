import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function Header() {
  const RedirectPage = ()=>{
    window.location.href = "https://www.facebook.com/jimzkimz";
  }
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<Link to='/'> <img src='https://1.bp.blogspot.com/-7JFhPPKQ6wU/YdDQsmxOngI/AAAAAAAAAAs/cJ2jHdG50Z4-TSHQzruWHlep6cbvemdbACNcBGAsYHQ/s150/Untitled.png' alt='' height='40px' width='40px'/></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Home</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/about">About Me</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to='/blogs' >Blogs</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact">contact Us</Link>
      </li>
   
  
    </ul>
    <button id= "bt"class="btn btn-outline-success my-2 my-sm-0" onClick={RedirectPage}>Jion our facebook page</button>

   
  </div>
</nav>


  ); 
}

export default Header;
