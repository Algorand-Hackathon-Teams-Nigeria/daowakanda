import { Box, Button, Card, Divider, Typography } from "@mui/material";
import React from "react";
import ViewMoreModal from "./modals/ViewMoreModal";

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
const VoteData = ({ title, totalvotes }) => {
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => setOpen(!open);

  const [openNo, setOpenNoModal] = React.useState(false);
  const toggleNoModal = () => setOpenNoModal(!openNo);

  const voteInfo = [
    { columName: "Wallet", value: "Amount" },
    { columName: "0xe33443...3434", value: 1900999 },
    { columName: "0xe33443...3434", value: 98000 },
    { columName: "0xe33443...3434", value: 1040 },
    { columName: "0xe33443...3434", value: 546000 },
  ];

  return (
    <Card
      variant="outlined"
      sx={{
        width: "30%",
        minHeight: 200,
        bgcolor: "#292f28",
        padding: 2,
        mt: 2,
        ml: 2,
      }}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography
          variant="h6"
          fontWeight={"bold"}
          color={"#fff"}
          textAlign={"center"}
        >
          {title}
        </Typography>

        <Typography
          variant="h6"
          fontWeight={"bold"}
          color={"#fff"}
          textAlign={"center"}
        >
          {totalvotes}
        </Typography>
      </Box>

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
      <Box m={"auto"} width={"40%"} mt={2}>
        <Button
          sx={{
            textTransform: "capitalize",
            color: "#fff",
            alignSelf: "center",
          }}
          onClick={title.toLowerCase() === "yes" ? toggleModal : toggleNoModal}
        >
          View more
        </Button>
      </Box>
      <ViewMoreModal
        toggle={toggleModal}
        open={open}
        title={"Yes"}
        amount={1200}
      />
      <ViewMoreModal
        toggle={toggleNoModal}
        open={openNo}
        title={"No"}
        amount={300}
      />
    </Card>
  );
};

export default VoteData;
