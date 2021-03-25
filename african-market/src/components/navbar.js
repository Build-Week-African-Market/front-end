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
        <div>
            {/* BUTTON LINKS TO HOME SCREEN */}
            <button />
            {/* TERNARY CHECKS WHETHER OR NOT SELLER IS LOGGED IN */}
            {/* IF SELLER IS LOGGED IN RENDER DROPDOWN MENU */}
            {/* IF NOT LOGGED IN RENDER LOGIN IN BUTTONS */}
                {/* {loginBoolean ? 
                <div>    
                    <label>
                        USERNAME
                        <select>
                            <option>
                                Add new Item
                            </option>
                            <option>
                                Logout
                            </option>
                        </select>
                    </label>
                </div> :
                <div>  
                    <button>
                        Log-in
                    </button>
                    <button>
                        Sign-up
                    </button>
                </div>} */}
        </div>
    )
}