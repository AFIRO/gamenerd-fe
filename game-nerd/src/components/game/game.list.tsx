import React, { useState } from "react"
import GAME_DATA from "../../api/mock-data"
import GameComponent from "./game.component"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { grey } from "@mui/material/colors";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GameListComponent() {

  const [games, setGames] = useState(GAME_DATA)

  return (<div className="bg-dark">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns = {4} justifyContent = "center">
        {games.map((game) =>
          <Grid item xs={0.5}> <Item><GameComponent {...game} ></GameComponent></Item></Grid>)}
      </Grid>
    </Box>
  </div>
  )
}