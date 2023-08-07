import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FIOForm from "./components/FIOForm";
import Passport from "./components/Passport";
import Copyright from "./components/Copyright";
import PromptSetup from "./components/Prompt";
import { useEffect, useState } from "react";
import { MainContext, Step_1_Context, Store, Step_2_Context, Step_3_Context } from "./comescript/MainContext";

const css = {
  paper: { my: { xs: 3, md: 8 }, p: { xs: 3, md: 5 } },
  shadow: {
    boxShadow:
      "0 1px 1px hsl(0deg 0% 0% / 0.05), \
       0 2px 2px hsl(0deg 0% 0% / 0.05), \
       0 4px 4px hsl(0deg 0% 0% / 0.05), \
       0 8px 8px hsl(0deg 0% 0% / 0.05), \
       0 16px 16px hsl(0deg 0% 0% / 0.05)",
  },
  stepper: { py: { xs: 3, md: 5 } },
  apbar: {
    position: "relative",
    borderBottom: (t: { palette: { divider: any } }) =>
      `1px solid ${t.palette.divider}`,
  },
  box: { display: "flex", justifyContent: "flex-end" },
  button: { mt: 3, ml: 1 },
};

const steps = ["Параметры", "Ф. И. О.", "Паспорт"];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <Step_1_Context.Provider value={Store.step_1}><PromptSetup /></Step_1_Context.Provider>;
    case 1:
      return <Step_2_Context.Provider value={Store.step_2}><FIOForm /></Step_2_Context.Provider>;
    case 2:
      return <Step_3_Context.Provider value={Store.step_3}><Passport /></Step_3_Context.Provider>;
    default:
      throw new Error("Unknown step");
  }
}

export default function App() {
  useEffect(() => {
    console.log("rr-App");
  }, []);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <MainContext.Provider value={Store}>
      <Box>
        <AppBar
          position="absolute"
          color="default"
          elevation={0}
          sx={css.apbar}
        >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Форма запроса персональных данных клиента <i>/ Like an Orphaned Service</i>
            </Typography>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ ...css.paper, ...css.shadow }}
          >
                      <Typography component="h1" variant="h6" align="center">
            Не делитесь данными без доверия к адресату
          </Typography>
            <Stepper activeStep={activeStep} sx={css.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
              </>
            ) : (
              <form>
                {getStepContent(activeStep)}
                <Box sx={css.box}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={css.button}>
                      Назад
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={css.button}
                  >
                    {activeStep === steps.length - 1 ? "Запрос" : "Далее"}
                  </Button>
                </Box>
              </form>
            )}
          </Paper>
          <Copyright />
        </Container>
      </Box>
    </MainContext.Provider>
  );
}
