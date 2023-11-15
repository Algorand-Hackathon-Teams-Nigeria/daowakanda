import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";
import { Card, Divider, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "#999",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

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

const ViewMoreModal = ({ open, toggle, title, amount }) => {
  const voteInfo = [
    { columName: "Wallet", value: "Amount" },
    { columName: "0xe33443...3434", value: 1900999 },
    { columName: "0xe33443...3434", value: 98000 },
    { columName: "0xe33443...3434", value: 1040 },
    { columName: "0xe33443...3434", value: 546000 },
  ];
  return (
    <div>
      <Modal
        open={open}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box display={"flex"} flexDirection={"column"}>
            <Card
              variant="outlined"
              sx={{
                width: "100%",
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
                  {amount}
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

              {/* <ViewMoreModal toggle={toggleModal} open={open} /> */}
            </Card>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ViewMoreModal;
