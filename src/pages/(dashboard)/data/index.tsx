import React, { useState } from "react";
import { Box, Button, Step, StepLabel, Stepper, Typography } from "@mui/material";
import Start from "../../../components/Test/Start";
import Food1 from "../../../components/Test/Food1";
import Start2 from "../../../components/Test2/Start2";

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

const StepTwoA: React.FC<StepProps> = ({ activeStep, handleNext, handleBack }) => {
  if (activeStep !== 1) return null;

  return (
    <Box marginTop={2} marginBottom={2}>
      <Start2/>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        paddingTop={2}
        gap={2}
      >
        <Button onClick={handleBack}>Back</Button>
      <Button variant="contained" onClick={handleNext}>Start</Button>
      </Box>
    </Box>
  );
};

const StepTwoB: React.FC<StepProps> = ({ activeStep, handleNext, handleBack }) => {
  if (activeStep !== 1) return null;

  return (
    <Box marginTop={2} marginBottom={2}>
      <Start2/>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        paddingTop={2}
        gap={2}
      >
        <Button onClick={handleBack}>Back</Button>
      <Button variant="contained" onClick={handleNext}>Next</Button>
      </Box>
    </Box>
  );
};

const Restart: React.FC<StepProps> = ({ activeStep, handleReset }) => {
  if (activeStep !== 2) return null;

  return (
    <Box marginTop={2} marginBottom={2}>
      <Typography variant='h5'>Finished</Typography>
      <Button onClick={handleReset}>Restart</Button>
    </Box>
  );
};

const steps = ['Stage One', 'Stage Two','Restart'];

export default function DataPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [subStep, setSubStep] = useState(0); 
  const handleNext = () => {
    if (activeStep === 0 && subStep === 0) {
      setSubStep(1); // Go to StepOneB
    } else if (activeStep === 0 && subStep === 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSubStep(0); // Go to StepTwoA
    } else if (activeStep === 1 && subStep === 0) {
      setSubStep(1); // Go to StepTwoB
    } else if (activeStep === 1 && subStep === 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSubStep(0); // Go to Restart
    }
  };

  const handleBack = () => {
    if (activeStep === 0 && subStep === 1) {
      setSubStep(0); // Go back to StepOneA
    } else if (activeStep === 1 && subStep === 1) {
      setSubStep(0); // Go back to StepTwoA
    } else if (activeStep === 1 && subStep === 0) {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      setSubStep(1); // Go back to StepOneB
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
  {activeStep === 0 && subStep === 0 && <StepOneA activeStep={activeStep} handleNext={handleNext} handleReset={handleReset}/>}
  {activeStep === 0 && subStep === 1 && <StepOneB activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} handleReset={handleReset}/>}
  {activeStep === 1 && subStep === 0 && <StepTwoA activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} handleReset={handleReset}/>}
  {activeStep === 1 && subStep === 1 && <StepTwoB activeStep={activeStep} handleNext={handleNext} handleBack={handleBack} handleReset={handleReset}/>}
  {activeStep === 2 && <Restart activeStep={activeStep} handleReset={handleReset} />}
</Box>
    </Box>
  );
}