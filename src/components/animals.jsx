export const animals = [
    {
        id: '1',
        categoria: 'perros',
        name: 'Oliver',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        gender: 'Masculino',
        age: '3',
        height: '15',
        weight: '5',
        image: ''
    },

    {
        id: '2',
        categoria: 'gatos',
        name: 'Aquiles',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        gender: 'Masculino',
        age: '6',
        height: '23',
        weight: '3.6',
        image: ''
    },
    
    {
        id: '3',
        categoria: 'perros',
        name: 'Bonnie',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        gender: 'Femenino',
        age: '1',
        height: '48',
        weight: '12',
        image: ''
    },

    {
        id: '4',
        categoria: 'gatos',
        name: 'Diana',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        gender: 'Femenino',
        age: '2',
        height: '24',
        weight: '4',
        image: ''
    },

    {
        id: '5',
        categoria: 'perros',
        name: 'Coco',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        gender: 'Masculino',
        age: '8',
        height: '80',
        weight: '17',
        image: ''
    },

    {
        id: '6',
        categoria: 'gatos',
        name: 'Mew',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        gender: 'Femenino',
        age: '4',
        height: '25',
        weight: '4.5',
        image: ''
    }
];

export const getAnimals = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(animals);
    }, 2000)
});