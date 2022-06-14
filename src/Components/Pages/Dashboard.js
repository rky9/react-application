import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import GlobalInput from "../Common/Input";
import GlobalButton from "../Common/Button";
import ContactList from "../Common/ContectList";
export default function Dashboard() {
  const [val, setVal] = React.useState("");
  const [sendData, setSendData] = React.useState([{}]);
  const inputChange = (valueis) => {
    setVal(valueis);
  };
  const addContact = () => {
    setSendData([...sendData, { name: val, email: "rajesh.coer@gmail.com" }]);
    setVal("");
  };
  return (
    <Box>
      <Paper
        elevation={3}
        square
        variant="outlined"
        style={{ marginBottom: "5px" }}
      >
        <h4>Contact List</h4>
      </Paper>
      <Paper elevation={3} square style={{ marginBottom: "5px" }}>
        <GlobalInput
          placeholder={"Enter contect name"}
          sendValue={inputChange}
        />
        <GlobalButton
          name={"Add"}
          color={"primary"}
          variant="contained"
          onClick={addContact}
        />
      </Paper>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            All Lists
          </Typography>
          <ContactList data={sendData} />
        </CardContent>
        <CardActions>clear</CardActions>
      </Card>
    </Box>
  );
}
