import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { pages } from './pages';
import Button from "@mui/material/Button";

export const SmallViewMenu = () => {
  const [openedMenu, setAnchorElNav] = React.useState(() => false);

  const handleOpenNavMenu = () => {
    setAnchorElNav(() => !openedMenu);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "none" }
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        open={Boolean(openedMenu)}
        sx={{
          display: { xs: "block", md: "none" },
          width: "40"
        }}
        divider={true}
      >
        {pages.map((page) => (
          <Button href={page.url}>
            <MenuItem key={page.name} >
              <Typography textAlign="center">{page.name}</Typography>
            </MenuItem>
          </Button>

        ))}
      </Menu>
    </Box>
  )
}