import React from "react";

import {
    Drawer,
    List,
    ListItem,
    ListItemText
} from '@mui/material';

export default function Menu(props: {
    menuOpen: boolean,
    setMenuOpen: (a: boolean) => void
}) {
    const {
        menuOpen,
        setMenuOpen
    } = props;

    return (
        <Drawer
            anchor="top"
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
        >
            <List>
                <ListItem button={true}>
                    <ListItemText>Initiator Set</ListItemText>
                </ListItem>
                <ListItem button={true}>
                    <ListItemText>Vulpine Home</ListItemText>
                </ListItem>
            </List>
        </Drawer>
    );
}
