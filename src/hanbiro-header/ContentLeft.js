import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { IoIosAddCircleOutline } from 'react-icons/io';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContentLeft() {

  return (
    <Box>
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
  );
}




