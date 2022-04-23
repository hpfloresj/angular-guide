interface Street {
    name: string;
    country: string;
    city: string;    
}

interface SuperHeroe {
    name: string;
    age: number;
    street: Street;
    showInformation: () => string;    
}

const wolverine: SuperHeroe = {
    name: 'Logan',
    age: 40,
    street: {
        name: 'X Facility',
        country: 'US',
        city: 'Washintong DC'
    },
    showInformation() {
        return 'Data: ' + this.name + ', ' + this.street.name;
    }
}

console.log(wolverine.showInformation());