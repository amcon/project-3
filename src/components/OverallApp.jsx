import React, { Component } from 'react';
import { browserHistory, Router, Route, Link } from 'react-router';
import Header    from './App/Common/Header/Header.jsx';
import App1      from './App/App1/App1.jsx';
import App2      from './App/App2/App2.jsx';
import App3      from './App/App3/App3.jsx';
import HomePage  from './HomePage/HomePage.jsx';


class OverallApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
      totalResults: 0,
      searchTerm: '',
      title: '',
      image: '',
      description: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  }

  setOverallState(obj) {
    this.setState(obj);
  }

  doLogin(email, password) {
    const bodyObj = {
      email: email,
      password: password,
    }
    fetch('/api/v1/users/login', {
      headers: new Headers({
        'Content-Type': 'application/json',
    }),
      method: 'POST',
      body: JSON.stringify(bodyObj)
    })
    .then(r => r.json())
    .then(token => {
      console.log(token);
      localStorage.setItem('userAuthToken', token);
    })
    .catch(err => console.log(err));
  }

 createUser(e) {
    e.preventDefault();
    const bodyObj = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password
    }
    fetch('/api/v1/users', {
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      method: 'POST',
      body: JSON.stringify(bodyObj)
    })
    .then(r => r.json())
    .then((token) => {
      localStorage.setItem('userAuthToken', token);
    })
    .catch(err => console.log(err));
  }

  updateBodyForm(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }


  postProduct() {
    e.preventDefault();
    const productObj = {
      title: this.state.title,
      description: this.state.description
    }
    fetch('/api/v1/products', {
      headers: {
        Token_Authorization: token,
      },
      method: 'POST',
      body: JSON.stringify(productObj)
    });
  }

  render() {
    return (
      <div>
        {this.props.children && React.cloneElement(this.props.children, {
          overallState: this.state,
          setOverallState: this.setOverallState.bind(this),
          doLogin: this.doLogin.bind(this),
          createUser: this.createUser.bind(this),
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          formChange: this.updateBodyForm.bind(this),
          createUser: this.createUser.bind(this),
        })}

      </div>
    );
  }
}

export default OverallApp;