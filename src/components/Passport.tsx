import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export default function Passport() {
  useEffect(() => {
    console.log("rr-PaymentForm");
  }, []);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Паспорт
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Серия"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Номер"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            required
            id="expDate"
            label="Кем выдан"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Grid item md={12} />
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Дата выдачи"
                slotProps={{
                  textField: {
                    helperText: "YYYY/MM/DD",
                  },
                }}
                format="YYYY/MM/DD"
                defaultValue={dayjs("2022-04-17")}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
      </Grid>
    </>
  );
}
