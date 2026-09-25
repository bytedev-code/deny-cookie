import { Paper, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CookieBanner() {
  return (
    <Paper
      elevation={6}
      sx={{
        maxWidth: 800,
        width: "100%",
        mx: "auto",
        p: 2,
        borderRadius: 3,
      }}
    >
      <Stack direction={{ xs: "row" }} spacing={2} sx={{ alignItems: "center" }}>
        <Typography variant="body2" sx={{ flex: 1 }}>
          Das hier ist ein Cookie Banner.
        </Typography>
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" >
            Ablehnen
          </Button>
          <Button variant="contained">
            Akzeptieren
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );

}
