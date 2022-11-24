import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import './Style.css';
import { styled } from '@mui/material/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import TabInsctuction from './CenterTabInsctuction'
import TabTimeline from './CenterTabTimeline'
import TabNote from './CenterTabNote'
import TabTeamChannel from './CenterTabTeamChannel'


export default function ContentCenter() {
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
          <TabInsctuction />
        </TabPanel>
        <TabPanel value="2" className="Par-List-Time">
          <TabTimeline />
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
                <TabNote />
              </TabPanel>
              <TabPanel value="2" >
                  <TabTeamChannel />
              </TabPanel>
            </TabContext>
          </Box>
        </TabPanel>
      </TabContext>
    </Box>

  );
}




