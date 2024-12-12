import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const Grids = () => {
  return (
    <Grid container spacing={2}>
      {/* Outer Grid */}
      <Grid item xs={12}>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Typography variant="h6">Outer Grid Item 1 (Full Width)</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Typography variant="h6">Outer Grid Item 2 (Half Width)</Typography>
          {/* Nested Grid */}
          <Grid container spacing={2} style={{ marginTop: "16px" }}>
            <Grid item xs={6}>
              <Paper elevation={3} style={{ padding: "16px" }}>
                <Typography>Nested Grid Item 1</Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={3} style={{ padding: "16px" }}>
                <Typography>Nested Grid Item 2</Typography>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: "16px" }}>
                <Typography>Nested Grid Item 3 (Full Width)</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Typography variant="h6">Outer Grid Item 3 (Half Width)</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Grids;
