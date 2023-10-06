import React, { Component } from "react";
import axios from "axios";
import "./AuthForm.css";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = async () => {
    const { username, password } = this.state;
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/login",
        {
          username,
          password,
        }
      );

      console.log("Logged in:", response.data);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  handleRegister = async () => {
    const { username, password } = this.state;
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/register",
        {
          username,
          password,
          role: "admin",
        }
      );
      console.log("Registered:", response.data);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  render() {
    return (
      <div>
        <h2>Login or Register</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleRegister}>Register</button>
      </div>
    );
  }
}

export default AuthForm;
