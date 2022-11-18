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
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Carot from "./girl.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
const steps = [
  'ToDo',
  'Doing',
  'Done',
];
export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();

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
          <Card sx={{ display: 'flex', marginTop: 5 }} >

            <CardMedia>
              <img src={Carot} style={{ width: 140, height: 120 }}></img>
            </CardMedia>
            <Box sx={{ display: 'flex', flexDirection: 'column' }} className="quynh">
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
               
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 30 }} />
                </IconButton>
                <Typography component="span" className="Direction-Item">
                    0:00 / 0:00
                </Typography>
                
              </Box>
            </Box>
          </Card>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>

  );
}

// const TabList = styled.span`
//   background:  white;
// `;



