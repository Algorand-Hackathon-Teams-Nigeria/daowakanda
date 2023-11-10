import React from "react";
import { Box, Divider, Grid, OutlinedInput, Typography } from "@mui/material";
import Image from "next/image";

const UsersRow = ({ user, action, time, picture }) => {
  return (
    <Box>
      <Grid container justifyContent="space-between" alignItems="center" mt={2}>
        <Grid
          item
          container
          justifyContent="space-between"
          alignItems="center"
          color="#fff"
        >
          <Box display={"flex"}>
            <Image
              src={picture}
              className="w-6 h-6 relative"
              alt="wallet"
              width={50}
              height={10}
            />
            <Typography width={"20%"} ml={1}>{user}</Typography>
          </Box>
          <Typography ml={5} width="60%">
            {action}
          </Typography>
          <Typography width={"10%"}>{time}</Typography>
        </Grid>
      </Grid>
      <Divider sx={{ bgcolor: "white", mt: 1 }} />
    </Box>
  );
};

const RowHeaders = () => (
  <Grid container justifyContent="space-between" alignItems="center">
    <Grid
      item
      container
      justifyContent="space-between"
      alignItems="center"
      color="#fff"
    >
      <Typography width={"20%"}>User</Typography>
      <Typography ml={5} width="60%">
        Action
      </Typography>
      <Typography width={"10%"}>Time</Typography>
    </Grid>
  </Grid>
);

const Users = () => {
  const userData = [
    {
      user: "00X...3837",
      action: "Just liked the project MoneyBank",
      time: "2 hours ago",
      picture: "/metamask.png",
    },
    {
      user: "00X...1234",
      action: "Shared a post",
      time: "1 hour ago",
      picture: "/metamask.png",
    },
    {
      user: "00X...5678",
      action: "Commented on a photo",
      time: "3 hours ago",
      picture: "/metamask.png",
    },
    {
      user: "00X...9090",
      action: "Just uploaded a new project Dao Wakanda",
      time: "4 hours ago",
      picture: "/metamask.png",
    },
    {
      user: "00X...2468",
      action: "Joined a project",
      time: "5 hours ago",
      picture: "/metamask.png",
    },
  ];

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        maxWidth="80%"
        m="auto"
        mt={2}
      >
        <OutlinedInput
          placeholder="Search by user, project name and action..."
          variant="outlined"
          fullWidth
          sx={{
            borderRadius: 100,
            borderColor: "#fff",
            borderWidth: 2,
            color: "#fff",
            bgcolor: "#34394b",
          }}
        />
      </Box>
      <Box width="80%" m="auto" mt={5}>
        <RowHeaders />
        <Divider sx={{ bgcolor: "white", mt: 1 }} />
        {userData.map((user, index) => (
          <UsersRow key={`index-${user}`} {...user} />
        ))}
      </Box>
    </Box>
  );
};

export default Users;
