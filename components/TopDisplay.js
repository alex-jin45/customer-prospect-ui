import IconButton from "@mui/material/IconButton";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { ColorModeContext, tokens } from "../public/theme";
import { useContext } from "react";
import { Box, useTheme, Grid } from "@mui/material";

const TopDisplay = () => {
  const theme = useTheme();
  //const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Grid container spacing={0}>
      <Grid item xs={11}>
        <Box
          ml={2}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <h2>Quantified Prospects for New Client</h2>
        </Box>
      </Grid>
      <Grid item xs={1} mt={2}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default TopDisplay;
