import React, { useState } from "react";
import { Box, Button, Step, StepLabel, Stepper, TextField, Typography } from "@mui/material";
import Start from "../../../components/Test/Start";
import Food1 from "../../../components/Test/Food1";

interface StepProps {
  activeStep: number;
  handleNext?: () => void;
  handleBack?: () => void;
  handleReset: () => void;
}

const StepOneA: React.FC<StepProps> = ({ activeStep, handleNext }) => {
  if (activeStep !== 0) return null;

  return (
    <Box marginTop={2} marginBottom={2} gap={2} >
      <Start />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        paddingTop={2}
      >
        <Button variant={'contained'} onClick={handleNext}>Start Test</Button>
      </Box>
    </Box>
  );
};

const StepOneB: React.FC<StepProps> = ({ activeStep, handleNext, handleBack }) => {
  if (activeStep !== 0) return null;

  return (
    <Box marginTop={2} marginBottom={2} >
      <Food1 />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        paddingTop={2}
        gap={2}
      >
       <Button variant="outlined" onClick={handleBack}>Back</Button>
      <Button variant="contained" onClick={handleNext}>Next</Button>
      </Box>
    </Box>
  );
};

const StepTwo: React.FC<StepProps> = ({ activeStep, handleNext, handleBack }) => {
  if (activeStep !== 1) return null;

  return (
    <Box marginTop={2} marginBottom={2}>
      <Typography variant='h5'>Step Two</Typography>
      <TextField label="Field 2" />
      <Button onClick={handleBack}>Back</Button>
      <Button onClick={handleNext}>Next</Button>
    </Box>
  );
};

const StepThree: React.FC<StepProps> = ({ activeStep, handleNext, handleBack }) => {
  if (activeStep !== 2) return null;

  return (
    <Box marginTop={2} marginBottom={2}>
      <Typography variant='h5'>Step Three</Typography>
      <TextField label="Field 3" />
      <Button onClick={handleBack}>Back</Button>
      <Button onClick={handleNext}>Finish</Button>
    </Box>
  );
};

const Restart: React.FC<StepProps> = ({ activeStep, handleReset }) => {
  if (activeStep !== 3) return null;

  return (
    <Box marginTop={2} marginBottom={2}>
      <Typography variant='h5'>Finished</Typography>
      <Button onClick={handleReset}>Restart</Button>
    </Box>
  );
};

const steps = ['One', 'Two', 'Three', 'Restart'];

export default function DataPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [subStep, setSubStep] = useState(0); 
  const handleNext = () => {
    if (activeStep === 0 && subStep === 0) {
      setSubStep(1); 
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSubStep(0); 
    }
  };

  const handleBack = () => {
    if (activeStep === 0 && subStep === 1) {
      setSubStep(0); 
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box >
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      >
        {subStep === 0 && <StepOneA activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} handleReset={handleReset}/>}
        {subStep === 1 && <StepOneB activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} handleReset={handleReset}/>}
        <StepTwo activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} handleReset={handleReset}/>
        <StepThree activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} handleReset={handleReset}/>
        <Restart activeStep={activeStep} handleReset={handleReset} />
      </Box>
    </Box>
  );
}