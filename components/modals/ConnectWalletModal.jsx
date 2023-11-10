import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Image from "next/image";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "#46464a",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};
const supportedWallets = [
  { name: "Meta Mask", logo: "/metamask.png" },
  { name: "Trust wallet", logo: "/trustwallet.png" },
  { name: "Coinbase Wallet", logo: "/coinbase.png" },
  { name: "wallet Connect", logo: "/walletconnect.png" },
];

const InfoBox = ({ title, body }) => (
  <Box mt={5}>
    <Typography variant="h7" fontWeight={"bold"} fontSize={20}>
      {title}
    </Typography>
    <Typography>{body}</Typography>
  </Box>
);

const ConnectWalletModal = ({ open, toggle }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography variant={"h4"}>Connect a Wallet</Typography>
              <Typography>Supported Wallets</Typography>

              <Box mt={5}>
                {supportedWallets.map((wallet) => (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                      width: 200,
                    }}
                  >
                    <Image
                      src={wallet.logo}
                      className="w-6 h-6 relative"
                      alt="wallet"
                      width={50}
                      height={10}
                    />
                    <Typography sx={{ width: "80%" }}>{wallet.name}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box>
              <Typography>What is a Wallet?</Typography>
              <Typography>Supported Wallets</Typography>
              <InfoBox
                title={"Your Digital Assets's Sanctuary"}
                body={
                  "Wallets serve as secure hubs for managing, sending, receiving, and showcasing digital assets, including Ethereum and NFTs."
                }
              />
              <InfoBox
                title={"A fresh Approach to Sign In"}
                body={
                  "Bid farewell to the hassle of creating new accounts and passwords for each website – simply link your wallet instead."
                }
              />

              <Box mt={5}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: 10,
                  }}
                >
                  get a Wallet
                </Button>
                <Typography>Learn More</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ConnectWalletModal;
