import React from "react";
import { Box, Divider, Grid, OutlinedInput, Typography } from "@mui/material";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import Button from "@mui/material/Button";

const ProjectsRow = ({ user, action, time, picture }) => {
  return (
    <Box
      sx={{
        borderRadius: 2,
        borderWidth: 1,
        p: 3,
        mt: 3,
        width: "30%",
        ml: 3,
      }}
    >
      <Image
        src={picture}
        alt="wallet"
        width={200}
        height={50}
        style={{ borderRadius: 2, borderWidth: 0.5, borderColor: "#444", width: "100%", height: 200 }}
      />
      <Typography variant="h5" fontWeight={"bold"} mt={3}>
        Article title
      </Typography>
      <Typography
        mt={1}
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          // Set the number of lines you want to display
          WebkitLineClamp: 2, // Adjust the number accordingly
          height: 50
        }}
      >
        {action}
      </Typography>
      <Button variant="outlined" sx={{ mt: 3 }}>
        Read More
      </Button>
    </Box>
  );
};

const Projects = () => {
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
        <SearchBar />
      </Box>

      <Box
        width="80%"
        m="auto"
        mt={5}
        display={"flex"}
        justifyContent={"flex-start"}
        flexWrap={"wrap"}
      >
        <Divider sx={{ bgcolor: "white", mt: 1 }} />
        {userData.map((user, index) => (
          <ProjectsRow key={`index-${user}`} {...user} />
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
