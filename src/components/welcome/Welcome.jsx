import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export function Welcome() {
  return (
    <div
      style={{
        // backgroundColor: "blue",
        height: "100vh"
        // color: "green"
        // width: "50%"
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          paddingTop: "2%",
          display: { xs: "none", md: "flex" }
        }}
      >
        Servicios Biotecnológicos del Guadiana S.A de C.V
      </Typography>
      <Box
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          margin: "auto",
          width: "50%",
          height: "50%",
          //   border: "solid",
          paddingTop: "2%",
          paddingBottom: "2%"
        }}
      >
        <img src="pexels-akil-mazumder-1072824-small.jpg" alt="my alt text" />
      </Box>

      <Box
        sx={{
          mr: 2,
          display: {
            lg: "none",
            md: "none"
          }
          //   backgroundColor: "red"
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{
            paddingTop: "5%",
            paddingBottom: "5%",
            display: { xs: "flex", md: "none" }
          }}
        >
          Servicios Biotecnológicos del Guadiana S.A de C.V
        </Typography>
        <img
          src="pexels-akil-mazumder-1072824-small.jpg"
          alt="lkfdsjlk"
          style={{
            // margin: "auto",
            width: "80%",
            height: "80%"
            // padding: "5%",
            // border: "solid"
          }}
        />
      </Box>
    </div>
  );
}
