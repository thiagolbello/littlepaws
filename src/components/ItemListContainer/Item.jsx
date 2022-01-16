import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { cSecondary } from '../Colors';

const Item = ({ details }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={details.name}
        height="140"
        image={details.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {details.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {details.weight}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ backgroundColor: cSecondary, color: 'black', marginRight: '1em' }}>Adoptar</Button>
        <Link to={`/detalles/${details.id}`} style={{ textDecoration: 'none' }}><Button size="small">Más detalles</Button></Link>
      </CardActions>
    </Card>
  );
}

export default Item;