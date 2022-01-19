export const animals = [
    {
        id: '1',
        categoria: 'nike',
        name: 'Air Force 1 Low',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stock: '10',
        price: '150',
        image: 'images/nike1.jpg'
    },

    {
        id: '2',
        categoria: 'adidas',
        name: 'Yeezy Foam RNNR',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stock: '5',
        price: '120',
        image: 'images/adidas1.jpg'
    },
    
    {
        id: '3',
        categoria: 'nike',
        name: 'Blazer Mid 77 Vintage',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stock: '12',
        price: '115',
        image: 'images/nike2.jpg'
    },

    {
        id: '4',
        categoria: 'adidas',
        name: 'Yeezy Boost 700 V2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stock: '9',
        price: '95',
        image: 'images/adidas2.jpg'
    },

    {
        id: '5',
        categoria: 'nike',
        name: 'Air Force 1 LX Black (W)',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stock: '2',
        price: '120',
        image: 'images/nike3.jpg'
    },

    {
        id: '6',
        categoria: 'adidas',
        name: 'Yeezy Boost 350 V2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        stock: '7',
        price: '100',
        image: 'images/adidas3.jpg'
    }
];

export const getZapatillas = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(animals);
    }, 2000)
});