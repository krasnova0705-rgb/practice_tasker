import { Alert, type AlertColor, Box, Button, Snackbar, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Headers } from "../components/header"
import { Footers } from "../components/footer"
import {Tasks} from "../storage/data"


export const TaskPage = () => {
    
    const {id} = useParams()

    const navigate = useNavigate()

    const [textForm,setTextForm] = useState('')
    const [openAlert, setOpenAlert] = useState(false)
    const [textAlert, setTextAlert] = useState('')
    const [typeAlert,setTypeAlert] = useState<AlertColor>("success")
    const [hint, setHint] = useState(false)
    


    const handleCheckAnswer = () => {
        if (Number(textForm) === Tasks[Number(id)-1].answer) {
            setTextAlert("Молодец, правильно!!!")
            setTypeAlert("success")
            setOpenAlert(true)

        } else {
            setTextAlert("Неправильно, попробуй еще раз")
            setTypeAlert('error')
            setOpenAlert(true)

        }
    }

    return(
        <Box className="flex flex-col min-h-screen">
            <Headers/>
            <Typography className="text-[#583300] !text-2xl !font-medium !mt-6 !ml-6">{Tasks[Number(id)-1].name}</Typography>

            <Typography className="!ml-6 !my-6 text-[#583300] !font-semibold !text-lg">Задача:{id}</Typography>

            <Box className="flex items-center justify-center flex-col gap-2">

                <Box className="flex border-2 p-2 !mx-6 border-[#583300]">
                    <Typography className="text-[#583300]">
                        {Tasks[Number(id)-1].text}
                     </Typography>

                    {Number(id) === 8 && (
                        <Box className="mt-4 p-2 bg-gray-50 rounded max-h-60 overflow-auto">
                            <Typography className="text-xs whitespace-pre font-mono">
                                {Tasks[Number(id)-1].array?.join('\n')}
                            </Typography>
                        </Box>
                    )}

                    {Number(id)===10 && (
                        <Button variant="contained"  href="/files/names.txt" download="names.txt" className="!ml-6 !bg-[#583300]">Скачать файл</Button>
                    )}
                </Box>

                <Stack direction={"row"} className="!my-4">
                    <TextField className="!border-[#583300]" id="outlined-basic" label="Введите ответ" variant="outlined" value={textForm} onChange={(event) => setTextForm(event.target.value)}  />
                    <Button variant="contained" className="!ml-6 !bg-[#583300]" onClick={handleCheckAnswer}>Проверить</Button>

                </Stack>
            </Box>

            <Box className=" !my-4">
                <Button variant="contained" className="!ml-6 !bg-[#583300]" onClick={() => setHint(!hint)}>{hint ? "Скрыть ответ" : "Посмотреть ответ"}</Button>
                {hint && <Typography className="!ml-6">Правильный ответ: {Tasks[Number(id)-1].answer}</Typography>}
            </Box>

            
            <Box className="flex justify-between !mt-25">
                
                <Button variant="outlined" className="!ml-6 !border-[#583300] !text-[#583300]" onClick={() => navigate('/')}>Вернуться к списку</Button>
                <Button variant="outlined" onClick={() => {
                    if (Number(id) < Tasks.length){
                        navigate(`/task/${Number(id)+1}`)
                    } else{
                        setTextAlert("Это была последняя задача!!")
                        setTypeAlert("info")
                        setOpenAlert(true)
                    }
                }} className="!mr-6 !border-[#583300] !text-[#583300]">Следующая задача</Button>
                
            </Box>

            <Snackbar  open={openAlert}  anchorOrigin={{vertical:'top',horizontal: 'center'}} autoHideDuration={5000} onClose={() => setOpenAlert(false)}>
                <Alert severity={typeAlert} className="!w-150 border-3" onClose={() => setOpenAlert(false)}>{textAlert}</Alert>
            </Snackbar>
            <Footers/>
        </Box>

    )
}