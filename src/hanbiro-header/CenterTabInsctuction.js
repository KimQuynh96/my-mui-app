import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carot from "./assets/girl.jpg";
import { AiOutlineSound, AiOutlineMore } from 'react-icons/ai';
const steps = [
  'ToDo',
  'Doing',
  'Done',
];

const ProtitleNew = (params) => {
  return (
    <Typography component="div" className="Direction">
      <Typography component="span" className="Direction-Item">
        {params.title}
      </Typography>

      <Typography component="span" className="Direction-Item">
        {params.content}
      </Typography>
    </Typography>
  )
}
export default function TabInsctuction() {
  return (
    <Box>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={1} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Card className="His-call">
        <Box className="Scroll">
          <Box className="Wrap">
            <CardMedia>
              <img src={Carot} style={{ width: 140, height: 120 }}></img>
            </CardMedia>

            <Box sx={{ display: 'flex', flexDirection: 'column' }} className="Par-Card">
              <CardContent sx={{ flex: '1 0 auto' }} >

                {ProtitleNew({
                  title: "Direction",
                  content: "Outgoing",
                })}

                {ProtitleNew({
                  title: "To",
                  content: "Situmay [05-1234-5678]",
                })}
                {ProtitleNew({
                  title: "Messages",
                  content: "Messages",
                })}

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
                  <AiOutlineSound sx={{ height: 38, width: 30 }} className="value-s" />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <AiOutlineMore sx={{ height: 38, width: 30 }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>

  );
}
