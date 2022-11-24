import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carot from "./assets/girl.jpg";
import { SiIconify } from 'react-icons/si';
import { IoMdSend } from 'react-icons/io';
import { MdOutlineAttachment } from 'react-icons/md';
import {  BsPencil } from 'react-icons/bs';
import TextField from '@mui/material/TextField';
import { AiOutlineFileImage, AiOutlineClockCircle, AiOutlineClose } from 'react-icons/ai';
import Thocon from "./assets/thocon.jpg";
import Divider from '@mui/material/Divider';


export default function TabNote() {
  return (
    <Box>
      <Box className="Par-message">
        <Box className="message">
          <TextField fullWidth label="Enter a message" id="fullWidth" className="message-field" />
        </Box>
        <Box className="List-message">
          <Box className="message-icon-left">
            <MdOutlineAttachment className="message-item" /> <AiOutlineFileImage className="message-item" /> < SiIconify className="message-item" />
          </Box>
          <Box className="message-icon-right">
            <IoMdSend className="message-send" />
          </Box>
        </Box>
      </Box>
      <Box className="List-TimeLine">
        <Typography className="Text-TimeLine">22-11-2022</Typography>
        <Box className="Time-Header">
          <Divider className="Divider-1" />
          <Divider className="Divider-2" />
          <Divider className="Divider" />
          <Divider className="Divider-1" />
          <Divider className="Divider-2" />
        </Box>
      </Box>
      <Box className="List-TimeLine">
        <Box className="List-avatar">
          <CardMedia>
            <Box className="His-avtar">
              <img src={Carot} style={{ width: 50, height: 49 }} className="His-avta-item"></img>

            </Box>
          </CardMedia>
          <Box className="His-message-List">
            <Box className="His-message-1">
              <Box className="His-message-item">
                <Typography className="His-message-text">MSR</Typography>
                <AiOutlineClockCircle className="His-clock" />
                <Typography className="His-message-time">11:15</Typography>
              </Box>
              <Box className="His-message-item-1">
                <BsPencil className="His-message-write" />
                <AiOutlineClose className="His-message-close" />
              </Box>

            </Box>
            <Box className="His-message-2">
              <Typography className="His-message-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
              <Box className="His-message-item-1">
                <MdOutlineAttachment className="His-message-file" />
                <Typography className="His-file-text">abc.doc</Typography>
              </Box>
              <Box className="His-message-item-1">
                <MdOutlineAttachment className="His-message-file" />
                <Typography className="His-file-text">def.pdf</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="List-TimeLine">
        <Box className="List-avatar">
          <CardMedia>
            <Box className="His-avtar">
              <img src={Thocon} style={{ width: 50, height: 49 }} className="His-avta-item"></img>
            </Box>
          </CardMedia>
          <Box className="His-message-List">
            <Box className="His-message-1">
              <Box className="His-message-item">
                <Typography className="His-message-text">KDH</Typography>
                <AiOutlineClockCircle className="His-clock" />
                <Typography className="His-message-time">10:00</Typography>
              </Box>
              <Box className="His-message-item-1">
                <BsPencil className="His-message-write" />
                <AiOutlineClose className="His-message-close" />
              </Box>

            </Box>
            <Box className="His-message-2">
              <Typography className="His-message-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ligula, ornare sit amet porttitor quis, placerat quis lacus. Mauris lectus turpis, rutrum non placerat id, placerat et nisl.</Typography>

            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
