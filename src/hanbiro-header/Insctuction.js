import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './Style.css';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Divider from '@mui/material/Divider';
import Carot from "./assets/girl.jpg";
import Thocon from "./assets/thocon.jpg";
import NoiThat from "./assets/noithat.jpg";
import Hinhve from "./assets/hinhve.jpg";
import Hoa from "./assets/hoatulip.jpg";
import { AiOutlineSound, AiOutlineMore, AiFillEdit, AiOutlineFileImage, AiOutlineClockCircle, AiOutlineClose } from 'react-icons/ai';
import { SlNote } from 'react-icons/sl';
import { FiDownload } from 'react-icons/fi';
import { SiIconify } from 'react-icons/si';
import { IoMdSend } from 'react-icons/io';
import { MdOutlineAttachment } from 'react-icons/md';
import { RiAttachment2 } from 'react-icons/ri';
import { BsDownload, BsPencil } from 'react-icons/bs';
import TextField from '@mui/material/TextField';
import MuiGrid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';

import 'bootstrap/dist/css/bootstrap.min.css';
const steps = [
  'ToDo',
  'Doing',
  'Done',
];


const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& > :not(style) + :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [value1, setValue1] = React.useState('1');

  const handleChange1 = (event, newValue) => {
    setValue1(newValue);
  };

  
  return (
    <Box sx={{ width: '100%', typography: 'body1' }} className="Tab-Hearder">
      <TabContext value={value}>
        <Box >
          <TabList onChange={handleChange} aria-label="lab API tabs example" className="TabList" textColor="secondary" indicatorColor="secondary" >
            <Tab label="Insctuction" value="1" className="TabList-Item" />
            <Tab label="Timeline" value="2" className="TabList-Item" />
            <Tab label="More" value="3" className="TabList-Item" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Box sx={{ width: '100%' }}>
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
          <Box className="Scroll">
            <Box className="Wrap">
              <Card sx={{ display: 'flex', marginTop: 5 }} >
                <CardMedia>
                  <img src={Carot} style={{ width: 140, height: 120 }}></img>
                </CardMedia>

                <Box sx={{ display: 'flex', flexDirection: 'column' }} className="Par-Card">
                  <CardContent sx={{ flex: '1 0 auto' }} >
                    <Typography component="div" className="Direction">
                      <Typography component="span" className="Direction-Item">
                        Direction
                      </Typography>

                      <Typography component="span" className="Direction-Item">
                        Outgoing
                      </Typography>
                    </Typography>
                    <Typography component="div" className="Direction">
                      <Typography component="span" className="Direction-Item">
                        To
                      </Typography>

                      <Typography component="span" className="Direction-Item">
                        Situmay [05-1234-5678]
                      </Typography>
                    </Typography>
                    <Typography component="div" className="Direction">
                      <Typography component="span" className="Direction-Item">
                        Messages
                      </Typography>

                      <Typography component="span" className="Direction-Item">
                        Messages
                      </Typography>
                    </Typography>
                  </CardContent>

                  <Box sx={{ display: 'flex', alignItems: 'center' }} className="PlayCall">

                    <IconButton aria-label="play/pause" className="btn-play">
                      <PlayArrowIcon sx={{ height: 38, width: 30 }} />
                    </IconButton>
                    <Typography component="span" className="Direction-Item">
                      0:00 / 0:00
                    </Typography>
                    <Typography component="span" className="Bar-Item"></Typography>
                    <IconButton aria-label="play/pause">
                      <AiOutlineSound sx={{ height: 38, width: 30 }} />
                    </IconButton>
                    <IconButton aria-label="play/pause">
                      <AiOutlineMore sx={{ height: 38, width: 30 }} />
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value="2" className="Par-List-Time">
          <Box className="List-TimeLine">
            <Typography className="Text-TimeLine">22-11-2022</Typography>
            <Box className="Time-Header">

              <Divider className="Divider-1" />
              <Divider className="Divider-2" />
              <Divider className="Divider" />
              <Divider className="Divider-1" />
              <Divider className="Divider-2" />

            </Box>

            <Box className="Par-List">
              <Divider className="Divider-History" />
              <Divider className="Divider-History-1" />
              <Divider className="Divider-History-2" />
              <Divider className="Divider-History-3" />
              <Divider className="Divider-History-4" />
              <Divider className="Divider-History-5" />
              <Box className="Icon-Update">
                <AiFillEdit className="Icon-Update-item" />
              </Box>
              <Box className="Text-Update">
                <Typography className="Text-Update-Item">Expected Duration was updated from 1 hour to 1 day by MSR</Typography>
              </Box>
              <Box className="Icon-Note">
                <SlNote className="Icon-Update-item" />
              </Box>
              <Box className="Text-Note">
                <Typography className="Text-Update-Item">KDH noted " The demo location is changed. "</Typography>
              </Box>
              <Box className="Icon-File">
                <RiAttachment2 className="Icon-Update-item" />
              </Box>
              <Box className="Text-File">
                <Typography className="Text-Update-Item">
                  MSR uploaded a file report.doc <br />
                  <BsDownload /> &nbsp; DownLoad
                </Typography>
              </Box>
              <Box className="List-TimeLine-Item">
                <Box component="div" className="History">
                  <Box component="div" className="History-Update"></Box>
                </Box>
                <Box component="div" className="History-1">
                  <Box component="div" className="History-Note"></Box>
                </Box>
                <Box component="div" className="History-1">
                  <Box component="div" className="History-File"></Box>
                </Box>
              </Box>

            </Box>
          </Box>
        </TabPanel>
        <TabPanel value="3">
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value1}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange1} aria-label="lab API tabs example" className="TabList">
                  <Tab label="Note" value="1" className="TabList-More" />
                  <Tab label="Team Channel" value="2" className="TabList-More" />
                </TabList>
              </Box>
              <TabPanel value="1">
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
              </TabPanel>
              <TabPanel value="2">
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
                  Test
                </Root>
              </TabPanel>
            </TabContext>
          </Box>
        </TabPanel>
      </TabContext>
    </Box>

  );
}




