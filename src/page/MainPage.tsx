import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { TASKS } from "../storage/data";

export const MainPage = () => {
	const navigate = useNavigate();
	return (
		<Box className="min-h-screen flex flex-col items-center justify-center">
			<Header />
			<Box>
				<Typography className="text-center text-[#583300] !text-lg !my-6">
					<strong>Раздел: последние задачи.</strong> <br /> Здесь вы можете
					решить 10 задач, опубликованных недавно{" "}
				</Typography>

				<Stack
					spacing={2}
					className=" flex items-center justify-center border-2 rounded-xl border-[#583300] mb-4"
				>
					{TASKS.map(
						(
							task, // task хранит в себе одну задачу из массива Tasks и делает кнопку для каждой задачи
						) => (
							<Button
								key={task.number}
								variant="text"
								className="!text-[#583300]"
								onClick={() => navigate(`/task/${task.number}`)}
							>
								{task.number}. {task.name}
							</Button>
						),
					)}
				</Stack>
			</Box>
			<Footer />
		</Box>
	);
};
