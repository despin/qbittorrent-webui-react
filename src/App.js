import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Hidden, Button, TextField } from "@material-ui/core";
import Api from "./providers/api";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

function App() {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const [torrentData, setTorrentData] = useState({});


  const handleRefreshData = async () => {
    const {data} = await Api.getTorrentData();
  };

  const handleLogin = () => {
    Api.login()
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <TextField id="username" label="Username" onChange={(event) => setUsername(event.target.value)} />
          <TextField id="password" label="Password" onChange={(event) => setPassword(event.target.value)}/>
          <Button onClick={handleRefreshData()}>Refresh</Button>
          <Button onClick={handleLogin()}>Login</Button>
        </Paper>
      </Grid>
      <Hidden xsDown>
        <Grid item sm={4} md={3}>
          <Paper className={classes.paper}>
            user: {username};
            pass: {password};
          </Paper>
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={8} md={9}>
        <Paper className={classes.paper}>{torrentData}</Paper>
      </Grid>
    </Grid>
  );
}

export default App;
