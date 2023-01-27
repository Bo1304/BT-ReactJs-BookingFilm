import { BOOK_SEAT } from "../types/listseatType"

export const BookSeatAction = (ghe)=>{
    return{
        type: BOOK_SEAT,
        ghe
    }
}

export const CancelSeatAction = (soghe)=>{
    return{
        type: CANCEL_SEAT,
        soghe
    }
}