
// WILL NEED TO BE CHANGED TO REGISTER
function Register(props) {
    
    const {userName, setUserName, registerInfo, setRegisterInfo, buttonState, errorSetter} = props;

    const changeHandler= e => {
        errorSetter(e);
        e.target.name === 'terms' ?
        setRegisterInfo({...registerInfo, terms: !registerInfo.terms}) :
        setRegisterInfo({...registerInfo, [e.target.name]: e.target.value});
        console.log(registerInfo);
    }

    const submitHandler = e => {
        e.preventDefault();
        registerInfo.terms === true ?
            setUserName(registerInfo.userName) :
            console.log('need to agree to terms');
            // WILL NEED TO PUSH TO AXIOS
    }

    return (
        <form onSubmit={e => submitHandler(e)}>
            <label>
                Username:
                <input
                    type='text'
                    name='userName'
                    onChange={e => changeHandler(e)}
                    value={registerInfo.userName}
                />
            </label>
            <label>
                Email:
                <input
                    type='text'
                    name='email'
                    onChange={e => changeHandler(e)}
                    value={registerInfo.email}
                />
            </label>
            <label>
                Password:
                <input 
                    type='text'
                    name='password'
                    onChange={e => changeHandler(e)}
                    value={registerInfo.password}
                />
            </label>
            <label>
                Please agree to our terms and conditions:
                <input 
                    type='checkbox'
                    name='terms'
                    checked={registerInfo.terms}
                    onChange={e => changeHandler(e)}
                    value={registerInfo.terms}
                />
            </label>
            {buttonState}
        </form>
    )
}

export default Register;