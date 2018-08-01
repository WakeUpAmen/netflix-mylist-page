// initial  state
const initialState = {
    mylist: [],
    recommendations: [],
};
// reducers
export const myreducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_ALL_DATA':
            return {...state, 
                mylist: [...action.data].filter(element =>element["group"] == "mylist"), 
                recommendations: [...action.data].filter(element => element["group"] == "recommendations")}
        default:
            return state;
    }
}

export default myreducer;
