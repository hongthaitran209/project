import api from './../API';
import * as Types from './../Constants';

export const getCourses = () => {
    return (dispatch) => {
        api
        .get('/QuanLyKhoaHoc/LayDanhSachKhoaHoc?maKhoaHoc=GP03')
        .then(res => {
            dispatch({
                type: Types.GET_COURSES,
                payload: res.data,
            })
        })
        .catch(err => console.log(err)
        )
    }
}