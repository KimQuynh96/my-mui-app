import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { GoClock } from 'react-icons/go';
import Typography from '@mui/material/Typography';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';




export default function ErrorRadios() {
  const [selectedValue, setSelectedValue] = React.useState('best_1');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState();
  const ProtitleNewIcon = (params) => {
    return (
      <Box classes="Radio-2">
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
  const handleRadioChange = (event) => {
    let testValue = event.target.value;
    setValue(testValue);
    if (testValue === "best_1") {
      setHelperText(
        " "
      );
      setError(false);
    } else if (testValue === "worst_1") {
      setHelperText(
        <Box>{ProtitleNewIcon({
          title: "Date",
          icon: <GoClock />
        })}
        </Box>
      );
      setError(true);
    }
  };



  return (
    <>
      <Typography className="Form-title">Call Schedule</Typography>
      <form >
        <FormControl >

          <RadioGroup
            RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="best_1"

              label="Call Now"
              control={
                <Radio checked={selectedValue === 'best_1'}
                  onChange={handleChange}
                  value="best_1"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'A' }}
                  className="Form-radio" />
              }
            />
            <FormControlLabel
              value="worst_1"
              label="Schedule"
              control={
                <Radio checked={selectedValue === 'worst_1'}
                  onChange={handleChange}
                  value="worst_1"
                  name="radio-buttons"
                  inputProps={{ 'aria-label': 'B' }}
                  className="Form-radio" />}
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>

        </FormControl>
      </form>
    </>
  );
}
