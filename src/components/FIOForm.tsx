import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { MuiTelInput } from "mui-tel-input";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState} from "react";
// import { MainContext } from "../comescript/MainContext";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import FirstName from "./FirstName";

export default function FIOForm() {
  useEffect(() => {
    console.log("rr-FIOForm");
  }, []);

  // const MainC = useContext(MainContext);

  const [PhoneValue, setValue] = useState("");
  const handlePhoneChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom />
      <Grid container spacing={3}>

        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Фамилия"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <FirstName />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            id="PatroNymic"
            name="PatroNymic"
            label="Отчество"
            fullWidth
            autoComplete="midle-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12} sm={6}>
          <MuiTelInput
            required
            id="phone"
            name="phone"
            label="Номер телефона"
            fullWidth
            autoComplete="shipping telephone"
            value={PhoneValue}
            onChange={handlePhoneChange}
          />
        </Grid>
        <Grid item sm={6} />
        <Grid item sm={12} />
        <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                label="Дата Рождения"
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
