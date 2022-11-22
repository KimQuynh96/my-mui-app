import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Style.css';
import { IoMdArrowRoundBack, IoMdAdd, IoIosAddCircleOutline } from 'react-icons/io';
import { BsChevronDown } from 'react-icons/bs';
import { FcAddImage } from 'react-icons/fc';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import Insctuction from './Insctuction'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';



export default function TextButtons() {
  return (
    <>

      <Box className="Header" >
        <Row className="Sub-Header">
          <Col xs={12} md={6} >
            <Box className="Item-Left">
              <Button variant="primary" className="Cm-Bt"><IoMdArrowRoundBack /></Button>
              <Button variant="primary" className="Btn-acti">Activity</Button>

              <Typography component="span" className="Text-Call">Call Subject</Typography>
            </Box>
          </Col>
          <Col xs={12} md={6}>
            <Box className="Item-Right">
              <Button variant="primary" className="Btn-acti">Done</Button>
              <Button variant="primary" className="Btn-acti">More <BsChevronDown className="IconMore" /></Button>
              <Fab color="secondary" aria-label="edit" className="Icon-New">
                <EditIcon className="Icon-Write" />
              </Fab>
            </Box>
          </Col>
        </Row>
      </Box>

      <Box className="Content" >
        <Row className="Sub-Content">
          <Col xs={12} md={3} >
            <Box className="Box-Left">
              <Box >
                <Box className="Left-Header">
                  Summary
                </Box>
              </Box>
              <Box className="List-Item">
                <Box className="Item-Call">
                  <Box><IoIosAddCircleOutline className="IconImgae" /></Box>
                  <Box>
                    <Typography className="Item-Title">Call Schedule</Typography>
                    <Typography className="Item-des">Schedule</Typography>
                  </Box>

                </Box>
                <Box className="Item-white">
                  <Box><IoIosAddCircleOutline className="IconImgae" /></Box>
                  <Box>
                    <Typography className="Item-Title">Date</Typography>
                    <Typography className="Item-des">2022-02-01 11:00</Typography>
                  </Box>

                </Box>
                <Box className="Item-Call">
                  <Box><IoIosAddCircleOutline className="IconImgae" /></Box>
                  <Box>
                    <Typography className="Item-Title">Priority</Typography>
                    <Typography className="Item-des">Normal</Typography>
                  </Box>

                </Box>
                <Box className="Item-white">
                  <Box><IoIosAddCircleOutline className="IconImgae" /></Box>
                  <Box>
                    <Typography className="Item-Title">Purpose</Typography>
                    <Typography className="Item-des"></Typography>
                  </Box>

                </Box>
                <Box className="Item-Call">
                  <Box><IoIosAddCircleOutline className="IconImgae" /></Box>
                  <Box>
                    <Typography className="Item-Title">Description</Typography>
                    <Typography className="Item-des"></Typography>
                  </Box>

                </Box>
                <Box className="Item-white">
                  <Box><IoIosAddCircleOutline className="IconImgae" /></Box>
                  <Box>
                    <Typography className="Item-Title">Regarding</Typography>
                    <Typography className="Item-des"></Typography>
                  </Box>

                </Box>
                <Box className="Item-Call">
                  <Box><IoIosAddCircleOutline className="IconImgae" /></Box>
                  <Box>
                    <Typography className="Item-Title">Response</Typography>
                    <Typography className="Item-des"></Typography>
                  </Box>

                </Box>
                <Box className="Item-white">
                  <Box><IoIosAddCircleOutline className="IconImgae" /></Box>
                  <Box>
                    <Typography className="Item-Title">Call Result</Typography>
                    <Typography className="Item-des"></Typography>
                  </Box>

                </Box>

              </Box>
            </Box>
          </Col>
          <Col xs={12} md={5} >
            <Box className="Box-Center">
              <Insctuction />
            </Box>
          </Col>
          <Col xs={12} md={4} >
            <Box className="Box-Right">
              Right
            </Box>
          </Col>
        </Row>
      </Box >


    </>
  );
}
