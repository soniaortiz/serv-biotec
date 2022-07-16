import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { pages } from './pages';
import { HeaderLogo } from "./HeaderLogo";
export const LargeViewMenu = () => {

    return (
        <>
            <HeaderLogo/>
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" }
                }}
            >
                {pages.map((page) => (
                    <Button
                        key={page.url}
                        href={page.url}
                        // onClick={handleCloseNavMenu}
                        sx={{
                            my: 2,
                            color: "white",
                            display: "block",
                            width: "25%"
                        }}
                    >
                        {page.name}
                    </Button>
                ))}
            </Box>
        </>

    );
}