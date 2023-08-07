import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import { useEffect } from "react";

const css = {
  mark: {
    position: "absolute",
    transform: "rotate(90deg)",
    left: "-76px",
    top: "50%",
  },
  chip: { margin: "-2px 4px 0" },
};

export default function Copyright() {
  useEffect(() => {
    console.log("rr-Copyright");
  }, []);

  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center">
        Vercel &diams; Vite &diams; React &diams; TS &diams; Material UI
      </Typography>
      <Box sx={css.mark}>
        <span>Copyright </span>
        <Link color="inherit" href="https://98.ru/">
          <Chip sx={css.chip} label="98.ru" size="small" variant="outlined" />
        </Link>
        {` © ${new Date().getFullYear()}`}
      </Box>
    </>
  );
}
