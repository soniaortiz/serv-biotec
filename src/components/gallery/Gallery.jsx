import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export function Gallery() {
  return (
    <ImageList
      sx={{
        width: 500,
        height: 450
      }}
    >
      <ImageListItem key="subheader" cols={2}>
        <ListSubheader>December</ListSubheader>
      </ImageListItem>

      <ImageListItem key={1}>
        <img
          src={"logo512.png"}
          srcSet={"logo512.png"}
          alt={"item.title"}
          loading="lazy"
        />
        <ImageListItemBar
          title={"item.title"}
          subtitle={"item.author"}
          actionIcon={
            <IconButton
              sx={{ color: "rgba(255, 255, 255, 0.54)" }}
              aria-label={`info about ${"item.title"}`}
            >
              <InfoIcon />
            </IconButton>
          }
        />
      </ImageListItem>
    </ImageList>
  );
}
