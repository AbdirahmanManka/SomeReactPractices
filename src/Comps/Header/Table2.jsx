import React from 'react'
import { Table ,Button} from 'antd'
import './Table1.css'

function Table2() {
    const dataSource = [
        {
          key: '1',
          name: 'PAYBILL',
          enabled: "true",
          id:0
        },
        {
          key: '2',
          name: 'Business code ',
          Business_Code:"false",
          id:1
        },
        
      ];
      
      const columns = [
        {
          title: 'Account_type',
          dataIndex: 'type',
          key: 'type',
        },
        {
          title: 'Business_Code',
          dataIndex: 'code',
          key: 'code',
        },
        {
          title: 'Id',
          dataIndex: 'id',
          key: 'id',
        },
        {
            title: 'Provider',
            dataIndex: 'provider',
            key: 'provider',
          },
          {
            title: 'Verification_type',
            dataIndex: 'ver',
            key: 'ver',
          },
      ];
   

  return (
    <div className='ant-table-thead'>
      <Table dataSource={dataSource} columns={columns} pagination={false} />;
    </div>
  )
}

export default Table2
