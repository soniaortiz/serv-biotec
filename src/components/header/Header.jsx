import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import {SmallViewMenu} from './SmallViewMenu';
import {LargeViewMenu} from './LargeViewMenu';

export const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SmallViewMenu />
          <LargeViewMenu/>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
