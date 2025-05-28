import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Demo from '../../assets/project_demo.jpg'
import { Button } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ProjectCard(props) {
  const { project, dark } = props

  return (
    <Card sx={{ maxWidth: '100%', justifySelf: 'center' }}>
      <CardActionArea>
        <Carousel
          className="carousel-container"
          autoPlay
          infiniteLoop
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
                aria-label={label}
              >
                ‹
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
                aria-label={label}
              >
                ›
              </button>
            )
          }
        >
          {project.images ? project.images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`slide-${index}`} className='max-h-96 object-fill' />
            </div>
          )) : <img src={Demo} alt='' className='max-h-80 object-fill' />}
        </Carousel>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '17px' }}>
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
