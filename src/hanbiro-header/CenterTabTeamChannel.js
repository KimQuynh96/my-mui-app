import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Thocon from "./assets/thocon.jpg";
import Divider from '@mui/material/Divider';
import NoiThat from "./assets/noithat.jpg";
import Hinhve from "./assets/hinhve.jpg";
import Hoa from "./assets/hoatulip.jpg";
import { FiDownload } from 'react-icons/fi';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AiOutlineFileImage } from 'react-icons/ai';
import { SiIconify } from 'react-icons/si';
import { IoMdSend } from 'react-icons/io';
import { MdOutlineAttachment } from 'react-icons/md';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function TabTeamChannel() {
  return (
    <Box id="content">
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
              <img src={Thocon} style={{ width: 50, height: 49 }} className="His-avta-item"></img>
            </Box>
          </CardMedia>

          <Box className="His-message-list">
            <Typography className="Team-channel-name">Ca Rot</Typography>
            <Box className="Team-channel-text">

              <Box className="His-message-item">
                <Typography className="His-message-text">How Can I order the products?</Typography>
              </Box>
            </Box>
            <Box className="Team-list-file">
              <Box className="Team-channel">
                <Box >
                  <img src={NoiThat} style={{ width: 110, height: 100 }} className="Team-channel-img"></img>
                  <Box className="Team-name-file">
                    <Typography className="Channel-name-file">Noi That.jpg</Typography>
                  </Box>
                </Box>
                <Box>
                  <img src={Thocon} style={{ width: 110, height: 100 }} className="Team-channel-img"></img>
                  <Box className="Team-name-file">
                    <Typography className="Channel-name-file">Hoa Hôn..jpg</Typography>
                  </Box>
                </Box>
                <Box>
                  <img src={Hinhve} style={{ width: 110, height: 100 }} className="Team-channel-img"></img>
                  <Box className="Team-name-file">
                    <Typography className="Channel-name-file">Hinh Ve.jpg</Typography>
                  </Box>
                </Box>
                <Box>
                  <img src={Hoa} style={{ width: 110, height: 100 }} className="Team-channel-img"></img>
                  <Box className="Team-name-file">
                    <Typography className="Channel-name-file">Hoa.jpg</Typography>
                  </Box>
                </Box>
              </Box>
              <FiDownload className="Channel-name-down" />
            </Box>
            <Typography className="Team-channel-time">9:00</Typography>
          </Box>
        </Box>
      </Box>
      <Box className="List-TimeLine">
        <Box className="List-avatar-right">
          <Box className="His-message-list">
            <Typography className="Team-channel-name-right" >Be Gai</Typography>
            <Box className="Team-channel-text-right">

              <Box className="His-message-item">
                <Typography className="His-message-text-right">
                  Hello ! <br />
                  Let me create a ticket for you.</Typography>
              </Box>
            </Box>

            <Typography className="Team-channel-time-right">10:00</Typography>
          </Box>
          <CardMedia>
            <Box className="His-avtar">
              <img src={Hinhve} style={{ width: 50, height: 49 }} className="His-avta-item"></img>
            </Box>
          </CardMedia>
        </Box>
      </Box>
      <Root >

        <Divider className="Root">
          <Chip label="To Day" />
        </Divider>

      </Root>
      <Box className="List-TimeLine">
        <Box className="List-avatar">
          <CardMedia>
            <Box className="His-avtar">
              <img src={Thocon} style={{ width: 50, height: 49 }} className="His-avta-item"></img>
            </Box>
          </CardMedia>

          <Box className="His-message-list">
            <Typography className="Team-channel-name">Ca Rot</Typography>
            <Box className="Team-channel-text">

              <Box className="His-message-item">
                <Typography className="His-message-text">How Can I order the products?</Typography>
              </Box>
            </Box>
            <Box className="Team-list-file">
              <Box className="Team-channel">
                <Box >
                  <img src={NoiThat} style={{ width: 110, height: 100 }} className="Team-channel-img"></img>
                  <Box className="Team-name-file">
                    <Typography className="Channel-name-file">Noi That.jpg</Typography>
                  </Box>
                </Box>
                <Box>
                  <img src={Thocon} style={{ width: 110, height: 100 }} className="Team-channel-img"></img>
                  <Box className="Team-name-file">
                    <Typography className="Channel-name-file">Hoa Hôn..jpg</Typography>
                  </Box>
                </Box>
                <Box>
                  <img src={Hinhve} style={{ width: 110, height: 100 }} className="Team-channel-img"></img>
                  <Box className="Team-name-file">
                    <Typography className="Channel-name-file">Hinh Ve.jpg</Typography>
                  </Box>
                </Box>
                <Box>
                  <img src={Hoa} style={{ width: 110, height: 100 }} className="Team-channel-img"></img>
                  <Box className="Team-name-file">
                    <Typography className="Channel-name-file">Hoa.jpg</Typography>
                  </Box>
                </Box>
              </Box>
              <FiDownload className="Channel-name-down" />
            </Box>
            <Typography className="Team-channel-time">9:00</Typography>
          </Box>
        </Box>
      </Box>
      <Box className="List-TimeLine">
        <Box className="List-avatar-right">
          <Box className="His-message-list">
            <Typography className="Team-channel-name-right" >Be Gai</Typography>
            <Box className="Team-channel-text-right">

              <Box className="His-message-item">
                <Typography className="His-message-text-right">
                  Hello ! <br />
                  Let me create a ticket for you.</Typography>
              </Box>
            </Box>

            <Typography className="Team-channel-time-right">10:00</Typography>
          </Box>
          <CardMedia>
            <Box className="His-avtar">
              <img src={Hinhve} style={{ width: 50, height: 49 }} className="His-avta-item"></img>
            </Box>
          </CardMedia>
        </Box>
      </Box>
      <Box className="Position-Channel">
        <Box className="Par-message" id="footer" >
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
      </Box>





    </Box>
  );
}
