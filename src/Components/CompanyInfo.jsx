import { TextField, Grid, InputLabel,Box, Typography, MenuItem } from "@mui/material";
import { useEffect, useState } from "react";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import axios from "axios";

const CompanyInfo = (props) => {
  const { formik } = props;
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then((response) => {
        console.log(response);
        setdata(response.data);
      });
  }, []);

  //control the Countries
  let states = data.filter((e) => e.country === "India");
  console.log(states);
  states = [...new Set(states.map((item) => item.subcountry))];
  states.sort();
  let statesObj = [];
  for (let i = 0; i < states.length; i++) {
    statesObj.push({ label: states[i], value: states[i] });
  }
  console.log(statesObj);
  let districtsobj = [];
  const onstateChange = (paras) => {
    console.log(paras);
    let districts = data.filter((e) => e.subcountry === paras);

    districts = [...new Set(districts.map((item) => item.name))];
    for (let i = 0; i < districts.length; i++) {
      districtsobj.push({ label: districts[i], value: districts[i] });
    }
  };
  const [{alt, src}, setImg] = useState({
    src:''
    
});

const handleImg = (e) => {
    if(e.target.files[0]) {
        setImg({
            src: URL.createObjectURL(e.target.files[0]),
            alt: e.target.files[0].name
        });    
    }   
}

const [{alt1, src1}, setBg] = useState({
  src1:''
    
});

