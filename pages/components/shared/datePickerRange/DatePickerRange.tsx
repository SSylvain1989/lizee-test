import { useState, useEffect } from "react"
import dayjs, { Dayjs } from "dayjs"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DatePicker } from "@mui/x-date-pickers"
import TextField from "@mui/material/TextField"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"

export default function HomeHeader() {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs(new Date()))
console.log(startDate)
  const onChangeStartDate = (newValue: Dayjs | null) => {
    setStartDate(newValue)
  }

  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs(new Date()).add(2, 'day'))

  const onChangeEndDate = (newValue: Dayjs | null) => {
    setEndDate(newValue)
  }

  const [openStartDate, setOpenStartDate] = useState(false)
  const [openEndDate, setOpenEndDate] = useState(false)

  useEffect(() => {
    if(startDate){
      setEndDate(startDate.add(2, 'day'))
    }
  }, [startDate])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        InputAdornmentProps={{ style: { display: "none" } }}
        open={openStartDate}
        onOpen={() => setOpenStartDate(true)}
        onClose={() => setOpenStartDate(false)}
        label="Start of rental"
        value={startDate}
        inputFormat="DD/MM/YYYY"
        minDate={dayjs(new Date())} 
        onChange={onChangeStartDate}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              InputLabelProps={{
                shrink: true,
              }}
              onClick={() => setOpenStartDate(true)}
            />
          )
        }}
      />
      <DatePicker
        InputAdornmentProps={{ style: { display: "none" } }}
        open={openEndDate}
        onOpen={() => setOpenEndDate(true)}
        onClose={() => setOpenEndDate(false)}
        label="End of rental"
        minDate={startDate?.add(2, 'day')}
        value={endDate}
        inputFormat="DD/MM/YYYY"
        onChange={onChangeEndDate}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              InputLabelProps={{
                shrink: true,
              }}
              onClick={() => setOpenEndDate(true)}
            />
          )
        }}
      />
    </LocalizationProvider>
  )
}
