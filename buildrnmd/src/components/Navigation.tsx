'use client';

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DescriptionIcon from "@mui/icons-material/Description";
import ChatIcon from "@mui/icons-material/Chat";
import BookIcon from "@mui/icons-material/Book";
import PeopleIcon from "@mui/icons-material/People";

const navItems = [
  { href: "/", label: "Home", icon: HomeIcon, color: "#0d9488" },
  { href: "/careers", label: "Explore Careers", icon: FavoriteIcon, color: "#db2777" },
  { href: "/toolkit", label: "Build Your Application", icon: DescriptionIcon, color: "#2563eb" },
  { href: "/mentor", label: "Ask a Mentor", icon: ChatIcon, color: "#9333ea" },
  { href: "/blog", label: "Blog", icon: BookIcon, color: "#4f46e5" },
  { href: "/parents", label: "Parents & Supporters", icon: PeopleIcon, color: "#16a34a" },
];

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleNavigation = (href: string) => {
    router.push(href);
    setMobileOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ width: 280, pt: 4 }}>
      <List>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <ListItem key={item.href} disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(item.href)}
                sx={{
                  mx: 1,
                  mb: 0.5,
                  borderRadius: 2,
                  backgroundColor: isActive ? 'grey.900' : 'transparent',
                  color: isActive ? 'white' : 'text.secondary',
                  '&:hover': {
                    backgroundColor: isActive ? 'grey.900' : 'grey.50',
                    color: isActive ? 'white' : 'text.primary',
                  },
                }}
              >
                <Icon sx={{ mr: 2, fontSize: 20 }} />
                <ListItemText 
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 500,
                    fontSize: '0.875rem',
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid',
        borderColor: 'grey.100',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 3 } }}>
          {/* Logo */}
          <Box 
            sx={{ display: 'flex', alignItems: 'center', gap: 1.5, cursor: 'pointer' }}
            onClick={() => handleNavigation('/')}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                background: 'linear-gradient(135deg, #0d9488 0%, #9333ea 100%)',
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                }}
              >
                BR
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(90deg, #0d9488 0%, #9333ea 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              BuildRNMD
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 0.5 }}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    color: isActive ? 'white' : 'text.secondary',
                    backgroundColor: isActive ? 'grey.900' : 'transparent',
                    '&:hover': {
                      backgroundColor: isActive ? 'grey.900' : 'grey.50',
                      color: isActive ? 'white' : 'text.primary',
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ 
              display: { lg: 'none' },
              color: 'text.primary',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box',
            width: 280,
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
}