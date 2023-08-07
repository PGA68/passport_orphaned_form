import Typography from "@mui/material/Typography";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useContext, useEffect, useState } from "react";
import { Step_1_Context } from "../comescript/MainContext";

export default function PromptSetup() {
  useEffect(() => {
    // console.log("rr-Prompt @UE\nurl = %s\nkey = %s", url, key);
    // return () => {
    //   console.log(
    //     "@UE valueToken = %s\n valueURL = %s\n valueToken = %s",
    //     valueToken,
    //     valueURL,
    //     valueToken
    //   );
    //   console.log(
    //     "dettach\n url = %o\n key = %o \n st1.url = %o\n st1.key = %o",
    //     url,
    //     key,
    //     st1.url,
    //     st1.key
    //   );
    // };
  }, []);

  const st1 = useContext(Step_1_Context);
  const { chk, key, url } = st1;
  // console.log("st1 = %o", st1);
  const [showURL, setShowURL] = useState(false);
  const [showToken, setShowToken] = useState(false);
  const [valueToken, setValueToken] = useState(key);
  const [valueURL, setValueURL] = useState(url);
  const [valueNoCache, setValueNoCache] = useState(chk);

  const handleClickShowURL = () => {
    setShowURL((show) => !show);
  };
  const handleClickShowToken = () => {
    setShowToken((show) => !show);
  };

  const handleMouseDownURL = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleMouseDownToken = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleChangeToken = (event: React.ChangeEvent<HTMLInputElement>) => {
    st1.key = event.target.value;
    setValueToken(st1.key);
    // console.log(
    //   "Change Token event = %o\n valueToken = %s",
    //   event.target.value,
    //   valueToken
    // );
  };
  const handleChangeURL = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setValueURL(knode.url);
    st1.url = event.target.value;
    setValueURL(st1.url);
    // console.log(
    //   "Change URL event = %o\n value = %s",
    //   event.target.value,
    //   valueURL
    // );
  };
  const handleToogleCache = (event: React.ChangeEvent<HTMLInputElement>) => {
    st1.chk = event.target.checked
    setValueNoCache(st1.chk);
    // console.log("TogleCache = %o\n value = %o", event, event.target.checked);
  };

  return (
    <>
      <Typography variant="h6" my="1rem" gutterBottom>
        Параметры подключения
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <TextField
            required
            id="ctoken"
            name="cToken"
            label="Ключ (token)"
            fullWidth
            helperText="API key подсказок dadata.ru"
            autoComplete="webauthn"
            variant="outlined"
            onChange={handleChangeToken}
            value={valueToken}
            type={showToken ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowToken}
                    onMouseDown={handleMouseDownToken}
                    edge="end"
                  >
                    {showToken ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="curl"
            name="cURL"
            label="URL endpoint API"
            helperText="URL сервиса-адресата принимающего данные"
            fullWidth
            autoComplete="url"
            variant="outlined"
            onChange={handleChangeURL}
            value={valueURL}
            type={showURL ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowURL}
                    onMouseDown={handleMouseDownURL}
                    edge="end"
                  >
                    {showURL ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color="secondary"
                name="noSaveCard"
                onChange={handleToogleCache}
                checked={valueNoCache}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Не запоминать в браузере значения полей (чужой браузер)"
          />
        </Grid>
      </Grid>
    </>
  );
}
