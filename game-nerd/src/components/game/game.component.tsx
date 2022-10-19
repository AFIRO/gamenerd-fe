import React from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
  gameName: string,
  boxart: string
}

export default function GameComponent(props:Props) {

      return (
        <Card sx={{ minWidth: 150 }}>
        <CardMedia
          component="img"
          height="140"
          image= {props.boxart}
          alt="boxart"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.gameName}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">News</Button>
          <Button size="small">Review</Button>
        </CardActions>
      </Card>)
}