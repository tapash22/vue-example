export const  categorys = [
    {
      id: 1,
      name: "Inter Dhaka",
      image: require("@/assets/car_view.jpg"),
    },
    {
      id: 2,
      name: "Outside Dhaka",
      image: require("@/assets/car_view.jpg"),
    },
    {
      id: 3,
      name: "Travel",
      image: require("@/assets/car_view.jpg"),
    },
    {
      id: 4,
      name: "Hourly",
      image: require("@/assets/car_view.jpg"),
    },
  ]

  export const carLists = [
    {
      id: 1,
      name: "x-Corolla",
      person: "3-4",
      featureas: ["AC", "LED Monitor", "SOund box", "Air freshner"],
      model: 2016,
      image: require("@/assets/rent_car.jpg"),
      color: "red",
      ownerName: "name of owner",
      phone: "01674345763",
      price: 3000,
      useTo: "oil",
      perKmCost: 12,
    },
    {
      id: 2,
      name: "x-Corolla",
      person: "3-4",
      featureas: ["AC", "LED Monitor", "SOund box", "Air freshner"],
      model: 2017,
      image: require("@/assets/rent_car.jpg"),
      color: "red",
      ownerName: "name of owner",
      phone: "01674345763",
      price: 3200,
      useTo: "oil",
      perKmCost: 12,
    },
    {
      id: 3,
      name: "x-Corolla",
      person: "3-4",
      featureas: ["AC", "LED Monitor", "SOund box", "Air freshner"],
      model: 2015,
      image: require("@/assets/rent_car.jpg"),
      color: "red",
      ownerName: "name of owner",
      phone: "01674345763",
      price: 2800,
      useTo: "oil",
      perKmCost: 10,
    },
    {
      id: 4,
      name: "x-Corolla",
      person: "3-4",
      featureas: ["AC", "LED Monitor", "SOund box", "Air freshner"],
      model: 2014,
      image: require("@/assets/rent_car.jpg"),
      color: "red",
      ownerName: "name of owner",
      phone: "01674345763",
      price: 2600,
      useTo: "CNG",
      perKmCost: 8,
    },
  ]

  export const parts = [
    {
      id: 1,
      name: "Brake Pads",
      image: require("@/assets/1.jpg"),
    },
    {
      id: 2,
      name: "Air Filter",
      image: require("@/assets/3.jpg"),
    },
    {
      id: 3,
      name: "Moto Oils",
      image: require("@/assets/4.jpg"),
    },
    {
      id: 4,
      name: "Custom Wheel",
      image: require("@/assets/2.jpg"),
    },
    // {
    //     id: 5,
    //     name: 'Exhaust System',
    //     image: 'https://img.freepik.com/premium-psd/sport-car-transparent-background-3d-rendering-illustration_494250-40917.jpg'
    // },
    // {
    //     id: 6,
    //     name: 'Steel Wheel',
    //     image: 'https://img.freepik.com/premium-psd/sport-car-transparent-background-3d-rendering-illustration_494250-40917.jpg'
    // }
  ]

  export const carDetails = [
    { title: "Body", value: "Sedan" },
    { title: "Mileage", value: "100mi" },
    { title: "Transmission", value: "Automatic" },
    { title: "Fuel Type", value: "Hybrid" },
    { title: "Engine", value: 3000 },
    { title: "Year", value: 2015 },
    { title: "Drive", value: "4WD" },
    { title: "Exterior Color", value: "Pearl White" },
    { title: "Interior Color", value: "Jet Red" },
    { title: "VIN", value: "WDDGJ5HB1CF79" }
  ]

  export const features = [
    "ABS",
    "Auxiliary heating",
    "Bluetooth",
    "CD player",
    "Central locking",
    "ESP",
    "Full LED headlights",
    "LED dynamic taillights",
    "Tire pressure monitoring system",
    "Nitro",
    "Storage package",
    "Turbo-engine"
  ];

  export const featuresData = {
    group1: {
      title: "Nulla consequat enim",
      items: [
        "Sed venenatis risus eleifend solis nec felis mollis",
        "Fusce eleifend folla prente laoreet dui eget aliquet",
        "Sed venenatis risus nec osmet covar felis mollis",
        "Gusce eusce eleifend aet laoreet dui eget aliquet",
        "Teros eam in nulla consectetur, lonter guel suscipit",
      ],
    },
    group2: {
      title: "Consequat massa",
      items: [
        "Sed venenatis risus eleifend solis nec felis mollis",
        "Fusce eleifend folla prente laoreet dui eget aliquet",
        "Sed venenatis risus nec osmet covar felis mollis",
        "Gusce eusce eleifend aet laoreet dui eget aliquet",
        "Teros eam in nulla consectetur, lonter guel suscipit",
      ],
    },
  };

  export const engineDetails = [
    {
      id:1,
      title: 'Engine',
      icon: 'bi bi-car-front-fill',
      child: [
        { id: 1, title: 'LAYOUT', value: 'V 4' },
        { id: 2, title: 'ENGINE VOLUME', value: '3.2 L' },
        { id: 3, title: 'TYPE OF DRIVE', value: 'RWD' },
        { id: 4, title: 'HORSE POWER', value: '230 hp' },
        { id: 5, title: 'POWER', value: '450 kW' },
        { id: 6, title: 'TORQUE', value: '627' },
        { id: 7, title: 'COMPRESSION RATIO', value: '8.6 – 16.2 :1' }
      ]
    },
    {
      id:2,
      title: 'Performance',
      icon: 'bi bi-speedometer',
      child: [
        { id: 1, title: 'TOP TRACK SPEED', value: '173 mph' },
        { id: 2, title: '0 - 70 MPH', value: '5.3 s' }
      ]
    },
    {
      id:3,
      title: 'Transmission',
      icon: 'bi bi-gear-wide-connected',
      child: [
        { id: 1, title: 'TYPE', value: 'Automatic' },
        { id: 2, title: 'NUMBER OF GEARS', value: '6' }
      ]
    }
  ];

 export const designView = [
    {
      id: 1,
      title: "INTERIOR DESIGN",
      child: [
        "ABS",
        "Auxiliary heating",
        "Bluetooth",
        "CD player",
        "Central locking",
        "ESP",
        "Full LED headlights",
        "LED dynamic taillights",
        "Tire pressure monitoring system",
        "Nitro",
        "Storage package",
        "Turbo-engine"
      ]
    },
    {
      id: 2,
      title: "SAFETY FEATURES",
      child: [
        "ABS",
        "Auxiliary heating",
        "Bluetooth",
        "CD player",
        "Central locking",
        "ESP",
        "Full LED headlights",
        "LED dynamic taillights",
        "Tire pressure monitoring system",
        "Nitro",
        "Storage package",
        "Turbo-engine"
      ]
    },
    {
      id: 3,
      title: "EXTERIOR FEATURES",
      child: [
        "ABS",
        "Auxiliary heating",
        "Bluetooth",
        "CD player",
        "Central locking",
        "ESP",
        "Full LED headlights",
        "LED dynamic taillights",
        "Tire pressure monitoring system",
        "Nitro",
        "Storage package",
        "Turbo-engine"
      ]
    },
    {
      id: 4,
      title: "EXTRA FEATURES",
      child: [
        "ABS",
        "Auxiliary heating",
        "Bluetooth",
        "CD player",
        "Central locking",
        "ESP",
        "Full LED headlights",
        "LED dynamic taillights",
        "Tire pressure monitoring system",
        "Nitro",
        "Storage package",
        "Turbo-engine"
      ]
    }
  ];
  
  
  
  