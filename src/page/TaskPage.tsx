import {
	Alert,
	type AlertColor,
	Box,
	Button,
	Snackbar,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { TASKS } from "../storage/data";
import { TaskAdditionalContent } from "../components/additionalContent";

export const TaskPage = () => {
	const { id } = useParams();

	const navigate = useNavigate();

	const [textForm, setTextForm] = useState("");
	const [openAlert, setOpenAlert] = useState(false);
	const [textAlert, setTextAlert] = useState("");
	const [typeAlert, setTypeAlert] = useState<AlertColor>("success");
	const [hint, setHint] = useState(false);

	const taskId = TASKS[Number(id) - 1];

	const toast = (text: string, type: "success" | "error") => {
		setTextAlert(text);
		setTypeAlert(type);
		setOpenAlert(true);
	};

	const handleCheckAnswer = () => {
		if (Number(textForm) === taskId.answer) {
			toast("Молодец, правильно!", "success");
			return;
		}
		toast("Неправильно, попробуй еще раз!", "error");
	};

	const handleNextTask = () => {
		if (taskId.number < TASKS.length) {
			navigate(`/task/${taskId.number + 1}`);
		} else {
			setTextAlert("Это была последняя задача!");
			setTypeAlert("info");
			setOpenAlert(true);
		}
	};

	return (
		<Box className="flex flex-col min-h-screen">
			<Header />
			<Typography className="text-[#583300] !text-2xl !font-medium !mt-6 !ml-6">
				{taskId.name}
			</Typography>

			<Typography className="!ml-6 !my-6 text-[#583300] !font-semibold !text-lg">
				Задача:{id}
			</Typography>

			<Box className="flex items-center justify-center flex-col gap-2">
				<Box className="flex border-2 p-2 !mx-6 border-[#583300]">
					<Typography className="text-[#583300]">{taskId.text}</Typography>

					<TaskAdditionalContent task={taskId} />
				</Box>

				<Stack direction={"row"} className="!my-4">
					<TextField
						className="!border-[#583300]"
						id="outlined-basic"
						label="Введите ответ"
						variant="outlined"
						value={textForm}
						onChange={(event) => setTextForm(event.target.value)}
					/>
					<Button
						variant="contained"
						className="!ml-6 !bg-[#583300]"
						onClick={handleCheckAnswer}
					>
						Проверить
					</Button>
				</Stack>
			</Box>

			<Box className=" !my-4">
				<Button
					variant="contained"
					className="!ml-6 !bg-[#583300]"
					onClick={() => setHint(!hint)}
				>
					{hint ? "Скрыть ответ" : "Посмотреть ответ"}
				</Button>
				{hint && (
					<Typography className="!ml-6">
						Правильный ответ: {taskId.answer}
					</Typography>
				)}
			</Box>

			<Box className="flex justify-between !my-4">
				<Button
					variant="outlined"
					className="!ml-6 !border-[#583300] !text-[#583300]"
					onClick={() => navigate("/")}
				>
					Вернуться к списку
				</Button>
				<Button
					variant="outlined"
					onClick={handleNextTask}
					className="!mr-6 !border-[#583300] !text-[#583300]"
				>
					Следующая задача
				</Button>
			</Box>

			<Snackbar
				open={openAlert}
				anchorOrigin={{ vertical: "top", horizontal: "center" }}
				autoHideDuration={5000}
				onClose={() => setOpenAlert(false)}
			>
				<Alert
					severity={typeAlert}
					className="!w-150 border-3"
					onClose={() => setOpenAlert(false)}
				>
					{textAlert}
				</Alert>
			</Snackbar>
			<Footer />
		</Box>
	);
};
