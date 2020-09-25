// JS by Dan Høegh
// UCN MMD 2020

let cars = [
    {
        "maker": "Nissan",
        "model": "LEAF",
        "submodel": "E+",
        "energyType": "electric",
        "color": "white",
        "driveTrain": {
            "powerBHP": 217,
            "drive": {
                "front": true,
                "rear": false
            }
        },
        "legal": {
            "vin": "zzz687585zz",
            "MOTdue": "2020-11-24"
        },
        "state": {
            "tires": {
                "frontLeft": true,
                "frontRight": true,
                "backLeft": true,
                "backRight": true
            },
            "energyReserve": .5
        }
    },
    {
        "maker": "Skoda",
        "model": "Citigo",
        "energyType": "gasoline",
        "color": "white",
        "driveTrain": {
            "powerBHP": 60,
            "drive": {
                "front": true,
                "rear": false
            }
        },
        "legal": {
            "vin": "zzz2345345zz",
            "MOTdue": "2022-09-16"
        },
        "state": {
            "tires": {
                "frontLeft": true,
                "frontRight": true,
                "backLeft": true,
                "backRight": true
            },
            "energyReserve": .8
        }
    }
];

const data = JSON.stringify(cars);

console.log(cars);
console.log(data);

let myPets = [
    {
        name: "Scooby Doo",
        type: "dog",
        race: "Great Dane"
    },
    {
        name: "Lassie",
        type: "dog",
        race: "Rough Collie"
    }
];

myPets.forEach(pet => {
    console.log(pet.name);
});



let beatles = [
    {
        "name": "Ringo Starr",
        "dateOfBirth": "1940-07-07",
        "instruments": [
            {
                name: "drums"
            }
        ],
        "activeYears": 10
    }
]

