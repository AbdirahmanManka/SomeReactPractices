import { Button, message, Space } from 'antd';
const Massage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Added Successfully !',
    });
  };
 
 
  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={success}>Success</Button>
        
      </Space>
    </>
  );
};
export default Massage;