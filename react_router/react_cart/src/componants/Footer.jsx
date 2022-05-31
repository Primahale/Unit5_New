import "./Footer.css"
import { Link } from "react-router-dom";
import "./Footer.css"

export const Footer = () => {
  return (<footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <i class="fab fa-slack"></i>
          <span class="logo_name">Store</span>
        </div>
        {/* <div class="media-icons">
          <Link to="#"><i class="fab fa-facebook-f"></i></Link>
          <Link to="#"><i class="fab fa-twitter"></i></Link>
          <Link to="#"><i class="fab fa-instagram"></i></Link>
          <Link to="#"><i class="fab fa-linkedin-in"></i></Link>
          <Link to="#"><i class="fab fa-youtube"></i></Link>
        </div> */}
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="">Company</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact us</Link></li>
          <li><Link to="/cart">Cart Page</Link></li>
          <li><Link to="/shop">Products</Link></li>
        </ul>
        <ul class="box">
          <li class="">Services</li>
          <li><Link to="#">App design</Link></li>
          <li><Link to="#">Web design</Link></li>
          <li><Link to="#">Logo design</Link></li>
          <li><Link to="#">Selling</Link></li>
        </ul>
        <ul class="box">
          <li class="">Account</li>
          <li><Link to="#">Profile</Link></li>
          <li><Link to="#">My account</Link></li>
          <li><Link to="#">Preferances</Link></li>
          <li><Link to="#">Purchase</Link></li>
        </ul>
        <ul class="box input-box">
          <li class="">Send us query</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Click to send"/></li>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright &#169; 2022 <Link to="#">Pri Store Inc.</Link>All rights reserved</span>
        <span class="policy_terms">
          <Link to="#">Privacy policy</Link>
          <Link to="#">Terms & condition</Link>
        </span>
      </div>
    </div>
  </footer>);
};