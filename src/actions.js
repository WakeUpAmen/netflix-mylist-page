import axios from 'axios';

export function getInitalData(){
    return(dispatch) => {
        console.log("haha")
        axios.get("http://localhost:8888/api/items/")
        .then(response =>{
            console.log(response.data.items)
            dispatch(getAllData(response.data.items));
        })
    }
}
export function addItem(id){
    return (dispatch) => {
        axios.put("http://localhost:8888/api/add-item/"+id)
        .then(response => {
            dispatch(getAllData(response.data.items));
        })
    }
}

export function removeItem(id){
    return (dispatch) => {
        axios.put("http://localhost:8888/api/remove-item/"+id)
        .then(response => {
            dispatch(getAllData(response.data.items));
        })
    }
}
export const getAllData = data => ({
    type: 'GET_ALL_DATA',
    data
})
