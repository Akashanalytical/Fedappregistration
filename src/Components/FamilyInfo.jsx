import { TextField, Grid, Typography, FormLabel, FormControlLabel, Radio,RadioGroup, MenuItem, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ThemeProvider, createTheme } from "@mui/material";



const categoryDB = [
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    },
    {
      label: "Transgender",
      value: "Transgender",
    },
  ];

const FamilyInfo = (props) => {
  const { formik } = props;
  const theme = createTheme({

  palette: {
    primary: {
      main: '#323F8D',
     
    }},
    input: {
      '&::placeholder': {
        fontFamily:'Karla'
      },
    },
});
  return (
    <ThemeProvider theme={theme}>
    <Typography sx={{fontSize:24,mb:5,fontFamily:'Karla'}}>Family Information</Typography>

    <Grid container spacing={5}>
        <Grid item xs={12} sm={12}>
        <RadioGroup row>
    <FormLabel sx={{color:'#323F8D',mr:5,mt:1}}>Marital Status</FormLabel>
           <FormControlLabel value="single" control={<Radio />} label="Single" />
           <FormControlLabel value="married" control={<Radio />} label="Married" />
        </RadioGroup>
        </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          name="spousename"
          label="Spouse Name"
          variant="outlined"
          required
          size="large"
          fullWidth
          value={formik.values.spousename}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.spousename && formik.errors.spousename)}
          helperText={
            Boolean(formik.touched.spousename && formik.errors.spousename)
              ? formik.errors.spousename
              : ""
          }
        />
      </Grid>
      <Grid item xs={12} sm={6}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name="spouse dob"
                label="Spouse DOB"
                onChange={(value) => {
                  console.log(value.$d);
                  console.log(Date.parse(value));
                  formik.setFieldValue("date", value.$d);
                }}
                slotProps={{
                  textField: {
                    variant: "outlined",
                    required: "true",
                    fullWidth:'true',
                    error: Boolean(formik.touched.date && formik.errors.date),
                    helperText: Boolean(
                      formik.touched.date && formik.errors.date
                    )
                      ? "Date is Required"
                      : "",
                  },
                }}
                fullWidth
              />
            </LocalizationProvider>
      </Grid>
      <Grid item xs={12} sm={6}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name="wedding anniversary"
                label="Wedding Anniversary"
                onChange={(value) => {
                  console.log(value.$d);
                  console.log(Date.parse(value));
                  formik.setFieldValue("date", value.$d);
                }}
                slotProps={{
                  textField: {
                    variant: "outlined",
                    required: "true",
                    fullWidth:'true',
                    error: Boolean(formik.touched.date && formik.errors.date),
                    helperText: Boolean(
                      formik.touched.date && formik.errors.date
                    )
                      ? "Date is Required"
                      : "",
                  },
                }}
                fullWidth
              />
            </LocalizationProvider>
      </Grid>
 
      <Grid item xs={12} sm={12}>
      <RadioGroup row>
    <FormLabel sx={{color:'#323F8D',mr:5,mt:1}}>Do You Have Child?</FormLabel>
           <FormControlLabel value="yes" control={<Radio />} label="Yes" />
           <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </Grid>
      <Grid item xs={12} sm={4}>
      <TextField
          name="childname"
          label="Child Name"
          variant="outlined"
          required
          size="large"
          fullWidth
          value={formik.values.childname}
          onChange={formik.handleChange}
          error={Boolean(formik.touched.childname && formik.errors.childname)}
          helperText={
            Boolean(formik.touched.childname && formik.errors.childname)
              ? formik.errors.childname
              : ""
          }
        />
      </Grid>
      <Grid item xs={12} sm={4}>
      <TextField
              select
              required="true"
              variant="outlined"
              fullWidth
              name="Gender"
              label="Gender"
              onChange={formik.handleChange("Gender")}
              error={Boolean(formik.touched.Gender && formik.errors.Gender)}
              helperText={
                Boolean(formik.touched.Gender && formik.errors.Gender)
                  ? formik.errors.Gender
                  : ""
              }
              size="medium"
            >
              {categoryDB.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name="date"
                label="DOB"
                // value={formik.values.date}
                onChange={(value) => {
                  console.log(value.$d);
                  console.log(Date.parse(value));
                  formik.setFieldValue("date", value.$d);
                }}
                slotProps={{
                  textField: {
                    variant: "outlined",
                    required: true,
                    fullWidth:true,
                    error: Boolean(formik.touched.date && formik.errors.date),
                    helperText: Boolean(
                      formik.touched.date && formik.errors.date
                    )
                      ? "Date is Required"
                      : "",
                  },
                  
                }}
                
              />
            </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={4}>
            
            <Button sx={{color:'#323F8D',fontSize:15,p:2}}><FavoriteIcon sx={{fontSize:20,color:'#323F8D',mr:0.5}}/>Add Child</Button>

        </Grid>
    </Grid>
    </ThemeProvider>
  );
};

export default FamilyInfo;
