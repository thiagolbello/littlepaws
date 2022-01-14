export const animals = [
    {
        id: '1',
        categoria: 'perros',
        name: 'Oliver',
        description: '',
        gender: 'Masculino',
        age: '',
        height: '',
        weight: '',
        image: ''
    },

    {
        id: '2',
        categoria: 'gatos',
        name: 'Aquiles',
        description: '',
        gender: 'Masculino',
        age: '',
        height: '',
        weight: '',
        image: ''
    },
    
    {
        id: '3',
        categoria: 'perros',
        name: 'Bonnie',
        description: '',
        gender: 'Femenino',
        age: '',
        height: '',
        weight: '',
        image: ''
    },

    {
        id: '4',
        categoria: 'gatos',
        name: 'Diana',
        description: '',
        gender: 'Femenino',
        age: '',
        height: '',
        weight: '',
        image: ''
    },

    {
        id: '5',
        categoria: 'perros',
        name: 'Coco',
        description: '',
        gender: 'Masculino',
        age: '',
        height: '',
        weight: '',
        image: ''
    },

    {
        id: '6',
        categoria: 'gatos',
        name: 'Mew',
        description: '',
        gender: 'Femenino',
        age: '',
        height: '',
        weight: '',
        image: ''
    }
];

export const getAnimals = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(animals);
    }, 2000)
});