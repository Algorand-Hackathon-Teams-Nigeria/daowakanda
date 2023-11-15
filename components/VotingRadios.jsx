import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Typography } from "@mui/material";

export default function VotingRadio({ yesPercentage = 30, noPercentage = 70 }) {
  return (
    <FormControl sx={{ width: "100%" }}>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <Box
          flex={1}
          bgcolor={"#444"}
          display={"flex"}
          justifyContent={"space-between"}
          pr={2}
        >
          <FormControlLabel
            value="yes"
            control={
              <Radio
                sx={{
                  color: "#fff",
                  "&.Mui-checked": {
                    color: "#eee",
                  },
                }}
              />
            }
            label={"Yes"}
            sx={{
              width: `${yesPercentage}%`,
              color: "#fff",
              backgroundColor: "#273010",
            }}
          />
          <Typography color={"white"} fontWeight={"bold"} mt={1}>
            {yesPercentage}%
          </Typography>
        </Box>

        <Box
          flex={1}
          bgcolor={"#444"}
          display={"flex"}
          justifyContent={"space-between"}
          pr={2}
        >
          <FormControlLabel
            value="no"
            control={
              <Radio
                sx={{
                  color: "#fff",
                  "&.Mui-checked": {
                    color: "#eee",
                  },
                }}
              />
            }
            label={"No"}
            sx={{
              width: `${noPercentage}%`,
              color: "#fff",
              backgroundColor: "#273010",
            }}
          />
          <Typography color={"white"} fontWeight={"bold"} mt={1}>
            {noPercentage}%
          </Typography>
        </Box>
      </RadioGroup>
    </FormControl>
  );
}