const handleBg = (e) => {
    if(e.target.files[0]) {
        setBg({
            src1: URL.createObjectURL(e.target.files[0]),
            alt1: e.target.files[0].name
        });    
    }   
}

  return (
    <Grid container spacing={5} 
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh' }}
  >
        <Grid item xs={3}>
        <Typography sx={{fontSize:20,textAlign:'left',mb:2}}>Company Logo</Typography>
        <Box sx={{borderRadius:'50%', height:200,width:200,backgroundColor:'lightgrey',cursor:'pointer'}}>
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          id="photo"
          className="visually-hidden"
          onChange={handleImg}
          style={{display:'none'}}
        />
        <InputLabel htmlFor="photo">
            {src===""?  <AddAPhotoIcon sx={{
                display:'block',
                objectFit:'cover',
                fontSize: 50,
                textAlign:'center',
                mr:'auto',
                ml:'auto',
                mt:8,
                cursor:"pointer"
            }}/>:  
              <img src={src} alt={alt} style={{
            display: 'block',
            width: 200,
            height: 200,
            objectFit:'cover',
            borderRadius: '50%',
            cursor:"pointer"

        }}/>}
            </InputLabel>
            </Box>
            
        </Grid>
        <Grid item xs={9}>
       <Box sx={{ height:200,width:600,cursor:'pointer',ml:40,backgroundColor:'lightgrey',mt:5}}>
       <Typography sx={{fontSize:20,backgroundColor:'white',mb:2}}>Background Banner</Typography>

       <input
          type="file"
          accept=".png, .jpg, .jpeg"
          id="img"
          onChange={handleBg}
          style={{display:'none'}}
        />
        <InputLabel htmlFor="img">
            {src1===""?  <AddAPhotoIcon sx={{
                display:'block',
                objectFit:'cover',
                fontSize: 50,
               mt:6,
               ml:'auto',
               mr:'auto',
              cursor:"pointer"
            }}/>:  
              <img src={src1} alt={alt1} style={{
            display: 'block',
            width: 600,
            height: 200,
            objectFit:'cover',
            cursor:"pointer",

        }}/>}
            </InputLabel>
            </Box>
            
                  
        </Grid>
        

      <Grid item xs={12} sm={8}>
      <TextField
              name="companyname"
              label="Company Name"
              required
              variant="outlined"
              fullWidth
              size="large"
              error={Boolean(
                formik.touched.companyname && formik.errors.companyname
              )}
              helperText={formik.errors.companyname}
              onChange={formik.handleChange("companyname")}
              value={formik.values.companyname}
            />
      </Grid>
      <Grid item xs={12} sm={4}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name="Company Anniversary"
                label="Company Anniversary"
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
      <Grid item xs={12} sm={4} >
      <TextField
              name="cpycontactnumber"
              label="Company contact number"
              variant="outlined"
              fullWidth
              required
              size="large"
              error={Boolean(
                formik.touched.cpycontactnumber && formik.errors.cpycontactnumber
              )}
              helperText={
                Boolean(
                  formik.touched.cpycontactnumber && formik.errors.cpycontactnumber
                )
                  ? formik.errors.cpycontactnumber
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.cpycontactnumber}
            />

      </Grid>
      <Grid item xs={12} sm={8}>
      <TextField
              name="cpymailid"
              label="Company Mail Id"
              variant="outlined"
              fullWidth
              required
              size="large"
              error={Boolean(formik.touched.cpymailid && formik.errors.cpymailid)}
              helperText={
                Boolean(formik.touched.cpymailid && formik.errors.cpymailid)
                  ? formik.errors.cpymailid
                  : ""
              }
              onChange={formik.handleChange("cpymailid")}
              value={formik.values.cpymailid}
            />

      </Grid>
      <Grid item xs={12} sm={4}>
      <TextField
              name="gstnumber"
              label="GST number"
              variant="outlined"
              fullWidth
              required
              size="large"
              error={Boolean(
                formik.touched.gstnumber && formik.errors.gstnumber
              )}
              helperText={
                Boolean(
                  formik.touched.gstnumber && formik.errors.gstnumber
                )
                  ? formik.errors.gstnumber
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.gstnumber}
            />

      </Grid>
      <Grid item sx={12} sm={8}>
      <TextField
              name="services"
              label="Services"
              required
              variant="outlined"
              fullWidth
              size="large"
              error={Boolean(
                formik.touched.services && formik.errors.services
              )}
              helperText={
                Boolean(
                  formik.touched.services && formik.errors.services
                )
                  ? formik.errors.services
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.services}
            />

      </Grid>
      <Grid item xs={12} sm={6}>
            <TextField
              name="Address"
              label="Door No/Flat No/Street"
              variant="outlined"
              type=""
              fullWidth
              size="large"
              error={Boolean(formik.touched.Address && formik.errors.Address)}
              onChange={formik.handleChange}
              value={formik.values.Address}
              helperText={
                Boolean(formik.touched.Address && formik.errors.Address)
                  ? formik.errors.Address
                  : ""
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="State"
              label="Slect state"
              variant="outlined"
              type=""
              fullWidth
              size="large"
              error={Boolean(formik.touched.State && formik.errors.State)}
              helperText={
                Boolean(formik.touched.State && formik.errors.State)
                  ? formik.errors.State
                  : ""
              }
              onChange={formik.handleChange}
              onBlur={onstateChange(formik.values.State)}
            >
              {statesObj.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              select
              name="city"
              label="Slect city"
              variant="outlined"
              type="string"
              fullWidth
              size="large"
              error={Boolean(formik.touched.city && formik.errors.city)}
              helperText={
                Boolean(formik.touched.city && formik.errors.city)
                  ? formik.errors.city
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.city}
            >
              {districtsobj.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={4}>
          <TextField
              name="area"
              required
              label="Area"
              variant="outlined"
              type="string"
              fullWidth
              size="large"
              error={Boolean(formik.touched.area && formik.errors.area)}
              helperText={
                Boolean(formik.touched.area && formik.errors.area)
                  ? formik.errors.area
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.area}
            ></TextField>

          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              name="pincode"
              required
              label="Pin code"
              variant="outlined"
              type="string"
              fullWidth
              size="large"
              error={Boolean(formik.touched.pincode && formik.errors.pincode)}
              helperText={
                Boolean(formik.touched.pincode && formik.errors.pincode)
                  ? formik.errors.pincode
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.pincode}
            ></TextField>
          </Grid>

    </Grid>
  );
};

export default CompanyInfo;
