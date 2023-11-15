"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Image from "next/image";
import ConnectWalletModal from "./modals/ConnectWalletModal";
import Link from "next/link";

const pages = [
  { name: "Vote", href: "/stake" },
  // { name: "Vote", href: "/projects" },
  { name: "Resources", href: "/resources" },
  { name: "Doc", href: "/users" },
  { name: "About", href: "/about" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState();
  const [anchorElUser, setAnchorElUser] = React.useState();
  const [open, setOpen] = React.useState(false);
  const toggleModal = () => setOpen(!open);

  const handleOpenNavMenu = () => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = () => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#34394b" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href={"/"}>
            <Image
              src={"./wakandalogo.svg"}
              className="w-6 h-6 relative"
              alt="DAO Wakanda logo"
              width={100}
              height={50}
              style={{ width: 100, height: 50 }}
            />
          </Link>

          <Box
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            bgcolor="#34394b"
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" href={page.href}>
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Image
            src={"./wakandalogo.svg"}
            className="w-6 h-6 relative"
            alt="DAO Wakanda logo"
            width={50}
            height={10}
          /> */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={`${page.name}-${index}`}
                href={page.href}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                <Typography>{page.name}</Typography>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, bgcolor: "#666", borderRadius: 10 }}>
            <Tooltip title="Connect Wallet">
              <IconButton onClick={toggleModal} sx={{ padding: 2 }}>
                <Image
                  src="/wallet.svg"
                  className="w-6 h-6 relative"
                  alt="wallet"
                  width={50}
                  height={10}
                />
                <Typography ml={1} fontWeight={"bold"} color={"#fff"}>
                  Connect Wallet
                </Typography>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      <ConnectWalletModal open={open} toggle={toggleModal} />
    </AppBar>
  );
}
export default NavBar;
