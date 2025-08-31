import './App.css'
import { Box, Button, Grid } from "@mui/material";
import NavBar from "./components/NavBar.tsx";

function App() {

  return (
      <Box sx={{ flexGrow: 1 }}>
          <NavBar/>
          <Grid container spacing={2}>
              <Grid size={6}>
                  <Button>item 1</Button>
              </Grid>
              <Grid size={6}>
                  <Button>item 2</Button>
              </Grid>
          </Grid>
      </Box>
  )
}

export default App
