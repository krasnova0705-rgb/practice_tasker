import { Box, Button, Stack, Typography } from "@mui/material"
import { Headers } from "../components/header"
import { Footers } from "../components/footer"
import {Tasks} from "../storage/data"
import { useNavigate } from "react-router-dom"

export const MainPage = () => {
    const navigate = useNavigate()
    return(
        <Box className="min-h-screen flex flex-col items-center jastufi-center">
            <Headers/>
            <Box >
                <Typography className="text-center text-[#583300] !text-lg !my-6"><strong>Раздел: последние задачи.</strong> <br/> Здесь вы можете решить 10 задач, опубликованных недавно </Typography>

                <Stack spacing={2} className=" flex items-center jastufi-center border-2 rounded-xl border-[#583300] mb-4">
                    {Tasks.map((task) => ( // task хранит в себе одну задачу из массива Tasks и делает кнопку для каждой задачи
                        <Button 
                        variant="text" 
                        className="!text-[#583300]"
                        onClick={() => navigate(`/task/${task.number}`)}
                        >
                            {task.number}. {task.name}
                        </Button>
                    ))}
                </Stack>
            </Box>
            <Footers/>
        </Box>
    )
}