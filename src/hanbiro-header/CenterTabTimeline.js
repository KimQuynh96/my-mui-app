import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import { FaPen } from 'react-icons/fa';
import { MdTextsms, MdOutlineAttachment } from 'react-icons/md';


import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';


const ProtitleNew = (params) => {
  return (
    <TimelineItem >
      <TimelineOppositeContent color="textSecondary" className="Timeline-text">
        {params.time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <Box className="Timeline-icon">  {params.icon}</Box>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className="Timeline-text">{params.content}</TimelineContent>
    </TimelineItem>

  )
}
const ProtitleNew1 = (params) => {
  return (
    <TimelineItem >
      <TimelineOppositeContent color="textSecondary" className="Timeline-text">
        {params.time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <Box className="Timeline-icon">  {params.icon}</Box>
       
      </TimelineSeparator>
      <TimelineContent className="Timeline-text">{params.content}</TimelineContent>
    </TimelineItem>

  )
}

const ProtitleNew2 = (params) => {
  return (
    <Box>
      <Box className="Time-Header">
        <Typography className="Text-TimeLine">{params.time}</Typography>
        <Typography className="Date-TimeLine">{params.date}</Typography>
      </Box>

      <Box className="Time-Header">
        <Divider className="Divider-1" />
        <Divider className="Divider-2" />
        <Divider className="Divider" />
        <Divider className="Divider-1" />
        <Divider className="Divider-2" />
      </Box>
    </Box>

  )
}



export default function TabTimeLine() {
  return (
    <Box className="List-TimeLine">

      {ProtitleNew2({
        time: "Today",
        date: "Tuesday, Jul 11,2022"
      })}

      <Box className="Par-List">
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          {ProtitleNew({
            time: "09:30 am",
            icon: <FaPen />,
            content: "Expected Duration was updated from 1 hour to 1 day by MSR",
          })}
          {ProtitleNew({
            time: "10:00 am",
            icon: <MdTextsms />,
            content: "KDH noted ' The demo location is changed. '",
          })}
          {ProtitleNew1({
            time: "12:00 am",
            icon: <MdOutlineAttachment />,
            content: "MSR uploaded a file report.doc ",
          })}
        </Timeline>
      </Box>

      {ProtitleNew2({
        time: "Yesterday",
        date: "Monday, Jul 10,2022"
      })}
       <Box className="Par-List">
        <Timeline
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.2,
            },
          }}
        >
          {ProtitleNew({
            time: "09:30 am",
            icon: <FaPen />,
            content: "Expected Duration was updated from 1 hour to 1 day by MSR",
          })}
          {ProtitleNew({
            time: "10:00 am",
            icon: <MdTextsms />,
            content: "KDH noted ' The demo location is changed. '",
          })}
          {ProtitleNew1({
            time: "12:00 am",
            icon: <MdOutlineAttachment />,
            content: "MSR uploaded a file report.doc ",
          })}
        </Timeline>
      </Box>

    </Box>
  );
}
