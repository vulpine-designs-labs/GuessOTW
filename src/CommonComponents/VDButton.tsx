import {
    Button,
    Box
} from "@mui/material";

export type VDButtonColor = "secondary" | "inherit" | "primary" | "success" | "error" | "info" | "warning";

export const VDButton = (props: {
	text: string | React.ReactNode, 
	onClick: () => void,
	colour?: VDButtonColor,
	filled?: boolean
}) => {
	const {
		text,
		onClick,
		colour,
		filled
	} = props;

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center'
			}}
		>
			<Button
				onClick={() => onClick()}
				variant={filled ? "contained" : "outlined"}
				size="small"
				color={colour}
				sx={{
					display: {
						xs: "none",
						md: "block"
					}
				}}
			>
				{text}
			</Button>
			<Button
				onClick={() => onClick()}
				size="medium"
				color={colour}
				sx={{
					display: {
						xs: "block",
						md: "none"
					}
				}}
			>
				{text}
			</Button>
		</Box>
	)
};

export const VDIconButton = (props: {
	children: React.ReactNode, 
	onClick: (a: React.MouseEvent<any, any>) => void,
	colour?: VDButtonColor,
	filled?: boolean
}) => {
	const {
		children,
		onClick,
		colour,
		filled
	} = props;

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center'
			}}
		>
			<Button
				onClick={(e) => onClick(e)}
				variant={filled ? "contained" : "outlined"}
				size="medium"
				color={colour}
				sx={{
					display: {
						xs: "none",
						md: "flex"
					},
					padding: '3px',
					minWidth: 0
				}}
			>
				{children}
			</Button>
			<Button
				onClick={(e) => onClick(e)}
				size="medium"
				color={colour}
				variant={filled ? "contained" : "text"}
				sx={{
					display: {
						xs: "flex",
						md: "none"
					},
					padding: '3px',
					minWidth: 0
				}}
			>
				{children}
			</Button>
		</Box>
	);
};