import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Typography } from "@mui/material";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>
            <Typography
              sx={{
                fontFamily: "inherit",
              }}
            >
              Ten
            </Typography>
          </MenuItem>
          <MenuItem value={20}>
            <Typography
              sx={{
                fontFamily: "inherit",
              }}
            >
              Twenty
            </Typography>
          </MenuItem>
          <MenuItem value={30}>
            <Typography
              sx={{
                fontFamily: "inherit",
              }}
            >
              Thirty
            </Typography>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
