import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export function Welcome() {
  return (
    <div
      style={
        {
          // backgroundColor: 'blue'
          // color: "green"
          // width: "50%"
        }
      }
    >
      <Typography variant="h1" component="h2">
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
          display: { lg: "none", md: "none" }
          // backgroundColor: 'red'
        }}
      >
        <img
          src="pexels-akil-mazumder-1072824-small.jpg"
          alt="lkfdsjlk"
          style={{
            // margin: "auto",
            width: "100%",
            height: "100%",
            padding: "20%",
            border: "solid"
          }}
        />
      </Box>

      {/* <Typography variant="h3">Quienes somos?</Typography>
      <Typography paragraph={true}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste error
        quasi, tempore ut labore nostrum nulla, aut quo corrupti, ea velit
        accusamus veritatis praesentium obcaecati tempora veniam quas inventore
        sint?
      </Typography>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        aliquam fugiat quae, animi maxime saepe eveniet, veniam eaque odit vel
        placeat. Id qui consequatur velit reprehenderit suscipit debitis nihil
        ea?
      </p>
      <h2>Otra descipción</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
        corporis aperiam nobis quos odio voluptatibus molestias maxime provident
        excepturi, fugiat unde labore, debitis nemo, commodi itaque in? A,
        explicabo earum!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
        corporis aperiam nobis quos odio voluptatibus molestias maxime provident
        excepturi, fugiat unde labore, debitis nemo, commodi itaque in? A,
        explicabo earum!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
        corporis aperiam nobis quos odio voluptatibus molestias maxime provident
        excepturi, fugiat unde labore, debitis nemo, commodi itaque in? A,
        explicabo earum!
      </p> */}
    </div>
  );
}
