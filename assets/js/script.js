const data = [
  {
    name: "Olivia Johnson",
    work: "painters",
    services: "Paints houses and other buildings.",
    state: "benue",
    lga: "makurdi",
    city: "makurdi",
    phone: "+234-810-XXXX-XXX",
    email: "olivia.johnson@example.com",
    rating: 9.0,
    duration: "24/7",
  },
  {
    name: "Luke Smith",
    work: "generator mechanics",
    services: "Repairs and maintains generators.",
    state: "kaduna",
    lga: "kaduna north",
    city: "kaduna",
    phone: "+234-810-XXXX-XXX",
    email: "luke.smith@example.com",
    rating: 9.3,
    duration: "12/7",
  },
  {
    name: "James Smith",
    work: "electrician",
    services: "Handles electrical wiring, repairs, and installations.",
    state: "lagos",
    lga: "eti-osa",
    city: "lekki",
    phone: "+234-810-XXXX-XXX",
    email: "james.smith@example.com",
    rating: 7.5,
    duration: "24/7",
  },
  {
    name: "Chris Davis",
    work: "automobile mechanics",
    services: "Repairs and services vehicles.",
    state: "benue",
    lga: "makurdi",
    city: "makurdi",
    phone: "+234-810-XXXX-XXX",
    email: "chris.davis@example.com",
    rating: 9.9,
    duration: "24/7",
  },
  {
    name: "John Wilson",
    work: "beauty salon",
    services: "Provides hair and beauty treatments.",
    state: "anambra",
    lga: "onitsha north",
    city: "onitsha",
    phone: "+234-810-XXXX-XXX",
    email: "john.wilson@example.com",
    rating: 7.4,
    duration: "24/7",
  },
  {
    name: "Alex Miller",
    work: "electrician",
    services: "Handles electrical wiring, repairs, and installations.",
    state: "borno",
    lga: "biu",
    city: "biu",
    phone: "+234-810-XXXX-XXX",
    email: "alex.miller@example.com",
    rating: 8.8,
    duration: "24/7",
  },
  {
    name: "Chris Brown",
    work: "automobile mechanics",
    services: "Repairs and services vehicles.",
    state: "kano",
    lga: "gwale",
    city: "gwale",
    phone: "+234-810-XXXX-XXX",
    email: "chris.brown@example.com",
    rating: 9.6,
    duration: "24/5",
  },
  {
    name: "Luke Smith",
    work: "carpenter",
    services: "Builds and repairs wooden structures and furniture.",
    state: "oyo",
    lga: "ibadan-north",
    city: "ibadan",
    phone: "+234-810-XXXX-XXX",
    email: "luke.smith@example.com",
    rating: 7.0,
    duration: "12/7",
  },
  {
    name: "Mary Anderson",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "rivers",
    lga: "port harcourt city",
    city: "port harcourt",
    phone: "+234-810-XXXX-XXX",
    email: "mary.anderson@example.com",
    rating: 8.1,
    duration: "24/5",
  },
  {
    name: "Luke Wilson",
    work: "fashion designers",
    services: "Creates clothing and accessories.",
    state: "anambra",
    lga: "onitsha north",
    city: "onitsha",
    phone: "+234-810-XXXX-XXX",
    email: "luke.wilson@example.com",
    rating: 7.2,
    duration: "12/5",
  },
  {
    name: "John Wilson",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "lagos",
    lga: "eti-osa",
    city: "lekki",
    phone: "+234-810-XXXX-XXX",
    email: "john.wilson@example.com",
    rating: 9.3,
    duration: "24/5",
  },
  {
    name: "John Miller",
    work: "shoe/bag designers",
    services: "Designs and creates custom shoes and bags.",
    state: "kaduna",
    lga: "zaria",
    city: "zaria",
    phone: "+234-810-XXXX-XXX",
    email: "john.miller@example.com",
    rating: 8.2,
    duration: "12/5",
  },
  {
    name: "John Wilson",
    work: "vulcanizes",
    services: "Repairs tires and fixes punctures.",
    state: "anambra",
    lga: "onitsha north",
    city: "onitsha",
    phone: "+234-810-XXXX-XXX",
    email: "john.wilson@example.com",
    rating: 7.6,
    duration: "12/7",
  },
  {
    name: "Olivia Taylor",
    work: "carpenter",
    services: "Builds and repairs wooden structures and furniture.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "olivia.taylor@example.com",
    rating: 7.1,
    duration: "12/7",
  },
  {
    name: "Luke Johnson",
    work: "interior decoration",
    services: "Designs and decorates interior spaces.",
    state: "enugu",
    lga: "nsukka",
    city: "nsukka",
    phone: "+234-810-XXXX-XXX",
    email: "luke.johnson@example.com",
    rating: 7.4,
    duration: "12/7",
  },
  {
    name: "Jane Anderson",
    work: "interlock/brick layers",
    services: "Lays interlock bricks and creates brick structures.",
    state: "oyo",
    lga: "ibadan-north",
    city: "ibadan",
    phone: "+234-810-XXXX-XXX",
    email: "jane.anderson@example.com",
    rating: 8.7,
    duration: "12/7",
  },
  {
    name: "Jane Wilson",
    work: "sewage workers",
    services: "Maintains and cleans sewage systems.",
    state: "oyo",
    lga: "ogbomosho north",
    city: "ogbomosho",
    phone: "+234-810-XXXX-XXX",
    email: "jane.wilson@example.com",
    rating: 8.8,
    duration: "12/7",
  },
  {
    name: "Chris Miller",
    work: "electrician",
    services: "Handles electrical wiring, repairs, and installations.",
    state: "benue",
    lga: "makurdi",
    city: "makurdi",
    phone: "+234-810-XXXX-XXX",
    email: "chris.miller@example.com",
    rating: 7.1,
    duration: "12/5",
  },
  {
    name: "James Davis",
    work: "sewage workers",
    services: "Maintains and cleans sewage systems.",
    state: "rivers",
    lga: "port harcourt city",
    city: "port harcourt",
    phone: "+234-810-XXXX-XXX",
    email: "james.davis@example.com",
    rating: 8.4,
    duration: "24/7",
  },
  {
    name: "Chris Doe",
    work: "interlock/brick layers",
    services: "Lays interlock bricks and creates brick structures.",
    state: "kaduna",
    lga: "zaria",
    city: "zaria",
    phone: "+234-810-XXXX-XXX",
    email: "chris.doe@example.com",
    rating: 9.8,
    duration: "12/7",
  },
  {
    name: "Chris Brown",
    work: "generator mechanics",
    services: "Repairs and maintains generators.",
    state: "kaduna",
    lga: "zaria",
    city: "zaria",
    phone: "+234-810-XXXX-XXX",
    email: "chris.brown@example.com",
    rating: 7.3,
    duration: "12/5",
  },
  {
    name: "Mary Anderson",
    work: "cleaners",
    services: "Offers cleaning services for homes and offices.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "mary.anderson@example.com",
    rating: 7.8,
    duration: "24/5",
  },
  {
    name: "Olivia Davis",
    work: "car wash",
    services: "Provides vehicle cleaning services.",
    state: "enugu",
    lga: "nsukka",
    city: "nsukka",
    phone: "+234-810-XXXX-XXX",
    email: "olivia.davis@example.com",
    rating: 7.1,
    duration: "12/5",
  },
  {
    name: "John Davis",
    work: "sewage workers",
    services: "Maintains and cleans sewage systems.",
    state: "katsina",
    lga: "funtua",
    city: "funtua",
    phone: "+234-810-XXXX-XXX",
    email: "john.davis@example.com",
    rating: 7.7,
    duration: "24/7",
  },
  {
    name: "Sophia Anderson",
    work: "generator mechanics",
    services: "Repairs and maintains generators.",
    state: "rivers",
    lga: "port harcourt city",
    city: "port harcourt",
    phone: "+234-810-XXXX-XXX",
    email: "sophia.anderson@example.com",
    rating: 9.1,
    duration: "12/5",
  },
  {
    name: "Chris Smith",
    work: "welders",
    services: "Fuses metal parts together for construction and repairs.",
    state: "lagos",
    lga: "eti-osa",
    city: "lekki",
    phone: "+234-810-XXXX-XXX",
    email: "chris.smith@example.com",
    rating: 8.8,
    duration: "24/7",
  },
  {
    name: "Mary Wilson",
    work: "interior decoration",
    services: "Designs and decorates interior spaces.",
    state: "anambra",
    lga: "onitsha north",
    city: "onitsha",
    phone: "+234-810-XXXX-XXX",
    email: "mary.wilson@example.com",
    rating: 8.2,
    duration: "24/7",
  },
  {
    name: "Sophia Brown",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "kaduna",
    lga: "kaduna north",
    city: "kaduna",
    phone: "+234-810-XXXX-XXX",
    email: "sophia.brown@example.com",
    rating: 9.0,
    duration: "24/7",
  },
  {
    name: "Luke Anderson",
    work: "fashion designers",
    services: "Creates clothing and accessories.",
    state: "benue",
    lga: "makurdi",
    city: "makurdi",
    phone: "+234-810-XXXX-XXX",
    email: "luke.anderson@example.com",
    rating: 7.6,
    duration: "12/7",
  },
  {
    name: "Sophia Miller",
    work: "shoe/bag designers",
    services: "Designs and creates custom shoes and bags.",
    state: "oyo",
    lga: "ibadan-north",
    city: "ibadan",
    phone: "+234-810-XXXX-XXX",
    email: "sophia.miller@example.com",
    rating: 9.8,
    duration: "12/5",
  },
  {
    name: "John Taylor",
    work: "interlock/brick layers",
    services: "Lays interlock bricks and creates brick structures.",
    state: "borno",
    lga: "biu",
    city: "biu",
    phone: "+234-810-XXXX-XXX",
    email: "john.taylor@example.com",
    rating: 7.4,
    duration: "24/5",
  },
  {
    name: "Olivia Doe",
    work: "generator mechanics",
    services: "Repairs and maintains generators.",
    state: "oyo",
    lga: "ogbomosho north",
    city: "ogbomosho",
    phone: "+234-810-XXXX-XXX",
    email: "olivia.doe@example.com",
    rating: 8.2,
    duration: "24/7",
  },
  {
    name: "Chris Moore",
    work: "catering",
    services: "Provides food services for events and gatherings.",
    state: "kaduna",
    lga: "kaduna north",
    city: "kaduna",
    phone: "+234-810-XXXX-XXX",
    email: "chris.moore@example.com",
    rating: 8.1,
    duration: "12/7",
  },
  {
    name: "Chris Johnson",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "chris.johnson@example.com",
    rating: 8.4,
    duration: "12/7",
  },
  {
    name: "Mary Johnson",
    work: "vulcanizes",
    services: "Repairs tires and fixes punctures.",
    state: "katsina",
    lga: "katsina",
    city: "katsina",
    phone: "+234-810-XXXX-XXX",
    email: "mary.johnson@example.com",
    rating: 9.1,
    duration: "12/7",
  },
  {
    name: "John Doe",
    work: "makeup artist",
    services: "Applies makeup for events and personal styling.",
    state: "benue",
    lga: "gboko",
    city: "gboko",
    phone: "+234-810-XXXX-XXX",
    email: "john.doe@example.com",
    rating: 7.1,
    duration: "12/7",
  },
  {
    name: "Mary Brown",
    work: "painters",
    services: "Paints houses and other buildings.",
    state: "oyo",
    lga: "ogbomosho north",
    city: "ogbomosho",
    phone: "+234-810-XXXX-XXX",
    email: "mary.brown@example.com",
    rating: 9.7,
    duration: "24/5",
  },
  {
    name: "Sophia Smith",
    work: "generator mechanics",
    services: "Repairs and maintains generators.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "sophia.smith@example.com",
    rating: 9.6,
    duration: "24/5",
  },
  {
    name: "Sophia Davis",
    work: "makeup artist",
    services: "Applies makeup for events and personal styling.",
    state: "kano",
    lga: "gwale",
    city: "gwale",
    phone: "+234-810-XXXX-XXX",
    email: "sophia.davis@example.com",
    rating: 7.2,
    duration: "24/5",
  },
  {
    name: "Olivia Moore",
    work: "cleaners",
    services: "Offers cleaning services for homes and offices.",
    state: "katsina",
    lga: "funtua",
    city: "funtua",
    phone: "+234-810-XXXX-XXX",
    email: "olivia.moore@example.com",
    rating: 7.5,
    duration: "12/7",
  },
  {
    name: "Alex Brown",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "anambra",
    lga: "onitsha north",
    city: "onitsha",
    phone: "+234-810-XXXX-XXX",
    email: "alex.brown@example.com",
    rating: 8.7,
    duration: "12/7",
  },
  {
    name: "Alex Wilson",
    work: "catering",
    services: "Provides food services for events and gatherings.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "alex.wilson@example.com",
    rating: 9.7,
    duration: "24/7",
  },
  {
    name: "Sophia Smith",
    work: "sewage workers",
    services: "Maintains and cleans sewage systems.",
    state: "katsina",
    lga: "funtua",
    city: "funtua",
    phone: "+234-810-XXXX-XXX",
    email: "sophia.smith@example.com",
    rating: 8.7,
    duration: "24/7",
  },
  {
    name: "James Brown",
    work: "cleaners",
    services: "Offers cleaning services for homes and offices.",
    state: "kano",
    lga: "gwale",
    city: "gwale",
    phone: "+234-810-XXXX-XXX",
    email: "james.brown@example.com",
    rating: 7.6,
    duration: "12/7",
  },
  {
    name: "Jane Moore",
    work: "interlock/brick layers",
    services: "Lays interlock bricks and creates brick structures.",
    state: "kano",
    lga: "kano municipal",
    city: "kano",
    phone: "+234-810-XXXX-XXX",
    email: "jane.moore@example.com",
    rating: 8.4,
    duration: "12/7",
  },
  {
    name: "John Doe",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "kano",
    lga: "kano municipal",
    city: "kano",
    phone: "+234-810-XXXX-XXX",
    email: "john.doe@example.com",
    rating: 7.3,
    duration: "24/5",
  },
  {
    name: "Emma Davis",
    work: "shoe/bag designers",
    services: "Designs and creates custom shoes and bags.",
    state: "kaduna",
    lga: "kaduna north",
    city: "kaduna",
    phone: "+234-810-XXXX-XXX",
    email: "emma.davis@example.com",
    rating: 9.8,
    duration: "24/5",
  },
  {
    name: "James Smith",
    work: "catering",
    services: "Provides food services for events and gatherings.",
    state: "benue",
    lga: "gboko",
    city: "gboko",
    phone: "+234-810-XXXX-XXX",
    email: "james.smith@example.com",
    rating: 8.4,
    duration: "24/5",
  },
  {
    name: "James Brown",
    work: "catering",
    services: "Provides food services for events and gatherings.",
    state: "kano",
    lga: "kano municipal",
    city: "kano",
    phone: "+234-810-XXXX-XXX",
    email: "james.brown@example.com",
    rating: 8.0,
    duration: "12/5",
  },
  {
    name: "Olivia Doe",
    work: "catering",
    services: "Provides food services for events and gatherings.",
    state: "enugu",
    lga: "nsukka",
    city: "nsukka",
    phone: "+234-810-XXXX-XXX",
    email: "olivia.doe@example.com",
    rating: 9.1,
    duration: "12/5",
  },
  {
    name: "Emma Johnson",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "borno",
    lga: "maiduguri",
    city: "maiduguri",
    phone: "+234-810-XXXX-XXX",
    email: "emma.johnson@example.com",
    rating: 7.8,
    duration: "12/5",
  },
  {
    name: "James Johnson",
    work: "fashion designers",
    services: "Creates clothing and accessories.",
    state: "rivers",
    lga: "obio-akpor",
    city: "rumuokoro",
    phone: "+234-810-XXXX-XXX",
    email: "james.johnson@example.com",
    rating: 7.0,
    duration: "24/5",
  },
  {
    name: "Luke Smith",
    work: "electrician",
    services: "Handles electrical wiring, repairs, and installations.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "luke.smith@example.com",
    rating: 7.5,
    duration: "12/7",
  },
  {
    name: "Jane Moore",
    work: "welders",
    services: "Fuses metal parts together for construction and repairs.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "jane.moore@example.com",
    rating: 7.0,
    duration: "12/5",
  },
  {
    name: "Sophia Moore",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "rivers",
    lga: "port harcourt city",
    city: "port harcourt",
    phone: "+234-810-XXXX-XXX",
    email: "sophia.moore@example.com",
    rating: 7.0,
    duration: "12/7",
  },
  {
    name: "Sophia Wilson",
    work: "sewage workers",
    services: "Maintains and cleans sewage systems.",
    state: "lagos",
    lga: "ikeja",
    city: "ikeja",
    phone: "+234-810-XXXX-XXX",
    email: "sophia.wilson@example.com",
    rating: 7.2,
    duration: "24/5",
  },
  {
    name: "Luke Taylor",
    work: "carpenter",
    services: "Builds and repairs wooden structures and furniture.",
    state: "katsina",
    lga: "funtua",
    city: "funtua",
    phone: "+234-810-XXXX-XXX",
    email: "luke.taylor@example.com",
    rating: 7.8,
    duration: "12/7",
  },
  {
    name: "Emma Doe",
    work: "laptop/phone repairs",
    services: "Fixes and repairs mobile phones and laptops.",
    state: "anambra",
    lga: "onitsha north",
    city: "onitsha",
    phone: "+234-810-XXXX-XXX",
    email: "emma.doe@example.com",
    rating: 7.4,
    duration: "12/5",
  },
  {
    name: "Sophia Smith",
    work: "welders",
    services: "Fuses metal parts together for construction and repairs.",
    state: "borno",
    lga: "biu",
    city: "biu",
    phone: "+234-810-XXXX-XXX",
    email: "sophia.smith@example.com",
    rating: 8.7,
    duration: "24/5",
  },
  {
    name: "Mary Taylor",
    work: "cleaners",
    services: "Offers cleaning services for homes and offices.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "mary.taylor@example.com",
    rating: 7.7,
    duration: "24/7",
  },
];
works = [
  "electrician",
  "carpenter",
  "plumber",
  "automobile mechanics",
  "catering",
  "interior decoration",
  "painters",
  "fashion designers",
  "car wash",
  "cleaners",
  "beauty salon",
  "makeup artist",
  "laptop/phone repairs",
  "vulcanizes",
  "shoe/bag designers",
  "interlock/brick layers",
  "generator mechanics",
  "chef",
  "sewage workers",
  "welders",
];
states = [
  "anambra",
  "benue",
  "borno",
  "enugu",
  "kaduna",
  "kano",
  "katsina",
  "lagos",
  "oyo",
  "rivers",
];

const tbody = document.getElementById("tbody");

var num = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i].rating > 9.6) {
    num += 1;
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
      <th scope="row">${num}</th>
      <td>${data[i].name.split(" ")[1]}</td>
      <td>${data[i].work}</td>
      <td>${data[i].city}</td>
      <td>${data[i].rating}</td>
    `;
    tbody.appendChild(newRow);
  }
}
