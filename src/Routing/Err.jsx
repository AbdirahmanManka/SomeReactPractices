import { Button, Result } from 'antd';
import {Link} from "react-router-dom"

const Err = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary"><Link to={"/"} style={{textDecoration:"none"}}>Go back to login </Link></Button>}
  />
);
export default Err;