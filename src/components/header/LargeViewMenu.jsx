import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { pages } from './pages';
import { HeaderLogo } from "./HeaderLogo";

export const LargeViewMenu = () => {
    function changePath({target}){
        window.location.replace(`/${target.id}`)
       
    }

    return (
        <>
            <HeaderLogo/>
            <Box
                sx={{
                    flexGrow: 1,
                    display: { xs: "none", md: "flex" }
                }}
            >
                {pages.map((page) => {
                    return (
                    <Button
                        key={page.url}
                        // href={page.url}
                        id={page.url}
                        onClick={changePath}
                        sx={{
                            my: 2,
                            color: "white",
                            display: "block",
                            width: "25%"
                        }}
                    >
                        {page.name}
                    </Button>
                )})}
            </Box>
        </>

    );
}