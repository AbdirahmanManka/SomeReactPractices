import React,{useState,useEffect} from 'react'
import { Card, Typography,Space,Statistic, Table} from 'antd';
import {ShoppingCartOutlined } from '@ant-design/icons';
import { getOrders } from '../../API/Index';
function Board() {
  return (
    <div>
        <Typography.Title>
            My Dashboard
        </Typography.Title>
        <Space>
      <Card>
      <ShoppingCartOutlined/>
      <Statistic title="Payments" value={"$234"}/>
      </Card>
      </Space>
      <Space>
        <RecentOrders/>
      </Space>
    </div>
  )
}
function RecentOrders(){

  const [dataSource,SetDataSource]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect(() => {
    
    setLoading(true);
    getOrders().then((res)=>{
      console.log(res.products)
      SetDataSource(res.products.splice(0,3));
      setLoading(false);
    });
  }, []);




  return (
    <>
    <Typography.Text>
      Recent Orders
    </Typography.Text>
  <Table rowKey={field => field.id} columns={[{
    title:'Title',
    dataIndex:"title"
  },
  {
    title:'Quantity',
    dataIndex:"quantity"
  },{
    title:'Price',
    dataIndex:"discountedPrice"
  },]}
  loading={loading}
  dataSource={dataSource}
  pagination={false}
>
   
  </Table>
  </>
  )
}

export default Board;

