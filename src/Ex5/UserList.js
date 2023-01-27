import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

class UserList extends Component {
  handleDelete = async (userId) => {
    try {
      await axios({
        method: "DELETE",
        url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/Users/${userId}`,
      });

      this.props.onDeleteSuccess();
    } catch (error) {
      console.log(error);
    }
  };

  handleSelect = async (userId) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/Users/${userId}`,
      });

      this.props.dispatch({
        type: "user/UPDATE_SELECTED_USER",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="card">
        <div className="card-header bg-dark">
          <h4 className="text-white">Danh sách</h4>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Họ Tên</th>
                <th>Tài Khoản</th>
                <th>SDT</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.users.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.fullName}</td>
                    <td>{item.username}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => this.handleSelect(item.id)}
                      >
                        Chỉnh sửa
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(item.id)}
                      >
                        Xoá
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user.users,
  };
};
export default connect(mapStateToProps)(UserList);
