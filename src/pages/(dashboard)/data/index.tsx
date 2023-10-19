import React, { useState } from "react";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import Start from "../../../components/Test/Start";
import Food1 from "../../../components/Test/Food1";
import Start2 from "../../../components/Test2/Start2";
import Food2 from "../../../components/Test/Food2";

interface StepProps {
  activeStep: number;
  handleNext?: () => void;
  handleBack?: () => void;
  handleReset: () => void;
}

const StepOneA: React.FC<StepProps> = ({ activeStep, handleNext }) => {
  if (activeStep !== 0) return null;

  return (
    <Box marginTop={2} marginBottom={2} gap={2}>
      <Start />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        paddingTop={2}
      >
        <Button variant={"contained"} onClick={handleNext}>
          Start Test
        </Button>
      </Box>
    </Box>
  );
};

const StepOneB: React.FC<StepProps> = ({
  activeStep,
  handleNext,
  handleBack,
}) => {
  if (activeStep !== 0) return null;

  return (
    <Box marginTop={2} marginBottom={2}>
      <Food1 />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        paddingTop={2}
        gap={2}
      >
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

const StepOneC: React.FC<StepProps> = ({
  activeStep,
  handleNext,
  handleBack,
}) => {
  if (activeStep !== 0) return null;

  return (
    <Box marginTop={2} marginBottom={2}>
      <Food2 />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        paddingTop={2}
        gap={2}
      >
        <Button variant="outlined" onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

const StepTwoA: React.FC<StepProps> = ({
  activeStep,
  handleNext,
  handleBack,
}) => {
  if (activeStep !== 1) return null;

  return (
    <Box marginTop={2} marginBottom={2}>
      <Start2 />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        paddingTop={2}
        gap={2}
      >
        <Button onClick={handleBack}>Back</Button>
        <Button variant="contained" onClick={handleNext}>
          Start
        </Button>
      </Box>
    </Box>
  );
};

const StepTwoB: React.FC<StepProps> = ({
  activeStep,
  handleNext,
  handleBack,
}) => {
  if (activeStep !== 1) return null;

  return (
    <Box marginTop={2} marginBottom={2}>
      <Start2 />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        paddingTop={2}
        gap={2}
      >
        <Button onClick={handleBack}>Back</Button>
        <Button variant="contained" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

const Restart: React.FC<StepProps> = ({ activeStep, handleReset }) => {
  if (activeStep !== 2) return null;

  return (
    <Box marginTop={2} marginBottom={2}>
      <Typography variant="h5">Finished</Typography>
      <Button onClick={handleReset}>Restart</Button>
    </Box>
  );
};

const steps = ["Stage One", "Stage Two", "Restart"];

export default function DataPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [subStep, setSubStep] = useState(0);

  const handleNext = () => {
    // If on Step 1A, go to Step 1B
    if (activeStep === 0 && subStep === 0) {
      setSubStep(1);
    }

    // If on Step 1B, go to Step 1C
    else if (activeStep === 0 && subStep === 1) {
      setSubStep(2); // Go to StepOneC
    }

    // If on Step 1C, go to Step 2A
    else if (activeStep === 0 && subStep === 2) {
      setActiveStep((prev) => prev + 1);
      setSubStep(0); // Reset substep
    }

    // If on Step 2A, go to Step 2B
    else if (activeStep === 1 && subStep === 0) {
      setSubStep(1);
    }

    // If on Step 2B, go to Restart
    else if (activeStep === 1 && subStep === 1) {
      setActiveStep((prev) => prev + 1);
      setSubStep(0);
    }
  };

  const handleBack = () => {
    // If on Step 1C, go back to Step 1B
    if (activeStep === 0 && subStep === 2) {
      setSubStep(1);
    }

    // If on Step 1B, go back to Step 1A
    if (activeStep === 0 && subStep === 1) {
      setSubStep(0);
    }

    // If on Step 2B, go back to Step 2A
    else if (activeStep === 1 && subStep === 1) {
      setSubStep(0);
    }

    // If on Step 2A, go back to Step 1B
    else if (activeStep === 1 && subStep === 0) {
      setActiveStep((prev) => prev - 1);
      setSubStep(1);
    }

    // Else, go back one main step
    else {
      setActiveStep((prev) => prev - 1);
    }
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box>
      {
        // Render the Stepper with step labels
      }
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {
        //Render the active step component based on activeStep and subStep values
      }
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {
          // If on main Step 1 and subStep 1, render StepOneA
        }
        {activeStep === 0 && subStep === 0 && (
          <StepOneA
            activeStep={activeStep}
            handleNext={handleNext}
            handleReset={handleReset}
          />
        )}
        {
          // If on main Step 1 and subStep 2, render StepOneB
        }
        {activeStep === 0 && subStep === 1 && (
          <StepOneB
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
          />
        )}
        {
          // If on main Step 1 and subStep 3, render StepOneC
        }
        {activeStep === 0 && subStep === 2 && (
          <StepOneC
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
          />
        )}
        {activeStep === 1 && subStep === 0 && (
          <StepTwoA
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
          />
        )}
        {activeStep === 1 && subStep === 1 && (
          <StepTwoB
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
            handleReset={handleReset}
          />
        )}
        {activeStep === 2 && (
          <Restart activeStep={activeStep} handleReset={handleReset} />
        )}
      </Box>
    </Box>
  );
}
