import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function GlobalInput(props) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    props.sendValue(e.target.value);
  };

  return (
    <TextField
      label="Size"
      id="outlined-size-small"
      value={value}
      size="small"
      onChange={handleChange}
    />
  );
}
