import { Table } from 'antd'
import React,{useState,useEffect} from 'react'
   

function Filter1() {
    const [loading,setLoading]=useState(false)
    const [dataSource, setDataSource] = useState([]);

    useEffect(() => {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response=>response.json())
        .then(data=>{
            setDataSource(data)
        }).catch(err=>{
            console.log(err)
        }).finally(()=>{
            setLoading(false)

        })
      
    }, [])
    const columns=[
        {
            key:"1",
            title:"ID",
            dataIndex:"id"
        },
        {
            key:"2",
            title:" User ID",
            dataIndex:"userId",
            sorter:(record1,record2)=>{
                return record1.userId>record2.userId
            }
        },
        {
            key:"3",
            title:"Status",
            dataIndex:"completed",
            render:(completed)=>{
                return <p>{completed?'Complete':'In progress'}</p>

            },
            filters:[
                {text:'Complete',value:true},
                {text:"In progress",value:false}

            ], 
            onFilter:(value,record)=>{
                return record.completed ===value

            }
        }
    ]
  return (
    <div>
        <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        pagination={true}
        >

        </Table>
      
    </div>
  )
}

export default Filter1
