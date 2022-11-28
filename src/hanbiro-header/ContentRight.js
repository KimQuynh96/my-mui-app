import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiCustomize } from 'react-icons/bi';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Thocon from "./assets/thocon.jpg";
import NoiThat from "./assets/noithat.jpg";
import Hinhve from "./assets/hinhve.jpg";
import Hoa from "./assets/hoatulip.jpg";
import { AiOutlineMail, AiOutlineClose } from 'react-icons/ai';
import { MdOutlineSmsFailed } from 'react-icons/md';
import { FaSms } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';



const ProtitleNew = (params) => {
  return (
    <Accordion expanded={params.expanded} onChange={params.onChange}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography className="Title-customer">{params.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box className={params.CssSty}>
          <Box className="customer-avatar">
            <Stack direction="row" spacing={2} marginRight={1}>
              <Avatar alt="Remy Sharp" src={params.avatar1} className="Size-ava" />
            </Stack>
            <Typography className="Customer-name">{params.name1}</Typography>
          </Box>
          <Box className="customer-icon">
            {params.icmail} {params.icsms} {params.icclose}

          </Box>
        </Box>
        <Box className="List-customer">
          <Box className="customer-avatar">
            <Stack direction="row" spacing={2} marginRight={1}>
              <Avatar alt="Remy Sharp" src={params.avatar2} className="Size-ava" />
            </Stack>
            <Typography className="Customer-name">{params.name2}</Typography>
          </Box>
          <Box className="customer-icon">
            {params.icmailOne} {params.icsmsOne} {params.iccloseOne}
          </Box>

        </Box>
        <Paper
          component="form"
          className="enter-customer"
        >
          <InputBase
            className="input-customer"
            placeholder="Type or click to add an user"
          />

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" className="Divider-customer" />
          <IconButton aria-label="directions" className="icon-user-cus">
            <FaUser className="FaUser-icon"/>
          </IconButton>
        </Paper>
      </AccordionDetails>
    </Accordion >

  )
}

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<BiCustomize sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function ContentRight() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [expanded1, setExpanded1] = React.useState('panel1');

  const handleChange1 = (panel) => (event, newExpanded) => {
    setExpanded1(newExpanded ? panel : false);
  };
  const [expanded2, setExpanded2] = React.useState('panel1');

  const handleChange2 = (panel) => (event, newExpanded) => {
    setExpanded2(newExpanded ? panel : false);
  };
  return (
    <div>

      {ProtitleNew({
        expanded: expanded === 'panel1',
        onChange: handleChange('panel1'),
        title: "Customer",
        CssSty: "List-customer",
        name1: "Allan Rey Palban",
        icmail: <AiOutlineMail className="icon-cus-mail" />,
        icsms: <FaSms className="icon-cus-sms" />,
        icclose: < AiOutlineClose className="icon-cus-close" />,
        icmailOne: <AiOutlineMail className="icon-cus-mail" />,
        icsmsOne: <FaSms className="icon-cus-sms" />,
        iccloseOne: < AiOutlineClose className="icon-cus-close" />,
        name2: "Situmay",
        avatar1:{Thocon},
        avatar2:NoiThat

      })}

      {ProtitleNew({
        expanded: expanded1 === 'panel1',
        onChange: handleChange1('panel1'),
        title: "Assigned Rep",
        CssSty: "List-assigned",
        name1: "MSR",
        icmail: "",
        icsms: "",
        icclose: < AiOutlineClose className="icon-cus-close" />,
        icmailOne: <AiOutlineMail className="icon-cus-mail" />,
        icsmsOne: <MdOutlineSmsFailed className="icon-cus-sms" />,
        iccloseOne: < AiOutlineClose className="icon-cus-close" />,
        name2: "KDH",
        avatar1:Hoa,
        avatar2:Hinhve

      })}

      <Accordion expanded={expanded2 === 'panel1'} onChange={handleChange2('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography className="Title-customer">Product</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box className="List-customer">
            <Box className="customer-avatar">
              <Typography className="product-name">Woman Peacoat </Typography>
            </Box>
            <Box className="customer-icon">
              < AiOutlineClose className="icon-cus-close" />
            </Box>
          </Box>
          <Paper
            component="form"
            className="enter-customer"
          >
            <InputBase
              className="input-customer"
              placeholder="Type or click to add an user"
            />

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" className="Divider-customer" />
            <IconButton aria-label="directions" className="icon-user-cus">
              <FaUser className="FaUser-icon"/>
            </IconButton>
          </Paper>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}




