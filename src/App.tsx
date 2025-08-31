import './App.css'
import { Grid, Typography} from "@mui/material";
import NavBar from "./components/NavBar.tsx";

function App() {
  return (
      <Grid container spacing={2}>
          <Grid size={12}>
              <NavBar/>
          </Grid>
          <Grid size={6}>
              <Typography>item 1</Typography>
          </Grid>
          <Grid size={6}>
              <Typography>item 2</Typography>
          </Grid>
      </Grid>
  )
}

export default App
