import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import ImageListItem from "@mui/material/ImageListItem";

export const Product = ({name, src, desc, path}) => {
    return (
        <ImageListItem key={path} sx={{margin: '10px'}}>
            <img
                src={src}
                srcSet={src}
                alt={name}
                loading="lazy"
                id={path}
            />
            <ImageListItemBar
                title={name}
                subtitle={desc}
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
    );
}