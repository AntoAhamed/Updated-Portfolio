import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Demo from '../../assets/project_demo.jpg'
import { Button } from '@mui/material';

export default function ProjectCard(props) {
  const { project } = props

  return (
    <Card sx={{ maxWidth: '100%', justifySelf: 'center' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={Demo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {project.description}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: '8px', color: 'text.secondary' }}>
            {project.tech_used}
          </Typography>
          <Typography component="div" sx={{ margin: '16px 0' }}>
            <a href={project.live_url} target='_blank'>
              <Button variant='contained' size='small' sx={{ marginRight: '8px', bgcolor: '#1a53ff' }}>View Project</Button>
            </a>
            <a href={project.source_code_url} target='_blank'>
              <Button variant='outlined' size='small' sx={{ color: '#1a53ff', borderColor: '#1a53ff' }}>Source Code</Button>
            </a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
