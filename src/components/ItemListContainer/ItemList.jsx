import { Box } from '@mui/material';
import React from 'react'
import Item from './Item';

const ItemList = ({ animalsDetails }) => {

    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', margin: '2em' }}>
            {animalsDetails.map((animalsDetails) => (
                <Item key={animalsDetails.id} details={animalsDetails}/>
            ))}
        </Box>

    );
}

export default ItemList