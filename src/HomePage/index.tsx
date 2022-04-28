import { useState } from 'react';

import { Box } from '@mui/material';

import { AppBar } from './AppBar';
import Contenty from './Content'
import Menu from './Menu';

import './index.css';

export default function HomePage() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <>
        <AppBar
            setMenuOpen={setMenuOpen}
            menuOpen={menuOpen}
        />
        <Menu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
        />
        <div className="main">
            <Box className="content">
                <Contenty />
            </Box>
        </div>
    </>
    );
}
