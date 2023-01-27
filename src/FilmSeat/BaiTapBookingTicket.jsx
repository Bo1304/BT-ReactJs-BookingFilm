import React, { Component, Fragment } from 'react'
import '../FilmSeat/Index.css';
import ListBookTickets from './ListBookTickets';
import DataSeat from '../Data/danhSachGhe.json';
import ListSeat from './ListSeat';
class BaiTapBookingTicket extends Component {


  renderListSeat = () => {
      return DataSeat.map((seat,index)=>{

        return <div key = {index} >
          <ListSeat seat = {seat} soHangGhe = {index}  />
           </div>
      })
  }

  render() {
    return (
      <div
        style={{
          position: "fixed", width: "100%", height: "100%",
          backgroundImage: "url(./BookSeat/bgmovie.jpg)"
          , backgroundSize: "100%",
        }}
      >
        <div style={{
          backgroundColor: "rgba(0,0,0,0.5)"
          , position: "fixed",
          width: "100%", height: "100%",
        }} >
          <div className="container-fluid">


            <div className="row">
              <div className="col-8 text-center">
                <h1 className='text-success'>
                  Bài Tập Đặt Vé Xem Phim CyberSoft
                </h1>
                <div className='mt-5 text-light' style={{fontSize:'25px'}}>Màn Hình</div>
                <div className='mt-2' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
               
                  <div className="screen">
                  </div>
                
                </div>
                {this.renderListSeat()}
              </div>

              <div className="col-4 ">
              <h1 className='text-success'>
                  Danh Sách Ghế Đã Chọn
                </h1>

                <ListBookTickets/>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default BaiTapBookingTicket;