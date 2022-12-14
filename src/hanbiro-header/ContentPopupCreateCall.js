import * as React from 'react';
import Box from '@mui/material/Box';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { BiCustomize } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { GoClock } from 'react-icons/go';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import NoiThat from "./assets/noithat.jpg";
import Avatar from '@mui/material/Avatar';
import { FaUser } from 'react-icons/fa';
import Thocon from "./assets/thocon.jpg";
import ButtonGroup from '@mui/material/ButtonGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import CreateCallRadio from './CreateCallRadio'


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
const currencies = [


  {
    value: 'Select',
    label: 'Select...',
  },
  {
    value: 'BTC',
    label: 'Option',
  },

];
const currenciesAs = [
  {
    value: 'Select',
    label:
      <Box className="Assign-list">
        <Box className="Assign-item">
          <Avatar alt="Remy Sharp" src={NoiThat} className="Assign-avatar" />
          <Typography className="Assign-name">John</Typography>
        </Box>
        <Box className="Assign-item">
          <IconButton aria-label="directions" className="form-icon-date">
            <AiOutlineClose className="Assign-icon" />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" className="Divider-ip-date" />
          <IconButton aria-label="directions" className="form-icon-date">
            <FaUser className="Assign-icon" />
          </IconButton>
        </Box>
      </Box>
  },
  {
    value: 'BTC',
    label: 'Assign to me',
  },
];

const currenciesTo = [
  {
    value: 'Select',
    label:
      <Box className="Assign-list">
        <Box className="Assign-item">
          <Avatar alt="Remy Sharp" src={Thocon} className="Assign-avatar" />
          <Typography className="Assign-name">Socrates</Typography>
        </Box>
        <Box className="Assign-item">

          <IconButton aria-label="directions" className="form-icon-date">
            <AiOutlineClose className="Assign-icon" />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" className="Divider-ip-date" />
          <IconButton aria-label="directions" className="form-icon-date">
            <FaUser className="Assign-icon" />
          </IconButton>
        </Box>
      </Box>
  },
  {
    value: 'BTC',
    label: 'Assign to me',
  },
];


export default function CreateCall() {
  const [currency, setCurrency] = React.useState('Select');

  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const [selectedValue, setSelectedValue] = React.useState('best');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const ProtitleNewIcon = (params) => {
    return (
      <Box className={params.title}>
        <Typography className="Form-title">{params.title}</Typography>
        <Paper
          component="form"
          className="form-ip-date"
        >
          <InputBase
            className="input-date"
          />

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" className="Divider-ip-date" />
          <IconButton aria-label="directions" className="form-icon-date">
            {params.icon}
          </IconButton>
        </Paper>
      </Box>

    )
  }
  const ProtitleNew = (params) => {
    return (
      <Box className="Common-form">
        <Typography className="Form-title">{params.title}</Typography>
        <Paper
          component="form"
          className="form-ip-date"
        >
          <InputBase
            className="input-date-1"
          />
        </Paper>
      </Box>

    )
  }

  const ProtitleNewSelect = (params) => {
    return (
      <Box className="Common-form">
        <Typography className="Form-title-1">{params.title}</Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className="form-priority-list"
        >
          <TextField
            id="outlined-select-currency"
            select
            value={currency}
            onChange={handleChange}
            className="form-ip-priority"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value} >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Box>
    )
  }
  const ProtitleNewAssign = (params) => {
    return (
      <Box className="Common-form">
        <Typography className="Form-title-1">{params.title}</Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className="form-priority-list"
        >
          <TextField
            id="outlined-select-currency-1"
            select

            value={currency}
            onChange={handleChange}
            className="form-ip-priority"
          >
            {currenciesAs.map((option) => (
              <MenuItem key={option.value} value={option.value} >
                {option.label}
              </MenuItem>
            ))}

          </TextField>
        </Box>
      </Box>
    )
  }
  const ProtitleNewTo = (params) => {
    return (
      <Box className="Common-form">
        <Typography className="Form-title-1">Socrates</Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          className="form-priority-list"
        >

          <TextField
            id="outlined-select-currency-1"
            select

            value={currency}
            onChange={handleChange}
            className="form-ip-priority"
          >
            {currenciesTo.map((option) => (
              <MenuItem key={option.value} value={option.value} >
                {option.label}
              </MenuItem>
            ))}

          </TextField>
        </Box>
      </Box>
    )
  }
  const ProtitleNewRadio = (params) => {
    return (
      <Box className="Form-list-radio">
        <Radio
          checked={selectedValue === 'best'}
          onChange={handleChange}
          value="best"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
          className="Form-radio"
        />
        <Typography className="Radio-text">{params.title}</Typography>
      </Box>
    )
  }
  const ProtitleNewRadioNoSelect = (params) => {
    return (
      <Box className="Form-list-radio">
        <Radio
          checked={selectedValue === 'worst'}
          onChange={handleChange}
          value="worst"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'B' }}
          className="Form-radio"
        />
        <Typography className="Radio-text">{params.title}</Typography>
      </Box>
    )
  }
  // Radio Incoming
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState(
    <Box>{ProtitleNewIcon({
      title: "Date",
      icon: <GoClock />
    })}
    </Box>
  );

  const handleRadioChange = (event) => {
    let testValue = event.target.value;
    setValue(testValue);
    if (testValue === "best") {
      setHelperText(
        <Box>{ProtitleNewIcon({
          title: "Date",
          icon: <GoClock />
        })}
        </Box>
      );
      setError(false);
    } else if (testValue === "worst") {
      // Radio Outgoing
      setHelperText(<CreateCallRadio />);
      setError(true);

    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };
  //  end

  return (
    <Box >
      <Divider className="Divider-call" />
      <Box className="Form-create">
        <Box className="Common-form">
          <Typography className="Form-title">Direction</Typography>
          <form >
            <FormControl error={error} variant="standard">

              <RadioGroup
                RadioGroup
                row
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  className="Form-list-radio"
                  value="best"
                  control={
                    <Radio checked={selectedValue === 'best'}
                      onChange={handleChange}
                      value="best"
                      name="radio-buttons"
                      inputProps={{ 'aria-label': 'A' }}
                      className="Form-radio" />

                  }
                  label="Incoming"
                />
                <FormControlLabel
                  className="Form-list-radio"
                  value="worst"
                  control={
                    <Radio checked={selectedValue === 'worst'}
                      onChange={handleChange}
                      value="worst"
                      name="radio-buttons"
                      inputProps={{ 'aria-label': 'B' }}
                      className="Form-radio" />}
                  label="Outgoing"
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>

            </FormControl>
          </form>
        </Box>

        {ProtitleNew({
          title: "Subject",
        })}

        {ProtitleNewSelect({
          title: "Priority",
        })}

        {ProtitleNewSelect({
          title: "Purpose",
        })}

        {ProtitleNewSelect({
          title: "Template",
        })}

        <Box className="Common-form">
          <Typography className="Form-title">Insctuction</Typography>
          <Typography className="Form-editor">Editor</Typography>
        </Box>
        {ProtitleNewAssign({
          title: "From",
        })}
        {ProtitleNewTo({
          title: "To",
        })}

        {ProtitleNewSelect({
          title: "Call Result",
        })}

        {ProtitleNew({
          title: "Description",
        })}

        <DialogActions className="Call-button">
          <Button onClick={handleClose} className="call-cancel">Cancel</Button>

          <ButtonGroup variant="contained" >
            <Button onClick={handleClose}>Save</Button>
            <Button onClick={handleClose}>Save and Create New</Button>
          </ButtonGroup>
        </DialogActions>





      </Box>
    </Box >
  );
}




