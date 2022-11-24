import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AiFillEdit} from 'react-icons/ai';
import { SlNote } from 'react-icons/sl';
import { RiAttachment2 } from 'react-icons/ri';
import { BsDownload} from 'react-icons/bs';
import Divider from '@mui/material/Divider';


export default function TabTimeLine() {
  return (
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
  );
}
