import React, { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import {
	AppBar as MuiAppBar,
	Typography,
	Toolbar,
	Button,
	Grid,
	Menu,
	Box,
	useTheme
} from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { AiFillGitlab } from 'react-icons/ai';

import { Context } from '../Common/context';

import {
    VDButton,
    VDIconButton,
    VDButtonColor
} from "../CommonComponents/VDButton";

export function AppBar(props: {
	menuOpen: boolean,
	setMenuOpen: (a: boolean) => void
}) {

	return (
		<AppBarContainer>
			<BarContent
				setMenuOpen={props.setMenuOpen}
				menuOpen={props.menuOpen}
			/>
		</AppBarContainer>
	);
}

const AppBarContainer = (props: {
	children: React.ReactNode
}) => {
	const theme = useTheme();

	return (
		<MuiAppBar
			position="static"
			sx={{
				backgroundColor: `${theme.palette.grey[800]}!important`
			}}
		>
			<Toolbar>
				<Grid container>
					<Grid
						item
						xs={false}
						md={1}
					/>
					<Grid
						item
						xs={12}
						md={10}
						container
						justifyContent="space-between"
						sx={{
							display: 'flex',
							justifyContent: 'space-between'
						}}
					>
						{props.children}
					</Grid>
					<Grid
						item
						xs={false}
						md={1}
					/>
				</Grid>
			</Toolbar>
		</MuiAppBar>
	);
};

const BarContent = (props: {
	menuOpen: boolean,
	setMenuOpen: (a: boolean) => void
}) => {
	const navigate = useNavigate();
	const context = useContext(Context);

	return (
	<>
		<Box
			sx={{
				display: 'flex',
				gap: 1
			}}
		>
			<Button
				onClick={() => navigate("/")}
			>
				<img
					alt="Vulpine Designs home"
					src="./images/logo.png"
					height={47}
				/>
				<Typography 
					variant='h6'
					color="secondary"
					sx={{
						textTransform: 'none'
					}} 
				>
					GuessOTW
				</Typography>
			</Button>
			<ButtonsBase
				menuButtonIcon={
					<>
						<Box sx={{ marginTop: 0.3, marginLeft: 0.7 }}>
							Apps
						</Box>
						<KeyboardArrowDownIcon />
					</>
				}
				theme="info"
				overideOnClick={() => props.setMenuOpen(!props.menuOpen)}
			>
				<VDButton
					text="INITIATOR SET"
					onClick={() => {}}
					colour="info"
				/>
				<VDButton
					text="Vulpine Home"
					onClick={() => {}}
					colour="info"
				/>
			</ButtonsBase>
		</Box>
		<Box
			sx={{
				display: 'flex',
				gap: 2
			}}
		>
			<Box
				sx={{
					display: {
						xs: 'none',
						md: 'flex'
					},
					paddingRight: 3
				}}
			>
				<VDIconButton
					onClick={() => context.setDarkmode(!context.darkMode)}
					colour="info"
					filled={true}
				>
					{context.darkMode ? 
						<WbSunnyIcon /> :
						<NightlightIcon />

					}
				</VDIconButton>
			</Box>
			<ButtonsBase
				menuButtonIcon={
					<>
						<Box sx={{ marginTop: 0.3, marginLeft: 0.7 }}>
							Links
						</Box>
						<KeyboardArrowDownIcon />
					</>
				}
				theme="secondary"
				menuEnd={true}
			>
				<VDIconButton
					colour="secondary"
					onClick={() => window.location.replace("https://twitter.com/VulpineDesigns")}
				>
					<TwitterIcon />
				</VDIconButton>
				<VDIconButton
					colour="secondary"
					onClick={() => window.location.replace("https://www.youtube.com/channel/UCN0TZ3evdMxD0J4WOQjPsLQ")}
				>
					<YouTubeIcon />
				</VDIconButton>
				<VDIconButton
					colour="secondary"
					onClick={() => window.location.replace("https://www.linkedin.com/company/vulpine-designs-ltd")}
				>
					<LinkedInIcon />
				</VDIconButton>
				<VDIconButton
					colour="secondary"
					onClick={() => window.location.replace("https://gitlab.vulpinedesigns.com/")}
				>
					<AiFillGitlab fontSize={24} />
				</VDIconButton>
			</ButtonsBase>
		</Box>
	</>);
};

const ButtonsBase = (props: {
	children: React.ReactNode,
	menuButtonIcon: React.ReactNode,
	theme?: VDButtonColor,
	menuEnd?: boolean,
	overideOnClick?: () => void
}) => {
	const {
		children,
		menuButtonIcon,
		theme,
		menuEnd,
		overideOnClick
	} = props;

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = !!anchorEl;
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Box
				sx={{
					display: {
						xs: "none",
						md: "flex",
						gap: 12
					}
				}}
			>
				{children}
			</Box>
			<Box
				sx={{
					display: {
						xs: "flex",
						md: "none",
						alignItems: "center"
					}
				}}
			>
				<VDIconButton
					onClick={(e) => overideOnClick ? overideOnClick() : 
						handleClick(e)
					}
					colour={theme}
					filled={true}
				>
					{menuButtonIcon}
				</VDIconButton>
				<Menu
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: menuEnd ? "right" : "left",
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
				>
					{children}
				</Menu>
			</Box>
		</>
	)
};
