import React, { useState } from "react";
import "./Home.css";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Borrower Company Info",
    "Director  Info",
    "Financial Info",
    "Past Perfomence Details",
    "Document Upload",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <div style={{ padding: "20px" }}>
            <div style={{ fontSize:"20px" }}>
              <h2>Borrower Company Info</h2>
            </div>
            <div className="company-info">
              <div>
                <Typography>Property Name</Typography>
                <TextField
                  id="property-name"
                  // label="First Name"
                  variant="outlined"
                  placeholder="Enter Property Name"
                  margin="normal"
                  fullWidth
                  name="firstName"
                />
              </div>
              <div>
                <Typography>Property Type</Typography>
                <TextField
                  id="property type"
                  // label="Last Name"
                  variant="outlined"
                  placeholder="Enter Your Property type"
                  margin="normal"
                  fullWidth
                  name="lastName"
                />
              </div>
              <div>
                <Typography>Number of Units</Typography>
                <TextField
                  id="units"
                  // label="Nick Name"
                  variant="outlined"
                  placeholder="Enter Units"
                  margin="normal"
                  fullWidth
                  name="nickName"
                />
              </div>
            </div>
            <div>
              <div>
                <Typography>Property Address</Typography>
                <TextField
                  type="textarea"
                  id="nick-name"
                  // label="Property Address"
                  variant="outlined"
                  placeholder="Enter Borrower Name"
                  margin="normal"
                  fullWidth
                  rows={4}
                  multiline
                  name="nickName"
                />
              </div>
            </div>
            <div style={{marginTop:"10px"}}>
              <Typography>File Attachment</Typography>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Button
                  component="label"
                  style={{
                    border: "1px dashed gray",
                    width: "100%",
                    height: "70px",
                    borderRadius: "4px",
                  }}
                >
                  <span style={{ color: "black" }}>
                    <span style={{ color: "blue" }}>Browser </span>
                    or Drag & Drop to Attach file
                  </span>
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </Stack>
            </div>
          </div>
        </>
      );

    case 1:
      return (
        <>
        <div style={{padding:"40px"}}>
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            name="emailAddress"
          />
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            name="phoneNumber"
          />
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            name="alternatePhone"
          />
          </div>
        </>
      );
    case 2:
      return (
        <>
        <div style={{padding:"40px"}}>
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Financial Info"
            fullWidth
            margin="normal"
            name="address1"
          />
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Financial Details"
            fullWidth
            margin="normal"
            name="address2"
          />
          <TextField
            id="country"
            
            label="Country"
            variant="outlined"
            placeholder="Financial "
            fullWidth
            margin="normal"
            name="country"
          />
          </div>
        </>
      );
    case 3:
      return (
        <>
        <div style={{padding:"40px"}}>
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            name="cardNumber"
          />
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            name="cardMonth"
          />
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            name="cardYear"
          />
          </div>
        </>
      );
    case 4:
      return (
        <>
        <div style={{padding:"40px"}}>
          <TextField
            id="Document Upload"
            label="Document Upload"
            variant="outlined"
            placeholder="Document Upload"
            fullWidth
            margin="normal"
            name="cardYear"
          />
          </div>
        </>
      );
    default:
      return "unknown step";
  }
}

const Home = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return (
    <>
      <div style={{padding:"20px", marginTop:"30px", overflow:"hidden"}}>
        <div>
          <Stepper alternativeLabel activeStep={activeStep}>
            {steps.map((step, index) => {
              const labelProps = {};
              const stepProps = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step {...stepProps} key={index}>
                  <StepLabel {...labelProps}>{step}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
        <div>
          {activeStep === steps.length ? (
            <Typography variant="h3" align="center">
              Completed
            </Typography>
          ) : (
            <>
              <div>
                <form>{getStepContent(activeStep)}</form>
                <div style={{
                  display: 'flex',
                  justifyContent: 'end'
                }}>
                <Button
                  className={classes.button}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                back
                </Button>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Continue"}
                </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
