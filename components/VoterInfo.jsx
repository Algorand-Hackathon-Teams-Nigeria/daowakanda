import { Box, Card, Divider, Typography } from "@mui/material";

const Row = ({ title, value }) => {
  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Typography color={"#fff"} mt={1}>
        {title}
      </Typography>
      <Typography color={"#fff"} mt={1}>
        {value}
      </Typography>
    </Box>
  );
};
const VoterInfo = () => {
  const voteInfo = [
    { columName: "Author", value: "Tom" },
    { columName: "Start Date", value: "07 Nov, 2023" },
    { columName: "End Date", value: "15 Nov, 2023" },
    { columName: "Total votes", value: 1040 },
    { columName: "Algo Amounts", value: 546000 },
  ];
  return (
    <Card
      variant="outlined"
      sx={{ width: "100%", minHeight: 200, bgcolor: "#292f28", padding: 2 }}
    >
      <Typography
        variant="h6"
        fontWeight={"bold"}
        color={"#fff"}
        textAlign={"center"}
      >
        Vote Information
      </Typography>
      {voteInfo.map((item, index) => (
        <Box>
          <Row
            title={item.columName}
            value={item.value}
            key={`vote-info-row${index}`}
          />
          <Divider sx={{ bgcolor: "#eee" }} />
        </Box>
      ))}
    </Card>
  );
};

export default VoterInfo;
