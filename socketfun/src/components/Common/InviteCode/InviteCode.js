import React from 'react'
import './InviteCode.css'
import Button from '../../../neumorphism/Button/Button'

export default function InviteCode() {
    return (
        <>
        <div className="PlaceholdInvite">Invite Your friends with this code</div>
        <div className="InviateTotalFlex">
            <div className="in InviteInput">
                5edegbdevudetfyvdufe
            </div>
            <div>
                <Button className="CopyBtn">
                    <div style={{display:'flex'}}>
                     <img height="20px" src="https://res.cloudinary.com/dlmozkbdc/image/upload/v1596871380/Socket/Group_6_rtaonx.svg"/> &nbsp; <div style={{paddingTop:'3px'}}>Copy</div>
                    </div>
                </Button>
            </div>
        </div>
        </>
    )
}
