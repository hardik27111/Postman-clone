const initialState = [{response:null}]

const requestReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'REQUEST_OCCURRENCE':
            if (action.res) {
                return {response:action.res}
            }else if(action.e){
                console.log(action.e)
                return {response:action.e}
            }
        default:
            return state;
    }
}

export default requestReducer