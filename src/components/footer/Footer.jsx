import React from 'react';
import { SocialMedia } from '../socialMedia/SocialMedia';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Email';
import ListItemIcon from '@mui/material/ListItemIcon';

export function Footer() {
    return (
        <footer>
            <Box
                bgcolor='text.secondary'
                color='white'
            >
                <Container
                    maxWidth="sm"
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2 }}
                    >
                        LOGO
                            </Typography>
                </Container>

                <Container maxWidth="sm" >
                    <SocialMedia />
                </Container>

                <Container
                    maxWidth="sm"
                >
                    <div style={{
                        margin: 'auto',
                        width: '50%'
                    }}>
                        <List>

                            <ListItem
                                key={1}
                            >
                                <ListItemIcon>
                                    <PhoneIcon />
                                </ListItemIcon>
                                <ListItemText primary={'(+52) 666-666-7689'} />
                            </ListItem>

                            <ListItem
                                key={1}
                            >
                                <ListItemIcon>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText primary={'email.contacto@name.com'} />
                            </ListItem>

                        </List>
                    </div>
                </Container>
            </Box>
        </footer>
    )
}