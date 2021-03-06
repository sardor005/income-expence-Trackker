import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";

const Main = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance 100$
        </Typography>
        <Typograph
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        > Try saying: Add income for 100$</Typograph>
      </CardContent>
      <Cardcontent className={classes.cartContent}>
        <Grid container>
            sas
        </Grid>
      </Cardcontent>
    </Card>
  );
};

export default Main;
