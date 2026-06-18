import { Box, Button, Typography } from "@mui/material";
import type { Task } from "../types/Task";

export const TaskAdditionalContent = ({ task }: { task: Task }) => {
	return (
		<>
			{task.additionalInformation?.type === "numbers" && (
				<Box className="mt-4 p-2 bg-gray-50 rounded max-h-60 overflow-auto">
					<Typography className="text-xs whitespace-pre font-mono">
						{task.additionalInformation.array.join("\n")}
					</Typography>
				</Box>
			)}

			{task.additionalInformation?.type === "file" && (
				<Button
					variant="contained"
					href={task.additionalInformation.linkFile}
					download={task.additionalInformation.downloadFile}
					className="!ml-6 !bg-[#583300]"
				>
					Скачать файл
				</Button>
			)}
		</>
	);
};
