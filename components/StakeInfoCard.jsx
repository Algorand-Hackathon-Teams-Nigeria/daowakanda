import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const StakeInfoCard = ({ title, secondRowValue, thirdRowValue }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: "#333",
        width: "40%",
        minHeight: 100,
        borderRadius: 5,
        padding: 2,
        
      }}
    >
      <Typography color={"#eee"} mt={1}>{title}</Typography>
      <Typography color={"#eee"} fontWeight={"bold"} mt={1}>
        {secondRowValue}
      </Typography>
      <Typography color={"#eee"} mt={1}>{thirdRowValue}</Typography>
    </Card>
  );
};
export default StakeInfoCard;
