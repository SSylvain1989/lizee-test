import { useState, useEffect } from "react"
import dayjs, { Dayjs } from "dayjs"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers"
import TextField from "@mui/material/TextField"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import Box from "@mui/material/Box"
import CustomButton from "../CustomButton/CustomButton"

export default function HomeHeader() {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs(new Date()))
  const onChangeStartDate = (newValue: Dayjs | null) => {
    setStartDate(newValue)
  }
  const [endDate, setEndDate] = useState<Dayjs | null>(
    dayjs(new Date()).add(2, "day")
  )
  const onChangeEndDate = (newValue: Dayjs | null) => {
    setEndDate(newValue)
  }

  const [openStartDate, setOpenStartDate] = useState(false)
  const [openEndDate, setOpenEndDate] = useState(false)

  useEffect(() => {
    if (startDate) {
      setEndDate(startDate.add(2, "day"))
    }
  }, [startDate])

  const color = "blue"

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="row"
        width="320px"
        borderRadius={50}
        justifyContent="space-between"
        marginTop={3}
      >
        <Box
          display="flex"
          alignItems="center"
          flexDirection="row"
          width="250px"
          borderRadius={50}
        >
          <Box width="110px" borderRadius={4}>
            <DatePicker
              InputAdornmentProps={{ style: { display: "none" } }}
              open={openStartDate}
              onOpen={() => setOpenStartDate(true)}
              onClose={() => setOpenStartDate(false)}
              value={startDate}
              inputFormat="DD/MM/YYYY"
              minDate={dayjs(new Date())}
              onChange={onChangeStartDate}
              renderInput={(params) => {
                return (
                  <TextField
                    variant="standard"
                    sx={{
                      svg: { color },
                      input: { color },
                      label: { color },
                      backgroundColor: "white",
                      borderRadius: "5px 0 0 5px ",
                      padding: "4px 0 0 10px",
                    }}
                    {...params}
                    onClick={() => setOpenStartDate(true)}
                  />
                )
              }}
            />
          </Box>
          <Box width="130px" borderRadius={4}>
            <DatePicker
              InputAdornmentProps={{ position: "start" }}
              open={openEndDate}
              onOpen={() => setOpenEndDate(true)}
              onClose={() => setOpenEndDate(false)}
              minDate={startDate?.add(2, "day")}
              value={endDate}
              inputFormat="DD/MM/YYYY"
              onChange={onChangeEndDate}
              renderInput={(params) => {
                return (
                  <TextField
                    variant="standard"
                    sx={{
                      svg: { color },
                      input: { color },
                      label: { color },
                      backgroundColor: "white",
                      borderRadius: "0 5px 5px 0",
                      padding: "4px 5px 0 0",
                    }}
                    {...params}
                    InputLabelProps={{
                      shrink: true,
                      color: "primary",
                    }}
                    onClick={() => setOpenEndDate(true)}
                  />
                )
              }}
            />
          </Box>
        </Box>

        <Box p={0}>
          <CustomButton color={"primary"} label="Start"/>
        </Box>
      </Box>
    </LocalizationProvider>
  )
}
