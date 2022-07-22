import * as React from "react";
import Typography from "@mui/material/Typography";

export const HeaderLogo = () => {
    function changePath() {
        window.location.replace(`/`);
      }
    return (
        <>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
                <a href="/">LOGO2</a>
            </Typography>

            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                onClick={changePath}     
            >
                LOGO
            </Typography>
        </>

    );
}