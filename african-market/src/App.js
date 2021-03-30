import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import styled from 'styled-components';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import * as Yup from 'yup';

import NavBar from "./components/navbar";
import Register from './components/register';
import Home from './components/home';
// NAME WILL NEED TO BE CHANGED TO LOGIN
import Login from './components/login';
import Browse from './components/categories.js'

function App() {
  // INITIAL VARIABLE FOR STATES
  const initialState = {
    userName: '',
    email: '',
    password: '',
    terms: false
  }

  const initialErrorState = {...initialState, terms: ''}

  const initialLoginState = {
    email: '',
    password: ''
  }

  const initialAddItemState = {
    cat_id: '',
    description: '',
    item_id: newItem.length + 1,
    location: '',
    name: '',
    price: ''
  }

  // YUP SCHEMA
  // RENAME TO REGISTER SCHEMA
  let signUpSchema = Yup.object().shape({
    userName: Yup
      .string()
      .required(),
    email: Yup
      .string()
      .email()
      .required(),
    password: Yup
      .string()
      .required("Please set a password")
      .min(6, "Your password must be at least 6 characters"),
    terms: Yup
      .boolean()
      .oneOf([true], "Please accept our Terms and Conditions")
  })


  // YUP SCHEMA FOR RETURNINGUSER

  // FUNCTION CALLED IN LOGIN FORM CHANGEHANDLER FUNCTION
  const yupErrorSetter = e => {
    const {name, value} = e.target;
    Yup.reach(signUpSchema, name)
      .validate(value)
      .then(valid => {
        setErrors({...errors, [name]: ''});
      })
      .catch(err => {
        setErrors({...errors, [name]: err.errors[0]});
        console.log(errors);
      })
  }

  // YUP VALIDATION FOR RETURNING USER

// DEFINE STATES
  let [categories, setCategories] = useState([]);
  let [items, setItems] = useState([]);

  let [userName, setUserName] = useState('');
  // WILL NEED TO BE RENAMED TO REGISTER INFO
  let [registerInfo, setRegisterInfo] = useState(initialState);
  // SUBMIT BUTTON SET AS STATE TO EASILY MANIPULATE AND PASS THROUGH PROPS
  let [buttonState, setButtonState] = useState(<button />)
  let [errors, setErrors] = useState(initialErrorState);
  // STATE FOR ALL USERS
  // SET LATER WITH AXIOS GRAB
  let [allUsers, setAllUsers] = useState([]);
  // STATE HOLDER FOR RETURNING USER FORM
  let [loginForm, setLoginForm] = useState(initialLoginState);

  let [newItem, setNewItem] = useState(initialAddItemState);
  let [addedItems, setAddedItems] = useState([]);

  // USEEFFECT FOR LOGIN BUTTON DISABLING
  useEffect(() => {
    signUpSchema.isValid(registerInfo)
    // TERNARY DECIDES WHETHER BUTTON IS ENABLED BASED OFF OF SUCCESFUL VALIDATION
      .then(valid => {
        setButtonState(<button disabled={valid ? '' : true}>Click me to Submit!</button>);
        console.log('successful validate');
      });
  }, [registerInfo]);


// AXIOS GET CATEGORIES, ITEMS, AND USER INFO
// AXIOS GET ALL USERS
  useEffect(() => {
    axios.get('https://afr-market-backend.herokuapp.com/users')
      .then(e => {
        // console.log(e);
        setAllUsers(e.data);
  })
  .catch(console.log('error or defaulting all users get'));
}, []);

  // AXIOS GET ITEMS
  useEffect(() => {
    axios.get('https://afr-market-backend.herokuapp.com/items')
      .then(e => {
        console.log(e);
        setItems(e.data);
      })
      .catch(console.log('error or defaulting get items'));
  }, [])

  return (
    <>
    <Router>
    <NavBar userName={userName} />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/categories">
          <Browse />
        </Route>
        <Route path="/register">
          <Register userName={userName}
            setUserName={setUserName}
            registerInfo={registerInfo}
            setRegisterInfo={setRegisterInfo}
            buttonState={buttonState}
            errorSetter={yupErrorSetter}
          />
        </Route>
        <Route path="/login">
          <Login loginForm={loginForm}
            setLoginForm={setLoginForm}
            allUsers={allUsers}
          />
        </Route>
        {/* <Route path="">
          <AddItems />
        </Route> */}
      </Switch>
    </Router>
    </>
  );
}

export default App;
