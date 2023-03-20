import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(true);

  return (
    <>
      <nav id="sidebar" className={" " + sidebar}>
            <div class="sidebar-header text-center">
            <div className="pb-1"><i class="fa-solid fa-cart-flatbed fa-2xl"></i> </div> <h3>iBS Inventory</h3>
            </div>

            <ul class="list-unstyled components">
                <li  >
                <Link to="/" /*class="dropdown-toggle"*/> <i class="fa-solid fa-chart-simple mx-2"></i> Home</Link>
                    
                </li>
                <li>
                {/* <Link to="/"> <i className="fa-solid fa-chart-simple mx-2"></i> Accounts</Link> */}
                </li>
                <li>
                {/* <Link to="/contacts"><i class="fa-solid fa-chart-simple mx-2"> </i> Contacts</Link> */}
                </li>
                <li >
                <Link to="/leads"> <i className="fa-solid fa-chart-simple mx-2"></i> Leads</Link>
                </li>
                <li>
                <Link to="/"> <i class="fa-solid fa-chart-simple mx-2"> </i> Products</Link>
                </li>
                <li>
                {/* <Link to="/"> <i class="fa-solid fa-chart-simple mx-2"> </i> Sales</Link> */}
                </li>
            </ul>

            
        </nav>
    </>
  )
}

export default Sidebar