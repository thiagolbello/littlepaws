import { Box } from '@mui/material';
import React from 'react'
import Item from './Item';

const ItemList = ({ zapatillasDetails }) => {

    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', margin: '2em' }}>
            {zapatillasDetails.map((zapatillasDetails) => (
                <Item key={zapatillasDetails.id} details={zapatillasDetails}/>
            ))}
        </Box>

    );
}

export default ItemList