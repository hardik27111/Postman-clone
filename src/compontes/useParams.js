import React, {useState} from 'react'

function useParams() {
    const [params,setParams] = useState()

    const handleChange = (key) =>{
        setParams(key.target.value)
    }
    
    return [params,handleChange]
}

export default useParams