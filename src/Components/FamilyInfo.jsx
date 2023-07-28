import {
  TextField,
  Grid,
  Typography,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  MenuItem,
  Button,
} from "@mui/material";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DatePicker } from "@mui/x-date-pickers";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ThemeProvider, createTheme } from "@mui/material";
import { Field } from "formik";
import { useState } from "react";

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
  console.log(props);
  const { formik } = props;

  const addnewChild = () => {
    let updated = [...child, { child: child.length + 1 }];
    setchild(updated);
  };
  // const inputArr = [
  //   {
  //     name: "",
  //     gender: "",
  //     dob: "",
  //   },
  // ];
  const [arr, setArr] = useState(props.info);
  const [child, setchild] = useState([{ child: 1 }]);

  const addInput = () => {
    setArr((s) => {
      return [
        ...s,
        {
          name: "",
          gender: "",
          dob: "",
        },
      ];
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(arr);
    const index = e.target.id;
    setArr((s) => {
      //console.log(s)
      const newArr = s.slice();
      newArr[index].name = e.target.value;

      return newArr;
    });
  };
  const handleChange1 = (event) => {
    console.log(event.target);
    const index = arr.length - 1;
    console.log(index);
    setArr((s) => {
      //console.log(s)
      const newArr = s.slice();
      newArr[index].gender = event.target.value;

      return newArr;
    });
    console.log(arr);
  };

  const [usertoched, setusertouched] = useState({
    spousename: false,
    spousedob: false,
    weddinganniversary: false,
  });

  const handleChange2 = (event) => {
    console.log(event);
    const index = arr.length - 1;
    console.log(index);
    setArr((s) => {
      //console.log(s)
      const newArr = s.slice();
      newArr[index].dob = event.$d;

      return newArr;
    });
    console.log(arr);
  };
  console.log(child);
  console.log(formik.values);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#323F8D",
      },
    },
    input: {
      "&::placeholder": {
        fontFamily: "Karla",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Typography sx={{ fontSize: 24, mb: 5, fontFamily: "Karla" }}>
        Family Information
      </Typography>

      <Grid container spacing={5}>
        <Grid item xs={12} sm={12}>
          <RadioGroup row>
            <FormLabel sx={{ color: "#323F8D", mr: 5, mt: 1 }}>
              Marital Status
            </FormLabel>
            <FormControlLabel
              value="single"
              name="maritalStatus"
              control={
                <Radio
                  value="single"
                  onChange={formik.handleChange("maritalStatus")}
                />
              }
              label="Single"
              checked={formik.values.maritalStatus === "single"}
            />
            <FormControlLabel
              name="maritalStatus"
              control={
                <Radio
                  value="married"
                  onChange={() =>
                    formik.setFieldValue("maritalStatus", "married")
                  }
                />
              }
              label="Married"
              checked={formik.values.maritalStatus === "married"}
            />
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
            onBlur={() => {
              let updated = { spousename: true };
              setusertouched((usertoched) => ({
                ...usertoched,
                ...updated,
              }));
            }}
            error={Boolean(usertoched.spousename && formik.errors.spousename)}
            helperText={
              Boolean(usertoched.spousename && formik.errors.spousename)
                ? formik.errors.spousename
                : ""
            }
            disabled={formik.values.maritalStatus === "single" ? true : false}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              name="spousedob"
              label="Spouse DOB"
              onChange={(value) => {
                console.log(value.$d);
                console.log(Date.parse(value));
                formik.setFieldValue("spousedob", value.$d);
              }}
              disabled={formik.values.maritalStatus === "single" ? true : false}
              slotProps={{
                textField: {
                  variant: "outlined",
                  required: "true",
                  fullWidth: "true",
                  disabled:
                    formik.values.maritalStatus === "single" ? true : false,
                  onBlur: () => {
                    let updated = { spousedob: true };
                    setusertouched((usertoched) => ({
                      ...usertoched,
                      ...updated,
                    }));
                  },
                  error: Boolean(
                    usertoched.spousedob && formik.errors.spousedob
                  ),
                  helperText: Boolean(
                    usertoched.spousedob && formik.errors.spousedob
                  )
                    ? "DOB is Required"
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
              name="weddinganniversary"
              label="Wedding Anniversary"
              onChange={(value) => {
                formik.setFieldValue("weddinganniversary", value.$d);
              }}
              disabled={formik.values.maritalStatus === "single" ? true : false}
              slotProps={{
                textField: {
                  variant: "outlined",
                  required: "true",
                  fullWidth: "true",
                  disabled:
                    formik.values.maritalStatus === "single" ? true : false,
                  onBlur: () => {
                    let updated = { weddinganniversary: true };
                    setusertouched((usertoched) => ({
                      ...usertoched,
                      ...updated,
                    }));
                  },
                  error: Boolean(
                    usertoched.weddinganniversary &&
                      formik.errors.weddinganniversary
                  ),
                  helperText: Boolean(
                    usertoched.weddinganniversary &&
                      formik.errors.weddinganniversary
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
            <FormLabel sx={{ color: "#323F8D", mr: 5, mt: 1 }}>
              Do You Have Child?
            </FormLabel>
            <FormControlLabel
              name="children"
              value="yes"
              onChange={formik.handleChange}
              control={<Radio />}
              label="Yes"
            />
            <FormControlLabel
              name="children"
              onChange={formik.handleChange}
              value="no"
              control={<Radio />}
              label="No"
            />
          </RadioGroup>
        </Grid>

        {arr.map((e, i) => (
          <>
            <Grid item xs={12} sm={4} key={child.child}>
              <TextField
                name="childname"
                label="Child Name"
                variant="outlined"
                required
                size="large"
                fullWidth
                id={i}
                // value={formik.values.childname}
                onChange={handleChange}
                onBlur={() => {
                  console.log(i);
                  const new_value = arr[i].name;
                  const child = {
                    childid: i,
                    childrename: new_value,
                  };
                  console.log(new_value);

                  formik.setFieldValue("childrename", [
                    ...formik.values.childrename,
                    child,
                  ]);
                }}
                error={Boolean(
                  formik.touched.childname && formik.errors.childname
                )}
                helperText={
                  Boolean(formik.touched.childname && formik.errors.childname)
                    ? formik.errors.childname
                    : ""
                }
                disabled={formik.values.children === "no" ? true : false}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                select
                required="true"
                variant="outlined"
                fullWidth
                name="childgender"
                label="child gender"
                id={i}
                onChange={handleChange1}
                onBlur={() => {
                  console.log(i);
                  const new_value = arr[i].gender;
                  const child = {
                    childid: i,
                    childgender: new_value,
                  };
                  console.log(new_value);

                  formik.setFieldValue("childgender", [
                    ...formik.values.childgender,
                    child,
                  ]);
                }}
                error={Boolean(formik.touched.Gender && formik.errors.Gender)}
                helperText={
                  Boolean(formik.touched.Gender && formik.errors.Gender)
                    ? formik.errors.Gender
                    : ""
                }
                disabled={formik.values.children === "no" ? true : false}
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
                  id={i}
                  // value={formik.values.date}
                  onChange={(value) => {
                    handleChange2(value);

                    console.log(i);
                    const new_value = arr[i].dob;
                    const child = {
                      childid: i,
                      childdob: new_value,
                    };
                    console.log(new_value);

                    formik.setFieldValue("childrendob", [
                      ...formik.values.childrendob,
                      child,
                    ]);
                  }}
                  disabled={formik.values.children === "no" ? true : false}
                  slotProps={{
                    textField: {
                      variant: "outlined",
                      id: i,
                      required: true,
                      fullWidth: true,
                      disabled: formik.values.children === "no" ? true : false,
                      onBlur: () => {
                        console.log(i);
                        const new_value = arr[i].dob;
                        const child = {
                          childid: i,
                          childdob: new_value,
                        };
                        console.log(new_value);

                        formik.setFieldValue("childrendob", [
                          ...formik.values.childrendob,
                          child,
                        ]);
                      },
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
          </>
        ))}
        <Grid item xs={12} sm={4}>
          <Button
            sx={{ color: "#323F8D", fontSize: 15, p: 2 }}
            onClick={() => addInput()}
          >
            <FavoriteIcon sx={{ fontSize: 20, color: "#323F8D", mr: 0.5 }} />
            Add Child
          </Button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default FamilyInfo;
