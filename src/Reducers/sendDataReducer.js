const sendDataReducer = (state='',action)=>{
    switch (action.type) {
        case 'SEND_DATA':
            if (action.data){
                return action.data
            }
            else{
                return null
            }
        default:
            return state
    }
}

export default sendDataReducer