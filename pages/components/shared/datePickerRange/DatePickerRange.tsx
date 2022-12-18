import { useState, useEffect } from "react"
import dayjs, { Dayjs } from "dayjs"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers"
import TextField from "@mui/material/TextField"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import Box from "@mui/material/Box"
import CustomButton from "../CustomButton/CustomButton"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"

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
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          width: {
            xs: "220px",
            sm: "295px",
          },
          gap: "10px",
          margin: {
            xs: "0 auto",
            sm: "0",
          },
        }}
      >
        <form>
          <Box
            display="flex"
            alignItems="center"
            alignSelf="center"
            flexDirection="row"
            width="220px"
            border="1px solid white"
            borderRadius={2}
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
                        padding: "4px 0 1px 10px",
                      }}
                      {...params}
                      onClick={() => setOpenStartDate(true)}
                    />
                  )
                }}
              />
            </Box>
            <Box
              sx={{
                backgroundColor: "white",
                height: "37px",
                padding: "6px 0 1px 0",
              }}
            >
              <ArrowRightIcon sx={{ color: "#870E4F" }} />
            </Box>
            <Box width="110px" borderRadius={4}>
              <DatePicker
                InputAdornmentProps={{ style: { display: "none" } }}
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
                        padding: "4px 11px 1px 3px",
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
        </form>

        <CustomButton color={"primary"} label="Start" type="button" />
      </Box>
    </LocalizationProvider>
  )
}
