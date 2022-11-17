import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Style.css';
import { IoMdArrowRoundBack, IoMdAdd,IoIosAddCircleOutline } from 'react-icons/io';
import { BsChevronDown } from 'react-icons/bs';
import { FcAddImage } from 'react-icons/fc';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
export default function TextButtons() {
  return (
    <>

      <Box className="Header" >
        <Box>
          <Button variant="primary" className="Cm-Bt"><IoMdArrowRoundBack /></Button>
          <Button variant="primary" className="Btn-acti">Activity</Button>
          <Button variant="primary" className="Btn-acti">Call Subject</Button>
        </Box>

        <Box className="Item-Right">
          <Button variant="primary" className="Btn-acti">Done</Button>
          <Button variant="primary" className="Btn-acti">More <BsChevronDown className="IconMore" /></Button>
          <Button variant="primary" className="Btn-add">< IoMdAdd className="IconAdd" /> New</Button>
        </Box>
      </Box>
      <Box className="Content" >
        <Box className="Box-Left">
          <Box className="quynh">
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
        <Box className="Box-Center">
          Center
        </Box>
        <Box className="Box-Right">
          Right
        </Box>
      </Box>


    </>
  );
}
