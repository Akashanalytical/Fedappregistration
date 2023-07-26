import { useState } from "react";
import { useFormik } from "formik";
import { Field } from "formik";
import placeholder from './Assets/user.png'
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
  Paper,
  InputLabel,
} from "@mui/material";
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PersonalInfo from "./PersonalInfo";
import ReviewInfo from "./ReviewInfo";
import CompanyInfo from "./CompanyInfo";
import FamilyInfo from "./FamilyInfo";
import PasswordCreation from "./PasswordCreation";
import { Image, Looks3, Looks4, Looks5, Looks6, LooksOne, LooksTwo,} from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import SocialMediaInfo from "./SocialMediaInfo";
import Icon1 from "./icon1";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor:'#323F8D',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor:'#323F8D',

    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundColor:'#323F8D',
  }),
  ...(ownerState.completed && {
    backgroundColor:'#323F8D',

  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons={
    1:<Icon1/>,
    2:<LooksTwo/>,
    3:<Looks3/>,
    4:<Looks4/>,
    5:<Looks5/>,
    6:<Looks6/>
  }

 

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
            {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ["Personal Info", "FamilyInfo","Social Media Info","Company Info", "Password Creation",""];

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);
  console.log(activeStep);
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
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
      area:"",
      pincode: "",
      firstName: "",
      whatsapp: "",
      instagaram: "",
      facebook: "",
      twitter: "",
      linkedin: "",
    },
    validationSchema:
      activeStep === 0
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
            Gender: Yup.string().required("Gender is required"),
            contactnumber: Yup.string().required("Number is required"),
            Address: Yup.string().required("Address is required"),
            associationname: Yup.string().required(
              "associationname name is required"
            ),
            State: Yup.string().required("State is required"),
            city: Yup.string().required("City is required"),
            area: Yup.string().required("Area is required"),
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

        <PersonalInfo
            formik={formik}
            Field={Field}
            FormikProvider={FormikProvider}
          />
        );
      case 1:
        return <SocialMediaInfo formik={formik} />;


      case 2:
        return <FamilyInfo formik={formik}/>;


      case 3:
        return <CompanyInfo formik={formik}/>;

      case 4:
        return <PasswordCreation formik={formik}/>;

      case 5:
        return <ReviewInfo formik={formik} />;

      default:
        return <div>404: Not Found</div>;
    }
  };

  return (
    <>
    <Paper sx={{backgroundColor:"#fff",height:"auto",width:'100%',display:'flex',position:'sticky'}} elevation={3}>
    <Box sx={{borderRadius:'50%',m:2, height:100,width:100,backgroundColor:'#EAEAEA',cursor:'pointer',alignItems:'center',display:"flex"}}>
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          id="photo"
          className="visually-hidden"
          onChange={handleImg}
          style={{display:'none'}}
        />
        <InputLabel sx={{borderRadius:'50%', height:100,width:100,cursor:'pointer',alignItems:'center',justifyItems:'center',display:'flex'}} htmlFor="photo">
            {src===""?  <img src={placeholder} alt="icon" style={{
                width:70,
                height:70,
                marginLeft:14,
                marginTop:10
            }}/>:  
              <img src={src} alt={alt} style={{
            display: 'flex',
            width: 100,
            height: 100,
            objectFit:"fill",
            borderRadius: '50%',
            cursor:"pointer"

        }}/>}
            </InputLabel>
            </Box>
    <Stepper  sx={{mr:'auto',ml:'auto',mt:2,mb:2,display:'flex'}} activeStep={activeStep} alternativeLabel connector={<ColorlibConnector />}
      orientation="horizontal">
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{borderRadius:'50%',m:2, height:100,width:100,backgroundColor:'#EAEAEA',cursor:'pointer',alignItems:'center',display:'flex'}}>
      <img src="" alt="Logo"/>
      </Box>
      </Paper>
    <Box
      sx={{
        
        flexGrow:1
      }}
      m={"auto"}
      width={"auto"}
      height={"auto"}
      pl={13}
      pr={13}
      alignItems="center"
      justifyContent="center"
    >
      
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
          <Box sx={{height:100,width:"auto",justifyContent:'space-between', display:"flex"}}>
        <Button sx={{width:300,height:50,backgroundColor:'#323F8D',color:'white',fontFamily:'Karla',fontSize:15,'&:hover': {
              backgroundColor: '#323F8D',
            },}} disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>

          {activeStep === steps.length - 1 ? (
            <Button >Submit</Button>
          ) : (
            <Button onClick={formik.handleSubmit} sx={{width:300,height:50,backgroundColor:'#323F8D',color:'white',fontFamily:'Karla',fontSize:15,
            '&:hover': {
              backgroundColor: '#323F8D',
            },}}>Next</Button>
          )}
          </Box>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default Form;
