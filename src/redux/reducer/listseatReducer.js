import { BOOK_SEAT, CANCEL_SEAT } from "../types/listseatType";

const initalState = {
  // dsach ghe dang dat , ghi lộn phải V-ing booking
  listseatBooked: [
    // {
    //   soGhe: "A1",
    //   gia: 100
    // },
    // {
    //   soGhe: "B5",
    //   gia: 100
    // }
  ]

};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case BOOK_SEAT: {
      let danhSachGheDangDatUpdate = [...state.listseatBooked]
      // tạo thêm [] để chắc chắc tính bất biến của redux k bị ảnh hưởng

      let index =
        danhSachGheDangDatUpdate
          .findIndex(gheDangDat =>
            gheDangDat.soGhe === action.ghe.soGhe);
      if (index !== -1) {
        //ghế đang đặt đã có trong mảng khi người dùng click thì nó sẽ remove
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      else{
        // ngược lại chưa thì push vào mảng
        danhSachGheDangDatUpdate.push(action.ghe);
      }
      // sau đó cập nhật lại state để nó hiện lên giao diện => Re-render
      state.listseatBooked = danhSachGheDangDatUpdate;
      return { ...state }
    }


    case CANCEL_SEAT:{
      let danhSachGheDangDatUpdate = [...state.listseatBooked]
      // tạo thêm [] để chắc chắc tính bất biến của redux k bị ảnh hưởng

      let index =
        danhSachGheDangDatUpdate
          .findIndex(gheDangDat =>
            gheDangDat.soGhe === action.soGhe);
      if (index !== 1) {
        //ghế đang đặt đã có trong mảng khi người dùng click thì nó sẽ remove
        danhSachGheDangDatUpdate.splice(index, 1);
      }
      state.listseatBooked = danhSachGheDangDatUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default reducer;