import React from 'react'
import "./Connect.css"
import Card from '@mui/material/Card';
import {BsLink}  from "react-icons/bs"
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import Button from '@mui/material/Button';

const Connect = ({connect}) => {
  return (
    <div className='connectCard'>
      <div className='connectImages'>
        <img src={connect?.bannerImage} className='connectBanner'/>
        <img src={connect?.userImage} className='connectUser'/>
      </div>

      <div className='connectFlexMain'>
          <div>
             <h4 style={{alignItems:"center"}}>{connect?.name}</h4>
             <a>{connect?.role}</a>
          </div>
          <div>
             <div className='flexConnectSmall'>
                <BsLink/>
                <a>{connect?.number} Mutual Connects</a>
             </div>
             <Button
            variant="outlined"
            startIcon={<PersonAddAltIcon />}
            style={{ width: "150px", marginLeft: "20px", borderRadius: "10px" }}
          >
            Connect
          </Button>
          </div>
      </div>
    </div>
  )
}

export default Connect
