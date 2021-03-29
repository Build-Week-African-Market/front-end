import {Link} from 'react-router-dom'

function NavBar(props) {
    // RETURNS NAVBAR AT TOP OF SCREEN
    // LOGO TO THE FAR LEFT LINKS TO HOME
    // LOGIN/SIGNUP BUTTONS ON FAR RIGHT
    // ABOVE BUTTONS CHANGE TO DROPDOWN WHEN LOGGED IN
    // DROPDOWN MENU ALLOWS LOGOUT OR ADD ITEMS
    
    // DOES ROUTER BELONG HERE?
    
    // PROPS TO DETERMINE TO RENDER LOG IN BUTTONS OR DROPDOWN MENU
    let {userName} = props
    
        return (
                <div>
    
                {/* BUTTON LINKS TO HOME SCREEN */}
    
                    <Link to="/home">
                        <button>
                            To Home
                        </button>
                    </Link>
                    <Link to="/categories">
                        <button>
                            Browse items!
                        </button>
                    </Link>
    
                {/* TERNARY CHECKS WHETHER OR NOT SELLER IS LOGGED IN */}
                {/* IF SELLER IS LOGGED IN RENDER DROPDOWN MENU */}
                {/* IF NOT LOGGED IN RENDER LOGIN IN BUTTONS */}
    
                    {userName ? 
                    <div>    
                        <label>
                            {userName}
                            <select>
                                <option>
                                    <Link to="">
                                        Add new Item
                                    </Link>
                                </option>
                                <option>
                                        Logout
                                </option>
                            </select>
                        </label>
                    </div> :
                    <div> 
                        <Link to="/Login">
                            <button>
                                Log-in
                            </button>
                        </Link>
                        <Link to="/register">
                            <button>
                                Sign-up
                            </button>
                        </Link>
                    </div>}
                </div>
          );
    }
    
    export default NavBar;