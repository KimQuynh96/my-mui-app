import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './Style.css';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { BiCopy } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { AiOutlineCaretDown } from 'react-icons/ai';
import Typography from '@mui/material/Typography';
import ContentCenter from './ContentCenter'
import ContentLeft from './ContentLeft'
import ContentRight from './ContentRight'
import PopupCreateCall from './PopupCreateCall'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



export default function Content() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open12 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose12 = () => {
    setAnchorEl2(null);
  };

  const ProtitleBtnBack = (params) => {
    return (
      <>
        <Button variant="primary" className="Cm-Bt"><IoMdArrowRoundBack /></Button>
      </>
    )
  }
  const ProtitleActivity = (params) => {
    return (
      <>
        <Button variant="primary"
          className="Btn-acti"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Activity
          <AiOutlineCaretDown className="ic-activity" />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open1}
          onClose={handleClose1}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Activity 1</MenuItem>
          <MenuItem onClick={handleClose}>Activity 2</MenuItem>
          <MenuItem onClick={handleClose}>Activity 3</MenuItem>
        </Menu>
      </>
    )
  }
  const ProtitleSubject = (params) => {
    return (
      <>
        <Typography component="span" className="Text-Call">Call Subject</Typography>
      </>
    )
  }
  const ProtitleBtnDone = (params) => {
    return (
      <>
        <Button variant="primary" className="Btn-acti">Done</Button>
      </>
    )
  }
  const ProtitleBtnMore = (params) => {
    return (
      <>
        <Button variant="primary"
          className="Btn-acti"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick2}
        >
          More
          <AiOutlineCaretDown className="ic-activity" />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl2}
          open={open12}
          onClose={handleClose12}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose12}><BiCopy className="ic-clone" />Clone</MenuItem>
          <MenuItem onClick={handleClose12}> <MdDelete className="ic-clone" />Delete</MenuItem>

        </Menu>
      </>
    )
  }
  const ProtitleBtnWrite = (params) => {
    return (
      <>
        <Button onClick={handleClickOpen}>
          <Fab color="secondary" aria-label="edit" className="Icon-New">
            <EditIcon className="Icon-Write" />
          </Fab>
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          className="Create-call"
        >
          <PopupCreateCall />
        </Dialog>
      </>
    )
  }

  return (
    <>
      <Box className="Header" >
        <Row className="Sub-Header">
          <Col xs={12} md={6} >
            <Box className="Item-Left">
              {ProtitleBtnBack({})}
              {ProtitleActivity({})}
              {ProtitleSubject({})}
            </Box>
          </Col>
          <Col xs={12} md={6}>
            <Box className="Item-Right">
              {ProtitleBtnDone({})}
              {ProtitleBtnMore({})}
              {ProtitleBtnWrite({})}
            </Box>
          </Col>
        </Row>
        <Row className="Sub-Header-Mobi">
          <Col xs={3}  className="Item-Left-mobi">
            {ProtitleBtnBack({})}
          </Col>
          <Col xs={3}  className="Item-Left-mobi">
            {ProtitleSubject({})}
          </Col>
          <Col xs={3}  className="Item-Left-mobi">
            {ProtitleBtnWrite({})}
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
