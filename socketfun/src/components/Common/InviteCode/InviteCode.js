import React, { useRef } from 'react'
import './InviteCode.css'
import Button from '../../../neumorphism/Button/Button'

export default function InviteCode(props) {


    let txtInputRef=useRef(null)

    const CopyText=()=>{
            txtInputRef.current.select();
            /* Copy the text inside the text field */
            document.execCommand("copy");

            document.getElementById('ClipId').style.color="blue"

            setTimeout(() => {
                document.getElementById('ClipId').style.color="#696969"
            }, 1000);
            
          }

    return (
        <>
        <div className="PlaceholdInvite">Invite Your friends with this code</div>
        <div className="InviateTotalFlex">
            <input style={{display:'none'}} type="text" value={props.code} ref={txtInputRef}/>
            <div className="in InviteInput" id="ClipId" >
                {props.code}
            </div>
            <div>
                <Button className="CopyBtn" onClick={CopyText}>
                    <div style={{display:'flex'}}>
                     <img height="20px" src="https://res.cloudinary.com/dlmozkbdc/image/upload/v1596871380/Socket/Group_6_rtaonx.svg"/> &nbsp; <div style={{paddingTop:'3px'}}>Copy</div>
                    </div>
                </Button>
            </div>
        </div>
        </>
    )
}
