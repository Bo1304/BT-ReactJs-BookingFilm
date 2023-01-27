import React, { Component } from 'react'
import { connect } from "react-redux";
import { CancelSeatAction } from '../redux/action/listseatAction';
import { CANCEL_SEAT } from '../redux/types/listseatType';
 class ListBookTickets extends Component {
  render() {
    return (
      <div>
        <div className='mt-5'>
          <button className='gheDuocChon'>
          </button>
          <span style={{ color: 'white', fontSize: '25px' }}> Ghế đã đặt</span>
          <br />
          <button className='gheDangChon'>
          </button>
          <span style={{ color: 'white', fontSize: '25px' }}> Ghế đang đặt</span>
          <br />


          <button className='ghe' style={{ marginLeft: 0 }}>
          </button>
          <span style={{ color: 'white', fontSize: '25px' }}> Ghế chưa đặt</span>
        </div>
        <div>
          <div class="table-responsive mt-5">
            <table class="table table-primary " border="2" cellspacing="0" cellpadding="0">
              <thead >
                <tr className='text-success'>
                  <th scope="col">Số ghế</th>
                  <th scope="col">Giá</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
              {/* <tr>
                  <th scope="col">Số ghế</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Column 3</th>
                </tr>
                <tr>
                  <th scope="col">Số ghế</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Column 3</th>
                </tr> */}
                {this.props.listseatBooked.map((gheDangDat,index)=>{
                  return <tr key={index}>
                      <td>{gheDangDat.soGhe}</td>
                      <td>{gheDangDat.gia.toLocaleString()}</td>
                      <td><button
                      onClick={()=>
                        {this.props.dispatch(
                          // CancelSeatAction(gheDangDat.soGhe)
                          {
                            type: CANCEL_SEAT,
                            soghe: gheDangDat.soGhe
                          }
                        )}}
                      >
                        Cancel Booking</button></td>
                  </tr>
                })}
              </tbody>
              <tfoot>
                <tr className = "text-danger"
                style={{fontWeight:"bold"}}>
                  <td></td>
                  <td>Total:</td>
                  <td>{this.props.listseatBooked.reduce((total,gheDangDat,index)=>{
                    return total + gheDangDat.gia
                  },0).toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    listseatBooked:state.listseatReducer.listseatBooked
  }
}
export default connect(mapStateToProps) (ListBookTickets);