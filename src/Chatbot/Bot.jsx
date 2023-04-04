import React from 'react'
import ChatBot from 'react-simple-chatbot'
import { Segment } from 'semantic-ui-react'
function Bot() {
    const steps=[
        {
            id:'Great',
            message:'Hello, Welcome to Taaj Online Banking',
            trigger:"Ask Name"
        },
        {
            id:'Ask Name',
            message:'please enter your name',
            trigger:'Waiting1'
        },
        {
            id:'Waiting1',
            user:true,
            trigger:'Name'
        },
        {
            id:'Name',
            message:'Hi {previousValue}, Please select your issue',
            trigger:'issues'
        },
        {
            id:'issues',
            options:[
               { value:'Bank account opening',
               label:'Account',trigger:'Account'},
               { value:'Check balance',
               label:'balance',trigger:'balance'}

            ],
        },
        {id:'Account',
        message:'Thanks for telling us your account issues, Well help you fix it',
        end:true
    },
    {id:'balance',
    message:'Your balance is ..........',
    end:true
}
    ]
  return (
    <div>
        <Segment style={{float:"right",marginRight:"20px", marginTop:"20px"}}>
            <ChatBot steps={steps}/>
            
        </Segment>
      
    </div>
  )
}

export default Bot
