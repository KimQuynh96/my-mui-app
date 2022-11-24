import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './Style.css';
import { IoMdArrowRoundBack} from 'react-icons/io';
import { BsChevronDown } from 'react-icons/bs';
import Typography from '@mui/material/Typography';
import ContentCenter from './ContentCenter'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';

export default function Content() {
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
              <ContentLeft />
            </Box>
          </Col>
          <Col xs={12} md={6} >
            <Box className="Box-Center">
              <ContentCenter />
            </Box>
          </Col>
          <Col xs={12} md={3} >
            <Box className="Box-Right">
              <ContentRight />
            </Box>
          </Col>
        </Row>
      </Box >


    </>
  );
}
