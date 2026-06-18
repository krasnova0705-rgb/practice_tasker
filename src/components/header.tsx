import { Box, Typography } from "@mui/material";

export const Header = () => {
	return (
		<Box className="w-full bg-[#ffd9a8] h-[50px] flex items-center p-8">
			<Typography className="text-[#583300] !text-4xl !font-bold">
				Задачник
			</Typography>
		</Box>
	);
};
