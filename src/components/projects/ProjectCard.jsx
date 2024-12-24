import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Demo from '../../assets/project_demo.jpg'
import { Button } from '@mui/material';

export default function ProjectCard() {
  return (
    <Card sx={{ maxWidth: 450, justifySelf: 'center' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Demo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Typography component="div" sx={{margin: '16px 0'}}>
            <Button variant='contained' size='small' sx={{marginRight: '8px', bgcolor: '#1a53ff'}}>View Project</Button>
            <Button variant='outlined' size='small' sx={{color: '#1a53ff', borderColor: '#1a53ff'}}>Source Code</Button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
