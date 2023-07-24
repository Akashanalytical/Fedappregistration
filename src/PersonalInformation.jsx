import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import "./PersonalInformation.css";
///pading to give space around
export default function PersonalInformation() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "50ch" },
      }}
      noValidate
      autoComplete="off"
      justifyContent="center"
    >
      <Typography variant="h4">Personal Information</Typography>
      <div style={{ display: "flex" }}>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </div>
      <div style={{ display: "flex" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date of Birth"
            slotProps={{ textField: { variant: "standard", width: "150ch" } }}
          />
        </LocalizationProvider>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            slotProps={{ textField: { variant: "standard", width: "150ch" } }}
            // value={age}
            label="Age"
            //onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ display: "flex" }}>
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
      </div>
      <div style={{ display: "flex" }}>
        <TextField
          id="standard-basic"
          label="Contact number"
          variant="standard"
          type="number"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date of Birth"
            slotProps={{ textField: { variant: "standard", width: "50ch" } }}
          />
        </LocalizationProvider>
      </div>
      <div style={{ display: "flex" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            slotProps={{ textField: { variant: "standard", width: "50ch" } }}
            // value={age}
            label="Age"
            //onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ display: "flex" }}>
        <TextField
          id="standard-basic"
          label="Contact number"
          variant="standard"
          type="number"
        />
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            slotProps={{ textField: { variant: "standard", width: "50ch" } }}
            // value={age}
            label="Age"
            //onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ display: "flex" }}>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            slotProps={{ textField: { variant: "standard", width: "150ch" } }}
            // value={age}
            label="Age"
            //onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="standard-basic"
          label="Contact number"
          variant="standard"
          type="number"
        />
      </div>
      <Button variant="contained" fullWidth>
        Contained
      </Button>
    </Box>
  );
}
