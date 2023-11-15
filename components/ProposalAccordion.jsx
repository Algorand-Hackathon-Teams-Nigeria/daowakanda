import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import VotingRadio from "./VotingRadios";
import VoterInfo from "./VoterInfo";
import VoteData from "./VoteInfo";

const ProposalAccordion = ({ title }) => {
  const [votingEndsIn, setVotingEndsIn] = React.useState({
    days: 6,
    hours: 20,
    minutes: 23,
    seconds: 12,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      // Update the countdown every second
      setVotingEndsIn((prev) => {
        const { days, hours, minutes, seconds } = prev;

        // Calculate the remaining time
        const totalSeconds =
          days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 + seconds - 1;

        return {
          days: Math.floor(totalSeconds / (24 * 60 * 60)),
          hours: Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60)),
          minutes: Math.floor((totalSeconds % (60 * 60)) / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);
  return (
    <Box>
      <Accordion sx={{ bgcolor: "#222" }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{ color: "white", position: "relative", bottom: 10 }}
            />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box width={"100%"}>
            <Typography color={"#fff"}>{title}</Typography>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              width={"100%"}
            >
              <VotingRadio />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              width={"100%"}
              mt={2}
            >
              {/* <Typography color={"#777"} fontSize={12}>
                Ended 14th Oct, 2023
              </Typography> */}
              <Typography
                color={"#fff"}
                padding={1}
                bgcolor={"#292f28"}
                borderRadius={5}
                width={"20%"}
                textAlign={"center"}
              >
                No Voting Power
              </Typography>
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                width={"50%"}
              >
                <Typography
                  color={"#fff"}
                  padding={1}
                  bgcolor={"blue"}
                  borderRadius={5}
                  width={"20%"}
                  textAlign={"center"}
                >
                  Tag #31
                </Typography>
                <Typography
                  color={"#fff"}
                  padding={1}
                  bgcolor={"#c23d34"}
                  borderRadius={5}
                  width={"20%"}
                  textAlign={"center"}
                >
                  Active
                </Typography>

                <Typography
                  color={"#fff"}
                  padding={1}
                  bgcolor={"#555"}
                  borderRadius={5}
                  width={"50%"}
                  textAlign={"center"}
                  fontWeight={"bold"}
                >
                  Voting ends in: {votingEndsIn.days} days {votingEndsIn.hours}h{" "}
                  {votingEndsIn.minutes}m {votingEndsIn.seconds}s
                </Typography>
              </Box>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography color={"#fff"} width={"70%"}>
              Lorem ipsum dolor sit amet consectetur. Sed lacinia purus eget
              massa suspendisse pretium massa vitae vitae. Facilisi facilisi
              massa sapien enim dignissim. Aliquet consectetur tortor urna id
              cursus tristique blandit faucibus at. Vitae enim lectus ipsum dui
              tellus fermentum dolor laoreet viverra. Aliquam nisl purus egestas
              pellentesque tincidunt dui et pulvinar ipsum. Pretium commodo ac
              vulputate erat eget nunc. Praesent non netus egestas ornare
              praesent mattis semper phasellus. Interdum pulvinar sed ut sit ut
              gravida pharetra velit pulvinar. Odio bibendum duis faucibus at
              dolor elit orci.
            </Typography>
            <Box width={"25%"}>
              <VoterInfo />
            </Box>
          </Box>

          <Box display={"flex"} justifyContent={"flex-start"}>
            <VoteData title={"Yes"} totalvotes={1200} />
            <VoteData title={"No"} totalvotes={300} />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ProposalAccordion;
