import { useState } from "react";
import "./App.css";
import { Box, Container, Typography, Button, Paper } from "@mui/material";
import BasicSelect from "./components/select-mui";

const services = ["Service 1", "Service 2", "Service 3"];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container
        sx={{
          bgcolor: "darkorange",
          height: "100vh",
          width: {
            xs: 250,
            md: 500,
          },
        }}
      >
        {/* <Container className='bg-red-500'> */}
        <Typography
          variant="h1"
          sx={{
            my: 4,
            textAlign: "center",
            color: "primary.main",
          }}
        >
          I love Naral
        </Typography>
        <BasicSelect />
        <Button
          sx={{
            ":hover": {
              bgcolor: "darkgoldenrod",
            },

            bgColor: {
              xs: "black",
              md: "tomato",
            },
          }}
        >
          this is a button
        </Button>
        {/* <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}> */}
        <Box className="flex flex-col justify-between">
          {services.map((s, idx) => {
            return (
              <Paper variant="elevation" key={idx}>
                <Typography
                  fontFamily={"inherit"}
                  variant="h3"
                  sx={{
                    m: 5,
                  }}
                >
                  {s}
                </Typography>
              </Paper>
            );
          })}
        </Box>
      </Container>
    </>
  );
}

export default App;
