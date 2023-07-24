import { useState } from "react";
import { useFormik } from "formik";
import { Field } from "formik";
import { FormikProvider } from "formik";
import * as Yup from "yup";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormHelperText,
  Button,
  autocompleteClasses,
} from "@mui/material";
import PersonalInfo from "./PersonalInfo";
import AccountDetails from "./AccountDetails";
import ReviewInfo from "./ReviewInfo";

const steps = [" Account Details", "Personal Info", "Review and Submit"];

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);
  console.log(activeStep);
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const currentDate = new Date();
  console.log(Date.now());
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      date: Date.now(),
      wedding: Date.now(),
      Gender: "",
      contactnumber: "",
      Address: "",
      associationname: "",
      State: "",
      city: "",
      pincode: "",
      firstName: "",
      whatsapp: "",
      instagaram: "",
      facebook: "",
      twitter: "",
      linkedin: "",
    },
    validationSchema:
      activeStep == 0
        ? Yup.object().shape({
            // firstname: Yup.string()
            //   .required("Email is required"),
            // password: Yup.string().min(8),
            // confirmPassword: Yup.string()
            //   .min(8)
            //   .oneOf([Yup.ref("password")], "Passwords do not match"),
            firstname: Yup.string().required("First Name is required"),
            lastname: Yup.string().required("Last Name is required"),
            date: Yup.date()
              .min(new Date("2000-01-01"))
              .max(new Date("2023-07-19"))
              .required("Date is"),
            wedding: Yup.date()
              .min(new Date("2000-01-01"))
              .max(new Date("2023-07-19"))
              .required("Date is"),
            Gender: Yup.string().required("Gender is required"),
            contactnumber: Yup.string().required("Number is required"),
            Address: Yup.string().required("Address is required"),
            associationname: Yup.string().required(
              "associationname name is required"
            ),
            State: Yup.string().required("State is required"),
            city: Yup.string().required("City is required"),
            pincode: Yup.string().required("Pincode is required"),
            firstName: Yup.string(),
          })
        : Yup.object().shape({
            // firstname: Yup.string()
            //   .required("Email is required"),
            // password: Yup.string().min(8),
            // confirmPassword: Yup.string()
            //   .min(8)
            //   .oneOf([Yup.ref("password")], "Passwords do not match"),
            linkedin: Yup.string(),
            twitter: Yup.string(),
            // date: Yup.date()
            //   .min(new Date("2000-01-01"))
            //   .max(new Date("2023-07-19"))
            //   .required("Date is"),
            // wedding: Yup.date()
            //   .min(new Date("2000-01-01"))
            //   .max(new Date("2023-07-19"))
            //   .required("Date is"),
            // Gender: Yup.string().required("Gender is required"),
            // contactnumber: Yup.string().required("Number is required"),
            // Address: Yup.string().required("Address is required"),
            facebook: Yup.string().required("facebook link is required"),
            instagaram: Yup.string().required("instagaram link is required"),
            whatsapp: Yup.string().required("Whatsapp number is required"),
          }),
    onSubmit: () => {
      if (activeStep === steps.length - 1) {
        console.log("last step");
      } else {
        setActiveStep((prevStep) => prevStep + 1);
      }
    },
  });
  console.log(formik);
  const formContent = (step) => {
    switch (step) {
      case 0:
        return (
          <AccountDetails
            formik={formik}
            Field={Field}
            FormikProvider={FormikProvider}
          />
        );
      case 1:
        return <PersonalInfo formik={formik} />;
      case 2:
        return <ReviewInfo formik={formik} />;
      default:
        return <div>404: Not Found</div>;
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: 2,
      }}
      m={"auto"}
      width={500}
      height={80}
      alignItems="center"
      justifyContent="center"
    >
      <Stepper activeStep={activeStep} orientation="horizontal">
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container>
        <Grid item xs={12} sx={{ padding: "20px" }}>
          {formContent(activeStep)}
        </Grid>
        {formik.errors.submit && (
          <Grid item xs={12}>
            <FormHelperText error>{formik.errors.submit}</FormHelperText>
          </Grid>
        )}
        <Grid item xs={12}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button>Submit</Button>
          ) : (
            <Button onClick={formik.handleSubmit}>Next</Button>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
