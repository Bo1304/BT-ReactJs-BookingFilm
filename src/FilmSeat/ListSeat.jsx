import React, { Component } from 'react'
import { connect } from "react-redux";
import { BookSeatAction } from '../redux/action/listseatAction';
 class ListSeat extends Component {

    renderSeat = () => {
        return this.props.seat.danhSachGhe.map((Lseat, index) => {
            let cssGheDaDat = '';
            let disable = false;
            if (Lseat.daDat) {  // = true
                cssGheDaDat = 'gheDuocChon'
                disable = true;
            }


            // xet trang thai ghe dang đặt
            let cssGheDangChon = '';
            let indexGheDangDat = this.props.listseatBooked
            .findIndex(gheDangDat=>gheDangDat.soGhe === Lseat.soGhe);
            if(indexGheDangDat !== -1 ){
                cssGheDangChon = ' gheDangChon';
            }


            // render button soGhe
            return <button onClick={() => {
                this.props.datGhe(Lseat)
                //alert("ghgh")
            }}
             disabled={disable} className={`ghe ${cssGheDaDat} ${cssGheDangChon}`} key={index}>
                {Lseat.soGhe}
                {/* {index + 1} */}

            </button>

        })
    }

    // hàm render ra số cột hàng phía trên của ghế
    renderSoHang = () =>{
        return this.props.seat.danhSachGhe.map((hang,index) =>{
            return <button className ="rowNumber">
                {hang.soGhe}
            </button>
        })
    }
    renderHangGhe = () => {

        if (this.props.soHangGhe === 0) {
            return <div 
            style={{marginLeft:'20px'}}>
                {this.props.seat.hang}
                {this.renderSoHang()}
            </div>
        } else {
            return <div>
                {this.props.seat.hang}
                {this.renderSeat()}
            </div>
        }
    }
    render() {
        return (
            <div className='text-light ml-1 mt-1 ' style={{ fontSize: '10px', marginRight: '30px' }}>
                {/* {this.props.seat.hang} */}
                {this.renderHangGhe()}
            </div>
        )
    }
    
}
// dispatch, hàm này xử lý thay đổi(như state) 
//khi nhấn button đặt ghế thì nó sẽ lấy data đó chuyển qua ds ghế đã đặt
const mapDispatchToProps = (dispatch) => {
    return{
        datGhe: (ghe) =>{
            dispatch(
                BookSeatAction(ghe)
            )
        } 
    }
}

const mapStateToProps = state => {
    return {
        listseatBooked: state.listseatReducer.listseatBooked
    }
}



export default connect(mapStateToProps,mapDispatchToProps) (ListSeat);