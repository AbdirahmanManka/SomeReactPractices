import React from 'react'
import {useNavigate} from "react-router-dom"
import {  Route, Routes } from 'react-router-dom';
import {Link} from "react-router-dom"

import { Table ,Button, Modal} from 'antd'
import './Table1.css'
import Table2 from './Table2';

function Table1() {
     const [modal, contextHolder] = Modal.useModal();

 
    const dataSource = [
        {
          
          name: 'Mike',
          enabled: "true",
          id:0
        },
        {
      
          name: 'John',
          enabled:"false",
          id:1
        },
      ];
      
      const columns = [
        {
          title: 'client_name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'enabled',
          dataIndex: 'enabled',
          key: 'enable',
        },
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id',
        },
      ];
   

  return (
    
    <div className='ant-table-thead'>
      <Table dataSource={dataSource} columns={columns}  pagination={false} />;
      <Button className='btn'> View Payment Details</Button> 
    </div>
  )
}

export default Table1
