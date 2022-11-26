import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import { BiCustomize } from 'react-icons/bi';
import { IoIosCall } from 'react-icons/io';
import { BsCalendarDateFill } from 'react-icons/bs';
import { AiTwotoneStar,AiFillDingtalkSquare ,AiFillDribbbleCircle,AiFillGolden,AiFillDollarCircle} from 'react-icons/ai';
import { FaAudioDescription } from 'react-icons/fa';



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


const ProtitleNew = (params) => {
  return (
    <Box className={params.cssTsy}>
      <Box className="Summary-icon">{params.icon} </Box>
      <Box>
        <Typography className="Item-Title">{params.title}</Typography>
        <Typography className="Item-des">{params.content}</Typography>
      </Box>
    </Box>
  )
}



export default function ContentLeft() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box>
      <Box >


        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary >
            <Typography>Summary</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box >
             
              {ProtitleNew({
                title: "Call Schedule",
                cssTsy: "Item-Firt",
                content: "Schedule",
                icon :< IoIosCall className="IconImgae" />
              })}
              {ProtitleNew({
                title: "Date",
                cssTsy: "Item-white",
                content: "2022-02-01 11:00",
                icon:<BsCalendarDateFill className="IconImgae" />
              })}
              {ProtitleNew({
                title: "Priority",
                cssTsy: "Item-Call",
                content: "Normal",
                icon:<AiTwotoneStar className="IconImgae" />
              })}
              {ProtitleNew({
                title: "Purpose",
                cssTsy: "Item-white",
                content: "Purpose",
                icon:<AiFillDingtalkSquare className="IconImgae" />
              })}
              {ProtitleNew({
                title: "Description",
                cssTsy: "Item-Call",
                content: "Description",
                icon:<FaAudioDescription className="IconImgae" />
              })}
              {ProtitleNew({
                title: "Regarding",
                cssTsy: "Item-white",
                content: "Regarding",
                icon:<AiFillDribbbleCircle className="IconImgae" />
              })}
              
              {ProtitleNew({
                title: "Response",
                cssTsy: "Item-Call",
                content: "Response ",
                icon:<AiFillGolden className="IconImgae" />
              })}
              {ProtitleNew({
                title: "Call Result",
                cssTsy: "Item-white",
                content: "Call Result",
                icon:<AiFillDollarCircle className="IconImgae" />
              })}

            </Box>
          </AccordionDetails>
        </Accordion>


      </Box>

    </Box>
  );
}




