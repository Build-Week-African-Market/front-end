
function Login(props) {
    
    let {loginForm, setLoginForm, allUsers} = props;

    // ON SUBMIT NEEDS DEFINIED
    // USE YUP TO COMPARE TO ALLUSERS AND SET USERNAME STATE

    const changeHandlerLogin = e => {
        setLoginForm({...loginForm, [e.target.name]: e.target.value});
        console.log(loginForm);
    }

    return (
        <form>
            <label>
                Email:
                <input
                    type='text'
                    name='email'
                    onChange={e => changeHandlerLogin(e)}
                    value={loginForm.email}
                />
            </label>
            <label>
                Password:
                <input
                    type='text'
                    name='password'
                    onChange={e => changeHandlerLogin(e)}
                    value={loginForm.password}
                />
            </label>
            <button>Click me to login!</button>
        </form>
    )
}

export default Login