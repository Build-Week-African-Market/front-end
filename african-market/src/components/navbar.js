import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function NavBar(props) {
// RETURNS NAVBAR AT TOP OF SCREEN
// LOGO TO THE FAR LEFT LINKS TO HOME
// LOGIN/SIGNUP BUTTONS ON FAR RIGHT
// ABOVE BUTTONS CHANGE TO DROPDOWN WHEN LOGGED IN
// DROPDOWN MENU ALLOWS LOGOUT OR ADD ITEMS

// PROPS TO DETERMINE TO RENDER LOG IN BUTTONS OR DROPDOWN MENU
// let {loginBoolean} = props

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
                        USERNAME
                        <select>
                            <option>
                                <Link to="">
                                    Add new Item
                                </Link>
                            </option>
                            <option>
                                <Link to="">
                                    Logout
                                </Link>
                            </option>
                        </select>
                    </label>
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

            <Switch>
                <Route path="">
                    <HomeScreen />
                </Route>
                <Route path="">
                    <Login />
                </Route>
                <Route path="">
                    <AddItems />
                </Route>
            </Switch>
        </Router>
        
      )
}