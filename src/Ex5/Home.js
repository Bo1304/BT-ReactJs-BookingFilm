import React, { Component } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";
import axios from "axios";
import { connect } from "react-redux";

class Home extends Component {
  // constructor(){}
  fetchUsers = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/Users",
      });
      this.props.dispatch({
        type: "user/UPDATE_USER_LIST",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div>
        <h1>Quản lý Người dùng</h1>
        <UserForm onSubmitSuccess={this.fetchUsers} />
        <UserList onDeleteSuccess={this.fetchUsers} />
      </div>
    );
  }

  componentDidMount() {
    // call api
    this.fetchUsers();
  }
}

export default connect()(Home);
