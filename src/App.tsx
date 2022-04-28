import React, { useState } from 'react';

import {
	HashRouter,
	Routes,
	Route
} from 'react-router-dom';

import { 
    ThemeProvider 
} from '@mui/material/styles';
import {
    CssBaseline
} from '@mui/material';

import { Context, ContextProps } from './Common/context';
import { makeTheme } from './Common/theme'

import HomePage from './HomePage';

function App() {
	
	const userDarkMode = localStorage.getItem('userSelectedMode');
    let defaultDarkMode = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if(userDarkMode) {
        defaultDarkMode = userDarkMode === 'dark' ? true : false;
    }
	
    const [themeData, setThemeData] = useState({
        darkMode: defaultDarkMode,
        theme: makeTheme(defaultDarkMode ? 'dark' : 'light')
    });
	
	const contextValue: ContextProps = {
		setDarkmode: (dark: boolean) => {
			setThemeData({
				darkMode: dark,
				theme: makeTheme(dark ? 'dark' : 'light')
			});
			localStorage.setItem('userSelectedMode', dark ? 'dark' : 'light');
		},
		darkMode: defaultDarkMode
	};


	return (
		<ThemeProvider theme={themeData.theme}>
			<CssBaseline />
			<Context.Provider value={contextValue}>
				<HashRouter>
					<Routes>
						<Route
							path="/"
							element={<HomePage />}
						/>
					</Routes>
				</HashRouter>
			</Context.Provider>
		</ThemeProvider>
	);
}

export default App;
