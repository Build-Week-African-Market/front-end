import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function NavBar(props) {
// RETURNS NAVBAR AT TOP OF SCREEN
// LOGO TO THE FAR LEFT LINKS TO HOME
// LOGIN/SIGNUP BUTTONS ON FAR RIGHT
// ABOVE BUTTONS CHANGE TO DROPDOWN WHEN LOGGED IN
// DROPDOWN MENU ALLOWS LOGOUT OR ADD ITEMS

// DOES ROUTER BELONG HERE?

// PROPS TO DETERMINE TO RENDER LOG IN BUTTONS OR DROPDOWN MENU
// let {userName} = props

    return (
        <Router>
            <div>

            {/* BUTTON LINKS TO HOME SCREEN */}

                <Link to="">
                    <button />
                </Link>

            {/* TERNARY CHECKS WHETHER OR NOT SELLER IS LOGGED IN */}
            {/* IF SELLER IS LOGGED IN RENDER DROPDOWN MENU */}
            {/* IF NOT LOGGED IN RENDER LOGIN IN BUTTONS */}

                {/* {loginBoolean ? 
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

                SECOND TERNARY OPTION STARTS BELOW

                </div> :
                <div> 
                    <Link to="">
                        <button>
                            Log-in
                        </button>
                    </Link>
                    <Link to="">
                        <button>
                            Sign-up
                        </button>
                    </Link>
                </div>} */}
            </div>
        </Router>
      );
}

export default NavBar;