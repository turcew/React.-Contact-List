import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Typography, Container } from "@mui/material";

import ContactList from "./components/WatchList/ContactList";
import ContactForm from "./components/WatchForm/ContactForm";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
      dark: "#42a5f5",
      contrastText: "#0d1117",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#0d1117",
      paper: "#161b22",
    },
    text: {
      primary: "#e6edf3",
      secondary: "#8b949e",
    },
    error: {
      main: "#f85149",
    },
    divider: "#30363d",
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      letterSpacing: "-0.5px",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "background.default",
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h1"
            align="center"
            gutterBottom
            sx={{
              mb: 4,
              color: "text.primary",
              borderBottom: "1px solid",
              borderColor: "divider",
              pb: 2,
            }}
          >
            Contact List
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              justifycontent: "center",
              alignitems: { xs: "center", md: "flex-start" },
            }}
          >
            <Box sx={{ flex: 1, maxWidth: 440 }}>
              <Typography variant="h6" sx={{ mb: 2, color: "text.secondary" }}>
                Contacts
              </Typography>
              <ContactList />
            </Box>

            <Box sx={{ flex: 1, maxWidth: 440 }}>
              <Typography variant="h6" sx={{ mb: 2, color: "text.secondary" }}>
                Contact Form
              </Typography>
              <ContactForm />
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
