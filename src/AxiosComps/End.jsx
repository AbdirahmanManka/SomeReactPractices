import React ,{useState}from 'react'
import axios from 'axios'
import {Button} from 'antd'

function End() {
    const [apiResponse, setApiResponse] = useState({});
    const [loading, setLoading] = useState(false)
    const makeGetApiCall=()=>{
        setLoading(true)
        // axios.get("https://jsonplaceholder.typicode.com/todos/1")
        axios.request({
            method:'GET',
            url:'https://jsonplaceholder.typicode.com/todos/1',
          
        }).then(res=>{
            setApiResponse(res.data)

        }).catch(err=>{
            setApiResponse({err})

        }).finally(()=>{
            setLoading(false);
            

        })

    }
  return (
    <div className='end'>
        <Button onClick={makeGetApiCall}>
            Request GET API 
        </Button>
        <div>{loading ? "loading...": JSON.stringify(apiResponse)}</div>
      
    </div>
  )
}

export default End
