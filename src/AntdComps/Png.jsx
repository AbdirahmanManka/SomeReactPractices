import React from 'react'
import {Upload,Button} from "antd"

function Png() {
  return (
    <div
    style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"

    }}>
    <Upload.Dragger multiple={true} listType="picture"
    showUploadList={{showRemoveIcon: true}}
    accept=".png,.jpeg,.jpg,.doc"
    beforeUpload={(file)=>{
        return false;


    }}
    >
        Drag Files here Or
        <br/>
     <Button>Upload  </Button>
    </Upload.Dragger>
      
    </div>
  )
}

export default Png
