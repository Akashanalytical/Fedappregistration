import { Grid, TextField, FormHelperText, MenuItem } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import axios from "axios";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ThemeProvider, createTheme } from "@mui/material";
const AccountDetails = (props) => {
  const { formik } = props;
  console.log(formik);
  const { Field } = props;
  const iniitaldate = formik.values.date;
  const { FormikProvider } = props;
  console.log(Field);
  const theme = createTheme({
    components: {
      MuiFormLabel: {
        styleOverrides: {
          asterisk: { color: "red" },
        },
      },
    },
  });
  const [data, setdata] = useState([]);
  React.useEffect(() => {
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
  const associtaionname = [
    {
      label: "Chennai Bunder Street Note Book Stationeries",
      value: "Chennai Bunder Street Note Book Stationeries",
    },
    {
      label: "Tamilnadu Wire & Allied Products Association",
      value: "Tamilnadu Wire & Allied Products Association",
    },
    {
      label: "The Chennai Hotel Association",
      value: "The Chennai Hotel Association",
    },
    {
      label: "Chennai Apparel Association",
      value: "Chennai Apparel Association",
    },
    {
      label: "All India Radio & Electronics Association",
      value: "All India Radio & Electronics Association",
    },
    {
      label: "The Madras Motor Parts Dealer Association",
      value: "The Madras Motor Parts Dealer Association",
    },
    {
      label: "The Tamilnadu Cotton Canvas Tarpaulin Merchant Association",
      value: "The Tamilnadu Cotton Canvas Tarpaulin Merchant Association",
    },
    {
      label: "Chennai Parcel Lorry Owners Welfare Association",
      value: "Chennai Parcel Lorry Owners Welfare Association",
    },
    {
      label: "The Madras Hardware Sundary & Paint Merchants Assn",
      value: "The Madras Hardware Sundary & Paint Merchants Assn",
    },
    {
      label: "Sowcarpet Traders Association",
      value: "Sowcarpet Traders Association",
    },
    {
      label: "Tamilnadu Tyre Dealers Association",
      value: "Tamilnadu Tyre Dealers Association",
    },
    {
      label: "The Madras General Merchants Association",
      value: "The Madras General Merchants Association",
    },
    {
      label: "The Madras Paper Merchants Association",
      value: "The Madras Paper Merchants Association",
    },
    {
      label: "South India Bearing Distributors Association",
      value: "South India Bearing Distributors Association",
    },
    {
      label: "The Madras Piece Goods Merchants Association",
      value: "The Madras Piece Goods Merchants Association",
    },
    {
      label: "Madras Hire Purchase Association",
      value: "Madras Hire Purchase Association",
    },
    {
      label: "Madras Pharmaceutical Wholesalers Association",
      value: "Madras Pharmaceutical Wholesalers Association",
    },
    {
      label: "Tamil Maanila Card Manufacturers Association",
      value: "Tamil Maanila Card Manufacturers Association",
    },
    {
      label: "Tamilnadu Ispat Parished Limited",
      value: "Tamilnadu Ispat Parished Limited",
    },
    {
      label: "Madras Opticians Association",
      value: "Madras Opticians Association",
    },
    {
      label: "Broadway Business Association",
      value: "Broadway Business Association",
    },
    {
      label: "The Tamilnadu Stainless Steel Merchants Association",
      value: "The Tamilnadu Stainless Steel Merchants Association",
    },
    {
      label: "The Chennai Hosiery & Readymade Wholesalers Association",
      value: "The Chennai Hosiery & Readymade Wholesalers Association",
    },
    {
      label: "The Madras Electric Traders Association",
      value: "The Madras Electric Traders Association",
    },
    {
      label: "The Madras Kirana Merchants Association",
      value: "The Madras Kirana Merchants Association",
    },
    {
      label: "Tamilnadu Dyes & Chemicals Merchants Association",
      value: "Tamilnadu Dyes & Chemicals Merchants Association",
    },
    {
      label: "Elephant Gate Sowcarpet Merchants Association",
      value: "Elephant Gate Sowcarpet Merchants Association",
    },
    {
      label: "The Madras Yarn Merchants Association",
      value: "The Madras Yarn Merchants Association",
    },
    {
      label: "The Madras Glass & Plywood Merchants Association",
      value: "The Madras Glass & Plywood Merchants Association",
    },
    {
      label: "Sports Goods Dealers Association of Tamilnadu",
      value: "Sports Goods Dealers Association of Tamilnadu",
    },
    {
      label: "Chennai Timber & Plywood Merchants Association",
      value: "Chennai Timber & Plywood Merchants Association",
    },
    {
      label: "Purasai Merchants Association",
      value: "Purasai Merchants Association",
    },
    {
      label: "The Madras Washermenpet Cut Piece Association",
      value: "The Madras Washermenpet Cut Piece Association",
    },
    {
      label: "The Pharmaceuticals Association of Tamilnadu",
      value: "The Pharmaceuticals Association of Tamilnadu",
    },
    {
      label: "The Tamilnadu Plastic Manufacture Association (TAPMA)",
      value: "The Tamilnadu Plastic Manufacture Association (TAPMA)",
    },
    {
      label: "Steel Tube Dealers Association",
      value: "Steel Tube Dealers Association",
    },
    {
      label: "Tool & Alloy Steel Dealers Association",
      value: "Tool & Alloy Steel Dealers Association",
    },
    {
      label: "Tamilnadu Marble & Granite dealers Associaton",
      value: "Tamilnadu Marble & Granite dealers Associaton",
    },
    {
      label: "CJA Chennai Jewellers Association",
      value: "CJA Chennai Jewellers Association",
    },
    {
      label: "The Jewellers & Diamond Traders Association, Madras",
      value: "The Jewellers & Diamond Traders Association, Madras",
    },
    {
      label: "The South India Watch Dealers Association",
      value: "The South India Watch Dealers Association",
    },
    {
      label: "The Tamilnadu Pen Manufacturers & Dealers Association",
      value: "The Tamilnadu Pen Manufacturers & Dealers Association",
    },
    {
      label: "The South India Sanitary ware Dealers Association",
      value: "The South India Sanitary ware Dealers Association",
    },
    {
      label: "All India Skin Hide Tanners Merchants Association",
      value: "All India Skin Hide Tanners Merchants Association",
    },
    {
      label: "Pump & Allied Traders Association",
      value: "Pump & Allied Traders Association",
    },
    {
      label: "The Madras Jewellers & Diamond Merchants Association",
      value: "The Madras Jewellers & Diamond Merchants Association",
    },
    {
      label: "Singara Garden Readymade Merchants Association",
      value: "Singara Garden Readymade Merchants Association",
    },
  ];

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
  const styles = {
    labelAsterisk: {
      color: "red",
    },
    gridStyle: {
      display: "grid-container",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <FormikProvider>
        <Grid
          container
          spacing={3}
          xs={12}
          style={styles.gridStyle}
          alignItems="center"
          justifyContent="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item xs={12} lg={6}>
            <TextField
              name="firstname"
              label="First Name"
              required
              variant="outlined"
              fullWidth
              size="large"
              error={Boolean(
                formik.touched.firstname && formik.errors.firstname
              )}
              helperText={formik.errors.firstname}
              onChange={formik.handleChange("firstname")}
              value={formik.values.firstname}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              name="lastname"
              label="Last Name"
              variant="standard"
              required="true"
              fullWidth
              size="small"
              error={Boolean(formik.touched.lastname && formik.errors.lastname)}
              helperText={
                Boolean(formik.touched.lastname && formik.errors.lastname)
                  ? formik.errors.lastname
                  : ""
              }
              onChange={formik.handleChange("lastname")}
              value={formik.values.lastname}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name="date"
                label="Date of Birth"
                // value={formik.values.date}
                onChange={(value) => {
                  console.log(value.$d);
                  console.log(Date.parse(value));
                  formik.setFieldValue("date", value.$d);
                }}
                slotProps={{
                  textField: {
                    variant: "standard",
                    required: true,
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
          <Grid item xs={12} lg={6}>
            <TextField
              select
              required="true"
              variant="standard"
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
          <Grid item xs={12} sm={6}>
            <TextField
              name="email"
              label="Email"
              variant="standard"
              disabled
              fullWidth
              size="small"
              onChange={formik.handleChange("email")}
              value={formik.values.email}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="usertype"
              label=""
              variant="standard"
              required="true"
              fullWidth
              disabled
              size="small"
              value={formik.values.usertype}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Wedding anniversary"
                onChange={(value) => {
                  console.log(value);
                  console.log(Date.parse(value));
                  formik.setFieldValue("wedding", value.$d);
                }}
                slotProps={{
                  textField: {
                    variant: "standard",
                  },
                }}
                fullWidth
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="contactnumber"
              label="contact number"
              variant="standard"
              fullWidth
              size="small"
              error={Boolean(
                formik.touched.contactnumber && formik.errors.contactnumber
              )}
              helperText={
                Boolean(
                  formik.touched.contactnumber && formik.errors.contactnumber
                )
                  ? formik.errors.contactnumber
                  : ""
              }
              onChange={formik.handleChange}
              value={formik.values.contactnumber}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              required="true"
              variant="standard"
              fullWidth
              label="Select Association"
              size="medium"
              name="associationname"
              onChange={formik.handleChange("associationname")}
              error={Boolean(
                formik.touched.associationname && formik.errors.associationname
              )}
              helperText={
                Boolean(
                  formik.touched.associationname &&
                    formik.errors.associationname
                )
                  ? formik.errors.associationname
                  : ""
              }
            >
              {associtaionname.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={9}>
            <TextField
              name="Address"
              label="Door No/Flat No/Street"
              variant="standard"
              type=""
              fullWidth
              size="small"
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
          <Grid item xs={12} sm={3}>
            <TextField
              select
              name="State"
              label="Slect state"
              variant="standard"
              type=""
              fullWidth
              size="small"
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
          <Grid item xs={12} sm={6}>
            <TextField
              select
              name="city"
              label="Slect city"
              variant="standard"
              type="string"
              fullWidth
              size="small"
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
          <Grid item xs={12} sm={6}>
            <TextField
              name="pincode"
              required
              label="Are/Pin code"
              variant="standard"
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

          {formik.errors.submit && (
            <Grid item xs={12} sm={12}>
              <FormHelperText error>{formik.errors.submit}</FormHelperText>
            </Grid>
          )}
        </Grid>
      </FormikProvider>
    </ThemeProvider>
  );
};

export default AccountDetails;
