const data = [
  {
    name: "Kenechukwu Okafor",
    work: "painter",
    services: "Paints houses and other buildings.",
    state: "lagos",
    lga: "eti-osa",
    city: "lekki",
    phone: "+234-810-XXXX-XXX",
    email: "kenechukwu.okafor@example.com",
    rating: 8.0,
    duration: "24/7",
  },
  {
    name: "Nneka Eze",
    work: "interior decoration",
    services: "Designs and decorates interior spaces.",
    state: "borno",
    lga: "biu",
    city: "biu",
    phone: "+234-810-XXXX-XXX",
    email: "nneka.eze@example.com",
    rating: 8.8,
    duration: "24/5",
  },
  {
    name: "Kehinde Olawale",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "borno",
    lga: "maiduguri",
    city: "maiduguri",
    phone: "+234-810-XXXX-XXX",
    email: "kehinde.olawale@example.com",
    rating: 9.6,
    duration: "24/5",
  },
  {
    name: "Chukwudi Eze",
    work: "shoe/bag designers",
    services: "Designs and creates custom shoes and bags.",
    state: "rivers",
    lga: "obio-akpor",
    city: "rumuokoro",
    phone: "+234-810-XXXX-XXX",
    email: "chukwudi.eze@example.com",
    rating: 8.0,
    duration: "24/5",
  },
  {
    name: "Adebayo Oladipo",
    work: "generator mechanics",
    services: "Repairs and maintains generators.",
    state: "kaduna",
    lga: "kaduna north",
    city: "kaduna",
    phone: "+234-810-XXXX-XXX",
    email: "adebayo.oladipo@example.com",
    rating: 7.2,
    duration: "12/7",
  },
  {
    name: "Chijindu Onuorah",
    work: "automobile mechanics",
    services: "Repairs and services vehicles.",
    state: "lagos",
    lga: "eti-osa",
    city: "lekki",
    phone: "+234-810-XXXX-XXX",
    email: "chijindu.onuorah@example.com",
    rating: 8.6,
    duration: "24/5",
  },
  {
    name: "Kehinde Akintola",
    work: "interior decoration",
    services: "Designs and decorates interior spaces.",
    state: "oyo",
    lga: "ogbomosho north",
    city: "ogbomosho",
    phone: "+234-810-XXXX-XXX",
    email: "kehinde.akintola@example.com",
    rating: 9.6,
    duration: "12/7",
  },
  {
    name: "Folake Oladipo",
    work: "welders",
    services: "Fuses metal parts together for construction and repairs.",
    state: "kano",
    lga: "kano municipal",
    city: "kano",
    phone: "+234-810-XXXX-XXX",
    email: "folake.oladipo@example.com",
    rating: 9.8,
    duration: "24/7",
  },
  {
    name: "Chijindu Onwurah",
    work: "sewage workers",
    services: "Maintains and cleans sewage systems.",
    state: "kaduna",
    lga: "kaduna north",
    city: "kaduna",
    phone: "+234-810-XXXX-XXX",
    email: "chijindu.onwurah@example.com",
    rating: 8.5,
    duration: "24/7",
  },
  {
    name: "Ademola Adeoye",
    work: "catering",
    services: "Provides food services for events and gatherings.",
    state: "kaduna",
    lga: "kaduna north",
    city: "kaduna",
    phone: "+234-810-XXXX-XXX",
    email: "ademola.adeoye@example.com",
    rating: 9.3,
    duration: "12/7",
  },
  {
    name: "Chukwudi Onwurah",
    work: "sewage workers",
    services: "Maintains and cleans sewage systems.",
    state: "lagos",
    lga: "ikeja",
    city: "ikeja",
    phone: "+234-810-XXXX-XXX",
    email: "chukwudi.onwurah@example.com",
    rating: 9.2,
    duration: "24/5",
  },
  {
    name: "Emeka Onwurah",
    work: "fashion designers",
    services: "Creates clothing and accessories.",
    state: "anambra",
    lga: "onitsha north",
    city: "onitsha",
    phone: "+234-810-XXXX-XXX",
    email: "emeka.onwurah@example.com",
    rating: 9.1,
    duration: "12/5",
  },
  {
    name: "Ademola Adeoye",
    work: "catering",
    services: "Provides food services for events and gatherings.",
    state: "benue",
    lga: "gboko",
    city: "gboko",
    phone: "+234-810-XXXX-XXX",
    email: "ademola.adeoye@example.com",
    rating: 9.4,
    duration: "24/7",
  },
  {
    name: "Emeka Eze",
    work: "welders",
    services: "Fuses metal parts together for construction and repairs.",
    state: "anambra",
    lga: "awka-south",
    city: "awka",
    phone: "+234-810-XXXX-XXX",
    email: "emeka.eze@example.com",
    rating: 8.8,
    duration: "12/5",
  },
  {
    name: "Adebayo Akintola",
    work: "plumber",
    services: "Fixes leaks, installs pipes, and repairs water systems.",
    state: "borno",
    lga: "maiduguri",
    city: "maiduguri",
    phone: "+234-810-XXXX-XXX",
    email: "adebayo.akintola@example.com",
    rating: 8.6,
    duration: "12/7",
  },
  {
    name: "Adeola Adeoye",
    work: "generator mechanics",
    services: "Repairs and maintains generators.",
    state: "kaduna",
    lga: "kaduna north",
    city: "kaduna",
    phone: "+234-810-XXXX-XXX",
    email: "adeola.adeoye@example.com",
    rating: 7.4,
    duration: "24/7",
  },
  {
    name: "Femi Adebayo",
    work: "sewage workers",
    services: "Maintains and cleans sewage systems.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "femi.adebayo@example.com",
    rating: 8.3,
    duration: "12/5",
  },
  {
    name: "Femi Olawale",
    work: "catering",
    services: "Provides food services for events and gatherings.",
    state: "oyo",
    lga: "ogbomosho north",
    city: "ogbomosho",
    phone: "+234-810-XXXX-XXX",
    email: "femi.olawale@example.com",
    rating: 9.6,
    duration: "12/5",
  },
  {
    name: "Adebayo Adeoye",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "katsina",
    lga: "katsina",
    city: "katsina",
    phone: "+234-810-XXXX-XXX",
    email: "adebayo.adeoye@example.com",
    rating: 8.3,
    duration: "12/7",
  },
  {
    name: "Chidera Okafor",
    work: "car wash",
    services: "Provides vehicle cleaning services.",
    state: "borno",
    lga: "maiduguri",
    city: "maiduguri",
    phone: "+234-810-XXXX-XXX",
    email: "chidera.okafor@example.com",
    rating: 8.2,
    duration: "24/7",
  },
  {
    name: "Adeola Akintola",
    work: "carpenter",
    services: "Builds and repairs wooden structures and furniture.",
    state: "lagos",
    lga: "eti-osa",
    city: "lekki",
    phone: "+234-810-XXXX-XXX",
    email: "adeola.akintola@example.com",
    rating: 7.0,
    duration: "12/7",
  },
  {
    name: "Ademola Olatunji",
    work: "beauty salon",
    services: "Provides hair and beauty treatments.",
    state: "anambra",
    lga: "awka-south",
    city: "awka",
    phone: "+234-810-XXXX-XXX",
    email: "ademola.olatunji@example.com",
    rating: 9.1,
    duration: "24/5",
  },
  {
    name: "Kehinde Olatunji",
    work: "makeup artist",
    services: "Applies makeup for events and personal styling.",
    state: "kano",
    lga: "kano municipal",
    city: "kano",
    phone: "+234-810-XXXX-XXX",
    email: "kehinde.olatunji@example.com",
    rating: 6.8,
    duration: "12/7",
  },
  {
    name: "Adeola Adebayo",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "oyo",
    lga: "ogbomosho north",
    city: "ogbomosho",
    phone: "+234-810-XXXX-XXX",
    email: "adeola.adebayo@example.com",
    rating: 6.9,
    duration: "24/5",
  },
  {
    name: "Femi Adeoye",
    work: "vulcanizes",
    services: "Repairs tires and fixes punctures.",
    state: "enugu",
    lga: "nsukka",
    city: "nsukka",
    phone: "+234-810-XXXX-XXX",
    email: "femi.adeoye@example.com",
    rating: 8.6,
    duration: "12/5",
  },
  {
    name: "Chijindu Eze",
    work: "welders",
    services: "Fuses metal parts together for construction and repairs.",
    state: "lagos",
    lga: "ikeja",
    city: "ikeja",
    phone: "+234-810-XXXX-XXX",
    email: "chijindu.eze@example.com",
    rating: 7.1,
    duration: "24/5",
  },
  {
    name: "Adeola Olanrewaju",
    work: "car wash",
    services: "Provides vehicle cleaning services.",
    state: "benue",
    lga: "gboko",
    city: "gboko",
    phone: "+234-810-XXXX-XXX",
    email: "adeola.olanrewaju@example.com",
    rating: 8.1,
    duration: "24/5",
  },
  {
    name: "Seun Adeoye",
    work: "vulcanizes",
    services: "Repairs tires and fixes punctures.",
    state: "kano",
    lga: "gwale",
    city: "gwale",
    phone: "+234-810-XXXX-XXX",
    email: "seun.adeoye@example.com",
    rating: 8.2,
    duration: "24/5",
  },
  {
    name: "Folake Olawale",
    work: "carpenter",
    services: "Builds and repairs wooden structures and furniture.",
    state: "rivers",
    lga: "obio-akpor",
    city: "rumuokoro",
    phone: "+234-810-XXXX-XXX",
    email: "folake.olawale@example.com",
    rating: 9.1,
    duration: "12/5",
  },
  {
    name: "Kehinde Adeoye",
    work: "plumber",
    services: "Fixes leaks, installs pipes, and repairs water systems.",
    state: "rivers",
    lga: "obio-akpor",
    city: "rumuokoro",
    phone: "+234-810-XXXX-XXX",
    email: "kehinde.adeoye@example.com",
    rating: 8.0,
    duration: "12/5",
  },
  {
    name: "Ogechi Onwurah",
    work: "generator mechanics",
    services: "Repairs and maintains generators.",
    state: "enugu",
    lga: "nsukka",
    city: "nsukka",
    phone: "+234-810-XXXX-XXX",
    email: "ogechi.onwurah@example.com",
    rating: 7.7,
    duration: "24/5",
  },
  {
    name: "Adeola Oladipo",
    work: "vulcanizes",
    services: "Repairs tires and fixes punctures.",
    state: "lagos",
    lga: "eti-osa",
    city: "lekki",
    phone: "+234-810-XXXX-XXX",
    email: "adeola.oladipo@example.com",
    rating: 8.6,
    duration: "12/5",
  },
  {
    name: "Ngozi Nwosu",
    work: "shoe/bag designers",
    services: "Designs and creates custom shoes and bags.",
    state: "kaduna",
    lga: "zaria",
    city: "zaria",
    phone: "+234-810-XXXX-XXX",
    email: "ngozi.nwosu@example.com",
    rating: 6.9,
    duration: "24/5",
  },
  {
    name: "Femi Akintola",
    work: "vulcanizes",
    services: "Repairs tires and fixes punctures.",
    state: "katsina",
    lga: "katsina",
    city: "katsina",
    phone: "+234-810-XXXX-XXX",
    email: "femi.akintola@example.com",
    rating: 8.3,
    duration: "24/7",
  },
  {
    name: "Femi Oladipo",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "kano",
    lga: "gwale",
    city: "gwale",
    phone: "+234-810-XXXX-XXX",
    email: "femi.oladipo@example.com",
    rating: 9.0,
    duration: "24/5",
  },
  {
    name: "Ngozi Nwosu",
    work: "sewage workers",
    services: "Maintains and cleans sewage systems.",
    state: "kaduna",
    lga: "kaduna north",
    city: "kaduna",
    phone: "+234-810-XXXX-XXX",
    email: "ngozi.nwosu@example.com",
    rating: 6.9,
    duration: "24/7",
  },
  {
    name: "Nneka Nwoye",
    work: "painter",
    services: "Paints houses and other buildings.",
    state: "anambra",
    lga: "onitsha north",
    city: "onitsha",
    phone: "+234-810-XXXX-XXX",
    email: "nneka.nwoye@example.com",
    rating: 8.4,
    duration: "12/5",
  },
  {
    name: "Sanusi Adekunle",
    work: "makeup artist",
    services: "Applies makeup for events and personal styling.",
    state: "rivers",
    lga: "obio-akpor",
    city: "rumuokoro",
    phone: "+234-810-XXXX-XXX",
    email: "sanusi.adekunle@example.com",
    rating: 8.8,
    duration: "12/7",
  },
  {
    name: "Ogechi Onuorah",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "rivers",
    lga: "port harcourt city",
    city: "port harcourt",
    phone: "+234-810-XXXX-XXX",
    email: "ogechi.onuorah@example.com",
    rating: 6.8,
    duration: "24/7",
  },
  {
    name: "Emeka Okoye",
    work: "automobile mechanics",
    services: "Repairs and services vehicles.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "emeka.okoye@example.com",
    rating: 9.7,
    duration: "12/7",
  },
  {
    name: "Kehinde Adeola",
    work: "automobile mechanics",
    services: "Repairs and services vehicles.",
    state: "anambra",
    lga: "awka-south",
    city: "awka",
    phone: "+234-810-XXXX-XXX",
    email: "kehinde.adeola@example.com",
    rating: 7.5,
    duration: "24/7",
  },
  {
    name: "Ademola Olawale",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "oyo",
    lga: "ogbomosho north",
    city: "ogbomosho",
    phone: "+234-810-XXXX-XXX",
    email: "ademola.olawale@example.com",
    rating: 7.5,
    duration: "12/7",
  },
  {
    name: "Chukwudi Igwe",
    work: "welders",
    services: "Fuses metal parts together for construction and repairs.",
    state: "enugu",
    lga: "nsukka",
    city: "nsukka",
    phone: "+234-810-XXXX-XXX",
    email: "chukwudi.igwe@example.com",
    rating: 9.4,
    duration: "12/7",
  },
  {
    name: "Adeola Adebayo",
    work: "plumber",
    services: "Fixes leaks, installs pipes, and repairs water systems.",
    state: "kaduna",
    lga: "kaduna north",
    city: "kaduna",
    phone: "+234-810-XXXX-XXX",
    email: "adeola.adebayo@example.com",
    rating: 7.2,
    duration: "24/5",
  },
  {
    name: "Seun Adekunle",
    work: "interlock/brick layers",
    services: "Lays interlock bricks and creates brick structures.",
    state: "kano",
    lga: "gwale",
    city: "gwale",
    phone: "+234-810-XXXX-XXX",
    email: "seun.adekunle@example.com",
    rating: 8.1,
    duration: "12/5",
  },
  {
    name: "Adebayo Olawale",
    work: "interlock/brick layers",
    services: "Lays interlock bricks and creates brick structures.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "adebayo.olawale@example.com",
    rating: 7.0,
    duration: "24/5",
  },
  {
    name: "Chijindu Okoye",
    work: "laptop/phone repairs",
    services: "Fixes and repairs mobile phones and laptops.",
    state: "katsina",
    lga: "katsina",
    city: "katsina",
    phone: "+234-810-XXXX-XXX",
    email: "chijindu.okoye@example.com",
    rating: 8.2,
    duration: "24/5",
  },
  {
    name: "Seun Olaniyan",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "oyo",
    lga: "ibadan-north",
    city: "ibadan",
    phone: "+234-810-XXXX-XXX",
    email: "seun.olaniyan@example.com",
    rating: 9.4,
    duration: "24/5",
  },
  {
    name: "Nneka Okoye",
    work: "vulcanizes",
    services: "Repairs tires and fixes punctures.",
    state: "anambra",
    lga: "awka-south",
    city: "awka",
    phone: "+234-810-XXXX-XXX",
    email: "nneka.okoye@example.com",
    rating: 9.1,
    duration: "24/7",
  },
  {
    name: "Seun Olaniyan",
    work: "car wash",
    services: "Provides vehicle cleaning services.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "seun.olaniyan@example.com",
    rating: 6.9,
    duration: "24/7",
  },
  {
    name: "Kenechukwu Nwosu",
    work: "automobile mechanics",
    services: "Repairs and services vehicles.",
    state: "lagos",
    lga: "ikeja",
    city: "ikeja",
    phone: "+234-810-XXXX-XXX",
    email: "kenechukwu.nwosu@example.com",
    rating: 7.8,
    duration: "24/7",
  },
  {
    name: "Chiamaka Igwe",
    work: "interior decoration",
    services: "Designs and decorates interior spaces.",
    state: "enugu",
    lga: "nsukka",
    city: "nsukka",
    phone: "+234-810-XXXX-XXX",
    email: "chiamaka.igwe@example.com",
    rating: 8.9,
    duration: "12/7",
  },
  {
    name: "Femi Adebayo",
    work: "vulcanizes",
    services: "Repairs tires and fixes punctures.",
    state: "kaduna",
    lga: "zaria",
    city: "zaria",
    phone: "+234-810-XXXX-XXX",
    email: "femi.adebayo@example.com",
    rating: 6.9,
    duration: "12/5",
  },
  {
    name: "Chiamaka Okoye",
    work: "makeup artist",
    services: "Applies makeup for events and personal styling.",
    state: "lagos",
    lga: "ikeja",
    city: "ikeja",
    phone: "+234-810-XXXX-XXX",
    email: "chiamaka.okoye@example.com",
    rating: 7.7,
    duration: "12/5",
  },
  {
    name: "Kenechukwu Onuorah",
    work: "fashion designers",
    services: "Creates clothing and accessories.",
    state: "benue",
    lga: "gboko",
    city: "gboko",
    phone: "+234-810-XXXX-XXX",
    email: "kenechukwu.onuorah@example.com",
    rating: 7.0,
    duration: "24/7",
  },
  {
    name: "Femi Adekunle",
    work: "vulcanizes",
    services: "Repairs tires and fixes punctures.",
    state: "oyo",
    lga: "ogbomosho north",
    city: "ogbomosho",
    phone: "+234-810-XXXX-XXX",
    email: "femi.adekunle@example.com",
    rating: 7.6,
    duration: "12/5",
  },
  {
    name: "Emeka Onuorah",
    work: "electrician",
    services: "Handles electrical wiring, repairs, and installations.",
    state: "lagos",
    lga: "eti-osa",
    city: "lekki",
    phone: "+234-810-XXXX-XXX",
    email: "emeka.onuorah@example.com",
    rating: 9.9,
    duration: "24/7",
  },
  {
    name: "Sanusi Adebayo",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "rivers",
    lga: "obio-akpor",
    city: "rumuokoro",
    phone: "+234-810-XXXX-XXX",
    email: "sanusi.adebayo@example.com",
    rating: 6.9,
    duration: "12/7",
  },
  {
    name: "Adebayo Adekunle",
    work: "vulcanizes",
    services: "Repairs tires and fixes punctures.",
    state: "anambra",
    lga: "awka-south",
    city: "awka",
    phone: "+234-810-XXXX-XXX",
    email: "adebayo.adekunle@example.com",
    rating: 8.0,
    duration: "24/5",
  },
  {
    name: "Sanusi Adebayo",
    work: "welders",
    services: "Fuses metal parts together for construction and repairs.",
    state: "benue",
    lga: "makurdi",
    city: "makurdi",
    phone: "+234-810-XXXX-XXX",
    email: "sanusi.adebayo@example.com",
    rating: 9.3,
    duration: "12/7",
  },
  {
    name: "Amarachi Nwosu",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "kano",
    lga: "kano municipal",
    city: "kano",
    phone: "+234-810-XXXX-XXX",
    email: "amarachi.nwosu@example.com",
    rating: 9.4,
    duration: "24/5",
  },
  {
    name: "Kehinde Akintola",
    work: "fashion designers",
    services: "Creates clothing and accessories.",
    state: "anambra",
    lga: "onitsha north",
    city: "onitsha",
    phone: "+234-810-XXXX-XXX",
    email: "kehinde.akintola@example.com",
    rating: 7.9,
    duration: "12/5",
  },
  {
    name: "Chijindu Onuorah",
    work: "carpenter",
    services: "Builds and repairs wooden structures and furniture.",
    state: "rivers",
    lga: "port harcourt city",
    city: "port harcourt",
    phone: "+234-810-XXXX-XXX",
    email: "chijindu.onuorah@example.com",
    rating: 8.8,
    duration: "12/7",
  },
  {
    name: "Chijindu Igwe",
    work: "interior decoration",
    services: "Designs and decorates interior spaces.",
    state: "lagos",
    lga: "ikeja",
    city: "ikeja",
    phone: "+234-810-XXXX-XXX",
    email: "chijindu.igwe@example.com",
    rating: 8.9,
    duration: "24/5",
  },
  {
    name: "Femi Olanrewaju",
    work: "automobile mechanics",
    services: "Repairs and services vehicles.",
    state: "kaduna",
    lga: "zaria",
    city: "zaria",
    phone: "+234-810-XXXX-XXX",
    email: "femi.olanrewaju@example.com",
    rating: 9.8,
    duration: "24/7",
  },
  {
    name: "Adebayo Adeoye",
    work: "shoe/bag designers",
    services: "Designs and creates custom shoes and bags.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "adebayo.adeoye@example.com",
    rating: 9.8,
    duration: "24/5",
  },
  {
    name: "Sanusi Oladipo",
    work: "beauty salon",
    services: "Provides hair and beauty treatments.",
    state: "benue",
    lga: "gboko",
    city: "gboko",
    phone: "+234-810-XXXX-XXX",
    email: "sanusi.oladipo@example.com",
    rating: 8.6,
    duration: "12/7",
  },
  {
    name: "Folake Adeoye",
    work: "beauty salon",
    services: "Provides hair and beauty treatments.",
    state: "enugu",
    lga: "nsukka",
    city: "nsukka",
    phone: "+234-810-XXXX-XXX",
    email: "folake.adeoye@example.com",
    rating: 7.7,
    duration: "12/5",
  },
  {
    name: "Femi Olawale",
    work: "interior decoration",
    services: "Designs and decorates interior spaces.",
    state: "benue",
    lga: "gboko",
    city: "gboko",
    phone: "+234-810-XXXX-XXX",
    email: "femi.olawale@example.com",
    rating: 7.5,
    duration: "24/7",
  },
  {
    name: "Ogechi Okafor",
    work: "makeup artist",
    services: "Applies makeup for events and personal styling.",
    state: "oyo",
    lga: "ogbomosho north",
    city: "ogbomosho",
    phone: "+234-810-XXXX-XXX",
    email: "ogechi.okafor@example.com",
    rating: 7.1,
    duration: "12/7",
  },
  {
    name: "Kalu Nwoye",
    work: "carpenter",
    services: "Builds and repairs wooden structures and furniture.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "kalu.nwoye@example.com",
    rating: 9.6,
    duration: "12/7",
  },
  {
    name: "Femi Adekunle",
    work: "welders",
    services: "Fuses metal parts together for construction and repairs.",
    state: "enugu",
    lga: "nsukka",
    city: "nsukka",
    phone: "+234-810-XXXX-XXX",
    email: "femi.adekunle@example.com",
    rating: 9.9,
    duration: "24/5",
  },
  {
    name: "Seun Olawale",
    work: "makeup artist",
    services: "Applies makeup for events and personal styling.",
    state: "benue",
    lga: "gboko",
    city: "gboko",
    phone: "+234-810-XXXX-XXX",
    email: "seun.olawale@example.com",
    rating: 8.3,
    duration: "24/7",
  },
  {
    name: "Adebayo Olanrewaju",
    work: "interior decoration",
    services: "Designs and decorates interior spaces.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "adebayo.olanrewaju@example.com",
    rating: 7.3,
    duration: "12/5",
  },
  {
    name: "Chidera Okoli",
    work: "beauty salon",
    services: "Provides hair and beauty treatments.",
    state: "benue",
    lga: "gboko",
    city: "gboko",
    phone: "+234-810-XXXX-XXX",
    email: "chidera.okoli@example.com",
    rating: 7.3,
    duration: "24/5",
  },
  {
    name: "Kalu Nwosu",
    work: "automobile mechanics",
    services: "Repairs and services vehicles.",
    state: "lagos",
    lga: "ikeja",
    city: "ikeja",
    phone: "+234-810-XXXX-XXX",
    email: "kalu.nwosu@example.com",
    rating: 7.7,
    duration: "24/5",
  },
  {
    name: "Adebayo Akintola",
    work: "painter",
    services: "Paints houses and other buildings.",
    state: "kano",
    lga: "gwale",
    city: "gwale",
    phone: "+234-810-XXXX-XXX",
    email: "adebayo.akintola@example.com",
    rating: 7.3,
    duration: "12/5",
  },
  {
    name: "Adebayo Oladipo",
    work: "painter",
    services: "Paints houses and other buildings.",
    state: "oyo",
    lga: "ogbomosho north",
    city: "ogbomosho",
    phone: "+234-810-XXXX-XXX",
    email: "adebayo.oladipo@example.com",
    rating: 9.7,
    duration: "12/5",
  },
  {
    name: "Adebayo Akintola",
    work: "vulcanizes",
    services: "Repairs tires and fixes punctures.",
    state: "katsina",
    lga: "funtua",
    city: "funtua",
    phone: "+234-810-XXXX-XXX",
    email: "adebayo.akintola@example.com",
    rating: 7.4,
    duration: "24/7",
  },
  {
    name: "Folake Olatunji",
    work: "painter",
    services: "Paints houses and other buildings.",
    state: "kaduna",
    lga: "kaduna north",
    city: "kaduna",
    phone: "+234-810-XXXX-XXX",
    email: "folake.olatunji@example.com",
    rating: 9.6,
    duration: "12/7",
  },
  {
    name: "Ademola Adeoye",
    work: "electrician",
    services: "Handles electrical wiring, repairs, and installations.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "ademola.adeoye@example.com",
    rating: 8.7,
    duration: "12/5",
  },
  {
    name: "Ogechi Nwosu",
    work: "automobile mechanics",
    services: "Repairs and services vehicles.",
    state: "kaduna",
    lga: "kaduna north",
    city: "kaduna",
    phone: "+234-810-XXXX-XXX",
    email: "ogechi.nwosu@example.com",
    rating: 9.0,
    duration: "12/5",
  },
  {
    name: "Chiamaka Okafor",
    work: "shoe/bag designers",
    services: "Designs and creates custom shoes and bags.",
    state: "katsina",
    lga: "katsina",
    city: "katsina",
    phone: "+234-810-XXXX-XXX",
    email: "chiamaka.okafor@example.com",
    rating: 8.4,
    duration: "12/5",
  },
  {
    name: "Adebayo Adeoye",
    work: "automobile mechanics",
    services: "Repairs and services vehicles.",
    state: "oyo",
    lga: "ibadan-north",
    city: "ibadan",
    phone: "+234-810-XXXX-XXX",
    email: "adebayo.adeoye@example.com",
    rating: 7.3,
    duration: "24/5",
  },
  {
    name: "Kenechukwu Okoli",
    work: "electrician",
    services: "Handles electrical wiring, repairs, and installations.",
    state: "lagos",
    lga: "ikeja",
    city: "ikeja",
    phone: "+234-810-XXXX-XXX",
    email: "kenechukwu.okoli@example.com",
    rating: 8.2,
    duration: "24/5",
  },
  {
    name: "Adeola Olaniyan",
    work: "plumber",
    services: "Fixes leaks, installs pipes, and repairs water systems.",
    state: "oyo",
    lga: "ibadan-north",
    city: "ibadan",
    phone: "+234-810-XXXX-XXX",
    email: "adeola.olaniyan@example.com",
    rating: 7.3,
    duration: "12/7",
  },
  {
    name: "Nneka Onwurah",
    work: "beauty salon",
    services: "Provides hair and beauty treatments.",
    state: "borno",
    lga: "maiduguri",
    city: "maiduguri",
    phone: "+234-810-XXXX-XXX",
    email: "nneka.onwurah@example.com",
    rating: 8.6,
    duration: "24/5",
  },
  {
    name: "Nneka Onwurah",
    work: "automobile mechanics",
    services: "Repairs and services vehicles.",
    state: "oyo",
    lga: "ibadan-north",
    city: "ibadan",
    phone: "+234-810-XXXX-XXX",
    email: "nneka.onwurah@example.com",
    rating: 9.6,
    duration: "24/7",
  },
  {
    name: "Amarachi Okoye",
    work: "vulcanizes",
    services: "Repairs tires and fixes punctures.",
    state: "katsina",
    lga: "funtua",
    city: "funtua",
    phone: "+234-810-XXXX-XXX",
    email: "amarachi.okoye@example.com",
    rating: 8.9,
    duration: "24/5",
  },
  {
    name: "Seun Adeoye",
    work: "laptop/phone repairs",
    services: "Fixes and repairs mobile phones and laptops.",
    state: "kaduna",
    lga: "zaria",
    city: "zaria",
    phone: "+234-810-XXXX-XXX",
    email: "seun.adeoye@example.com",
    rating: 7.3,
    duration: "12/7",
  },
  {
    name: "Kenechukwu Nwosu",
    work: "catering",
    services: "Provides food services for events and gatherings.",
    state: "katsina",
    lga: "katsina",
    city: "katsina",
    phone: "+234-810-XXXX-XXX",
    email: "kenechukwu.nwosu@example.com",
    rating: 9.3,
    duration: "24/5",
  },
  {
    name: "Kenechukwu Nwosu",
    work: "laptop/phone repairs",
    services: "Fixes and repairs mobile phones and laptops.",
    state: "anambra",
    lga: "awka-south",
    city: "awka",
    phone: "+234-810-XXXX-XXX",
    email: "kenechukwu.nwosu@example.com",
    rating: 9.3,
    duration: "24/7",
  },
  {
    name: "Ngozi Nwoye",
    work: "beauty salon",
    services: "Provides hair and beauty treatments.",
    state: "anambra",
    lga: "onitsha north",
    city: "onitsha",
    phone: "+234-810-XXXX-XXX",
    email: "ngozi.nwoye@example.com",
    rating: 8.0,
    duration: "12/7",
  },
  {
    name: "Ademola Olanrewaju",
    work: "fashion designers",
    services: "Creates clothing and accessories.",
    state: "lagos",
    lga: "ikeja",
    city: "ikeja",
    phone: "+234-810-XXXX-XXX",
    email: "ademola.olanrewaju@example.com",
    rating: 8.6,
    duration: "24/5",
  },
  {
    name: "Chukwudi Onwurah",
    work: "generator mechanics",
    services: "Repairs and maintains generators.",
    state: "rivers",
    lga: "obio-akpor",
    city: "rumuokoro",
    phone: "+234-810-XXXX-XXX",
    email: "chukwudi.onwurah@example.com",
    rating: 7.8,
    duration: "12/7",
  },
  {
    name: "Sanusi Oladipo",
    work: "sewage workers",
    services: "Maintains and cleans sewage systems.",
    state: "lagos",
    lga: "eti-osa",
    city: "lekki",
    phone: "+234-810-XXXX-XXX",
    email: "sanusi.oladipo@example.com",
    rating: 8.7,
    duration: "24/5",
  },
  {
    name: "Ogechi Nwoye",
    work: "interior decoration",
    services: "Designs and decorates interior spaces.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "ogechi.nwoye@example.com",
    rating: 7.3,
    duration: "24/5",
  },
  {
    name: "Ogechi Igwe",
    work: "electrician",
    services: "Handles electrical wiring, repairs, and installations.",
    state: "borno",
    lga: "maiduguri",
    city: "maiduguri",
    phone: "+234-810-XXXX-XXX",
    email: "ogechi.igwe@example.com",
    rating: 8.0,
    duration: "12/7",
  },
  {
    name: "Chiamaka Okoli",
    work: "generator mechanics",
    services: "Repairs and maintains generators.",
    state: "benue",
    lga: "makurdi",
    city: "makurdi",
    phone: "+234-810-XXXX-XXX",
    email: "chiamaka.okoli@example.com",
    rating: 9.7,
    duration: "24/5",
  },
  {
    name: "Ogechi Onwurah",
    work: "interlock/brick layers",
    services: "Lays interlock bricks and creates brick structures.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "ogechi.onwurah@example.com",
    rating: 9.2,
    duration: "12/7",
  },
  {
    name: "Kalu Onwurah",
    work: "car wash",
    services: "Provides vehicle cleaning services.",
    state: "lagos",
    lga: "eti-osa",
    city: "lekki",
    phone: "+234-810-XXXX-XXX",
    email: "kalu.onwurah@example.com",
    rating: 8.9,
    duration: "24/7",
  },
  {
    name: "Ngozi Nwoye",
    work: "generator mechanics",
    services: "Repairs and maintains generators.",
    state: "katsina",
    lga: "funtua",
    city: "funtua",
    phone: "+234-810-XXXX-XXX",
    email: "ngozi.nwoye@example.com",
    rating: 7.7,
    duration: "12/7",
  },
  {
    name: "Adebayo Adekunle",
    work: "sewage workers",
    services: "Maintains and cleans sewage systems.",
    state: "kano",
    lga: "kano municipal",
    city: "kano",
    phone: "+234-810-XXXX-XXX",
    email: "adebayo.adekunle@example.com",
    rating: 6.9,
    duration: "24/5",
  },
  {
    name: "Ademola Adebayo",
    work: "sewage workers",
    services: "Maintains and cleans sewage systems.",
    state: "rivers",
    lga: "obio-akpor",
    city: "rumuokoro",
    phone: "+234-810-XXXX-XXX",
    email: "ademola.adebayo@example.com",
    rating: 7.4,
    duration: "12/7",
  },
  {
    name: "Kehinde Adebayo",
    work: "interior decoration",
    services: "Designs and decorates interior spaces.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "kehinde.adebayo@example.com",
    rating: 8.2,
    duration: "12/5",
  },
  {
    name: "Uche Ozo",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "lagos",
    lga: "eti-osa",
    city: "lekki",
    phone: "+234-810-XXXX-XXX",
    email: "uche.ozo@example.com",
    rating: 8.3,
    duration: "24/7",
  },
  {
    name: "Amarachi Nwoye",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "kano",
    lga: "gwale",
    city: "gwale",
    phone: "+234-810-XXXX-XXX",
    email: "amarachi.nwoye@example.com",
    rating: 9.5,
    duration: "12/7",
  },
  {
    name: "Adebayo Olawale",
    work: "beauty salon",
    services: "Provides hair and beauty treatments.",
    state: "katsina",
    lga: "katsina",
    city: "katsina",
    phone: "+234-810-XXXX-XXX",
    email: "adebayo.olawale@example.com",
    rating: 9.6,
    duration: "12/7",
  },
  {
    name: "Sanusi Adeoye",
    work: "makeup artist",
    services: "Applies makeup for events and personal styling.",
    state: "lagos",
    lga: "eti-osa",
    city: "lekki",
    phone: "+234-810-XXXX-XXX",
    email: "sanusi.adeoye@example.com",
    rating: 8.6,
    duration: "12/7",
  },
  {
    name: "Sanusi Adekunle",
    work: "shoe/bag designers",
    services: "Designs and creates custom shoes and bags.",
    state: "anambra",
    lga: "awka-south",
    city: "awka",
    phone: "+234-810-XXXX-XXX",
    email: "sanusi.adekunle@example.com",
    rating: 7.6,
    duration: "12/7",
  },
  {
    name: "Ademola Adebayo",
    work: "vulcanizes",
    services: "Repairs tires and fixes punctures.",
    state: "kaduna",
    lga: "kaduna north",
    city: "kaduna",
    phone: "+234-810-XXXX-XXX",
    email: "ademola.adebayo@example.com",
    rating: 6.8,
    duration: "12/7",
  },
  {
    name: "Chidera Nwoye",
    work: "painter",
    services: "Paints houses and other buildings.",
    state: "anambra",
    lga: "onitsha north",
    city: "onitsha",
    phone: "+234-810-XXXX-XXX",
    email: "chidera.nwoye@example.com",
    rating: 7.1,
    duration: "24/5",
  },
  {
    name: "Folake Olawale",
    work: "car wash",
    services: "Provides vehicle cleaning services.",
    state: "rivers",
    lga: "obio-akpor",
    city: "rumuokoro",
    phone: "+234-810-XXXX-XXX",
    email: "folake.olawale@example.com",
    rating: 8.9,
    duration: "12/5",
  },
  {
    name: "Adeola Adeola",
    work: "chef",
    services: "Prepares meals in restaurants or for special events.",
    state: "katsina",
    lga: "katsina",
    city: "katsina",
    phone: "+234-810-XXXX-XXX",
    email: "adeola.adeola@example.com",
    rating: 9.6,
    duration: "12/7",
  },
  {
    name: "Amarachi Okafor",
    work: "vulcanizes",
    services: "Repairs tires and fixes punctures.",
    state: "borno",
    lga: "maiduguri",
    city: "maiduguri",
    phone: "+234-810-XXXX-XXX",
    email: "amarachi.okafor@example.com",
    rating: 9.9,
    duration: "24/7",
  },
  {
    name: "Emeka Onuorah",
    work: "welders",
    services: "Fuses metal parts together for construction and repairs.",
    state: "katsina",
    lga: "katsina",
    city: "katsina",
    phone: "+234-810-XXXX-XXX",
    email: "emeka.onuorah@example.com",
    rating: 7.8,
    duration: "12/7",
  },
  {
    name: "Chiamaka Eze",
    work: "makeup artist",
    services: "Applies makeup for events and personal styling.",
    state: "enugu",
    lga: "enugu north",
    city: "enugu",
    phone: "+234-810-XXXX-XXX",
    email: "chiamaka.eze@example.com",
    rating: 7.2,
    duration: "12/7",
  },
  {
    name: "Kalu Igwe",
    work: "welders",
    services: "Fuses metal parts together for construction and repairs.",
    state: "rivers",
    lga: "obio-akpor",
    city: "rumuokoro",
    phone: "+234-810-XXXX-XXX",
    email: "kalu.igwe@example.com",
    rating: 9.2,
    duration: "24/7",
  },
  {
    name: "Amarachi Igwe",
    work: "shoe/bag designers",
    services: "Designs and creates custom shoes and bags.",
    state: "enugu",
    lga: "nsukka",
    city: "nsukka",
    phone: "+234-810-XXXX-XXX",
    email: "amarachi.igwe@example.com",
    rating: 7.4,
    duration: "24/5",
  },
  {
    name: "Adebayo Akintola",
    work: "automobile mechanics",
    services: "Repairs and services vehicles.",
    state: "anambra",
    lga: "awka-south",
    city: "awka",
    phone: "+234-810-XXXX-XXX",
    email: "adebayo.akintola@example.com",
    rating: 9.8,
    duration: "12/5",
  },
];
const works = [
  "electrician",
  "carpenter",
  "plumber",
  "automobile mechanics",
  "catering",
  "interior decoration",
  "painter",
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
const states = [
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

document.querySelectorAll(".ids").forEach((button) => {
  button.addEventListener("click", function (e) {
    const clickedElement = e.target.innerHTML;
    var id = Number(clickedElement.replace(/[^0-9]/g, ""));
    var info = data[id];
    document.getElementById("id_name").textContent = info.name;
    document.getElementById("id_work").textContent = info.work;
    document.getElementById(
      "id_loc"
    ).textContent = `${info.state}, ${info.lga}, ${info.city}`;
    document.getElementById("id_phone").textContent = info.phone;
    document.getElementById("id_email").textContent = info.email;
    document.getElementById(
      "id_rate"
    ).textContent = `${info.rating}, ${info.duration}`;
  });
});

if (JSON.parse(localStorage.getItem("userList")) === null) {
  var user = {
    full_name: "Anthony Admin",
    email: "admin@gmail.com",
    role: "Client",
    password: "admin12345",
  };
  addUserToLocalStorage(user, false, "");
}

checkLogin();

function checkLogin() {
  var nav = document.getElementById("nav-ul");
  var userList = JSON.parse(localStorage.getItem("userList"));
  const userEmail = localStorage.getItem("user");
  var emailExists = userList.some(
    (existingUser) => existingUser.email === userEmail
  );
  if (!emailExists) {
    console.log("not exists");
    var login = `
    <li><a href="login.html">Login</a></li>
    <li><a href="register.html">Register</a></li>
    `;
    nav.appendChild(login);
  } else {
    var logged = document.createElement("li");
    logged.innerHTML = `
    <a href="">Logout</a>
    `;
    nav.appendChild(logged);
  }
}

function addUserToLocalStorage(newUser, login, email) {
  var userList = JSON.parse(localStorage.getItem("userList")) || [];
  userList.push(newUser);
  localStorage.setItem("userList", JSON.stringify(userList));
  localStorage.setItem("user", email);
  localStorage.setItem("login", login);
}
