//Supported Yelp categories
const categories = {
  "categories":
  [
    {
      "alias": "3dprinting",
      "title": "3D Printing",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "abruzzese",
      "title": "Abruzzese",
      "parents": [
        "italian"
      ],
      "country_whitelist": [
        "IT"
      ]
    },
    {
      "alias": "absinthebars",
      "title": "Absinthe Bars",
      "parents": [
        "bars"
      ],
      "country_whitelist": [
        "CZ"
      ]
    },
    {
      "alias": "acaibowls",
      "title": "Acai Bowls",
      "parents": [
        "food"
      ],
      "country_blacklist": [
        "CL",
        "MX",
        "TR",
        "AR",
        "PL",
        "IT"
      ]
    },
    {
      "alias": "accessories",
      "title": "Accessories",
      "parents": [
        "fashion"
      ]
    },
    {
      "alias": "accountants",
      "title": "Accountants",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "acnetreatment",
      "title": "Acne Treatment",
      "parents": [
        "beautysvc"
      ]
    },
    {
      "alias": "active",
      "title": "Active Life",
      "parents": []
    },
    {
      "alias": "acupuncture",
      "title": "Acupuncture",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "addictionmedicine",
      "title": "Addiction Medicine",
      "parents": [
        "physicians"
      ],
      "country_blacklist": [
        "JP"
      ]
    },
    {
      "alias": "adoptionservices",
      "title": "Adoption Services",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "adult",
      "title": "Adult",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "adultedu",
      "title": "Adult Education",
      "parents": [
        "education"
      ]
    },
    {
      "alias": "adultentertainment",
      "title": "Adult Entertainment",
      "parents": [
        "nightlife"
      ]
    },
    {
      "alias": "advertising",
      "title": "Advertising",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "aerialfitness",
      "title": "Aerial Fitness",
      "parents": [
        "fitness"
      ]
    },
    {
      "alias": "aerialtours",
      "title": "Aerial Tours",
      "parents": [
        "tours"
      ]
    },
    {
      "alias": "aestheticians",
      "title": "Aestheticians",
      "parents": [
        "medicalspa"
      ],
      "country_blacklist": [
        "CL",
        "MX",
        "BE",
        "FR",
        "AR",
        "CH"
      ]
    },
    {
      "alias": "afghani",
      "title": "Afghan",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "MX",
        "TR"
      ]
    },
    {
      "alias": "african",
      "title": "African",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "TR"
      ]
    },
    {
      "alias": "afrobrazilian",
      "title": "Afro-Brazilian",
      "parents": [
        "religiousorgs"
      ],
      "country_whitelist": [
        "BR"
      ]
    },
    {
      "alias": "agriturismi",
      "title": "Agriturismi",
      "parents": [
        "hotels"
      ],
      "country_whitelist": [
        "MX",
        "AR",
        "AT",
        "IT",
        "CH",
        "CL",
        "ES",
        "TW",
        "DE",
        "FR",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "aircraftdealers",
      "title": "Aircraft Dealers",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "US",
        "PT",
        "CZ"
      ]
    },
    {
      "alias": "aircraftrepairs",
      "title": "Aircraft Repairs",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "airductcleaning",
      "title": "Air Duct Cleaning",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "MY",
        "AU",
        "PH",
        "CA",
        "NZ",
        "US",
        "IT",
        "ES",
        "IE",
        "GB",
        "SG"
      ]
    },
    {
      "alias": "airlines",
      "title": "Airlines",
      "parents": [
        "transport"
      ]
    },
    {
      "alias": "airport_shuttles",
      "title": "Airport Shuttles",
      "parents": [
        "transport"
      ]
    },
    {
      "alias": "airportlounges",
      "title": "Airport Lounges",
      "parents": [
        "bars"
      ]
    },
    {
      "alias": "airports",
      "title": "Airports",
      "parents": [
        "hotelstravel"
      ]
    },
    {
      "alias": "airportterminals",
      "title": "Airport Terminals",
      "parents": [
        "airports"
      ]
    },
    {
      "alias": "airsoft",
      "title": "Airsoft",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "alentejo",
      "title": "Alentejo",
      "parents": [
        "portuguese"
      ],
      "country_whitelist": [
        "PT"
      ]
    },
    {
      "alias": "algarve",
      "title": "Algarve",
      "parents": [
        "portuguese"
      ],
      "country_whitelist": [
        "PT"
      ]
    },
    {
      "alias": "allergist",
      "title": "Allergists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "alsatian",
      "title": "Alsatian",
      "parents": [
        "french"
      ],
      "country_whitelist": [
        "FR",
        "DE"
      ]
    },
    {
      "alias": "alternativemedicine",
      "title": "Alternative Medicine",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "HK",
        "JP",
        "CH",
        "CL",
        "PL",
        "MX",
        "MY",
        "PH",
        "AR",
        "PT",
        "AT",
        "ES",
        "TW",
        "DE",
        "TR",
        "FI"
      ]
    },
    {
      "alias": "altoatesine",
      "title": "Altoatesine",
      "parents": [
        "italian"
      ],
      "country_whitelist": [
        "IT"
      ]
    },
    {
      "alias": "amateursportsteams",
      "title": "Amateur Sports Teams",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "amusementparks",
      "title": "Amusement Parks",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "andalusian",
      "title": "Andalusian",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "ES",
        "IT"
      ]
    },
    {
      "alias": "anesthesiologists",
      "title": "Anesthesiologists",
      "parents": [
        "physicians"
      ],
      "country_whitelist": [
        "BE",
        "AU",
        "SE",
        "FR",
        "PT",
        "US",
        "IT"
      ]
    },
    {
      "alias": "animalassistedtherapy",
      "title": "Animal Assisted Therapy",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "animalholistic",
      "title": "Holistic Animal Care",
      "parents": [
        "petservices"
      ]
    },
    {
      "alias": "animalphysicaltherapy",
      "title": "Animal Physical Therapy",
      "parents": [
        "petservices"
      ]
    },
    {
      "alias": "animalshelters",
      "title": "Animal Shelters",
      "parents": [
        "pets"
      ]
    },
    {
      "alias": "antiques",
      "title": "Antiques",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "apartmentagents",
      "title": "Apartment Agents",
      "parents": [
        "realestateagents"
      ]
    },
    {
      "alias": "apartments",
      "title": "Apartments",
      "parents": [
        "realestate"
      ]
    },
    {
      "alias": "appliances",
      "title": "Appliances",
      "parents": [
        "homeandgarden"
      ]
    },
    {
      "alias": "appraisalservices",
      "title": "Appraisal Services",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "apulian",
      "title": "Apulian",
      "parents": [
        "italian"
      ],
      "country_whitelist": [
        "FR",
        "IT"
      ]
    },
    {
      "alias": "aquariums",
      "title": "Aquariums",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "aquariumservices",
      "title": "Aquarium Services",
      "parents": [
        "petservices"
      ],
      "country_blacklist": [
        "CL",
        "HK",
        "MX",
        "JP",
        "AR"
      ]
    },
    {
      "alias": "arabian",
      "title": "Arabian",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "DK"
      ]
    },
    {
      "alias": "arabpizza",
      "title": "Arab Pizza",
      "parents": [
        "arabian"
      ],
      "country_whitelist": [
        "BR"
      ]
    },
    {
      "alias": "arcades",
      "title": "Arcades",
      "parents": [
        "arts"
      ]
    },
    {
      "alias": "archery",
      "title": "Archery",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "architects",
      "title": "Architects",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "architecturaltours",
      "title": "Architectural Tours",
      "parents": [
        "tours"
      ]
    },
    {
      "alias": "argentine",
      "title": "Argentine",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "FI"
      ]
    },
    {
      "alias": "armenian",
      "title": "Armenian",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "BE",
        "AR",
        "US",
        "IT",
        "ES",
        "GB",
        "TR",
        "FR",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "arroceria_paella",
      "title": "Arroceria / Paella",
      "parents": [
        "spanish"
      ],
      "country_whitelist": [
        "ES"
      ]
    },
    {
      "alias": "artclasses",
      "title": "Art Classes",
      "parents": [
        "education"
      ],
      "country_blacklist": [
        "CL",
        "HK",
        "MX",
        "JP",
        "AR"
      ]
    },
    {
      "alias": "artconsultants",
      "title": "Art Consultants",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "artificialturf",
      "title": "Artificial Turf",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "artinstallation",
      "title": "Art Installation",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "MY",
        "DE",
        "PH",
        "US",
        "AT",
        "PL",
        "CH"
      ]
    },
    {
      "alias": "artmuseums",
      "title": "Art Museums",
      "parents": [
        "museums"
      ],
      "country_blacklist": [
        "FR"
      ]
    },
    {
      "alias": "artrestoration",
      "title": "Art Restoration",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "arts",
      "title": "Arts & Entertainment",
      "parents": []
    },
    {
      "alias": "artsandcrafts",
      "title": "Arts & Crafts",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "artschools",
      "title": "Art Schools",
      "parents": [
        "specialtyschools"
      ]
    },
    {
      "alias": "artspacerentals",
      "title": "Art Space Rentals",
      "parents": [
        "realestate"
      ],
      "country_whitelist": [
        "HK",
        "SE",
        "JP",
        "US",
        "IT",
        "IE",
        "GB",
        "SG"
      ]
    },
    {
      "alias": "artsupplies",
      "title": "Art Supplies",
      "parents": [
        "artsandcrafts"
      ]
    },
    {
      "alias": "arttours",
      "title": "Art Tours",
      "parents": [
        "tours"
      ]
    },
    {
      "alias": "asianfusion",
      "title": "Asian Fusion",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "assistedliving",
      "title": "Assisted Living Facilities",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "astrologers",
      "title": "Astrologers",
      "parents": [
        "psychic_astrology"
      ]
    },
    {
      "alias": "asturian",
      "title": "Asturian",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "ES"
      ]
    },
    {
      "alias": "ateliers",
      "title": "Ateliers",
      "parents": [
        "artsandcrafts"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "DK",
        "JP",
        "AT",
        "IT",
        "CH",
        "DE",
        "NO",
        "TR"
      ]
    },
    {
      "alias": "attractionfarms",
      "title": "Attraction Farms",
      "parents": [
        "farms"
      ],
      "country_whitelist": [
        "SE",
        "DK",
        "PT",
        "AT",
        "US",
        "IT",
        "CH",
        "ES",
        "BR",
        "DE",
        "NO"
      ]
    },
    {
      "alias": "atvrentals",
      "title": "ATV Rentals/Tours",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "MX",
        "SE",
        "AR",
        "AT",
        "US",
        "CH",
        "CL",
        "ES",
        "DE",
        "NO",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "auctionhouses",
      "title": "Auction Houses",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "HK",
        "MY",
        "JP",
        "PH",
        "AR",
        "CL",
        "TW",
        "TR"
      ]
    },
    {
      "alias": "audiologist",
      "title": "Audiologist",
      "parents": [
        "physicians"
      ],
      "country_blacklist": [
        "DE",
        "AT",
        "CH",
        "CZ"
      ]
    },
    {
      "alias": "audiovisualequipmentrental",
      "title": "Audio/Visual Equipment Rental",
      "parents": [
        "partyequipmentrentals"
      ],
      "country_whitelist": [
        "NL",
        "AU",
        "SE",
        "CH",
        "SG",
        "PL",
        "BE",
        "MY",
        "DK",
        "PH",
        "CA",
        "AT",
        "US",
        "ES",
        "IE",
        "BR",
        "DE",
        "NO",
        "GB",
        "FR"
      ]
    },
    {
      "alias": "australian",
      "title": "Australian",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "austrian",
      "title": "Austrian",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "ES",
        "DK"
      ]
    },
    {
      "alias": "authorized_postal_representative",
      "title": "Authorized Postal Representative",
      "parents": [
        "publicservicesgovt"
      ],
      "country_whitelist": [
        "NO",
        "SE"
      ]
    },
    {
      "alias": "auto",
      "title": "Automotive",
      "parents": []
    },
    {
      "alias": "auto_detailing",
      "title": "Auto Detailing",
      "parents": [
        "auto"
      ],
      "country_blacklist": [
        "BR",
        "ES",
        "AU"
      ]
    },
    {
      "alias": "autocustomization",
      "title": "Auto Customization",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "MX",
        "AR",
        "PT",
        "CA",
        "AT",
        "US",
        "CH",
        "CL",
        "ES",
        "DE",
        "SG",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "autodamageassessment",
      "title": "Car Inspectors",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "SE",
        "DK",
        "PT",
        "US",
        "BR",
        "DE",
        "NO"
      ]
    },
    {
      "alias": "autoelectric",
      "title": "Auto Electric Services",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "MX",
        "AR",
        "PT",
        "IT",
        "CL",
        "ES",
        "BR",
        "CZ"
      ]
    },
    {
      "alias": "autoglass",
      "title": "Auto Glass Services",
      "parents": [
        "auto"
      ],
      "country_blacklist": [
        "ES"
      ]
    },
    {
      "alias": "autoinsurance",
      "title": "Auto Insurance",
      "parents": [
        "insurance"
      ],
      "country_blacklist": [
        "HK",
        "MY",
        "PH",
        "CA",
        "AT",
        "NZ",
        "CH",
        "IE",
        "TW",
        "DE",
        "GB",
        "SG",
        "FR",
        "FI"
      ]
    },
    {
      "alias": "autoloanproviders",
      "title": "Auto Loan Providers",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "NL",
        "AU",
        "NZ",
        "IT",
        "SG",
        "CZ",
        "PL",
        "BE",
        "MY",
        "PH",
        "CA",
        "PT",
        "US",
        "IE",
        "TR",
        "GB"
      ]
    },
    {
      "alias": "autopartssupplies",
      "title": "Auto Parts & Supplies",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "autorepair",
      "title": "Auto Repair",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "autosecurity",
      "title": "Auto Security",
      "parents": [
        "auto"
      ],
      "country_blacklist": [
        "FR"
      ]
    },
    {
      "alias": "autoupholstery",
      "title": "Auto Upholstery",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "auvergnat",
      "title": "Auvergnat",
      "parents": [
        "french"
      ],
      "country_whitelist": [
        "FR"
      ]
    },
    {
      "alias": "aviationservices",
      "title": "Aviation Services",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "awnings",
      "title": "Awnings",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "axethrowing",
      "title": "Axe Throwing",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "US",
        "CA",
        "GB"
      ]
    },
    {
      "alias": "ayurveda",
      "title": "Ayurveda",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "azores",
      "title": "Azores",
      "parents": [
        "portuguese"
      ],
      "country_whitelist": [
        "PT"
      ]
    },
    {
      "alias": "baby_gear",
      "title": "Baby Gear & Furniture",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "backflowservices",
      "title": "Backflow Services",
      "parents": [
        "plumbing"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "backshop",
      "title": "Backshop",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "baden",
      "title": "Baden",
      "parents": [
        "german"
      ],
      "country_whitelist": [
        "DE"
      ]
    },
    {
      "alias": "badminton",
      "title": "Badminton",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "PL",
        "NZ",
        "SG",
        "BR"
      ]
    },
    {
      "alias": "bagels",
      "title": "Bagels",
      "parents": [
        "food"
      ],
      "country_blacklist": [
        "ES",
        "AU"
      ]
    },
    {
      "alias": "baguettes",
      "title": "Baguettes",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "MX",
        "SE",
        "PT",
        "IT",
        "DE",
        "NO",
        "TR",
        "CZ"
      ]
    },
    {
      "alias": "bailbondsmen",
      "title": "Bail Bondsmen",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "US",
        "PT"
      ]
    },
    {
      "alias": "bakeries",
      "title": "Bakeries",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "balloonservices",
      "title": "Balloon Services",
      "parents": [
        "eventservices"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "CA",
        "AT",
        "NZ",
        "US",
        "CH",
        "IE",
        "BR",
        "DE",
        "GB",
        "SG",
        "PL"
      ]
    },
    {
      "alias": "bangladeshi",
      "title": "Bangladeshi",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "MX",
        "ES",
        "TR",
        "DK",
        "PT"
      ]
    },
    {
      "alias": "bankruptcy",
      "title": "Bankruptcy Law",
      "parents": [
        "lawyers"
      ]
    },
    {
      "alias": "banks",
      "title": "Banks & Credit Unions",
      "parents": [
        "financialservices"
      ]
    },
    {
      "alias": "barbers",
      "title": "Barbers",
      "parents": [
        "beautysvc"
      ]
    },
    {
      "alias": "barcrawl",
      "title": "Bar Crawl",
      "parents": [
        "nightlife"
      ],
      "country_whitelist": [
        "MX",
        "AU",
        "AR",
        "AT",
        "US",
        "CH",
        "DE",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "barreclasses",
      "title": "Barre Classes",
      "parents": [
        "fitness"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "DK",
        "CA",
        "PT",
        "NZ",
        "US",
        "IE",
        "NO",
        "GB",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "bars",
      "title": "Bars",
      "parents": [
        "nightlife"
      ]
    },
    {
      "alias": "bartenders",
      "title": "Bartenders",
      "parents": [
        "eventservices"
      ],
      "country_blacklist": [
        "HK",
        "MY",
        "JP",
        "PH",
        "AT",
        "NZ",
        "CH",
        "IE",
        "TW",
        "NO",
        "GB",
        "TR",
        "SG",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "bartendingschools",
      "title": "Bartending Schools",
      "parents": [
        "specialtyschools"
      ]
    },
    {
      "alias": "baseballfields",
      "title": "Baseball Fields",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "FR"
      ]
    },
    {
      "alias": "basketballcourts",
      "title": "Basketball Courts",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "NL",
        "IE",
        "BR",
        "SE",
        "GB",
        "CA",
        "PL"
      ]
    },
    {
      "alias": "basque",
      "title": "Basque",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "AU",
        "TR",
        "SG",
        "DK",
        "PT",
        "CZ"
      ]
    },
    {
      "alias": "bathing_area",
      "title": "Bathing Area",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "SE",
        "DK",
        "JP",
        "PT",
        "AT",
        "CH",
        "DE",
        "NO",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "batterystores",
      "title": "Battery Stores",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "battingcages",
      "title": "Batting Cages",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "US",
        "TW",
        "JP",
        "SG"
      ]
    },
    {
      "alias": "bavarian",
      "title": "Bavarian",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "bbq",
      "title": "Barbeque",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "BR",
        "AU"
      ]
    },
    {
      "alias": "beachbars",
      "title": "Beach Bars",
      "parents": [
        "bars"
      ],
      "country_blacklist": [
        "BE",
        "HK",
        "MY",
        "JP",
        "PH",
        "CA",
        "NZ",
        "US",
        "IE",
        "TW",
        "GB",
        "TR",
        "CZ",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "beachequipmentrental",
      "title": "Beach Equipment Rentals",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "beaches",
      "title": "Beaches",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "beachvolleyball",
      "title": "Beach Volleyball",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "NL",
        "HK",
        "NZ",
        "IT",
        "CH",
        "PL",
        "BE",
        "MY",
        "PH",
        "CA",
        "US",
        "IE",
        "TW",
        "GB",
        "TR",
        "FR"
      ]
    },
    {
      "alias": "beautysvc",
      "title": "Beauty & Spas",
      "parents": []
    },
    {
      "alias": "bedbreakfast",
      "title": "Bed & Breakfast",
      "parents": [
        "hotelstravel"
      ]
    },
    {
      "alias": "beer_and_wine",
      "title": "Beer, Wine & Spirits",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "beerbar",
      "title": "Beer Bar",
      "parents": [
        "bars"
      ]
    },
    {
      "alias": "beergarden",
      "title": "Beer Garden",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "DE",
        "AT",
        "CH",
        "CZ"
      ]
    },
    {
      "alias": "beergardens",
      "title": "Beer Gardens",
      "parents": [
        "nightlife"
      ],
      "country_whitelist": [
        "MX",
        "AU",
        "SE",
        "DK",
        "JP",
        "CA",
        "US",
        "IT",
        "IE",
        "NO",
        "GB",
        "FR",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "beerhall",
      "title": "Beer Hall",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "beertours",
      "title": "Beer Tours",
      "parents": [
        "tours"
      ]
    },
    {
      "alias": "behavioranalysts",
      "title": "Behavior Analysts",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "beira",
      "title": "Beira",
      "parents": [
        "portuguese"
      ],
      "country_whitelist": [
        "PT"
      ]
    },
    {
      "alias": "beisl",
      "title": "Beisl",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "AT"
      ]
    },
    {
      "alias": "belgian",
      "title": "Belgian",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "bento",
      "title": "Bento",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "JP"
      ]
    },
    {
      "alias": "berrichon",
      "title": "Berrichon",
      "parents": [
        "french"
      ],
      "country_whitelist": [
        "FR"
      ]
    },
    {
      "alias": "bespoke",
      "title": "Bespoke Clothing",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "MX",
        "SE",
        "JP",
        "AR",
        "CL",
        "BR",
        "TR",
        "FI"
      ]
    },
    {
      "alias": "bettingcenters",
      "title": "Betting Centers",
      "parents": [
        "arts"
      ],
      "country_blacklist": [
        "NO",
        "SG",
        "FR",
        "CA",
        "NZ",
        "US",
        "FI"
      ]
    },
    {
      "alias": "beverage_stores",
      "title": "Beverage Store",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "PT",
        "AT",
        "US",
        "IT",
        "CH",
        "CL",
        "ES",
        "DE",
        "TR"
      ]
    },
    {
      "alias": "bicyclepaths",
      "title": "Bicycle Paths",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "HK",
        "MY",
        "PH",
        "CA",
        "AT",
        "US",
        "IT",
        "CH",
        "TW",
        "DE",
        "TR",
        "FR"
      ]
    },
    {
      "alias": "bicycles",
      "title": "Bicycles",
      "parents": [],
      "country_whitelist": [
        "PL",
        "PT",
        "DK",
        "CZ"
      ]
    },
    {
      "alias": "bike_repair_maintenance",
      "title": "Bike Repair/Maintenance",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "bikeassociations",
      "title": "Bike Associations",
      "parents": [
        "bicycles"
      ],
      "country_whitelist": [
        "PT",
        "DK"
      ]
    },
    {
      "alias": "bikeparking",
      "title": "Bike Parking",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "FR"
      ]
    },
    {
      "alias": "bikerentals",
      "title": "Bike Rentals",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "bikerepair",
      "title": "Bike Repair",
      "parents": [
        "bicycles"
      ],
      "country_whitelist": [
        "PT",
        "DK"
      ]
    },
    {
      "alias": "bikes",
      "title": "Bikes",
      "parents": [
        "sportgoods"
      ]
    },
    {
      "alias": "bikesharing",
      "title": "Bike Sharing",
      "parents": [
        "transport"
      ]
    },
    {
      "alias": "bikeshop",
      "title": "Bike Shop",
      "parents": [
        "bicycles"
      ],
      "country_whitelist": [
        "PT",
        "DK"
      ]
    },
    {
      "alias": "biketours",
      "title": "Bike tours",
      "parents": [
        "tours"
      ]
    },
    {
      "alias": "billingservices",
      "title": "Billing Services",
      "parents": [
        "professional"
      ],
      "country_whitelist": [
        "US",
        "SE"
      ]
    },
    {
      "alias": "bingo",
      "title": "Bingo Halls",
      "parents": [
        "arts"
      ],
      "country_whitelist": [
        "MX",
        "AU",
        "SE",
        "DK",
        "AR",
        "NZ",
        "US",
        "IT",
        "CL",
        "ES",
        "IE",
        "BR",
        "NO",
        "GB",
        "FI"
      ]
    },
    {
      "alias": "biohazardcleanup",
      "title": "Biohazard Cleanup",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "birdshops",
      "title": "Bird Shops",
      "parents": [
        "petstore"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "SE",
        "DK",
        "US",
        "IT",
        "ES",
        "DE",
        "NO",
        "SG"
      ]
    },
    {
      "alias": "bistros",
      "title": "Bistros",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "US"
      ]
    },
    {
      "alias": "blacksea",
      "title": "Black Sea",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "TR"
      ]
    },
    {
      "alias": "blinds",
      "title": "Shades & Blinds",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "blooddonation",
      "title": "Blood & Plasma Donation Centers",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "NL",
        "HK",
        "BE",
        "MY",
        "PH",
        "CA",
        "IE",
        "TW",
        "GB",
        "SG"
      ]
    },
    {
      "alias": "blowfish",
      "title": "Blowfish",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "JP"
      ]
    },
    {
      "alias": "blowoutservices",
      "title": "Blow Dry/Out Services",
      "parents": [
        "hair"
      ],
      "country_whitelist": [
        "AU",
        "DK",
        "CA",
        "PT",
        "US",
        "IE",
        "NO",
        "GB",
        "TR",
        "FR",
        "CZ"
      ]
    },
    {
      "alias": "boatcharters",
      "title": "Boat Charters",
      "parents": [
        "eventservices"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "boatdealers",
      "title": "Boat Dealers",
      "parents": [
        "auto"
      ],
      "country_blacklist": [
        "HK",
        "MY",
        "JP",
        "PH",
        "IT",
        "CL",
        "TW",
        "BR",
        "TR",
        "FR",
        "FI"
      ]
    },
    {
      "alias": "boating",
      "title": "Boating",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "boatpartsandsupplies",
      "title": "Boat Parts & Supplies",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "boatrepair",
      "title": "Boat Repair",
      "parents": [
        "professional"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "boattours",
      "title": "Boat Tours",
      "parents": [
        "tours"
      ]
    },
    {
      "alias": "bobsledding",
      "title": "Bobsledding",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "bocceball",
      "title": "Bocce Ball",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "bodycontouring",
      "title": "Body Contouring",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "FR",
        "IT"
      ]
    },
    {
      "alias": "bodyshops",
      "title": "Body Shops",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "bookbinding",
      "title": "Bookbinding",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "bookkeepers",
      "title": "Bookkeepers",
      "parents": [
        "professional"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "HK",
        "MY",
        "AU",
        "PH",
        "CA",
        "NZ",
        "US",
        "IE",
        "TW",
        "GB",
        "SG",
        "CZ"
      ]
    },
    {
      "alias": "bookstores",
      "title": "Bookstores",
      "parents": [
        "media"
      ]
    },
    {
      "alias": "bootcamps",
      "title": "Boot Camps",
      "parents": [
        "fitness"
      ],
      "country_whitelist": [
        "AU",
        "SE",
        "DK",
        "PT",
        "NZ",
        "US",
        "IT",
        "ES",
        "NO",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "boudoirphotography",
      "title": "Boudoir Photography",
      "parents": [
        "photographers"
      ],
      "country_whitelist": [
        "SE",
        "US",
        "CA",
        "DE"
      ]
    },
    {
      "alias": "bouncehouserentals",
      "title": "Bounce House Rentals",
      "parents": [
        "partyequipmentrentals"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "SE",
        "DK",
        "CA",
        "AT",
        "NZ",
        "US",
        "CH",
        "IE",
        "DE",
        "NO",
        "GB",
        "PL"
      ]
    },
    {
      "alias": "bourguignon",
      "title": "Bourguignon",
      "parents": [
        "french"
      ],
      "country_whitelist": [
        "FR"
      ]
    },
    {
      "alias": "bowling",
      "title": "Bowling",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "boxing",
      "title": "Boxing",
      "parents": [
        "fitness"
      ],
      "country_blacklist": [
        "ES",
        "AU",
        "SE",
        "TR",
        "SG",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "brasseries",
      "title": "Brasseries",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "AR",
        "MX"
      ]
    },
    {
      "alias": "brazilian",
      "title": "Brazilian",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "brazilianempanadas",
      "title": "Brazilian Empanadas",
      "parents": [
        "brazilian"
      ],
      "country_whitelist": [
        "BR"
      ]
    },
    {
      "alias": "brazilianjiujitsu",
      "title": "Brazilian Jiu-jitsu",
      "parents": [
        "martialarts"
      ]
    },
    {
      "alias": "breakfast_brunch",
      "title": "Breakfast & Brunch",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "breweries",
      "title": "Breweries",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "brewingsupplies",
      "title": "Brewing Supplies",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "CL",
        "AR",
        "HK",
        "JP"
      ]
    },
    {
      "alias": "brewpubs",
      "title": "Brewpubs",
      "parents": [
        "breweries"
      ],
      "country_blacklist": [
        "CL",
        "ES",
        "MX",
        "FR",
        "AR",
        "IT"
      ]
    },
    {
      "alias": "bridal",
      "title": "Bridal",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "british",
      "title": "British",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "FI"
      ]
    },
    {
      "alias": "bubblesoccer",
      "title": "Bubble Soccer",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "bubbletea",
      "title": "Bubble Tea",
      "parents": [
        "food"
      ],
      "country_blacklist": [
        "ES",
        "MX",
        "TR",
        "AR",
        "AT",
        "CH"
      ]
    },
    {
      "alias": "buddhist_temples",
      "title": "Buddhist Temples",
      "parents": [
        "religiousorgs"
      ]
    },
    {
      "alias": "buffets",
      "title": "Buffets",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "buildingsupplies",
      "title": "Building Supplies",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "bulgarian",
      "title": "Bulgarian",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "NL",
        "DK",
        "CA",
        "NZ",
        "BR",
        "NO",
        "TR",
        "SG"
      ]
    },
    {
      "alias": "bulkbilling",
      "title": "Bulk Billing",
      "parents": [
        "medcenters"
      ],
      "country_whitelist": [
        "AU"
      ]
    },
    {
      "alias": "bungeejumping",
      "title": "Bungee Jumping",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "burgers",
      "title": "Burgers",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "burmese",
      "title": "Burmese",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "ES",
        "TR",
        "DK",
        "PT",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "buses",
      "title": "Buses",
      "parents": [
        "transport"
      ]
    },
    {
      "alias": "businessconsulting",
      "title": "Business Consulting",
      "parents": [
        "professional"
      ],
      "country_blacklist": [
        "HK",
        "TW",
        "TR",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "businessfinancing",
      "title": "Business Financing",
      "parents": [
        "financialservices"
      ]
    },
    {
      "alias": "businesslawyers",
      "title": "Business Law",
      "parents": [
        "lawyers"
      ],
      "country_whitelist": [
        "DK",
        "CA",
        "PT",
        "US",
        "IE",
        "BR",
        "NO",
        "GB",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "busrental",
      "title": "Bus Rental",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "busstations",
      "title": "Bus Stations",
      "parents": [
        "transport"
      ],
      "country_blacklist": [
        "FR"
      ]
    },
    {
      "alias": "bustours",
      "title": "Bus Tours",
      "parents": [
        "tours"
      ]
    },
    {
      "alias": "butcher",
      "title": "Butcher",
      "parents": [
        "food"
      ],
      "country_blacklist": [
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "c_and_mh",
      "title": "Counseling & Mental Health",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "cabaret",
      "title": "Cabaret",
      "parents": [
        "arts"
      ],
      "country_blacklist": [
        "CL",
        "HK",
        "MX",
        "JP",
        "AR"
      ]
    },
    {
      "alias": "cabinetry",
      "title": "Cabinetry",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "CL",
        "HK",
        "MX",
        "JP",
        "AR"
      ]
    },
    {
      "alias": "cablecars",
      "title": "Cable Cars",
      "parents": [
        "transport"
      ],
      "country_whitelist": [
        "JP",
        "PT",
        "AT",
        "NZ",
        "US",
        "IT",
        "CH",
        "BR",
        "DE",
        "TR",
        "FR",
        "CZ"
      ]
    },
    {
      "alias": "cafes",
      "title": "Cafes",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "AR",
        "ES",
        "FI",
        "MX"
      ]
    },
    {
      "alias": "cafeteria",
      "title": "Cafeteria",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "IE",
        "BR",
        "SE",
        "SG",
        "FR",
        "CA",
        "NZ"
      ]
    },
    {
      "alias": "cajun",
      "title": "Cajun/Creole",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "ES",
        "PT",
        "AU",
        "SG"
      ]
    },
    {
      "alias": "cakeshop",
      "title": "Patisserie/Cake Shop",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "calabrian",
      "title": "Calabrian",
      "parents": [
        "italian"
      ],
      "country_whitelist": [
        "FR",
        "US",
        "IT"
      ]
    },
    {
      "alias": "calligraphy",
      "title": "Calligraphy",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "ES",
        "BR",
        "TR",
        "US",
        "IT"
      ]
    },
    {
      "alias": "cambodian",
      "title": "Cambodian",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "ES",
        "TR",
        "DK",
        "PT",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "campgrounds",
      "title": "Campgrounds",
      "parents": [
        "hotelstravel"
      ]
    },
    {
      "alias": "candlestores",
      "title": "Candle Stores",
      "parents": [
        "homeandgarden"
      ]
    },
    {
      "alias": "candy",
      "title": "Candy Stores",
      "parents": [
        "gourmet"
      ]
    },
    {
      "alias": "cannabis_clinics",
      "title": "Cannabis Clinics",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "NL",
        "CA",
        "US",
        "IT",
        "IE",
        "TR",
        "GB",
        "PL"
      ]
    },
    {
      "alias": "cannabiscollective",
      "title": "Cannabis Collective",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "US",
        "CA"
      ]
    },
    {
      "alias": "cannabisdispensaries",
      "title": "Cannabis Dispensaries",
      "parents": [
        "shopping"
      ],
      "country_whitelist": [
        "US",
        "CA"
      ]
    },
    {
      "alias": "cannabisreferrals",
      "title": "Medical Cannabis Referrals",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "US",
        "CA"
      ]
    },
    {
      "alias": "cannabistours",
      "title": "Cannabis Tours",
      "parents": [
        "cannabis_clinics"
      ],
      "country_whitelist": [
        "US",
        "CA"
      ]
    },
    {
      "alias": "canteen",
      "title": "Canteen",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "DK",
        "JP",
        "AT",
        "IT",
        "CH",
        "DE",
        "NO",
        "CZ",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "cantonese",
      "title": "Cantonese",
      "parents": [
        "chinese"
      ],
      "country_whitelist": [
        "NL",
        "HK",
        "AU",
        "SE",
        "JP",
        "NZ",
        "IT",
        "SG",
        "BE",
        "MY",
        "AR",
        "CA",
        "US",
        "TW",
        "GB",
        "FR"
      ]
    },
    {
      "alias": "canyoneering",
      "title": "Canyoneering",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "car_dealers",
      "title": "Car Dealers",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "carauctions",
      "title": "Car Auctions",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "MY",
        "HK",
        "TW",
        "SG",
        "PH",
        "US"
      ]
    },
    {
      "alias": "carbrokers",
      "title": "Car Brokers",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "US",
        "AR",
        "NZ",
        "AU"
      ]
    },
    {
      "alias": "carbuyers",
      "title": "Car Buyers",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "NL",
        "AU",
        "NZ",
        "CH",
        "SG",
        "CZ",
        "PL",
        "BE",
        "MY",
        "DK",
        "PH",
        "CA",
        "AT",
        "US",
        "IE",
        "BR",
        "DE",
        "NO",
        "GB"
      ]
    },
    {
      "alias": "cardioclasses",
      "title": "Cardio Classes",
      "parents": [
        "fitness"
      ]
    },
    {
      "alias": "cardiology",
      "title": "Cardiologists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "careercounseling",
      "title": "Career Counseling",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "caribbean",
      "title": "Caribbean",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "PT",
        "FI",
        "TR"
      ]
    },
    {
      "alias": "caricatures",
      "title": "Caricatures",
      "parents": [
        "eventservices"
      ],
      "country_whitelist": [
        "SE",
        "DK",
        "US",
        "IT",
        "ES",
        "BR",
        "NO",
        "SG",
        "PL"
      ]
    },
    {
      "alias": "carousels",
      "title": "Carousels",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "carpenters",
      "title": "Carpenters",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "TR"
      ]
    },
    {
      "alias": "carpet_cleaning",
      "title": "Carpet Cleaning",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "carpetdyeing",
      "title": "Carpet Dyeing",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "MY",
        "AU",
        "PH",
        "CA",
        "NZ",
        "US",
        "IE",
        "GB",
        "SG",
        "PL"
      ]
    },
    {
      "alias": "carpeting",
      "title": "Carpeting",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "carpetinstallation",
      "title": "Carpet Installation",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "carrental",
      "title": "Car Rental",
      "parents": [
        "hotelstravel"
      ]
    },
    {
      "alias": "carshares",
      "title": "Car Share Services",
      "parents": [
        "auto"
      ],
      "country_blacklist": [
        "NL",
        "BE",
        "HK",
        "JP",
        "PT",
        "TW",
        "BR",
        "TR",
        "SG",
        "FI"
      ]
    },
    {
      "alias": "carwash",
      "title": "Car Wash",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "carwindowtinting",
      "title": "Car Window Tinting",
      "parents": [
        "autoglass"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "CA",
        "NZ",
        "US",
        "IT",
        "ES",
        "IE",
        "GB",
        "SG"
      ]
    },
    {
      "alias": "casinos",
      "title": "Casinos",
      "parents": [
        "arts"
      ],
      "country_blacklist": [
        "HK",
        "JP"
      ]
    },
    {
      "alias": "castles",
      "title": "Castles",
      "parents": [
        "arts"
      ],
      "country_whitelist": [
        "BE",
        "SE",
        "DK",
        "JP",
        "PT",
        "AT",
        "IT",
        "CH",
        "ES",
        "DE",
        "NO",
        "GB",
        "FR",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "catalan",
      "title": "Catalan",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "MX",
        "AR",
        "PT",
        "US",
        "IT",
        "CL",
        "ES",
        "TR",
        "FR"
      ]
    },
    {
      "alias": "catering",
      "title": "Caterers",
      "parents": [
        "eventservices"
      ]
    },
    {
      "alias": "cellphoneaccessories",
      "title": "Mobile Phone Accessories",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "MY",
        "TR",
        "PH",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "centralbrazilian",
      "title": "Central Brazilian",
      "parents": [
        "brazilian"
      ],
      "country_whitelist": [
        "BR"
      ]
    },
    {
      "alias": "ceremonialclothing",
      "title": "Ceremonial Clothing",
      "parents": [
        "fashion"
      ],
      "country_blacklist": [
        "DE",
        "JP",
        "FR",
        "AT",
        "CH"
      ]
    },
    {
      "alias": "challengecourses",
      "title": "Challenge Courses",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "HK",
        "SE",
        "DK",
        "CA",
        "AT",
        "NZ",
        "US",
        "CH",
        "DE",
        "NO",
        "SG",
        "FR",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "champagne_bars",
      "title": "Champagne Bars",
      "parents": [
        "bars"
      ],
      "country_blacklist": [
        "AU"
      ]
    },
    {
      "alias": "cheekufta",
      "title": "Chee Kufta",
      "parents": [
        "turkish"
      ],
      "country_whitelist": [
        "TR",
        "DE"
      ]
    },
    {
      "alias": "cheerleading",
      "title": "Cheerleading",
      "parents": [
        "specialtyschools"
      ],
      "country_whitelist": [
        "SE",
        "DE",
        "CA",
        "AT",
        "US",
        "CH"
      ]
    },
    {
      "alias": "cheese",
      "title": "Cheese Shops",
      "parents": [
        "gourmet"
      ]
    },
    {
      "alias": "cheesesteaks",
      "title": "Cheesesteaks",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "NL",
        "IE",
        "AU",
        "GB",
        "US",
        "CA",
        "PL"
      ]
    },
    {
      "alias": "cheesetastingclasses",
      "title": "Cheese Tasting Classes",
      "parents": [
        "tastingclasses"
      ]
    },
    {
      "alias": "chicken_wings",
      "title": "Chicken Wings",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "NL",
        "BE",
        "DK",
        "JP",
        "PT",
        "IT",
        "CH",
        "CL",
        "ES",
        "NO",
        "FR",
        "FI"
      ]
    },
    {
      "alias": "chickenshop",
      "title": "Chicken Shop",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "childbirthedu",
      "title": "Childbirth Education",
      "parents": [
        "specialtyschools"
      ],
      "country_whitelist": [
        "NL",
        "AU",
        "SE",
        "NZ",
        "IT",
        "CH",
        "SG",
        "PL",
        "BE",
        "MY",
        "DK",
        "PH",
        "CA",
        "AT",
        "US",
        "ES",
        "IE",
        "BR",
        "DE",
        "NO",
        "GB",
        "FR"
      ]
    },
    {
      "alias": "childcare",
      "title": "Child Care & Day Care",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "childcloth",
      "title": "Children's Clothing",
      "parents": [
        "fashion"
      ]
    },
    {
      "alias": "childproofing",
      "title": "Childproofing",
      "parents": [
        "homeservices"
      ],
      "country_whitelist": [
        "US",
        "PT",
        "BR"
      ]
    },
    {
      "alias": "childrensmuseums",
      "title": "Children's Museums",
      "parents": [
        "museums"
      ],
      "country_blacklist": [
        "FR"
      ]
    },
    {
      "alias": "chilean",
      "title": "Chilean",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "CL",
        "FI",
        "FR",
        "BR"
      ]
    },
    {
      "alias": "chimneycakes",
      "title": "Chimney Cakes",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "FR",
        "PL",
        "US",
        "CZ"
      ]
    },
    {
      "alias": "chimneysweeps",
      "title": "Chimney Sweeps",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "MX"
      ]
    },
    {
      "alias": "chinese",
      "title": "Chinese",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "chinesebazaar",
      "title": "Chinese Bazaar",
      "parents": [
        "shopping"
      ],
      "country_whitelist": [
        "ES",
        "PT"
      ]
    },
    {
      "alias": "chinesemartialarts",
      "title": "Chinese Martial Arts",
      "parents": [
        "martialarts"
      ]
    },
    {
      "alias": "chiropractors",
      "title": "Chiropractors",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "chocolate",
      "title": "Chocolatiers & Shops",
      "parents": [
        "gourmet"
      ]
    },
    {
      "alias": "choirs",
      "title": "Choirs",
      "parents": [
        "arts"
      ],
      "country_blacklist": [
        "NL",
        "BE",
        "CA",
        "NZ",
        "US",
        "BR",
        "SG",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "christmastrees",
      "title": "Christmas Trees",
      "parents": [
        "homeandgarden"
      ]
    },
    {
      "alias": "churches",
      "title": "Churches",
      "parents": [
        "religiousorgs"
      ]
    },
    {
      "alias": "churros",
      "title": "Churros",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "CL",
        "ES",
        "MX",
        "BR",
        "AR",
        "PT"
      ]
    },
    {
      "alias": "cideries",
      "title": "Cideries",
      "parents": [
        "food"
      ],
      "country_blacklist": [
        "NL",
        "BE",
        "DK",
        "JP",
        "IT",
        "NO",
        "TR",
        "FR"
      ]
    },
    {
      "alias": "cigarbars",
      "title": "Cigar Bars",
      "parents": [
        "bars"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "circuittraininggyms",
      "title": "Circuit Training Gyms",
      "parents": [
        "gyms"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "circusschools",
      "title": "Circus Schools",
      "parents": [
        "specialtyschools"
      ],
      "country_whitelist": [
        "MX",
        "AR",
        "PT",
        "CL",
        "ES",
        "BR",
        "FR",
        "FI"
      ]
    },
    {
      "alias": "civiccenter",
      "title": "Civic Center",
      "parents": [
        "publicservicesgovt"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "climbing",
      "title": "Climbing",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "clockrepair",
      "title": "Clock Repair",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "CL",
        "MX",
        "JP",
        "AR",
        "IT"
      ]
    },
    {
      "alias": "clothingrental",
      "title": "Clothing Rental",
      "parents": [
        "fashion"
      ]
    },
    {
      "alias": "clowns",
      "title": "Clowns",
      "parents": [
        "eventservices"
      ],
      "country_blacklist": [
        "SE",
        "TR",
        "SG",
        "CZ",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "clubcrawl",
      "title": "Club Crawl",
      "parents": [
        "nightlife"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "cocktailbars",
      "title": "Cocktail Bars",
      "parents": [
        "bars"
      ]
    },
    {
      "alias": "coffee",
      "title": "Coffee & Tea",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "coffeeroasteries",
      "title": "Coffee Roasteries",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "coffeeshops",
      "title": "Coffeeshops",
      "parents": [
        "nightlife"
      ],
      "country_whitelist": [
        "NL",
        "PT"
      ]
    },
    {
      "alias": "coffeeteasupplies",
      "title": "Coffee & Tea Supplies",
      "parents": [
        "food"
      ],
      "country_blacklist": [
        "MX",
        "MY",
        "PH",
        "AR",
        "PT",
        "US",
        "IT",
        "CL",
        "ES",
        "BR",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "collegecounseling",
      "title": "College Counseling",
      "parents": [
        "education"
      ],
      "country_whitelist": [
        "US",
        "PT"
      ]
    },
    {
      "alias": "collegeuniv",
      "title": "Colleges & Universities",
      "parents": [
        "education"
      ]
    },
    {
      "alias": "colombian",
      "title": "Colombian",
      "parents": [
        "latin"
      ],
      "country_whitelist": [
        "BE",
        "MX",
        "AR",
        "CA",
        "US",
        "CL",
        "ES",
        "FR",
        "FI"
      ]
    },
    {
      "alias": "colonics",
      "title": "Colonics",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "AU",
        "DK",
        "CA",
        "NZ",
        "US",
        "IE",
        "NO",
        "GB",
        "SG"
      ]
    },
    {
      "alias": "comedyclubs",
      "title": "Comedy Clubs",
      "parents": [
        "nightlife"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "comfortfood",
      "title": "Comfort Food",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "CL",
        "MX",
        "JP",
        "AR",
        "CA",
        "US",
        "FI"
      ]
    },
    {
      "alias": "comicbooks",
      "title": "Comic Books",
      "parents": [
        "media"
      ]
    },
    {
      "alias": "commercialrealestate",
      "title": "Commercial Real Estate",
      "parents": [
        "realestate"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "DK",
        "CA",
        "PT",
        "US",
        "BR",
        "DE",
        "NO",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "commissionedartists",
      "title": "Commissioned Artists",
      "parents": [
        "professional"
      ],
      "country_blacklist": [
        "FR"
      ]
    },
    {
      "alias": "communitybookbox",
      "title": "Community Book Box",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "MX",
        "MY",
        "JP",
        "PH",
        "AR",
        "IT",
        "CL",
        "ES",
        "FR"
      ]
    },
    {
      "alias": "communitycenters",
      "title": "Community Centers",
      "parents": [
        "publicservicesgovt"
      ],
      "country_whitelist": [
        "SE",
        "DK",
        "CA",
        "PT",
        "US",
        "IE",
        "BR",
        "NO",
        "GB",
        "CZ"
      ]
    },
    {
      "alias": "communitygardens",
      "title": "Community Gardens",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "AU",
        "SE",
        "NZ",
        "IT",
        "SG",
        "DK",
        "PT",
        "CA",
        "US",
        "ES",
        "IE",
        "BR",
        "DE",
        "NO",
        "GB",
        "FR"
      ]
    },
    {
      "alias": "computers",
      "title": "Computers",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "concept_shops",
      "title": "Concept Shops",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "HK",
        "SE",
        "JP",
        "AR",
        "CA",
        "NZ",
        "US",
        "IT",
        "CL",
        "ES",
        "BR",
        "TR",
        "SG",
        "PL"
      ]
    },
    {
      "alias": "conciergemedicine",
      "title": "Concierge Medicine",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "condominiums",
      "title": "Condominiums",
      "parents": [
        "realestate"
      ],
      "country_blacklist": [
        "NZ",
        "AU"
      ]
    },
    {
      "alias": "congee",
      "title": "Congee",
      "parents": [
        "chinese"
      ],
      "country_whitelist": [
        "MY",
        "HK",
        "TW",
        "SG"
      ]
    },
    {
      "alias": "consumerlaw",
      "title": "Consumer Law",
      "parents": [
        "lawyers"
      ],
      "country_blacklist": [
        "HK",
        "SE",
        "DK",
        "JP",
        "ES",
        "TW",
        "NO",
        "TR",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "contractlaw",
      "title": "Contract Law",
      "parents": [
        "lawyers"
      ],
      "country_blacklist": [
        "FR"
      ]
    },
    {
      "alias": "contractors",
      "title": "Contractors",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "convenience",
      "title": "Convenience Stores",
      "parents": [
        "food"
      ],
      "country_blacklist": [
        "FI"
      ]
    },
    {
      "alias": "conveyorsushi",
      "title": "Conveyor Belt Sushi",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "NL",
        "HK",
        "BE",
        "SE",
        "JP",
        "AT",
        "US",
        "IT",
        "CH",
        "TW",
        "DE",
        "SG",
        "PL"
      ]
    },
    {
      "alias": "cookingclasses",
      "title": "Cooking Classes",
      "parents": [
        "artsandcrafts"
      ]
    },
    {
      "alias": "cookingschools",
      "title": "Cooking Schools",
      "parents": [
        "specialtyschools"
      ]
    },
    {
      "alias": "copyshops",
      "title": "Printing Services",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "corsican",
      "title": "Corsican",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "FR",
        "BE"
      ]
    },
    {
      "alias": "cosmeticdentists",
      "title": "Cosmetic Dentists",
      "parents": [
        "dentists"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "cosmetics",
      "title": "Cosmetics & Beauty Supply",
      "parents": [
        "beautysvc",
        "shopping"
      ]
    },
    {
      "alias": "cosmeticsurgeons",
      "title": "Cosmetic Surgeons",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "cosmetology_schools",
      "title": "Cosmetology Schools",
      "parents": [
        "specialtyschools"
      ]
    },
    {
      "alias": "costumes",
      "title": "Costumes",
      "parents": [
        "artsandcrafts"
      ]
    },
    {
      "alias": "countertopinstall",
      "title": "Countertop Installation",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "DE",
        "FR",
        "AT",
        "CZ",
        "IT",
        "CH"
      ]
    },
    {
      "alias": "countryclubs",
      "title": "Country Clubs",
      "parents": [
        "arts"
      ],
      "country_whitelist": [
        "HK",
        "MX",
        "JP",
        "AR",
        "US",
        "IT",
        "CL",
        "ES",
        "TW",
        "BR",
        "SG"
      ]
    },
    {
      "alias": "countrydancehalls",
      "title": "Country Dance Halls",
      "parents": [
        "nightlife"
      ],
      "country_whitelist": [
        "US",
        "SE"
      ]
    },
    {
      "alias": "couriers",
      "title": "Couriers & Delivery Services",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "courthouses",
      "title": "Courthouses",
      "parents": [
        "publicservicesgovt"
      ],
      "country_blacklist": [
        "HK",
        "JP",
        "NZ",
        "CL",
        "SG",
        "MX",
        "MY",
        "PH",
        "AR",
        "CA",
        "ES",
        "IE",
        "TW",
        "GB",
        "TR",
        "FI"
      ]
    },
    {
      "alias": "courtreporters",
      "title": "Court Reporters",
      "parents": [
        "legalservices"
      ],
      "country_whitelist": [
        "US",
        "NL",
        "BE",
        "CA"
      ]
    },
    {
      "alias": "cprclasses",
      "title": "CPR Classes",
      "parents": [
        "specialtyschools"
      ],
      "country_whitelist": [
        "US",
        "PT",
        "AU",
        "SE"
      ]
    },
    {
      "alias": "craneservices",
      "title": "Crane Services",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "MY",
        "HK",
        "JP",
        "PH",
        "TW",
        "TR",
        "FR",
        "FI"
      ]
    },
    {
      "alias": "cremationservices",
      "title": "Cremation Services",
      "parents": [
        "funeralservices"
      ],
      "country_blacklist": [
        "TR"
      ]
    },
    {
      "alias": "creperies",
      "title": "Creperies",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "criminaldefense",
      "title": "Criminal Defense Law",
      "parents": [
        "lawyers"
      ]
    },
    {
      "alias": "crisispregnancycenters",
      "title": "Crisis Pregnancy Centers",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "cryotherapy",
      "title": "Cryotherapy",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "US",
        "IT"
      ]
    },
    {
      "alias": "csa",
      "title": "CSA",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "DE",
        "FR",
        "AT",
        "US",
        "CH"
      ]
    },
    {
      "alias": "cuban",
      "title": "Cuban",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "TR",
        "DK",
        "SG"
      ]
    },
    {
      "alias": "cucinacampana",
      "title": "Cucina campana",
      "parents": [
        "italian"
      ],
      "country_whitelist": [
        "IT"
      ]
    },
    {
      "alias": "culturalcenter",
      "title": "Cultural Center",
      "parents": [
        "arts"
      ],
      "country_blacklist": [
        "CA",
        "IE",
        "NZ",
        "TR"
      ]
    },
    {
      "alias": "cupcakes",
      "title": "Cupcakes",
      "parents": [
        "food"
      ],
      "country_blacklist": [
        "CA",
        "ES",
        "TR",
        "CZ"
      ]
    },
    {
      "alias": "currencyexchange",
      "title": "Currency Exchange",
      "parents": [
        "financialservices"
      ]
    },
    {
      "alias": "currysausage",
      "title": "Curry Sausage",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "customcakes",
      "title": "Custom Cakes",
      "parents": [
        "food"
      ],
      "country_blacklist": [
        "FR",
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "custommerchandise",
      "title": "Customized Merchandise",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "customsbrokers",
      "title": "Customs Brokers",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "cyclingclasses",
      "title": "Cycling Classes",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "MX",
        "IE",
        "BR",
        "AR",
        "CA",
        "PT",
        "NZ"
      ]
    },
    {
      "alias": "cypriot",
      "title": "Cypriot",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "czech",
      "title": "Czech",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "BE",
        "AU",
        "SE",
        "DK",
        "CA",
        "US",
        "IT",
        "IE",
        "DE",
        "NO",
        "GB",
        "FR",
        "CZ",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "czechslovakian",
      "title": "Czech/Slovakian",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "AR",
        "MX",
        "PT"
      ]
    },
    {
      "alias": "dagashi",
      "title": "Dagashi",
      "parents": [
        "gourmet"
      ],
      "country_whitelist": [
        "JP"
      ]
    },
    {
      "alias": "damagerestoration",
      "title": "Damage Restoration",
      "parents": [
        "homeservices"
      ],
      "country_whitelist": [
        "AU",
        "TR",
        "SG",
        "CA",
        "PT",
        "NZ",
        "US"
      ]
    },
    {
      "alias": "dance_schools",
      "title": "Dance Schools",
      "parents": [
        "specialtyschools"
      ]
    },
    {
      "alias": "danceclubs",
      "title": "Dance Clubs",
      "parents": [
        "nightlife"
      ]
    },
    {
      "alias": "dancerestaurants",
      "title": "Dance Restaurants",
      "parents": [
        "nightlife"
      ],
      "country_whitelist": [
        "FI"
      ]
    },
    {
      "alias": "dancestudio",
      "title": "Dance Studios",
      "parents": [
        "fitness"
      ]
    },
    {
      "alias": "dancewear",
      "title": "Dance Wear",
      "parents": [
        "sportswear"
      ]
    },
    {
      "alias": "danish",
      "title": "Danish",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "FR",
        "NO",
        "DK",
        "SE"
      ]
    },
    {
      "alias": "dartarenas",
      "title": "Dart Arenas",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "DE",
        "PL",
        "AT",
        "US",
        "CH"
      ]
    },
    {
      "alias": "datarecovery",
      "title": "Data Recovery",
      "parents": [
        "itservices"
      ],
      "country_blacklist": [
        "NL",
        "MY",
        "HK",
        "TW",
        "JP",
        "PH",
        "FI"
      ]
    },
    {
      "alias": "daycamps",
      "title": "Day Camps",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "CL",
        "HK",
        "MX",
        "JP",
        "AR"
      ]
    },
    {
      "alias": "debtrelief",
      "title": "Debt Relief Services",
      "parents": [
        "financialservices"
      ],
      "country_whitelist": [
        "US",
        "CA"
      ]
    },
    {
      "alias": "decksrailing",
      "title": "Decks & Railing",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "delicatessen",
      "title": "Delicatessen",
      "parents": [
        "food"
      ],
      "country_blacklist": [
        "US"
      ]
    },
    {
      "alias": "delis",
      "title": "Delis",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "CL",
        "NL",
        "BE",
        "SE",
        "FR",
        "PT",
        "IT"
      ]
    },
    {
      "alias": "demolitionservices",
      "title": "Demolition Services",
      "parents": [
        "homeservices"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "DK",
        "PT",
        "AT",
        "US",
        "IT",
        "CH",
        "ES",
        "BR",
        "DE",
        "NO",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "dentalhygeiniststorefront",
      "title": "Storefront Clinics",
      "parents": [
        "dentalhygienists"
      ],
      "country_whitelist": [
        "CA"
      ]
    },
    {
      "alias": "dentalhygienists",
      "title": "Dental Hygienists",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "NL",
        "DE",
        "NO",
        "DK",
        "CA",
        "PT",
        "US"
      ]
    },
    {
      "alias": "dentalhygienistsmobile",
      "title": "Mobile Clinics",
      "parents": [
        "dentalhygienists"
      ],
      "country_whitelist": [
        "CA"
      ]
    },
    {
      "alias": "dentists",
      "title": "Dentists",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "departmentsofmotorvehicles",
      "title": "Departments of Motor Vehicles",
      "parents": [
        "publicservicesgovt"
      ],
      "country_blacklist": [
        "FR",
        "BE"
      ]
    },
    {
      "alias": "deptstores",
      "title": "Department Stores",
      "parents": [
        "fashion",
        "shopping"
      ]
    },
    {
      "alias": "dermatology",
      "title": "Dermatologists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "desserts",
      "title": "Desserts",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "diagnosticimaging",
      "title": "Diagnostic Imaging",
      "parents": [
        "diagnosticservices"
      ],
      "country_whitelist": [
        "MX",
        "AU",
        "AR",
        "CA",
        "PT",
        "US",
        "CL",
        "ES",
        "IE",
        "BR",
        "GB",
        "FR"
      ]
    },
    {
      "alias": "diagnosticservices",
      "title": "Diagnostic Services",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "dialysisclinics",
      "title": "Dialysis Clinics",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "MX",
        "AR",
        "PT",
        "US",
        "IT",
        "CL",
        "ES",
        "BR",
        "TR"
      ]
    },
    {
      "alias": "diamondbuyers",
      "title": "Diamond Buyers",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "dietitians",
      "title": "Dietitians",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "digitizingservices",
      "title": "Digitizing Services",
      "parents": [
        "professional"
      ],
      "country_whitelist": [
        "US",
        "NO",
        "DK",
        "BR"
      ]
    },
    {
      "alias": "dimsum",
      "title": "Dim Sum",
      "parents": [
        "chinese"
      ],
      "country_blacklist": [
        "PT",
        "BR",
        "TR"
      ]
    },
    {
      "alias": "diners",
      "title": "Diners",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "SE",
        "FI",
        "AU",
        "CZ"
      ]
    },
    {
      "alias": "dinnertheater",
      "title": "Dinner Theater",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "NL",
        "BE",
        "JP",
        "FR",
        "IT"
      ]
    },
    {
      "alias": "disabilitylaw",
      "title": "Disability Law",
      "parents": [
        "lawyers"
      ]
    },
    {
      "alias": "discgolf",
      "title": "Disc Golf",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "DK",
        "AU",
        "SG"
      ]
    },
    {
      "alias": "discountstore",
      "title": "Discount Store",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "distilleries",
      "title": "Distilleries",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "divebars",
      "title": "Dive Bars",
      "parents": [
        "bars"
      ],
      "country_blacklist": [
        "NL",
        "BE",
        "AU",
        "FR",
        "CZ",
        "IT"
      ]
    },
    {
      "alias": "diveshops",
      "title": "Dive Shops",
      "parents": [
        "sportgoods"
      ],
      "country_whitelist": [
        "MX",
        "AU",
        "JP",
        "AR",
        "AT",
        "NZ",
        "US",
        "IT",
        "CH",
        "CL",
        "ES",
        "BR",
        "DE"
      ]
    },
    {
      "alias": "diving",
      "title": "Diving",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "divorce",
      "title": "Divorce & Family Law",
      "parents": [
        "lawyers"
      ]
    },
    {
      "alias": "diyautoshop",
      "title": "DIY Auto Shop",
      "parents": [
        "autorepair"
      ],
      "country_whitelist": [
        "AU",
        "DE",
        "PT",
        "AT",
        "US",
        "CH"
      ]
    },
    {
      "alias": "diyfood",
      "title": "Do-It-Yourself Food",
      "parents": [
        "food"
      ],
      "country_blacklist": [
        "MX",
        "SE",
        "AT",
        "NZ",
        "IT",
        "CH",
        "CL",
        "ES",
        "DE",
        "FR",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "djs",
      "title": "DJs",
      "parents": [
        "eventservices"
      ]
    },
    {
      "alias": "dog_parks",
      "title": "Dog Parks",
      "parents": [
        "parks"
      ]
    },
    {
      "alias": "dogwalkers",
      "title": "Dog Walkers",
      "parents": [
        "petservices"
      ]
    },
    {
      "alias": "dolmusstation",
      "title": "Dolmus Station",
      "parents": [
        "transport"
      ],
      "country_whitelist": [
        "TR"
      ]
    },
    {
      "alias": "dominican",
      "title": "Dominican",
      "parents": [
        "caribbean"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "donairs",
      "title": "Donairs",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "BE",
        "TR",
        "DK",
        "FR",
        "CA",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "donationcenter",
      "title": "Donation Center",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "DK",
        "AT",
        "US",
        "CH",
        "ES",
        "BR",
        "DE",
        "NO"
      ]
    },
    {
      "alias": "donburi",
      "title": "Donburi",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "HK",
        "TW",
        "JP"
      ]
    },
    {
      "alias": "donuts",
      "title": "Donuts",
      "parents": [
        "food"
      ],
      "country_blacklist": [
        "ES"
      ]
    },
    {
      "alias": "doorsales",
      "title": "Door Sales/Installation",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "HK",
        "SE",
        "JP",
        "CL",
        "MX",
        "MY",
        "DK",
        "PH",
        "AR",
        "ES",
        "IE",
        "TW",
        "NO",
        "TR",
        "FR",
        "FI"
      ]
    },
    {
      "alias": "doulas",
      "title": "Doulas",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "BE",
        "FR",
        "CA",
        "PT",
        "CZ",
        "US",
        "IT"
      ]
    },
    {
      "alias": "dramaschools",
      "title": "Drama Schools",
      "parents": [
        "specialtyschools"
      ]
    },
    {
      "alias": "driedfruit",
      "title": "Dried Fruit",
      "parents": [
        "gourmet"
      ],
      "country_whitelist": [
        "HK",
        "MX",
        "SE",
        "JP",
        "AR",
        "CL",
        "ES",
        "TW",
        "BR",
        "TR",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "driveintheater",
      "title": "Drive-In Theater",
      "parents": [
        "movietheaters"
      ],
      "country_blacklist": [
        "CL",
        "MX",
        "FR",
        "AR",
        "PL"
      ]
    },
    {
      "alias": "drivethrubars",
      "title": "Drive-Thru Bars",
      "parents": [
        "bars"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "driving_schools",
      "title": "Driving Schools",
      "parents": [
        "specialtyschools"
      ]
    },
    {
      "alias": "drones",
      "title": "Drones",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "drugstores",
      "title": "Drugstores",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "MX",
        "SE",
        "DK",
        "AR",
        "CL",
        "NO",
        "TR",
        "FR"
      ]
    },
    {
      "alias": "dryclean",
      "title": "Dry Cleaning",
      "parents": [
        "laundryservices"
      ]
    },
    {
      "alias": "drywall",
      "title": "Drywall Installation & Repair",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "HK",
        "JP"
      ]
    },
    {
      "alias": "duilawyers",
      "title": "DUI Law",
      "parents": [
        "lawyers"
      ],
      "country_whitelist": [
        "US",
        "CA",
        "DE"
      ]
    },
    {
      "alias": "duischools",
      "title": "DUI Schools",
      "parents": [
        "specialtyschools"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "dumplings",
      "title": "Dumplings",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "JP",
        "CA",
        "AT",
        "NZ",
        "CH",
        "IE",
        "DE",
        "GB",
        "SG",
        "PL"
      ]
    },
    {
      "alias": "dumpsterrental",
      "title": "Dumpster Rental",
      "parents": [
        "junkremovalandhauling"
      ],
      "country_whitelist": [
        "NL",
        "HK",
        "AU",
        "NZ",
        "CH",
        "SG",
        "PL",
        "BE",
        "MY",
        "DK",
        "PH",
        "CA",
        "AT",
        "US",
        "IE",
        "DE",
        "NO",
        "GB"
      ]
    },
    {
      "alias": "duplicationservices",
      "title": "Duplication Services",
      "parents": [
        "professional"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "dutyfreeshops",
      "title": "Duty-Free Shops",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "earnosethroat",
      "title": "Ear Nose & Throat",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "eastern_european",
      "title": "Eastern European",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "AU",
        "NO",
        "DK",
        "FR",
        "CZ"
      ]
    },
    {
      "alias": "easterngerman",
      "title": "Eastern German",
      "parents": [
        "german"
      ],
      "country_whitelist": [
        "DE"
      ]
    },
    {
      "alias": "easternmexican",
      "title": "Eastern Mexican",
      "parents": [
        "mexican"
      ],
      "country_whitelist": [
        "MX"
      ]
    },
    {
      "alias": "eatertainment",
      "title": "Eatertainment",
      "parents": [
        "arts"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "BR",
        "DE",
        "AT",
        "US",
        "CH"
      ]
    },
    {
      "alias": "editorialservices",
      "title": "Editorial Services",
      "parents": [
        "professional"
      ],
      "country_whitelist": [
        "NL",
        "AU",
        "NZ",
        "IT",
        "CH",
        "CL",
        "SG",
        "PL",
        "BE",
        "MX",
        "MY",
        "DK",
        "PH",
        "AR",
        "PT",
        "CA",
        "AT",
        "US",
        "ES",
        "IE",
        "BR",
        "DE",
        "NO",
        "GB",
        "FR"
      ]
    },
    {
      "alias": "education",
      "title": "Education",
      "parents": []
    },
    {
      "alias": "educationservices",
      "title": "Educational Services",
      "parents": [
        "education"
      ],
      "country_blacklist": [
        "BR"
      ]
    },
    {
      "alias": "egyptian",
      "title": "Egyptian",
      "parents": [
        "mideastern"
      ],
      "country_whitelist": [
        "BE",
        "FR",
        "CA",
        "US",
        "IT"
      ]
    },
    {
      "alias": "eldercareplanning",
      "title": "Elder Care Planning",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "elderlaw",
      "title": "Elder Law",
      "parents": [
        "lawyers"
      ],
      "country_whitelist": [
        "PT",
        "AT",
        "US",
        "CH",
        "BR",
        "DE",
        "TR",
        "PL"
      ]
    },
    {
      "alias": "electricians",
      "title": "Electricians",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "electricitysuppliers",
      "title": "Electricity Suppliers",
      "parents": [
        "utilities"
      ]
    },
    {
      "alias": "electronics",
      "title": "Electronics",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "electronicsrepair",
      "title": "Electronics Repair",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "elementaryschools",
      "title": "Elementary Schools",
      "parents": [
        "education"
      ]
    },
    {
      "alias": "elevatorservices",
      "title": "Elevator Services",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "MX",
        "MY",
        "JP",
        "PH",
        "AR",
        "CL",
        "FR",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "eltern_cafes",
      "title": "Parent Cafes",
      "parents": [
        "food",
        "restaurants"
      ],
      "country_whitelist": [
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "embassy",
      "title": "Embassy",
      "parents": [
        "publicservicesgovt"
      ],
      "country_blacklist": [
        "TR"
      ]
    },
    {
      "alias": "embroideryandcrochet",
      "title": "Embroidery & Crochet",
      "parents": [
        "artsandcrafts"
      ]
    },
    {
      "alias": "emergencymedicine",
      "title": "Emergency Medicine",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "emergencypethospital",
      "title": "Emergency Pet Hospital",
      "parents": [
        "petservices"
      ]
    },
    {
      "alias": "emergencyrooms",
      "title": "Emergency Rooms",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "emilian",
      "title": "Emilian",
      "parents": [
        "italian"
      ],
      "country_whitelist": [
        "IT"
      ]
    },
    {
      "alias": "empanadas",
      "title": "Empanadas",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "CL",
        "AR",
        "ES",
        "US"
      ]
    },
    {
      "alias": "employmentagencies",
      "title": "Employment Agencies",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "employmentlawyers",
      "title": "Employment Law",
      "parents": [
        "lawyers"
      ]
    },
    {
      "alias": "emstraining",
      "title": "EMS Training",
      "parents": [
        "fitness"
      ],
      "country_whitelist": [
        "ES",
        "SE",
        "DE",
        "AT",
        "CH"
      ]
    },
    {
      "alias": "endocrinologists",
      "title": "Endocrinologists",
      "parents": [
        "physicians"
      ],
      "country_blacklist": [
        "HK",
        "AU",
        "SE",
        "JP",
        "CA",
        "NZ",
        "IE",
        "TW",
        "GB",
        "SG",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "endodontists",
      "title": "Endodontists",
      "parents": [
        "dentists"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "engraving",
      "title": "Engraving",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "entertainmentlaw",
      "title": "Entertainment Law",
      "parents": [
        "lawyers"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "enviroabatement",
      "title": "Environmental Abatement",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "environmentaltesting",
      "title": "Environmental Testing",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "DK",
        "CA",
        "NZ",
        "US",
        "IE",
        "NO",
        "GB",
        "SG",
        "FI"
      ]
    },
    {
      "alias": "eritrean",
      "title": "Eritrean",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "DE",
        "AT",
        "US",
        "IT",
        "CH"
      ]
    },
    {
      "alias": "eroticmassage",
      "title": "Erotic Massage",
      "parents": [
        "beautysvc"
      ],
      "country_blacklist": [
        "HK",
        "MY",
        "SE",
        "DK",
        "JP",
        "PH",
        "US",
        "CL",
        "TW",
        "NO",
        "TR",
        "FI"
      ]
    },
    {
      "alias": "escapegames",
      "title": "Escape Games",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "estateliquidation",
      "title": "Estate Liquidation",
      "parents": [
        "realestate"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "estatephotography",
      "title": "Real Estate Photography",
      "parents": [
        "realestatesvcs"
      ],
      "country_blacklist": [
        "IT",
        "JP"
      ]
    },
    {
      "alias": "estateplanning",
      "title": "Estate Planning Law",
      "parents": [
        "lawyers"
      ],
      "country_blacklist": [
        "NO",
        "SE"
      ]
    },
    {
      "alias": "estheticians",
      "title": "Estheticians",
      "parents": [
        "skincare"
      ]
    },
    {
      "alias": "ethicgrocery",
      "title": "Ethical Grocery",
      "parents": [
        "food"
      ],
      "country_blacklist": [
        "NL",
        "BE",
        "MY",
        "JP",
        "PH",
        "AT",
        "US",
        "CH",
        "DE",
        "TR",
        "FR",
        "CZ"
      ]
    },
    {
      "alias": "ethiopian",
      "title": "Ethiopian",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "MX",
        "SG",
        "TR",
        "CZ"
      ]
    },
    {
      "alias": "evchargingstations",
      "title": "EV Charging Stations",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "eventphotography",
      "title": "Event Photography",
      "parents": [
        "photographers"
      ]
    },
    {
      "alias": "eventplanning",
      "title": "Party & Event Planning",
      "parents": [
        "eventservices"
      ]
    },
    {
      "alias": "eventservices",
      "title": "Event Planning & Services",
      "parents": []
    },
    {
      "alias": "excavationservices",
      "title": "Excavation Services",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "experiences",
      "title": "Experiences",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "DE",
        "SE",
        "NO",
        "DK",
        "PT",
        "CZ"
      ]
    },
    {
      "alias": "eyebrowservices",
      "title": "Eyebrow Services",
      "parents": [
        "beautysvc"
      ]
    },
    {
      "alias": "eyelashservice",
      "title": "Eyelash Service",
      "parents": [
        "beautysvc"
      ],
      "country_blacklist": [
        "IT"
      ]
    },
    {
      "alias": "fabricstores",
      "title": "Fabric Stores",
      "parents": [
        "artsandcrafts"
      ]
    },
    {
      "alias": "facepainting",
      "title": "Face Painting",
      "parents": [
        "eventservices"
      ],
      "country_blacklist": [
        "HK",
        "SE",
        "JP",
        "IT",
        "CL",
        "SG",
        "PL",
        "MX",
        "MY",
        "PH",
        "AR",
        "ES",
        "TW",
        "TR",
        "FR",
        "FI"
      ]
    },
    {
      "alias": "fado_houses",
      "title": "Fado Houses",
      "parents": [
        "portuguese"
      ],
      "country_whitelist": [
        "PT"
      ]
    },
    {
      "alias": "faithbasedcpc",
      "title": "Faith-based Crisis Pregnancy Centers",
      "parents": [
        "crisispregnancycenters"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "falafel",
      "title": "Falafel",
      "parents": [
        "mediterranean"
      ],
      "country_blacklist": [
        "AR",
        "MX",
        "PT"
      ]
    },
    {
      "alias": "familydr",
      "title": "Family Practice",
      "parents": [
        "physicians"
      ],
      "country_blacklist": [
        "BR"
      ]
    },
    {
      "alias": "farmequipmentrepair",
      "title": "Farm Equipment Repair",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "farmersmarket",
      "title": "Farmers Market",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "farmingequipment",
      "title": "Farming Equipment",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "farms",
      "title": "Farms",
      "parents": [
        "arts"
      ]
    },
    {
      "alias": "farriers",
      "title": "Farriers",
      "parents": [
        "petservices"
      ]
    },
    {
      "alias": "fashion",
      "title": "Fashion",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "fasil",
      "title": "Fasil Music",
      "parents": [
        "nightlife"
      ],
      "country_whitelist": [
        "TR"
      ]
    },
    {
      "alias": "fencesgates",
      "title": "Fences & Gates",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "fencing",
      "title": "Fencing Clubs",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "fengshui",
      "title": "Feng Shui",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "ferries",
      "title": "Ferries",
      "parents": [
        "transport"
      ]
    },
    {
      "alias": "fertility",
      "title": "Fertility",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "festivals",
      "title": "Festivals",
      "parents": [
        "arts"
      ]
    },
    {
      "alias": "filipino",
      "title": "Filipino",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "TR",
        "FI",
        "DK",
        "CZ"
      ]
    },
    {
      "alias": "financialadvising",
      "title": "Financial Advising",
      "parents": [
        "financialservices"
      ]
    },
    {
      "alias": "financialservices",
      "title": "Financial Services",
      "parents": []
    },
    {
      "alias": "fingerprinting",
      "title": "Fingerprinting",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "firearmtraining",
      "title": "Firearm Training",
      "parents": [
        "specialtyschools"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "firedepartments",
      "title": "Fire Departments",
      "parents": [
        "publicservicesgovt"
      ],
      "country_blacklist": [
        "IE",
        "GB",
        "SG",
        "CA",
        "NZ"
      ]
    },
    {
      "alias": "fireplace",
      "title": "Fireplace Services",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "fireprotection",
      "title": "Fire Protection Services",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "firewood",
      "title": "Firewood",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "NL",
        "MY",
        "BE",
        "HK",
        "JP",
        "PH",
        "TW",
        "TR",
        "CZ"
      ]
    },
    {
      "alias": "fireworks",
      "title": "Fireworks",
      "parents": [
        "shopping"
      ],
      "country_whitelist": [
        "MX",
        "AU",
        "AR",
        "CA",
        "PT",
        "NZ",
        "US",
        "CL",
        "GB",
        "CZ"
      ]
    },
    {
      "alias": "firstaidclasses",
      "title": "First Aid Classes",
      "parents": [
        "specialtyschools"
      ],
      "country_blacklist": [
        "NL",
        "BE",
        "IE",
        "BR",
        "SG",
        "FR",
        "NZ"
      ]
    },
    {
      "alias": "fischbroetchen",
      "title": "Fischbroetchen",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "DE"
      ]
    },
    {
      "alias": "fishing",
      "title": "Fishing",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "fishmonger",
      "title": "Fishmonger",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "SE",
        "DK",
        "PT",
        "AT",
        "IT",
        "CH",
        "DE",
        "NO",
        "CZ",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "fishnchips",
      "title": "Fish & Chips",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "PT",
        "BR"
      ]
    },
    {
      "alias": "fitness",
      "title": "Fitness & Instruction",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "fitnessequipment",
      "title": "Fitness/Exercise Equipment",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "flatbread",
      "title": "Flatbread",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "DE",
        "DK",
        "AT",
        "PL",
        "CH"
      ]
    },
    {
      "alias": "fleamarkets",
      "title": "Flea Markets",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "flemish",
      "title": "Flemish",
      "parents": [
        "belgian"
      ],
      "country_whitelist": [
        "FR"
      ]
    },
    {
      "alias": "flightinstruction",
      "title": "Flight Instruction",
      "parents": [
        "specialtyschools"
      ]
    },
    {
      "alias": "floatspa",
      "title": "Float Spa",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "FR",
        "IT",
        "JP"
      ]
    },
    {
      "alias": "flooring",
      "title": "Flooring",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "floraldesigners",
      "title": "Floral Designers",
      "parents": [
        "eventservices"
      ],
      "country_blacklist": [
        "FR"
      ]
    },
    {
      "alias": "florists",
      "title": "Florists",
      "parents": [
        "flowers"
      ]
    },
    {
      "alias": "flowers",
      "title": "Flowers & Gifts",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "flyboarding",
      "title": "Flyboarding",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "fondue",
      "title": "Fondue",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "ES",
        "DK",
        "CZ"
      ]
    },
    {
      "alias": "food",
      "title": "Food",
      "parents": []
    },
    {
      "alias": "food_court",
      "title": "Food Court",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "FR",
        "TR",
        "FI",
        "TW"
      ]
    },
    {
      "alias": "foodbanks",
      "title": "Food Banks",
      "parents": [
        "nonprofit"
      ]
    },
    {
      "alias": "fooddeliveryservices",
      "title": "Food Delivery Services",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "foodsafety",
      "title": "Food Safety Training",
      "parents": [
        "specialtyschools"
      ],
      "country_whitelist": [
        "US",
        "PT",
        "SG",
        "BR"
      ]
    },
    {
      "alias": "foodstands",
      "title": "Food Stands",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "foodtours",
      "title": "Food Tours",
      "parents": [
        "tours"
      ]
    },
    {
      "alias": "foodtrucks",
      "title": "Food Trucks",
      "parents": [
        "food"
      ],
      "country_blacklist": [
        "SG"
      ]
    },
    {
      "alias": "football",
      "title": "Soccer",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "footcare",
      "title": "Foot Care",
      "parents": [
        "beautysvc"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "MY",
        "AU",
        "JP",
        "PH",
        "CA",
        "AT",
        "NZ",
        "IT",
        "CH",
        "IE",
        "DE",
        "GB",
        "SG"
      ]
    },
    {
      "alias": "forestry",
      "title": "Forestry",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "SE",
        "NO",
        "DK",
        "CA",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "formalwear",
      "title": "Formal Wear",
      "parents": [
        "fashion"
      ],
      "country_blacklist": [
        "HK",
        "MY",
        "SE",
        "JP",
        "PH",
        "IT",
        "CH",
        "TW",
        "TR",
        "FI"
      ]
    },
    {
      "alias": "foundationrepair",
      "title": "Foundation Repair",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "framing",
      "title": "Framing",
      "parents": [
        "artsandcrafts"
      ]
    },
    {
      "alias": "franconian",
      "title": "Franconian",
      "parents": [
        "german"
      ],
      "country_whitelist": [
        "DE"
      ]
    },
    {
      "alias": "freediving",
      "title": "Free Diving",
      "parents": [
        "diving"
      ]
    },
    {
      "alias": "freiduria",
      "title": "Freiduria",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "CL",
        "AR",
        "ES",
        "MX"
      ]
    },
    {
      "alias": "french",
      "title": "French",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "friterie",
      "title": "Friterie",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "FR",
        "PL",
        "IT"
      ]
    },
    {
      "alias": "friulan",
      "title": "Friulan",
      "parents": [
        "italian"
      ],
      "country_whitelist": [
        "IT"
      ]
    },
    {
      "alias": "frozenfood",
      "title": "Frozen Food",
      "parents": [
        "gourmet"
      ],
      "country_whitelist": [
        "BE",
        "ES",
        "GB",
        "SG",
        "FR",
        "IT"
      ]
    },
    {
      "alias": "fueldocks",
      "title": "Fuel Docks",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "MX",
        "ES",
        "SE",
        "NO",
        "DK",
        "US"
      ]
    },
    {
      "alias": "funeralservices",
      "title": "Funeral Services & Cemeteries",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "funfair",
      "title": "Fun Fair",
      "parents": [
        "festivals"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "DK",
        "PT",
        "AT",
        "CH",
        "DE",
        "NO",
        "CZ"
      ]
    },
    {
      "alias": "furclothing",
      "title": "Fur Clothing",
      "parents": [
        "fashion"
      ]
    },
    {
      "alias": "furniture",
      "title": "Furniture Stores",
      "parents": [
        "homeandgarden"
      ]
    },
    {
      "alias": "furnitureassembly",
      "title": "Furniture Assembly",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "furniturerepair",
      "title": "Furniture Repair",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "fuzhou",
      "title": "Fuzhou",
      "parents": [
        "chinese"
      ],
      "country_whitelist": [
        "MY",
        "HK",
        "TW",
        "SG"
      ]
    },
    {
      "alias": "galician",
      "title": "Galician",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "ES",
        "PT"
      ]
    },
    {
      "alias": "galleries",
      "title": "Art Galleries",
      "parents": [
        "arts",
        "shopping"
      ]
    },
    {
      "alias": "gamemeat",
      "title": "Game Meat",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "HK",
        "MX",
        "MY",
        "JP",
        "PH",
        "AR",
        "CA",
        "PT",
        "CL",
        "TW",
        "BR",
        "TR",
        "FI"
      ]
    },
    {
      "alias": "gametruckrental",
      "title": "Game Truck Rental",
      "parents": [
        "eventservices"
      ],
      "country_whitelist": [
        "CL",
        "MX",
        "AR",
        "CA",
        "US"
      ]
    },
    {
      "alias": "garage_door_services",
      "title": "Garage Door Services",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "HK",
        "MY",
        "SE",
        "JP",
        "PH",
        "AR",
        "AT",
        "CH",
        "CL",
        "TW",
        "DE",
        "PL"
      ]
    },
    {
      "alias": "gardeners",
      "title": "Gardeners",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "gardening",
      "title": "Nurseries & Gardening",
      "parents": [
        "homeandgarden"
      ]
    },
    {
      "alias": "gardens",
      "title": "Botanical Gardens",
      "parents": [
        "arts"
      ]
    },
    {
      "alias": "gastroenterologist",
      "title": "Gastroenterologist",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "gastropubs",
      "title": "Gastropubs",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "gaybars",
      "title": "Gay Bars",
      "parents": [
        "bars"
      ]
    },
    {
      "alias": "gelato",
      "title": "Gelato",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "AU",
        "SE",
        "DK",
        "PH",
        "PT",
        "US",
        "IT",
        "NO",
        "SG",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "gemstonesandminerals",
      "title": "Gemstones & Minerals",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "general_litigation",
      "title": "General Litigation",
      "parents": [
        "lawyers"
      ]
    },
    {
      "alias": "generaldentistry",
      "title": "General Dentistry",
      "parents": [
        "dentists"
      ]
    },
    {
      "alias": "generalfestivals",
      "title": "General Festivals",
      "parents": [
        "festivals"
      ],
      "country_whitelist": [
        "DE",
        "JP",
        "PT",
        "AT",
        "CH"
      ]
    },
    {
      "alias": "generatorinstallrepair",
      "title": "Generator Installation/Repair",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "geneticists",
      "title": "Geneticists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "georgian",
      "title": "Georgian",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "AT",
        "US",
        "CH",
        "DE",
        "GB",
        "CZ",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "german",
      "title": "German",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "gerontologist",
      "title": "Gerontologists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "gestorias",
      "title": "Gestorias",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "CL",
        "AR",
        "ES",
        "MX"
      ]
    },
    {
      "alias": "giblets",
      "title": "Giblets",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "TR"
      ]
    },
    {
      "alias": "giftshops",
      "title": "Gift Shops",
      "parents": [
        "flowers"
      ],
      "country_blacklist": [
        "PL",
        "TR",
        "SG"
      ]
    },
    {
      "alias": "glassandmirrors",
      "title": "Glass & Mirrors",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "TR"
      ]
    },
    {
      "alias": "glassblowing",
      "title": "Glass Blowing",
      "parents": [
        "artclasses"
      ],
      "country_blacklist": [
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "gliding",
      "title": "Gliding",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "SE",
        "PT",
        "AT",
        "CH",
        "DE",
        "NO",
        "FR",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "gluhwein",
      "title": "Mulled Wine",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "SE",
        "DE",
        "AT",
        "CZ",
        "CH"
      ]
    },
    {
      "alias": "gluten_free",
      "title": "Gluten-Free",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "gokarts",
      "title": "Go Karts",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "goldbuyers",
      "title": "Gold Buyers",
      "parents": [
        "shopping"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "SE",
        "CA",
        "AT",
        "PT",
        "US",
        "IT",
        "CH",
        "ES",
        "BR",
        "DE",
        "FR"
      ]
    },
    {
      "alias": "golf",
      "title": "Golf",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "golfcartdealers",
      "title": "Golf Cart Dealers",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "US",
        "CA"
      ]
    },
    {
      "alias": "golfcartrentals",
      "title": "Golf Cart Rentals",
      "parents": [
        "eventservices"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "golfequipment",
      "title": "Golf Equipment",
      "parents": [
        "sportgoods"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "DE",
        "CA",
        "US"
      ]
    },
    {
      "alias": "golflessons",
      "title": "Golf Lessons",
      "parents": [
        "fitness"
      ],
      "country_blacklist": [
        "HK",
        "MY",
        "PH",
        "CA",
        "AT",
        "CH",
        "IE",
        "TW",
        "BR",
        "DE",
        "TR",
        "SG",
        "FI"
      ]
    },
    {
      "alias": "gourmet",
      "title": "Specialty Food",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "gozleme",
      "title": "Gozleme",
      "parents": [
        "turkish"
      ],
      "country_whitelist": [
        "TR"
      ]
    },
    {
      "alias": "graphicdesign",
      "title": "Graphic Design",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "greek",
      "title": "Greek",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "grillingequipment",
      "title": "Grilling Equipment",
      "parents": [
        "homeandgarden"
      ]
    },
    {
      "alias": "grillservices",
      "title": "Grill Services",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "MX",
        "AR",
        "PT",
        "AT",
        "US",
        "CH",
        "CL",
        "ES",
        "BR",
        "DE",
        "PL"
      ]
    },
    {
      "alias": "grocery",
      "title": "Grocery",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "groomer",
      "title": "Pet Groomers",
      "parents": [
        "petservices"
      ]
    },
    {
      "alias": "groutservices",
      "title": "Grout Services",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "FR"
      ]
    },
    {
      "alias": "guamanian",
      "title": "Guamanian",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "CL",
        "MX",
        "TR",
        "JP",
        "FR",
        "AR",
        "PL"
      ]
    },
    {
      "alias": "guesthouses",
      "title": "Guest Houses",
      "parents": [
        "hotelstravel"
      ],
      "country_blacklist": [
        "SG"
      ]
    },
    {
      "alias": "guitarstores",
      "title": "Guitar Stores",
      "parents": [
        "musicinstrumentservices"
      ]
    },
    {
      "alias": "gun_ranges",
      "title": "Gun/Rifle Ranges",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "BE",
        "AT",
        "CH",
        "SG"
      ]
    },
    {
      "alias": "guns_and_ammo",
      "title": "Guns & Ammo",
      "parents": [
        "shopping"
      ],
      "country_whitelist": [
        "MX",
        "MY",
        "PH",
        "AR",
        "CA",
        "AT",
        "PT",
        "US",
        "CH",
        "CL",
        "ES",
        "DE",
        "PL"
      ]
    },
    {
      "alias": "gunsmith",
      "title": "Gunsmith",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "NL",
        "BE",
        "HK",
        "JP",
        "AT",
        "CH",
        "TW",
        "BR",
        "DE",
        "TR"
      ]
    },
    {
      "alias": "gutterservices",
      "title": "Gutter Services",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "AR",
        "MX"
      ]
    },
    {
      "alias": "gymnastics",
      "title": "Gymnastics",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "MX",
        "DK",
        "CA",
        "PT",
        "NZ",
        "US",
        "BR",
        "NO",
        "CZ"
      ]
    },
    {
      "alias": "gyms",
      "title": "Gyms",
      "parents": [
        "fitness"
      ]
    },
    {
      "alias": "gyudon",
      "title": "Gyudon",
      "parents": [
        "donburi"
      ],
      "country_whitelist": [
        "JP"
      ]
    },
    {
      "alias": "habilitativeservices",
      "title": "Habilitative Services",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "hainan",
      "title": "Hainan",
      "parents": [
        "chinese"
      ],
      "country_whitelist": [
        "MY",
        "HK",
        "SG",
        "PH",
        "US"
      ]
    },
    {
      "alias": "hair",
      "title": "Hair Salons",
      "parents": [
        "beautysvc"
      ]
    },
    {
      "alias": "hair_extensions",
      "title": "Hair Extensions",
      "parents": [
        "hair",
        "beautysvc"
      ],
      "country_blacklist": [
        "NL",
        "BE",
        "HK",
        "TR",
        "PL"
      ]
    },
    {
      "alias": "hairloss",
      "title": "Hair Loss Centers",
      "parents": [
        "beautysvc"
      ]
    },
    {
      "alias": "hairremoval",
      "title": "Hair Removal",
      "parents": [
        "beautysvc"
      ]
    },
    {
      "alias": "hairstylists",
      "title": "Hair Stylists",
      "parents": [
        "hair"
      ],
      "country_whitelist": [
        "NL",
        "HK",
        "AU",
        "SE",
        "CH",
        "CL",
        "SG",
        "CZ",
        "PL",
        "BE",
        "MX",
        "DK",
        "AR",
        "PT",
        "CA",
        "AT",
        "US",
        "ES",
        "IE",
        "TW",
        "DE",
        "NO",
        "GB"
      ]
    },
    {
      "alias": "haitian",
      "title": "Haitian",
      "parents": [
        "caribbean"
      ],
      "country_whitelist": [
        "US",
        "CA"
      ]
    },
    {
      "alias": "hakka",
      "title": "Hakka",
      "parents": [
        "chinese"
      ],
      "country_whitelist": [
        "MY",
        "HK",
        "TW",
        "SG",
        "PH",
        "CA"
      ]
    },
    {
      "alias": "halal",
      "title": "Halal",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "PT",
        "TR"
      ]
    },
    {
      "alias": "halfwayhouses",
      "title": "Halfway Houses",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "halotherapy",
      "title": "Halotherapy",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "FR"
      ]
    },
    {
      "alias": "handball",
      "title": "Handball",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "HK",
        "AU",
        "NZ",
        "SG",
        "CZ",
        "MX",
        "MY",
        "PH",
        "CA",
        "PT",
        "US",
        "IE",
        "TW",
        "DE",
        "GB",
        "TR"
      ]
    },
    {
      "alias": "handrolls",
      "title": "Hand Rolls",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "TW",
        "BR"
      ]
    },
    {
      "alias": "handyman",
      "title": "Handyman",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "hanggliding",
      "title": "Hang Gliding",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "NL",
        "HK",
        "MY",
        "DK",
        "PH",
        "CA",
        "IE",
        "TW",
        "DE",
        "GB",
        "TR",
        "SG",
        "CZ",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "hardware",
      "title": "Hardware Stores",
      "parents": [
        "homeandgarden"
      ]
    },
    {
      "alias": "hats",
      "title": "Hats",
      "parents": [
        "fashion"
      ],
      "country_blacklist": [
        "HK",
        "SE",
        "JP",
        "AT",
        "CH",
        "IE",
        "GB",
        "TR",
        "PL"
      ]
    },
    {
      "alias": "hauntedhouses",
      "title": "Haunted Houses",
      "parents": [
        "arts"
      ]
    },
    {
      "alias": "hawaiian",
      "title": "Hawaiian",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "AU",
        "TR",
        "DK",
        "PT",
        "CZ"
      ]
    },
    {
      "alias": "hawkercentre",
      "title": "Hawker Centre",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "MY",
        "HK",
        "MX",
        "PH",
        "AR",
        "CL",
        "TW",
        "SG"
      ]
    },
    {
      "alias": "hazardouswastedisposal",
      "title": "Hazardous Waste Disposal",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "HK",
        "MY",
        "SE",
        "JP",
        "PH",
        "PT",
        "AT",
        "CH",
        "BR",
        "DE",
        "TR",
        "FR",
        "CZ"
      ]
    },
    {
      "alias": "headshops",
      "title": "Head Shops",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "health",
      "title": "Health & Medical",
      "parents": []
    },
    {
      "alias": "healthcoach",
      "title": "Health Coach",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "healthinsurance",
      "title": "Health Insurance Offices",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "BE",
        "MX",
        "AU",
        "PT",
        "AT",
        "NZ",
        "US",
        "CH",
        "BR",
        "DE",
        "SG",
        "FR",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "healthmarkets",
      "title": "Health Markets",
      "parents": [
        "gourmet"
      ]
    },
    {
      "alias": "healthretreats",
      "title": "Health Retreats",
      "parents": [
        "hotelstravel"
      ],
      "country_blacklist": [
        "AR",
        "MX"
      ]
    },
    {
      "alias": "healthtrainers",
      "title": "Trainers",
      "parents": [
        "fitness"
      ]
    },
    {
      "alias": "hearing_aids",
      "title": "Hearing Aids",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "MX",
        "DK",
        "AR",
        "PT",
        "AT",
        "CH",
        "CL",
        "ES",
        "BR",
        "DE",
        "NO",
        "FR",
        "CZ",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "hearingaidproviders",
      "title": "Hearing Aid Providers",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "HK",
        "MX",
        "SE",
        "JP",
        "AR",
        "AT",
        "CH",
        "CL",
        "ES",
        "DE",
        "TR",
        "CZ"
      ]
    },
    {
      "alias": "henghwa",
      "title": "Henghwa",
      "parents": [
        "chinese"
      ],
      "country_whitelist": [
        "MY",
        "HK",
        "TW",
        "SG"
      ]
    },
    {
      "alias": "hennaartists",
      "title": "Henna Artists",
      "parents": [
        "eventservices"
      ],
      "country_whitelist": [
        "AU",
        "DK",
        "CA",
        "AT",
        "NZ",
        "US",
        "IT",
        "CH",
        "BR",
        "DE",
        "NO",
        "FR"
      ]
    },
    {
      "alias": "hepatologists",
      "title": "Hepatologists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "herbalshops",
      "title": "Herbal Shops",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "herbsandspices",
      "title": "Herbs & Spices",
      "parents": [
        "gourmet"
      ]
    },
    {
      "alias": "hessian",
      "title": "Hessian",
      "parents": [
        "german"
      ],
      "country_whitelist": [
        "DE"
      ]
    },
    {
      "alias": "heuriger",
      "title": "Heuriger",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "AT"
      ]
    },
    {
      "alias": "hifi",
      "title": "High Fidelity Audio Equipment",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "highschools",
      "title": "Middle Schools & High Schools",
      "parents": [
        "education"
      ]
    },
    {
      "alias": "hiking",
      "title": "Hiking",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "himalayan",
      "title": "Himalayan/Nepalese",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "hindu_temples",
      "title": "Hindu Temples",
      "parents": [
        "religiousorgs"
      ]
    },
    {
      "alias": "historicaltours",
      "title": "Historical Tours",
      "parents": [
        "tours"
      ]
    },
    {
      "alias": "hkcafe",
      "title": "Hong Kong Style Cafe",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "US",
        "HK",
        "TW",
        "CA"
      ]
    },
    {
      "alias": "hobbyshops",
      "title": "Hobby Shops",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "hockeyequipment",
      "title": "Hockey Equipment",
      "parents": [
        "sportgoods"
      ]
    },
    {
      "alias": "hokkien",
      "title": "Hokkien",
      "parents": [
        "chinese"
      ],
      "country_whitelist": [
        "MY",
        "HK",
        "TW",
        "SG"
      ]
    },
    {
      "alias": "holidaydecorations",
      "title": "Holiday Decorations",
      "parents": [
        "homeandgarden"
      ]
    },
    {
      "alias": "home_inspectors",
      "title": "Home Inspectors",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "home_organization",
      "title": "Home Organization",
      "parents": [
        "homeservices"
      ],
      "country_whitelist": [
        "US",
        "CA"
      ]
    },
    {
      "alias": "homeandgarden",
      "title": "Home & Garden",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "homeappliancerepair",
      "title": "Appliances & Repair",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "homeautomation",
      "title": "Home Automation",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "homecleaning",
      "title": "Home Cleaning",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "homedecor",
      "title": "Home Decor",
      "parents": [
        "homeandgarden"
      ]
    },
    {
      "alias": "homedevelopers",
      "title": "Home Developers",
      "parents": [
        "realestate"
      ],
      "country_blacklist": [
        "CL",
        "MX",
        "BR",
        "AR",
        "IT"
      ]
    },
    {
      "alias": "homeenergyauditors",
      "title": "Home Energy Auditors",
      "parents": [
        "homeservices"
      ],
      "country_whitelist": [
        "NL",
        "AU",
        "SE",
        "NZ",
        "CH",
        "SG",
        "PL",
        "BE",
        "MY",
        "DK",
        "PH",
        "CA",
        "AT",
        "PT",
        "US",
        "ES",
        "IE",
        "DE",
        "NO",
        "GB",
        "FR",
        "FI"
      ]
    },
    {
      "alias": "homehealthcare",
      "title": "Home Health Care",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "homeinsurance",
      "title": "Home & Rental Insurance",
      "parents": [
        "insurance"
      ]
    },
    {
      "alias": "homelessshelters",
      "title": "Homeless Shelters",
      "parents": [
        "nonprofit"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "homemadefood",
      "title": "Homemade Food",
      "parents": [
        "turkish"
      ],
      "country_whitelist": [
        "TR"
      ]
    },
    {
      "alias": "homenetworkinstall",
      "title": "Home Network Installation",
      "parents": [
        "homeservices"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "SE",
        "DK",
        "PT",
        "AT",
        "US",
        "CH",
        "ES",
        "BR",
        "DE",
        "NO",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "homeopathic",
      "title": "Homeopathic",
      "parents": [
        "physicians"
      ],
      "country_blacklist": [
        "HK",
        "AU",
        "CA",
        "NZ",
        "US",
        "IE",
        "TW",
        "GB",
        "TR",
        "SG"
      ]
    },
    {
      "alias": "homeownerassociation",
      "title": "Homeowner Association",
      "parents": [
        "realestate"
      ],
      "country_whitelist": [
        "US",
        "PL",
        "CZ"
      ]
    },
    {
      "alias": "homeservices",
      "title": "Home Services",
      "parents": []
    },
    {
      "alias": "homestaging",
      "title": "Home Staging",
      "parents": [
        "realestate"
      ],
      "country_blacklist": [
        "ES",
        "BR",
        "FR",
        "PT",
        "CZ"
      ]
    },
    {
      "alias": "hometheatreinstallation",
      "title": "Home Theatre Installation",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "DK",
        "CZ"
      ]
    },
    {
      "alias": "homewindowtinting",
      "title": "Home Window Tinting",
      "parents": [
        "homeservices"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "PT",
        "CA",
        "NZ",
        "US",
        "IE",
        "GB",
        "SG"
      ]
    },
    {
      "alias": "honduran",
      "title": "Honduran",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "TR",
        "JP"
      ]
    },
    {
      "alias": "honey",
      "title": "Honey",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "SE",
        "US",
        "IT",
        "DE",
        "TR",
        "FR",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "hookah_bars",
      "title": "Hookah Bars",
      "parents": [
        "bars"
      ],
      "country_blacklist": [
        "SG",
        "AU"
      ]
    },
    {
      "alias": "horse_boarding",
      "title": "Horse Boarding",
      "parents": [
        "pets"
      ],
      "country_whitelist": [
        "AU",
        "SE",
        "DK",
        "CA",
        "NZ",
        "US",
        "IE",
        "DE",
        "NO",
        "GB",
        "FR",
        "CZ"
      ]
    },
    {
      "alias": "horsebackriding",
      "title": "Horseback Riding",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "horsequipment",
      "title": "Horse Equipment Shops",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "MY",
        "HK",
        "JP",
        "PH",
        "NZ",
        "CH",
        "TW",
        "TR"
      ]
    },
    {
      "alias": "horseracing",
      "title": "Horse Racing",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "MY",
        "PH",
        "CA",
        "NZ",
        "IT",
        "IE",
        "BR",
        "GB",
        "SG",
        "FR"
      ]
    },
    {
      "alias": "horumon",
      "title": "Horumon",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "TW",
        "JP"
      ]
    },
    {
      "alias": "hospice",
      "title": "Hospice",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "hospitalists",
      "title": "Hospitalists",
      "parents": [
        "physicians"
      ],
      "country_blacklist": [
        "DE",
        "TR",
        "JP",
        "AT",
        "IT",
        "CH"
      ]
    },
    {
      "alias": "hospitals",
      "title": "Hospitals",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "hostels",
      "title": "Hostels",
      "parents": [
        "hotelstravel"
      ]
    },
    {
      "alias": "hot_air_balloons",
      "title": "Hot Air Balloons",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "CA",
        "NZ",
        "SG",
        "BR"
      ]
    },
    {
      "alias": "hotdog",
      "title": "Hot Dogs",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "hotdogs",
      "title": "Fast Food",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "hotel_bar",
      "title": "Hotel bar",
      "parents": [
        "bars"
      ],
      "country_whitelist": [
        "BR",
        "SE",
        "NO",
        "DK",
        "PT",
        "FI"
      ]
    },
    {
      "alias": "hotels",
      "title": "Hotels",
      "parents": [
        "eventservices",
        "hotelstravel"
      ]
    },
    {
      "alias": "hotelstravel",
      "title": "Hotels & Travel",
      "parents": []
    },
    {
      "alias": "hotpot",
      "title": "Hot Pot",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "HK",
        "MY",
        "SE",
        "JP",
        "PH",
        "CA",
        "US",
        "TW",
        "BR",
        "SG",
        "FR"
      ]
    },
    {
      "alias": "hotsprings",
      "title": "Hot Springs",
      "parents": [
        "beautysvc"
      ],
      "country_whitelist": [
        "AU",
        "JP",
        "AT",
        "NZ",
        "US",
        "CH",
        "TW",
        "BR",
        "DE",
        "CZ"
      ]
    },
    {
      "alias": "hottubandpool",
      "title": "Hot Tub & Pool",
      "parents": [
        "homeandgarden"
      ]
    },
    {
      "alias": "housesitters",
      "title": "House Sitters",
      "parents": [
        "homeservices"
      ],
      "country_whitelist": [
        "AU",
        "CA",
        "AT",
        "US",
        "IT",
        "CH",
        "DE",
        "PL"
      ]
    },
    {
      "alias": "housingcooperatives",
      "title": "Housing Cooperatives",
      "parents": [
        "realestate"
      ],
      "country_blacklist": [
        "CL",
        "AR",
        "IT",
        "MX"
      ]
    },
    {
      "alias": "hunan",
      "title": "Hunan",
      "parents": [
        "chinese"
      ],
      "country_whitelist": [
        "MY",
        "HK",
        "TW",
        "SG",
        "FR"
      ]
    },
    {
      "alias": "hungarian",
      "title": "Hungarian",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "huntingfishingsupplies",
      "title": "Hunting & Fishing Supplies",
      "parents": [
        "sportgoods"
      ]
    },
    {
      "alias": "hvac",
      "title": "Heating & Air Conditioning/HVAC",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "hybridcarrepair",
      "title": "Hybrid Car Repair",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "AU",
        "SE",
        "NZ",
        "US",
        "IE",
        "GB",
        "SG",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "hydrojetting",
      "title": "Hydro-jetting",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "US",
        "CZ"
      ]
    },
    {
      "alias": "hydroponics",
      "title": "Hydroponics",
      "parents": [
        "gardening"
      ]
    },
    {
      "alias": "hydrotherapy",
      "title": "Hydrotherapy",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "hypnosis",
      "title": "Hypnosis/Hypnotherapy",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "NL",
        "HK",
        "TR"
      ]
    },
    {
      "alias": "iberian",
      "title": "Iberian",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "US",
        "CA",
        "PT"
      ]
    },
    {
      "alias": "icecream",
      "title": "Ice Cream & Frozen Yogurt",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "icedelivery",
      "title": "Ice Delivery",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "immigrationlawyers",
      "title": "Immigration Law",
      "parents": [
        "lawyers"
      ]
    },
    {
      "alias": "immunodermatologists",
      "title": "Immunodermatologists",
      "parents": [
        "physicians"
      ],
      "country_blacklist": [
        "FR",
        "JP"
      ]
    },
    {
      "alias": "importedfood",
      "title": "Imported Food",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "indonesian",
      "title": "Indonesian",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "ES",
        "MX"
      ]
    },
    {
      "alias": "indoor_playcenter",
      "title": "Indoor Playcentre",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "HK",
        "MX",
        "MY",
        "PH",
        "AR",
        "AT",
        "CH",
        "CL",
        "IE",
        "TW",
        "BR",
        "TR",
        "SG",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "indoorlandscaping",
      "title": "Indoor Landscaping",
      "parents": [
        "professional"
      ],
      "country_blacklist": [
        "IT"
      ]
    },
    {
      "alias": "indpak",
      "title": "Indian",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "infectiousdisease",
      "title": "Infectious Disease Specialists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "installmentloans",
      "title": "Installment Loans",
      "parents": [
        "financialservices"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "insulationinstallation",
      "title": "Insulation Installation",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "insurance",
      "title": "Insurance",
      "parents": [
        "financialservices"
      ]
    },
    {
      "alias": "interiordesign",
      "title": "Interior Design",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "interlocksystems",
      "title": "Interlock Systems",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "internalmed",
      "title": "Internal Medicine",
      "parents": [
        "physicians"
      ],
      "country_blacklist": [
        "BR"
      ]
    },
    {
      "alias": "international",
      "title": "International",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "MY",
        "TR",
        "PH",
        "US",
        "IT",
        "FI"
      ]
    },
    {
      "alias": "internetbooth",
      "title": "Internet Booths & Calling Centers",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "CL",
        "ES",
        "MX",
        "BR",
        "AR",
        "IT"
      ]
    },
    {
      "alias": "internetcafe",
      "title": "Internet Cafes",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "intervaltraininggyms",
      "title": "Interval Training Gyms",
      "parents": [
        "gyms"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "intlgrocery",
      "title": "International Grocery",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "investing",
      "title": "Investing",
      "parents": [
        "financialservices"
      ]
    },
    {
      "alias": "iplaw",
      "title": "IP & Internet Law",
      "parents": [
        "lawyers"
      ],
      "country_whitelist": [
        "US",
        "CZ"
      ]
    },
    {
      "alias": "irish",
      "title": "Irish",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "irish_pubs",
      "title": "Irish Pub",
      "parents": [
        "bars"
      ]
    },
    {
      "alias": "irrigation",
      "title": "Irrigation",
      "parents": [
        "homeservices"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "island_pub",
      "title": "Island Pub",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "SE"
      ]
    },
    {
      "alias": "isps",
      "title": "Internet Service Providers",
      "parents": [
        "professional",
        "homeservices"
      ]
    },
    {
      "alias": "israeli",
      "title": "Israeli",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "DE",
        "AT",
        "CH",
        "CZ"
      ]
    },
    {
      "alias": "italian",
      "title": "Italian",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "itservices",
      "title": "IT Services & Computer Repair",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "ivhydration",
      "title": "IV Hydration",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "izakaya",
      "title": "Izakaya",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "MX",
        "HK",
        "AU",
        "JP",
        "NZ",
        "US",
        "TW",
        "BR",
        "SG"
      ]
    },
    {
      "alias": "jailsandprisons",
      "title": "Jails & Prisons",
      "parents": [
        "publicservicesgovt"
      ]
    },
    {
      "alias": "jaliscan",
      "title": "Jaliscan",
      "parents": [
        "mexican"
      ],
      "country_whitelist": [
        "MX"
      ]
    },
    {
      "alias": "japacurry",
      "title": "Japanese Curry",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "HK",
        "TW",
        "JP",
        "SG",
        "US"
      ]
    },
    {
      "alias": "japanese",
      "title": "Japanese",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "jazzandblues",
      "title": "Jazz & Blues",
      "parents": [
        "arts",
        "nightlife"
      ]
    },
    {
      "alias": "jetskis",
      "title": "Jet Skis",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "jewelry",
      "title": "Jewelry",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "jewelryrepair",
      "title": "Jewelry Repair",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "HK",
        "SE",
        "AT",
        "NZ",
        "CH",
        "IE",
        "TW",
        "DE",
        "GB",
        "SG",
        "FI"
      ]
    },
    {
      "alias": "jewish",
      "title": "Jewish",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "PL",
        "IT",
        "DE"
      ]
    },
    {
      "alias": "jpsweets",
      "title": "Japanese Sweets",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "JP"
      ]
    },
    {
      "alias": "juicebars",
      "title": "Juice Bars & Smoothies",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "junkremovalandhauling",
      "title": "Junk Removal & Hauling",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "junkyards",
      "title": "Junkyards",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "NL",
        "AU",
        "SE",
        "NZ",
        "SG",
        "CZ",
        "PL",
        "BE",
        "DK",
        "CA",
        "AT",
        "US",
        "IE",
        "BR",
        "DE",
        "NO",
        "GB",
        "FR"
      ]
    },
    {
      "alias": "kaiseki",
      "title": "Kaiseki",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "TW",
        "JP"
      ]
    },
    {
      "alias": "karaoke",
      "title": "Karaoke",
      "parents": [
        "nightlife"
      ]
    },
    {
      "alias": "karaokerental",
      "title": "Karaoke Rental",
      "parents": [
        "partyequipmentrentals"
      ]
    },
    {
      "alias": "karate",
      "title": "Karate",
      "parents": [
        "martialarts"
      ]
    },
    {
      "alias": "kebab",
      "title": "Kebab",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "kickboxing",
      "title": "Kickboxing",
      "parents": [
        "martialarts"
      ]
    },
    {
      "alias": "kids_activities",
      "title": "Kids Activities",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "SG"
      ]
    },
    {
      "alias": "kidshairsalons",
      "title": "Kids Hair Salons",
      "parents": [
        "hair"
      ]
    },
    {
      "alias": "kimonos",
      "title": "Kimonos",
      "parents": [
        "fashion"
      ],
      "country_whitelist": [
        "JP"
      ]
    },
    {
      "alias": "kiosk",
      "title": "Kiosk",
      "parents": [
        "food",
        "shopping"
      ],
      "country_blacklist": [
        "HK",
        "CA",
        "NZ",
        "US",
        "IT",
        "IE",
        "BR",
        "GB",
        "SG",
        "FR"
      ]
    },
    {
      "alias": "kitchenandbath",
      "title": "Kitchen & Bath",
      "parents": [
        "homeandgarden"
      ]
    },
    {
      "alias": "kitchenincubators",
      "title": "Kitchen Incubators",
      "parents": [
        "realestate"
      ],
      "country_whitelist": [
        "US",
        "GB"
      ]
    },
    {
      "alias": "kitchensupplies",
      "title": "Kitchen Supplies",
      "parents": [
        "kitchenandbath"
      ]
    },
    {
      "alias": "kiteboarding",
      "title": "Kiteboarding",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "HK",
        "IT",
        "CZ"
      ]
    },
    {
      "alias": "knifesharpening",
      "title": "Knife Sharpening",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "knittingsupplies",
      "title": "Knitting Supplies",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "kombucha",
      "title": "Kombucha",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "kopitiam",
      "title": "Kopitiam",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "MY",
        "SG"
      ]
    },
    {
      "alias": "korean",
      "title": "Korean",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "kosher",
      "title": "Kosher",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "PT",
        "TR"
      ]
    },
    {
      "alias": "kurdish",
      "title": "Kurdish",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "NO",
        "SE"
      ]
    },
    {
      "alias": "kushikatsu",
      "title": "Kushikatsu",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "JP"
      ]
    },
    {
      "alias": "laboratorytesting",
      "title": "Laboratory Testing",
      "parents": [
        "diagnosticservices"
      ],
      "country_whitelist": [
        "BE",
        "MX",
        "AU",
        "AR",
        "PT",
        "CA",
        "US",
        "IT",
        "CL",
        "ES",
        "BR",
        "FR",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "lactationservices",
      "title": "Lactation Services",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "BE",
        "BR",
        "FR",
        "PT",
        "US",
        "IT"
      ]
    },
    {
      "alias": "lahmacun",
      "title": "Lahmacun",
      "parents": [
        "turkish"
      ],
      "country_whitelist": [
        "TR"
      ]
    },
    {
      "alias": "lakes",
      "title": "Lakes",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "lancenters",
      "title": "LAN Centers",
      "parents": [
        "arts"
      ],
      "country_blacklist": [
        "MY",
        "IT",
        "PH"
      ]
    },
    {
      "alias": "landmarks",
      "title": "Landmarks & Historical Buildings",
      "parents": [
        "publicservicesgovt"
      ]
    },
    {
      "alias": "landscapearchitects",
      "title": "Landscape Architects",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "landscaping",
      "title": "Landscaping",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "landsurveying",
      "title": "Land Surveying",
      "parents": [
        "realestatesvcs"
      ],
      "country_blacklist": [
        "JP"
      ]
    },
    {
      "alias": "language_schools",
      "title": "Language Schools",
      "parents": [
        "specialtyschools"
      ]
    },
    {
      "alias": "laos",
      "title": "Laos",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "AU"
      ]
    },
    {
      "alias": "laotian",
      "title": "Laotian",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "laser_hair_removal",
      "title": "Laser Hair Removal",
      "parents": [
        "hairremoval"
      ]
    },
    {
      "alias": "laserlasikeyes",
      "title": "Laser Eye Surgery/Lasik",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "lasertag",
      "title": "Laser Tag",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "IE",
        "BR"
      ]
    },
    {
      "alias": "latin",
      "title": "Latin American",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "laundromat",
      "title": "Laundromat",
      "parents": [
        "laundryservices"
      ]
    },
    {
      "alias": "laundryservices",
      "title": "Laundry Services",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "lawn_bowling",
      "title": "Lawn Bowling",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "AU",
        "SE",
        "NO",
        "PT",
        "NZ",
        "FI"
      ]
    },
    {
      "alias": "lawnservices",
      "title": "Lawn Services",
      "parents": [
        "landscaping"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "BR",
        "CA",
        "US"
      ]
    },
    {
      "alias": "lawyers",
      "title": "Lawyers",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "leather",
      "title": "Leather Goods",
      "parents": [
        "fashion"
      ]
    },
    {
      "alias": "lebanese",
      "title": "Lebanese",
      "parents": [
        "mideastern"
      ],
      "country_blacklist": [
        "AR",
        "HK",
        "JP"
      ]
    },
    {
      "alias": "legalservices",
      "title": "Legal Services",
      "parents": [
        "professional"
      ],
      "country_blacklist": [
        "HK",
        "MX",
        "MY",
        "SE",
        "PH",
        "AR",
        "AT",
        "CH",
        "CL",
        "ES",
        "IE",
        "TW",
        "DE",
        "GB",
        "FI"
      ]
    },
    {
      "alias": "libraries",
      "title": "Libraries",
      "parents": [
        "publicservicesgovt"
      ]
    },
    {
      "alias": "liceservices",
      "title": "Lice Services",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "HK",
        "MX",
        "JP",
        "AR",
        "CL",
        "DE",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "lifecoach",
      "title": "Life Coach",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "lifeinsurance",
      "title": "Life Insurance",
      "parents": [
        "insurance"
      ],
      "country_blacklist": [
        "HK",
        "MY",
        "PH",
        "CA",
        "AT",
        "PT",
        "CH",
        "TW",
        "DE",
        "FR",
        "FI"
      ]
    },
    {
      "alias": "lighting",
      "title": "Lighting Fixtures & Equipment",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "lightingstores",
      "title": "Lighting Stores",
      "parents": [
        "homeandgarden"
      ]
    },
    {
      "alias": "ligurian",
      "title": "Ligurian",
      "parents": [
        "italian"
      ],
      "country_whitelist": [
        "FR",
        "IT"
      ]
    },
    {
      "alias": "limos",
      "title": "Limos",
      "parents": [
        "transport"
      ]
    },
    {
      "alias": "linens",
      "title": "Linens",
      "parents": [
        "homeandgarden"
      ],
      "country_whitelist": [
        "BE",
        "DK",
        "PT",
        "AT",
        "IT",
        "CH",
        "DE",
        "NO",
        "FR",
        "CZ"
      ]
    },
    {
      "alias": "lingerie",
      "title": "Lingerie",
      "parents": [
        "fashion"
      ]
    },
    {
      "alias": "livestocksupply",
      "title": "Livestock Feed & Supply",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "localfishstores",
      "title": "Local Fish Stores",
      "parents": [
        "petstore"
      ],
      "country_whitelist": [
        "NL",
        "AU",
        "SE",
        "JP",
        "NZ",
        "IT",
        "CH",
        "SG",
        "CZ",
        "PL",
        "BE",
        "MY",
        "DK",
        "PH",
        "CA",
        "AT",
        "US",
        "ES",
        "IE",
        "DE",
        "NO",
        "GB",
        "FR"
      ]
    },
    {
      "alias": "localflavor",
      "title": "Local Flavor",
      "parents": []
    },
    {
      "alias": "localservices",
      "title": "Local Services",
      "parents": []
    },
    {
      "alias": "locksmiths",
      "title": "Keys & Locksmiths",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "lounges",
      "title": "Lounges",
      "parents": [
        "bars"
      ]
    },
    {
      "alias": "luggage",
      "title": "Luggage",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "luggagestorage",
      "title": "Luggage Storage",
      "parents": [
        "travelservices"
      ]
    },
    {
      "alias": "lumbard",
      "title": "Lumbard",
      "parents": [
        "italian"
      ],
      "country_whitelist": [
        "IT"
      ]
    },
    {
      "alias": "lyonnais",
      "title": "Lyonnais",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "FR",
        "BE"
      ]
    },
    {
      "alias": "macarons",
      "title": "Macarons",
      "parents": [
        "gourmet"
      ],
      "country_blacklist": [
        "MY",
        "IT",
        "PH"
      ]
    },
    {
      "alias": "machinerental",
      "title": "Machine & Tool Rental",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "machineshops",
      "title": "Machine Shops",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "madeira",
      "title": "Madeira",
      "parents": [
        "portuguese"
      ],
      "country_whitelist": [
        "PT"
      ]
    },
    {
      "alias": "magicians",
      "title": "Magicians",
      "parents": [
        "eventservices"
      ],
      "country_blacklist": [
        "TR",
        "FI",
        "SG",
        "SE"
      ]
    },
    {
      "alias": "mags",
      "title": "Newspapers & Magazines",
      "parents": [
        "media"
      ]
    },
    {
      "alias": "mahjong",
      "title": "Mah Jong Halls",
      "parents": [
        "arts"
      ],
      "country_whitelist": [
        "HK",
        "JP"
      ]
    },
    {
      "alias": "mailboxcenters",
      "title": "Mailbox Centers",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "makerspaces",
      "title": "Makerspaces",
      "parents": [
        "arts"
      ],
      "country_blacklist": [
        "IT"
      ]
    },
    {
      "alias": "makeupartists",
      "title": "Makeup Artists",
      "parents": [
        "beautysvc"
      ]
    },
    {
      "alias": "malaysian",
      "title": "Malaysian",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "ES",
        "PT",
        "TR",
        "CZ"
      ]
    },
    {
      "alias": "mamak",
      "title": "Mamak",
      "parents": [
        "malaysian"
      ],
      "country_whitelist": [
        "MY",
        "AU"
      ]
    },
    {
      "alias": "marchingbands",
      "title": "Marching Bands",
      "parents": [
        "arts"
      ],
      "country_whitelist": [
        "SE",
        "PT",
        "AT",
        "CH",
        "DE",
        "NO",
        "GB",
        "TR"
      ]
    },
    {
      "alias": "marinas",
      "title": "Marinas",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "NL",
        "AU",
        "SE",
        "NZ",
        "IT",
        "CH",
        "CL",
        "SG",
        "BE",
        "MX",
        "DK",
        "AR",
        "CA",
        "AT",
        "US",
        "ES",
        "IE",
        "BR",
        "DE",
        "NO",
        "TR",
        "GB",
        "FR"
      ]
    },
    {
      "alias": "marketing",
      "title": "Marketing",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "markets",
      "title": "Fruits & Veggies",
      "parents": [
        "gourmet"
      ]
    },
    {
      "alias": "marketstalls",
      "title": "Market Stalls",
      "parents": [
        "shopping"
      ],
      "country_whitelist": [
        "DK",
        "PT",
        "AT",
        "IT",
        "CH",
        "IE",
        "DE",
        "NO",
        "GB",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "martialarts",
      "title": "Martial Arts",
      "parents": [
        "fitness"
      ]
    },
    {
      "alias": "masonry_concrete",
      "title": "Masonry/Concrete",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "NL",
        "BE",
        "IE",
        "BR",
        "GB",
        "SG",
        "NZ"
      ]
    },
    {
      "alias": "massage",
      "title": "Massage",
      "parents": [
        "beautysvc"
      ]
    },
    {
      "alias": "massage_schools",
      "title": "Massage Schools",
      "parents": [
        "specialtyschools"
      ]
    },
    {
      "alias": "massage_therapy",
      "title": "Massage Therapy",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "HK",
        "SE",
        "NZ",
        "CH",
        "SG",
        "CZ",
        "PL",
        "MY",
        "PH",
        "AT",
        "IE",
        "TW",
        "DE",
        "TR",
        "FR",
        "FI"
      ]
    },
    {
      "alias": "massmedia",
      "title": "Mass Media",
      "parents": []
    },
    {
      "alias": "matchmakers",
      "title": "Matchmakers",
      "parents": [
        "professional"
      ],
      "country_whitelist": [
        "MX",
        "AU",
        "DK",
        "JP",
        "AR",
        "CA",
        "PT",
        "US",
        "CH",
        "CL",
        "ES",
        "DE",
        "NO",
        "FR",
        "PL"
      ]
    },
    {
      "alias": "materialeelettrico",
      "title": "Materiale elettrico",
      "parents": [
        "homeandgarden"
      ],
      "country_whitelist": [
        "CL",
        "ES",
        "MX",
        "AR",
        "IT"
      ]
    },
    {
      "alias": "maternity",
      "title": "Maternity Wear",
      "parents": [
        "fashion"
      ]
    },
    {
      "alias": "mattresses",
      "title": "Mattresses",
      "parents": [
        "homeandgarden"
      ]
    },
    {
      "alias": "mauritius",
      "title": "Mauritius",
      "parents": [
        "french"
      ],
      "country_blacklist": [
        "MX",
        "AU",
        "DK",
        "JP",
        "AR",
        "AT",
        "NZ",
        "CH",
        "CL",
        "BR",
        "DE",
        "NO",
        "TR",
        "PL"
      ]
    },
    {
      "alias": "meaderies",
      "title": "Meaderies",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "MX",
        "AR",
        "AT",
        "US",
        "CH",
        "CL",
        "ES",
        "DE",
        "PL"
      ]
    },
    {
      "alias": "meatballs",
      "title": "Meatballs",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "FR",
        "NL",
        "BE",
        "TR"
      ]
    },
    {
      "alias": "meats",
      "title": "Meat Shops",
      "parents": [
        "gourmet"
      ]
    },
    {
      "alias": "medcenters",
      "title": "Medical Centers",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "media",
      "title": "Books, Mags, Music & Video",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "mediators",
      "title": "Mediators",
      "parents": [
        "professional"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "CA",
        "AT",
        "NZ",
        "US",
        "IT",
        "CH",
        "IE",
        "DE",
        "GB",
        "SG"
      ]
    },
    {
      "alias": "medicalfoot",
      "title": "Medical Foot Care",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "JP",
        "IT",
        "CL",
        "CZ",
        "PL",
        "MX",
        "MY",
        "PH",
        "AR",
        "PT",
        "AT",
        "US",
        "ES",
        "BR",
        "TR",
        "FI"
      ]
    },
    {
      "alias": "medicallaw",
      "title": "Medical Law",
      "parents": [
        "lawyers"
      ]
    },
    {
      "alias": "medicalspa",
      "title": "Medical Spas",
      "parents": [
        "beautysvc",
        "health"
      ]
    },
    {
      "alias": "medicalsupplies",
      "title": "Medical Supplies",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "medicaltransportation",
      "title": "Medical Transportation",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "DK",
        "PT",
        "AT",
        "US",
        "IT",
        "CH",
        "BR",
        "DE",
        "NO",
        "SG",
        "FR"
      ]
    },
    {
      "alias": "meditationcenters",
      "title": "Meditation Centers",
      "parents": [
        "fitness"
      ]
    },
    {
      "alias": "mediterranean",
      "title": "Mediterranean",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "memorycare",
      "title": "Memory Care",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "menscloth",
      "title": "Men's Clothing",
      "parents": [
        "fashion"
      ]
    },
    {
      "alias": "menshair",
      "title": "Men's Hair Salons",
      "parents": [
        "hair"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "MX",
        "AU",
        "DK",
        "AR",
        "PT",
        "US",
        "CL",
        "ES",
        "NO",
        "CZ"
      ]
    },
    {
      "alias": "metaldetectorservices",
      "title": "Metal Detector Services",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "metalfabricators",
      "title": "Metal Fabricators",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "AR",
        "MX",
        "SE"
      ]
    },
    {
      "alias": "metrostations",
      "title": "Metro Stations",
      "parents": [
        "transport"
      ]
    },
    {
      "alias": "mexican",
      "title": "Mexican",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "mideastern",
      "title": "Middle Eastern",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "BR"
      ]
    },
    {
      "alias": "midwives",
      "title": "Midwives",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "militarysurplus",
      "title": "Military Surplus",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "milkbars",
      "title": "Milk Bars",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "PL",
        "AU"
      ]
    },
    {
      "alias": "milkshakebars",
      "title": "Milkshake Bars",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "GB"
      ]
    },
    {
      "alias": "minho",
      "title": "Minho",
      "parents": [
        "portuguese"
      ],
      "country_whitelist": [
        "PT"
      ]
    },
    {
      "alias": "mini_golf",
      "title": "Mini Golf",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "IT"
      ]
    },
    {
      "alias": "mistingsystemservices",
      "title": "Misting System Services",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "mobile_home_repair",
      "title": "Mobile Home Repair",
      "parents": [
        "homeservices"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "SE",
        "CA",
        "US"
      ]
    },
    {
      "alias": "mobiledentrepair",
      "title": "Mobile Dent Repair",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "US",
        "CA"
      ]
    },
    {
      "alias": "mobilehomes",
      "title": "Mobile Home Dealers",
      "parents": [
        "realestate"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "mobileparks",
      "title": "Mobile Home Parks",
      "parents": [
        "realestate"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "mobilephonerepair",
      "title": "Mobile Phone Repair",
      "parents": [
        "itservices"
      ]
    },
    {
      "alias": "mobilephones",
      "title": "Mobile Phones",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "mobilityequipment",
      "title": "Mobility Equipment Sales & Services",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "US",
        "CA"
      ]
    },
    {
      "alias": "modern_australian",
      "title": "Modern Australian",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "AU"
      ]
    },
    {
      "alias": "modern_european",
      "title": "Modern European",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "mohels",
      "title": "Mohels",
      "parents": [
        "eventservices"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "mongolian",
      "title": "Mongolian",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "ES",
        "FI",
        "PT",
        "TR"
      ]
    },
    {
      "alias": "montessori",
      "title": "Montessori Schools",
      "parents": [
        "education"
      ]
    },
    {
      "alias": "moroccan",
      "title": "Moroccan",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "TR"
      ]
    },
    {
      "alias": "mortgagebrokers",
      "title": "Mortgage Brokers",
      "parents": [
        "realestate"
      ],
      "country_blacklist": [
        "ES",
        "DK",
        "BR"
      ]
    },
    {
      "alias": "mortgagelenders",
      "title": "Mortgage Lenders",
      "parents": [
        "financialservices"
      ],
      "country_blacklist": [
        "DE",
        "TR",
        "FR",
        "AT",
        "CH"
      ]
    },
    {
      "alias": "mortuaryservices",
      "title": "Mortuary Services",
      "parents": [
        "funeralservices"
      ],
      "country_blacklist": [
        "IT"
      ]
    },
    {
      "alias": "mosques",
      "title": "Mosques",
      "parents": [
        "religiousorgs"
      ]
    },
    {
      "alias": "motodealers",
      "title": "Motorsport Vehicle Dealers",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "ES",
        "TW",
        "SE",
        "US",
        "IT"
      ]
    },
    {
      "alias": "motorcycle_rental",
      "title": "Motorcycle Rental",
      "parents": [
        "hotelstravel"
      ],
      "country_whitelist": [
        "MX",
        "AU",
        "PT",
        "NZ",
        "US",
        "IT",
        "ES",
        "BR",
        "DE",
        "NO",
        "SG",
        "FR",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "motorcycledealers",
      "title": "Motorcycle Dealers",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "motorcyclepartsandsupplies",
      "title": "Motorcycle Parts & Supplies",
      "parents": [
        "autopartssupplies"
      ]
    },
    {
      "alias": "motorcyclerepair",
      "title": "Motorcycle Repair",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "motorcyclinggear",
      "title": "Motorcycle Gear",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "CA",
        "IE",
        "GB",
        "NZ"
      ]
    },
    {
      "alias": "motorepairs",
      "title": "Motorsport Vehicle Repairs",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "ES",
        "TW",
        "SE",
        "US",
        "IT"
      ]
    },
    {
      "alias": "mountainbiking",
      "title": "Mountain Biking",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "mountainhuts",
      "title": "Mountain Huts",
      "parents": [
        "hotels"
      ],
      "country_whitelist": [
        "SE",
        "AR",
        "AT",
        "NZ",
        "US",
        "IT",
        "CH",
        "CL",
        "ES",
        "DE",
        "NO",
        "FR",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "movers",
      "title": "Movers",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "movietheaters",
      "title": "Cinema",
      "parents": [
        "arts"
      ]
    },
    {
      "alias": "muaythai",
      "title": "Muay Thai",
      "parents": [
        "martialarts"
      ]
    },
    {
      "alias": "municipality",
      "title": "Municipality",
      "parents": [
        "publicservicesgovt"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "museums",
      "title": "Museums",
      "parents": [
        "arts"
      ]
    },
    {
      "alias": "musicalinstrumentsandteachers",
      "title": "Musical Instruments & Teachers",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "musicians",
      "title": "Musicians",
      "parents": [
        "eventservices"
      ],
      "country_blacklist": [
        "TR"
      ]
    },
    {
      "alias": "musicinstrumentservices",
      "title": "Musical Instrument Services",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "musicproduction",
      "title": "Music Production Services",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "musicvenues",
      "title": "Music Venues",
      "parents": [
        "arts",
        "nightlife"
      ]
    },
    {
      "alias": "musicvideo",
      "title": "Music & DVDs",
      "parents": [
        "media"
      ]
    },
    {
      "alias": "mystics",
      "title": "Mystics",
      "parents": [
        "psychic_astrology"
      ],
      "country_blacklist": [
        "FR"
      ]
    },
    {
      "alias": "nailtechnicians",
      "title": "Nail Technicians",
      "parents": [
        "othersalons"
      ],
      "country_blacklist": [
        "BR",
        "DE",
        "TR",
        "JP",
        "FR",
        "AT",
        "CH"
      ]
    },
    {
      "alias": "nannys",
      "title": "Nanny Services",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "FI",
        "SE"
      ]
    },
    {
      "alias": "napoletana",
      "title": "Napoletana",
      "parents": [
        "italian"
      ],
      "country_whitelist": [
        "FR",
        "IT",
        "CZ"
      ]
    },
    {
      "alias": "nasilemak",
      "title": "Nasi Lemak",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "MY",
        "SG"
      ]
    },
    {
      "alias": "naturalgassuppliers",
      "title": "Natural Gas Suppliers",
      "parents": [
        "utilities"
      ]
    },
    {
      "alias": "naturopathic",
      "title": "Naturopathic/Holistic",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "nephrologists",
      "title": "Nephrologists",
      "parents": [
        "physicians"
      ],
      "country_blacklist": [
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "neurologist",
      "title": "Neurologist",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "neuropathologists",
      "title": "Neuropathologists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "neurotologists",
      "title": "Neurotologists",
      "parents": [
        "physicians"
      ],
      "country_blacklist": [
        "JP"
      ]
    },
    {
      "alias": "newamerican",
      "title": "American (New)",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "IE",
        "SE",
        "NO",
        "GB",
        "DK",
        "US"
      ]
    },
    {
      "alias": "newcanadian",
      "title": "Canadian (New)",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "CA"
      ]
    },
    {
      "alias": "newmexican",
      "title": "New Mexican Cuisine",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "newzealand",
      "title": "New Zealand",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "NZ"
      ]
    },
    {
      "alias": "nicaraguan",
      "title": "Nicaraguan",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "CL",
        "AR"
      ]
    },
    {
      "alias": "nicois",
      "title": "Nicoise",
      "parents": [
        "french"
      ],
      "country_whitelist": [
        "FR"
      ]
    },
    {
      "alias": "nightfood",
      "title": "Night Food",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "SE",
        "NO",
        "TR",
        "DK",
        "PL"
      ]
    },
    {
      "alias": "nightlife",
      "title": "Nightlife",
      "parents": []
    },
    {
      "alias": "nikkei",
      "title": "Nikkei",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "CL",
        "ES",
        "MX",
        "BR",
        "AR"
      ]
    },
    {
      "alias": "nonprofit",
      "title": "Community Service/Non-Profit",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "noodles",
      "title": "Noodles",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "FR",
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "norcinerie",
      "title": "Norcinerie",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "IT"
      ]
    },
    {
      "alias": "northeasternbrazilian",
      "title": "Northeastern Brazilian",
      "parents": [
        "brazilian"
      ],
      "country_whitelist": [
        "BR"
      ]
    },
    {
      "alias": "northernbrazilian",
      "title": "Northern Brazilian",
      "parents": [
        "brazilian"
      ],
      "country_whitelist": [
        "BR"
      ]
    },
    {
      "alias": "northerngerman",
      "title": "Northern German",
      "parents": [
        "german"
      ],
      "country_whitelist": [
        "DE"
      ]
    },
    {
      "alias": "northernmexican",
      "title": "Northern Mexican",
      "parents": [
        "mexican"
      ],
      "country_whitelist": [
        "MX"
      ]
    },
    {
      "alias": "norwegian",
      "title": "Traditional Norwegian",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "FR",
        "NO"
      ]
    },
    {
      "alias": "notaries",
      "title": "Notaries",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "NO"
      ]
    },
    {
      "alias": "nudist",
      "title": "Nudist",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "NL",
        "AU",
        "SE",
        "NZ",
        "CH",
        "CZ",
        "PL",
        "BE",
        "DK",
        "PT",
        "CA",
        "AT",
        "US",
        "ES",
        "IE",
        "BR",
        "DE",
        "NO",
        "GB",
        "FR",
        "FI"
      ]
    },
    {
      "alias": "nursepractitioner",
      "title": "Nurse Practitioner",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "nursingschools",
      "title": "Nursing Schools",
      "parents": [
        "specialtyschools"
      ]
    },
    {
      "alias": "nutritionists",
      "title": "Nutritionists",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "nyonya",
      "title": "Nyonya",
      "parents": [
        "malaysian"
      ],
      "country_whitelist": [
        "MY",
        "AU"
      ]
    },
    {
      "alias": "oaxacan",
      "title": "Oaxacan",
      "parents": [
        "mexican"
      ],
      "country_whitelist": [
        "MX"
      ]
    },
    {
      "alias": "obgyn",
      "title": "Obstetricians & Gynecologists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "observatories",
      "title": "Observatories",
      "parents": [
        "arts"
      ]
    },
    {
      "alias": "occupationaltherapy",
      "title": "Occupational Therapy",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "HK",
        "SE",
        "JP",
        "NZ",
        "IT",
        "CH",
        "SG",
        "CZ",
        "PL",
        "MY",
        "PH",
        "AT",
        "TW",
        "TR",
        "FR",
        "FI"
      ]
    },
    {
      "alias": "oden",
      "title": "Oden",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "TW",
        "JP"
      ]
    },
    {
      "alias": "officecleaning",
      "title": "Office Cleaning",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "officeequipment",
      "title": "Office Equipment",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "officiants",
      "title": "Officiants",
      "parents": [
        "eventservices"
      ]
    },
    {
      "alias": "oilchange",
      "title": "Oil Change Stations",
      "parents": [
        "auto"
      ],
      "country_blacklist": [
        "SE",
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "okinawan",
      "title": "Okinawan",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "JP"
      ]
    },
    {
      "alias": "okonomiyaki",
      "title": "Okonomiyaki",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "TW",
        "JP"
      ]
    },
    {
      "alias": "oliveoil",
      "title": "Olive Oil",
      "parents": [
        "gourmet"
      ],
      "country_whitelist": [
        "BE",
        "ES",
        "DE",
        "FR",
        "AT",
        "US"
      ]
    },
    {
      "alias": "oncologist",
      "title": "Oncologist",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "onigiri",
      "title": "Onigiri",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "TW",
        "JP"
      ]
    },
    {
      "alias": "opensandwiches",
      "title": "Open Sandwiches",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "NO",
        "TR",
        "DK",
        "SE"
      ]
    },
    {
      "alias": "opera",
      "title": "Opera & Ballet",
      "parents": [
        "arts"
      ]
    },
    {
      "alias": "opthamalogists",
      "title": "Ophthalmologists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "opticians",
      "title": "Eyewear & Opticians",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "optometrists",
      "title": "Optometrists",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "oralsurgeons",
      "title": "Oral Surgeons",
      "parents": [
        "dentists"
      ]
    },
    {
      "alias": "organdonorservices",
      "title": "Organ & Tissue Donor Services",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "organic_stores",
      "title": "Organic Stores",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "oriental",
      "title": "Oriental",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "DE",
        "FR",
        "PT",
        "AT",
        "PL",
        "CH"
      ]
    },
    {
      "alias": "orthodontists",
      "title": "Orthodontists",
      "parents": [
        "dentists"
      ]
    },
    {
      "alias": "orthopedists",
      "title": "Orthopedists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "orthotics",
      "title": "Orthotics",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "AU",
        "DK",
        "NZ",
        "US",
        "IT",
        "ES",
        "IE",
        "BR",
        "NO",
        "GB",
        "SG",
        "FR",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "osteopathicphysicians",
      "title": "Osteopathic Physicians",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "osteopaths",
      "title": "Osteopaths",
      "parents": [
        "medcenters"
      ],
      "country_whitelist": [
        "AU"
      ]
    },
    {
      "alias": "othersalons",
      "title": "Nail Salons",
      "parents": [
        "beautysvc"
      ]
    },
    {
      "alias": "otologists",
      "title": "Otologists",
      "parents": [
        "physicians"
      ],
      "country_blacklist": [
        "FR",
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "ottomancuisine",
      "title": "Ottoman Cuisine",
      "parents": [
        "turkish"
      ],
      "country_whitelist": [
        "TR"
      ]
    },
    {
      "alias": "outdoorfurniture",
      "title": "Outdoor Furniture Stores",
      "parents": [
        "homeandgarden"
      ]
    },
    {
      "alias": "outdoorgear",
      "title": "Outdoor Gear",
      "parents": [
        "sportgoods"
      ]
    },
    {
      "alias": "outdoormovies",
      "title": "Outdoor Movies",
      "parents": [
        "movietheaters"
      ],
      "country_blacklist": [
        "PL"
      ]
    },
    {
      "alias": "outdoorpowerequipmentservices",
      "title": "Outdoor Power Equipment Services",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "MY",
        "DK",
        "PH",
        "CA",
        "AT",
        "PT",
        "US",
        "CH",
        "BR",
        "DE",
        "NO",
        "PL"
      ]
    },
    {
      "alias": "outlet_stores",
      "title": "Outlet Stores",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "oxygenbars",
      "title": "Oxygen Bars",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "oyakodon",
      "title": "Oyakodon",
      "parents": [
        "donburi"
      ],
      "country_whitelist": [
        "JP"
      ]
    },
    {
      "alias": "pachinko",
      "title": "Pachinko",
      "parents": [
        "arts"
      ],
      "country_whitelist": [
        "JP"
      ]
    },
    {
      "alias": "packingservices",
      "title": "Packing Services",
      "parents": [
        "homeservices"
      ],
      "country_whitelist": [
        "BE",
        "HK",
        "MY",
        "PH",
        "CA",
        "US",
        "TW",
        "SG",
        "FR",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "packingsupplies",
      "title": "Packing Supplies",
      "parents": [
        "shopping"
      ],
      "country_whitelist": [
        "NL",
        "AU",
        "JP",
        "NZ",
        "CH",
        "SG",
        "CZ",
        "BE",
        "DK",
        "PT",
        "CA",
        "AT",
        "US",
        "IE",
        "BR",
        "DE",
        "NO",
        "GB",
        "FR"
      ]
    },
    {
      "alias": "paddleboarding",
      "title": "Paddleboarding",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "MY",
        "HK",
        "SE",
        "JP",
        "PH",
        "IT",
        "TW",
        "TR"
      ]
    },
    {
      "alias": "painmanagement",
      "title": "Pain Management",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "paintandsip",
      "title": "Paint & Sip",
      "parents": [
        "arts"
      ],
      "country_whitelist": [
        "US",
        "HK"
      ]
    },
    {
      "alias": "paintball",
      "title": "Paintball",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "SG"
      ]
    },
    {
      "alias": "painters",
      "title": "Painters",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "paintstores",
      "title": "Paint Stores",
      "parents": [
        "homeandgarden"
      ],
      "country_blacklist": [
        "MY",
        "HK",
        "TW",
        "TR",
        "PH",
        "PT",
        "FI"
      ]
    },
    {
      "alias": "paintyourownpottery",
      "title": "Paint-Your-Own Pottery",
      "parents": [
        "artsandcrafts"
      ],
      "country_whitelist": [
        "MY",
        "HK",
        "PH",
        "CA",
        "US",
        "TW",
        "DE",
        "SG"
      ]
    },
    {
      "alias": "pakistani",
      "title": "Pakistani",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "palatine",
      "title": "Palatine",
      "parents": [
        "german"
      ],
      "country_whitelist": [
        "DE"
      ]
    },
    {
      "alias": "panasian",
      "title": "Pan Asian",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "IT"
      ]
    },
    {
      "alias": "pancakes",
      "title": "Pancakes",
      "parents": [
        "breakfast_brunch"
      ]
    },
    {
      "alias": "panzerotti",
      "title": "Panzerotti",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "IT"
      ]
    },
    {
      "alias": "paragliding",
      "title": "Paragliding",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "parasailing",
      "title": "Parasailing",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "parentingclasses",
      "title": "Parenting Classes",
      "parents": [
        "specialtyschools"
      ]
    },
    {
      "alias": "parking",
      "title": "Parking",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "parklets",
      "title": "Parklets",
      "parents": [
        "localflavor"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "parks",
      "title": "Parks",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "parma",
      "title": "Parma",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "AU"
      ]
    },
    {
      "alias": "partybikerentals",
      "title": "Party Bike Rentals",
      "parents": [
        "eventservices"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "ES",
        "IE",
        "DE",
        "US"
      ]
    },
    {
      "alias": "partybusrentals",
      "title": "Party Bus Rentals",
      "parents": [
        "eventservices"
      ],
      "country_blacklist": [
        "HK",
        "MX",
        "MY",
        "JP",
        "PH",
        "CA",
        "PT",
        "IT",
        "ES",
        "IE",
        "TW",
        "FR",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "partycharacters",
      "title": "Party Characters",
      "parents": [
        "eventservices"
      ]
    },
    {
      "alias": "partyequipmentrentals",
      "title": "Party Equipment Rentals",
      "parents": [
        "eventservices"
      ],
      "country_blacklist": [
        "HK",
        "FI",
        "TW"
      ]
    },
    {
      "alias": "partysupplies",
      "title": "Party Supplies",
      "parents": [
        "eventservices"
      ]
    },
    {
      "alias": "passportvisaservices",
      "title": "Passport & Visa Services",
      "parents": [
        "travelservices"
      ]
    },
    {
      "alias": "pastashops",
      "title": "Pasta Shops",
      "parents": [
        "gourmet"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "DK",
        "JP",
        "AR",
        "NZ",
        "US",
        "IT",
        "CL",
        "IE",
        "NO",
        "GB",
        "SG",
        "CZ"
      ]
    },
    {
      "alias": "patentlaw",
      "title": "Patent Law",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "pathologists",
      "title": "Pathologists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "patiocoverings",
      "title": "Patio Coverings",
      "parents": [
        "homeservices"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "BR",
        "CA",
        "PT",
        "US",
        "IT"
      ]
    },
    {
      "alias": "pawn",
      "title": "Pawn Shops",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "TR",
        "BR"
      ]
    },
    {
      "alias": "paydayloans",
      "title": "Check Cashing/Pay-day Loans",
      "parents": [
        "financialservices"
      ],
      "country_blacklist": [
        "DK",
        "AT",
        "NZ",
        "IT",
        "CH",
        "ES",
        "DE",
        "CZ"
      ]
    },
    {
      "alias": "payroll",
      "title": "Payroll Services",
      "parents": [
        "professional"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "CA",
        "NZ",
        "US",
        "IE",
        "GB",
        "TR",
        "SG",
        "CZ"
      ]
    },
    {
      "alias": "pediatric_dentists",
      "title": "Pediatric Dentists",
      "parents": [
        "dentists"
      ]
    },
    {
      "alias": "pediatricians",
      "title": "Pediatricians",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "pedicabs",
      "title": "Pedicabs",
      "parents": [
        "transport"
      ],
      "country_whitelist": [
        "MY",
        "SE",
        "DK",
        "PH",
        "AT",
        "US",
        "CH",
        "DE",
        "NO"
      ]
    },
    {
      "alias": "pekinese",
      "title": "Pekinese",
      "parents": [
        "chinese"
      ],
      "country_whitelist": [
        "MY",
        "HK",
        "TW",
        "JP",
        "SG",
        "FR",
        "IT"
      ]
    },
    {
      "alias": "pensions",
      "title": "Pensions",
      "parents": [
        "hotels"
      ],
      "country_whitelist": [
        "SE",
        "DK",
        "JP",
        "AT",
        "ES",
        "BR",
        "DE",
        "NO",
        "CZ"
      ]
    },
    {
      "alias": "perfume",
      "title": "Perfume",
      "parents": [
        "beautysvc",
        "shopping"
      ],
      "country_blacklist": [
        "TR",
        "SG",
        "CA",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "periodontists",
      "title": "Periodontists",
      "parents": [
        "dentists"
      ]
    },
    {
      "alias": "permanentmakeup",
      "title": "Permanent Makeup",
      "parents": [
        "beautysvc"
      ],
      "country_blacklist": [
        "FI",
        "NZ",
        "SG"
      ]
    },
    {
      "alias": "persian",
      "title": "Persian/Iranian",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "personal_injury",
      "title": "Personal Injury Law",
      "parents": [
        "lawyers"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "personal_shopping",
      "title": "Personal Shopping",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "CL",
        "ES",
        "MX",
        "BR",
        "AR",
        "CZ"
      ]
    },
    {
      "alias": "personalassistants",
      "title": "Personal Assistants",
      "parents": [
        "professional"
      ],
      "country_whitelist": [
        "US",
        "PT",
        "CZ"
      ]
    },
    {
      "alias": "personalcare",
      "title": "Personal Care Services",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "DK",
        "US",
        "BR",
        "NO",
        "FR",
        "CZ",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "personalchefs",
      "title": "Personal Chefs",
      "parents": [
        "eventservices"
      ]
    },
    {
      "alias": "peruvian",
      "title": "Peruvian",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "PT",
        "SG",
        "TR"
      ]
    },
    {
      "alias": "pest_control",
      "title": "Pest Control",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "pet_sitting",
      "title": "Pet Sitting",
      "parents": [
        "petservices"
      ]
    },
    {
      "alias": "pet_training",
      "title": "Pet Training",
      "parents": [
        "petservices"
      ]
    },
    {
      "alias": "petadoption",
      "title": "Pet Adoption",
      "parents": [
        "pets"
      ],
      "country_blacklist": [
        "CL",
        "HK",
        "MX",
        "JP",
        "AR"
      ]
    },
    {
      "alias": "petboarding",
      "title": "Pet Boarding",
      "parents": [
        "pet_sitting"
      ]
    },
    {
      "alias": "petbreeders",
      "title": "Pet Breeders",
      "parents": [
        "petservices"
      ],
      "country_blacklist": [
        "HK",
        "MX",
        "MY",
        "PH",
        "AR",
        "PT",
        "NZ",
        "CL",
        "IE",
        "TW",
        "BR",
        "TR",
        "SG",
        "FI"
      ]
    },
    {
      "alias": "petcremation",
      "title": "Pet Cremation Services",
      "parents": [
        "petservices"
      ]
    },
    {
      "alias": "pethospice",
      "title": "Pet Hospice",
      "parents": [
        "petservices"
      ]
    },
    {
      "alias": "petinsurance",
      "title": "Pet Insurance",
      "parents": [
        "petservices"
      ]
    },
    {
      "alias": "petphotography",
      "title": "Pet Photography",
      "parents": [
        "petservices"
      ]
    },
    {
      "alias": "pets",
      "title": "Pets",
      "parents": []
    },
    {
      "alias": "petservices",
      "title": "Pet Services",
      "parents": [
        "pets"
      ]
    },
    {
      "alias": "petstore",
      "title": "Pet Stores",
      "parents": [
        "pets"
      ]
    },
    {
      "alias": "pettingzoos",
      "title": "Petting Zoos",
      "parents": [
        "zoos"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "DK",
        "AT",
        "US",
        "IT",
        "CH",
        "ES",
        "DE",
        "NO",
        "GB"
      ]
    },
    {
      "alias": "pettransport",
      "title": "Pet Transportation",
      "parents": [
        "petservices"
      ],
      "country_whitelist": [
        "US",
        "SE"
      ]
    },
    {
      "alias": "petwasteremoval",
      "title": "Pet Waste Removal",
      "parents": [
        "petservices"
      ]
    },
    {
      "alias": "pfcomercial",
      "title": "PF/Comercial",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "BR"
      ]
    },
    {
      "alias": "pharmacy",
      "title": "Pharmacy",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "FI"
      ]
    },
    {
      "alias": "phlebologists",
      "title": "Phlebologists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "photoboothrentals",
      "title": "Photo Booth Rentals",
      "parents": [
        "eventservices"
      ],
      "country_blacklist": [
        "HK",
        "FI",
        "JP"
      ]
    },
    {
      "alias": "photoclasses",
      "title": "Photography Classes",
      "parents": [
        "specialtyschools"
      ]
    },
    {
      "alias": "photographers",
      "title": "Photographers",
      "parents": [
        "eventservices"
      ]
    },
    {
      "alias": "photographystores",
      "title": "Photography Stores & Services",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "physicaltherapy",
      "title": "Physical Therapy",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "physicians",
      "title": "Doctors",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "piadina",
      "title": "Piadina",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "US",
        "IT"
      ]
    },
    {
      "alias": "pianobars",
      "title": "Piano Bars",
      "parents": [
        "nightlife"
      ],
      "country_blacklist": [
        "AU",
        "AT",
        "NZ",
        "CH",
        "ES",
        "IE",
        "BR",
        "SG",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "pianoservices",
      "title": "Piano Services",
      "parents": [
        "musicinstrumentservices"
      ]
    },
    {
      "alias": "pianostores",
      "title": "Piano Stores",
      "parents": [
        "musicinstrumentservices"
      ]
    },
    {
      "alias": "pickleball",
      "title": "Pickleball",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "DE",
        "PL",
        "AT",
        "US",
        "CH"
      ]
    },
    {
      "alias": "pickyourown",
      "title": "Pick Your Own Farms",
      "parents": [
        "farms"
      ],
      "country_whitelist": [
        "DK",
        "JP",
        "AT",
        "US",
        "CH",
        "DE",
        "NO",
        "FR",
        "CZ"
      ]
    },
    {
      "alias": "piemonte",
      "title": "Piemonte",
      "parents": [
        "italian"
      ],
      "country_whitelist": [
        "FR",
        "IT"
      ]
    },
    {
      "alias": "piercing",
      "title": "Piercing",
      "parents": [
        "beautysvc"
      ]
    },
    {
      "alias": "pierogis",
      "title": "Pierogis",
      "parents": [
        "polish"
      ],
      "country_whitelist": [
        "PL"
      ]
    },
    {
      "alias": "pilates",
      "title": "Pilates",
      "parents": [
        "fitness"
      ]
    },
    {
      "alias": "pita",
      "title": "Pita",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "TR"
      ]
    },
    {
      "alias": "pizza",
      "title": "Pizza",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "placentaencapsulation",
      "title": "Placenta Encapsulations",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "DE",
        "TR",
        "FR",
        "AT",
        "CZ",
        "PL",
        "CH"
      ]
    },
    {
      "alias": "planetarium",
      "title": "Planetarium",
      "parents": [
        "arts"
      ]
    },
    {
      "alias": "plasticsurgeons",
      "title": "Plastic Surgeons",
      "parents": [
        "physicians"
      ],
      "country_blacklist": [
        "CL",
        "AR",
        "ES",
        "MX"
      ]
    },
    {
      "alias": "playgrounds",
      "title": "Playgrounds",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "playsets",
      "title": "Playsets",
      "parents": [
        "homeandgarden"
      ]
    },
    {
      "alias": "plumbing",
      "title": "Plumbing",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "plus_size_fashion",
      "title": "Plus Size Fashion",
      "parents": [
        "fashion"
      ],
      "country_blacklist": [
        "HK",
        "MX",
        "JP",
        "AR",
        "CA",
        "CL",
        "IE",
        "GB",
        "TR",
        "SG",
        "PL"
      ]
    },
    {
      "alias": "podiatrists",
      "title": "Podiatrists",
      "parents": [
        "physicians"
      ],
      "country_blacklist": [
        "FR"
      ]
    },
    {
      "alias": "poke",
      "title": "Poke",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        false,
        "NL",
        "AU",
        "SE",
        "NZ",
        "CH",
        "SG",
        "PL",
        "BE",
        "MY",
        "DK",
        "PH",
        "CA",
        "AT",
        "PT",
        "US",
        "IE",
        "BR",
        "DE",
        "GB",
        "FR"
      ]
    },
    {
      "alias": "poledancingclasses",
      "title": "Pole Dancing Classes",
      "parents": [
        "specialtyschools"
      ],
      "country_blacklist": [
        "BE",
        "MX",
        "AR",
        "CA",
        "AT",
        "PT",
        "CH",
        "CL",
        "ES",
        "IE",
        "GB",
        "TR",
        "PL"
      ]
    },
    {
      "alias": "policedepartments",
      "title": "Police Departments",
      "parents": [
        "publicservicesgovt"
      ]
    },
    {
      "alias": "polish",
      "title": "Polish",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "FI",
        "SG"
      ]
    },
    {
      "alias": "polynesian",
      "title": "Polynesian",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "poolbilliards",
      "title": "Pool & Billiards",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "MX",
        "SE",
        "AR",
        "AT",
        "CH",
        "CL",
        "ES",
        "DE",
        "NO",
        "CZ",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "poolcleaners",
      "title": "Pool Cleaners",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "NO",
        "DK"
      ]
    },
    {
      "alias": "poolhalls",
      "title": "Pool Halls",
      "parents": [
        "nightlife"
      ]
    },
    {
      "alias": "poolservice",
      "title": "Pool & Hot Tub Service",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "popcorn",
      "title": "Popcorn Shops",
      "parents": [
        "gourmet"
      ],
      "country_whitelist": [
        "US",
        "GB",
        "JP"
      ]
    },
    {
      "alias": "popuprestaurants",
      "title": "Pop-Up Restaurants",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "NL",
        "HK",
        "AU",
        "SE",
        "NZ",
        "SG",
        "BE",
        "MY",
        "DK",
        "PH",
        "CA",
        "US",
        "IE",
        "TW",
        "DE",
        "NO",
        "GB",
        "FR"
      ]
    },
    {
      "alias": "popupshops",
      "title": "Pop-up Shops",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "PT"
      ]
    },
    {
      "alias": "portabletoiletservices",
      "title": "Portable Toilet Services",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "HK",
        "MX",
        "MY",
        "JP",
        "PH",
        "AR",
        "CL",
        "TW",
        "FR",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "portuguese",
      "title": "Portuguese",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "FI"
      ]
    },
    {
      "alias": "postoffices",
      "title": "Post Offices",
      "parents": [
        "publicservicesgovt"
      ]
    },
    {
      "alias": "postpartumcare",
      "title": "Postpartum Care",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "MY",
        "HK",
        "TW",
        "JP",
        "PL"
      ]
    },
    {
      "alias": "potatoes",
      "title": "Potatoes",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "AT",
        "CH",
        "AU",
        "DE"
      ]
    },
    {
      "alias": "poutineries",
      "title": "Poutineries",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "US",
        "CA"
      ]
    },
    {
      "alias": "powdercoating",
      "title": "Powder Coating",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "prenatal",
      "title": "Prenatal/Perinatal Care",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "HK",
        "MY",
        "JP",
        "PH",
        "CA",
        "AT",
        "CH",
        "IE",
        "TW",
        "DE",
        "GB",
        "TR",
        "SG",
        "PL"
      ]
    },
    {
      "alias": "preschools",
      "title": "Preschools",
      "parents": [
        "education"
      ],
      "country_blacklist": [
        "DK"
      ]
    },
    {
      "alias": "pressurewashers",
      "title": "Pressure Washers",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "CL",
        "HK",
        "MX",
        "JP",
        "AR"
      ]
    },
    {
      "alias": "pretzels",
      "title": "Pretzels",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "US",
        "PT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "preventivemedicine",
      "title": "Preventive Medicine",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "printmedia",
      "title": "Print Media",
      "parents": [
        "massmedia"
      ]
    },
    {
      "alias": "privateinvestigation",
      "title": "Private Investigation",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "privatejetcharter",
      "title": "Private Jet Charter",
      "parents": [
        "transport"
      ]
    },
    {
      "alias": "privateschools",
      "title": "Private Schools",
      "parents": [
        "education"
      ],
      "country_whitelist": [
        "MX",
        "AU",
        "SE",
        "DK",
        "AR",
        "PT",
        "NZ",
        "US",
        "CL",
        "ES",
        "BR",
        "NO",
        "CZ"
      ]
    },
    {
      "alias": "privatetutors",
      "title": "Private Tutors",
      "parents": [
        "education"
      ]
    },
    {
      "alias": "processservers",
      "title": "Process Servers",
      "parents": [
        "legalservices"
      ],
      "country_whitelist": [
        "FR",
        "US",
        "BE"
      ]
    },
    {
      "alias": "proctologist",
      "title": "Proctologists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "productdesign",
      "title": "Product Design",
      "parents": [
        "professional"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "DK",
        "PH",
        "CA",
        "US",
        "IE",
        "NO",
        "GB",
        "SG",
        "FR"
      ]
    },
    {
      "alias": "professional",
      "title": "Professional Services",
      "parents": []
    },
    {
      "alias": "propane",
      "title": "Propane",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "AR",
        "MX",
        "NZ",
        "CZ"
      ]
    },
    {
      "alias": "propertymgmt",
      "title": "Property Management",
      "parents": [
        "realestate"
      ]
    },
    {
      "alias": "props",
      "title": "Props",
      "parents": [
        "shopping"
      ],
      "country_whitelist": [
        "US",
        "BE"
      ]
    },
    {
      "alias": "prosthetics",
      "title": "Prosthetics",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "US",
        "ES",
        "AU",
        "IT"
      ]
    },
    {
      "alias": "prosthodontists",
      "title": "Prosthodontists",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "US",
        "ES",
        "IT"
      ]
    },
    {
      "alias": "provencal",
      "title": "Provencal",
      "parents": [
        "french"
      ],
      "country_whitelist": [
        "FR"
      ]
    },
    {
      "alias": "psychiatrists",
      "title": "Psychiatrists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "psychic_astrology",
      "title": "Supernatural Readings",
      "parents": [
        "arts"
      ]
    },
    {
      "alias": "psychicmediums",
      "title": "Psychic Mediums",
      "parents": [
        "psychic_astrology"
      ],
      "country_blacklist": [
        "PL"
      ]
    },
    {
      "alias": "psychics",
      "title": "Psychics",
      "parents": [
        "psychic_astrology"
      ]
    },
    {
      "alias": "psychoanalysts",
      "title": "Psychoanalysts",
      "parents": [
        "c_and_mh"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "MX",
        "AR",
        "PT",
        "ES",
        "BR",
        "FR",
        "CZ"
      ]
    },
    {
      "alias": "psychologists",
      "title": "Psychologists",
      "parents": [
        "c_and_mh"
      ],
      "country_blacklist": [
        "HK",
        "IE",
        "GB",
        "JP",
        "SG",
        "PL"
      ]
    },
    {
      "alias": "psychotechnicaltests",
      "title": "Psychotechnical Tests",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "ES",
        "BR"
      ]
    },
    {
      "alias": "psychotherapists",
      "title": "Psychotherapists",
      "parents": [
        "c_and_mh"
      ],
      "country_whitelist": [
        "DK",
        "AT",
        "CH",
        "BR",
        "DE",
        "NO",
        "SG",
        "FR",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "pubfood",
      "title": "Pub Food",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "AU"
      ]
    },
    {
      "alias": "publicadjusters",
      "title": "Public Adjusters",
      "parents": [
        "professional"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "publicart",
      "title": "Public Art",
      "parents": [
        "localflavor"
      ]
    },
    {
      "alias": "publicmarkets",
      "title": "Public Markets",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "publicplazas",
      "title": "Public Plazas",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "NL",
        "BE",
        "AU",
        "CA",
        "NZ",
        "US",
        "IE",
        "GB"
      ]
    },
    {
      "alias": "publicrelations",
      "title": "Public Relations",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "publicservicesgovt",
      "title": "Public Services & Government",
      "parents": []
    },
    {
      "alias": "publictransport",
      "title": "Public Transportation",
      "parents": [
        "transport"
      ]
    },
    {
      "alias": "pubs",
      "title": "Pubs",
      "parents": [
        "bars"
      ]
    },
    {
      "alias": "pueblan",
      "title": "Pueblan",
      "parents": [
        "mexican"
      ],
      "country_whitelist": [
        "MX"
      ]
    },
    {
      "alias": "puertorican",
      "title": "Puerto Rican",
      "parents": [
        "caribbean"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "pulmonologist",
      "title": "Pulmonologist",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "pulquerias",
      "title": "Pulquerias",
      "parents": [
        "bars"
      ],
      "country_whitelist": [
        "MX"
      ]
    },
    {
      "alias": "pumpkinpatches",
      "title": "Pumpkin Patches",
      "parents": [
        "homeandgarden"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "qigong",
      "title": "Qi Gong",
      "parents": [
        "fitness"
      ]
    },
    {
      "alias": "races",
      "title": "Races & Competitions",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "HK",
        "MX",
        "MY",
        "JP",
        "PH",
        "AR",
        "CA",
        "PT",
        "IT",
        "CL",
        "ES",
        "IE",
        "TW",
        "TR",
        "FI"
      ]
    },
    {
      "alias": "racetracks",
      "title": "Race Tracks",
      "parents": [
        "arts"
      ],
      "country_blacklist": [
        "IE",
        "BR",
        "DE",
        "SG",
        "AT",
        "CH"
      ]
    },
    {
      "alias": "racingexperience",
      "title": "Racing Experience",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "FR",
        "US",
        "SE"
      ]
    },
    {
      "alias": "radiologists",
      "title": "Radiologists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "radiostations",
      "title": "Radio Stations",
      "parents": [
        "massmedia"
      ]
    },
    {
      "alias": "rafting",
      "title": "Rafting/Kayaking",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "ramen",
      "title": "Ramen",
      "parents": [
        "japanese"
      ]
    },
    {
      "alias": "ranches",
      "title": "Ranches",
      "parents": [
        "farms"
      ],
      "country_whitelist": [
        "CL",
        "ES",
        "MX",
        "AR",
        "CZ",
        "US"
      ]
    },
    {
      "alias": "raw_food",
      "title": "Live/Raw Food",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "realestate",
      "title": "Real Estate",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "realestateagents",
      "title": "Real Estate Agents",
      "parents": [
        "realestate"
      ]
    },
    {
      "alias": "realestatelawyers",
      "title": "Real Estate Law",
      "parents": [
        "lawyers"
      ]
    },
    {
      "alias": "realestatesvcs",
      "title": "Real Estate Services",
      "parents": [
        "realestate"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "record_labels",
      "title": "Record Labels",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "DK",
        "PT",
        "AT",
        "CH",
        "BR",
        "DE",
        "NO",
        "CZ"
      ]
    },
    {
      "alias": "recording_studios",
      "title": "Recording & Rehearsal Studios",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "recreation",
      "title": "Recreation Centers",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "recyclingcenter",
      "title": "Recycling Center",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "refinishing",
      "title": "Refinishing Services",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "reflexology",
      "title": "Reflexology",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "PL",
        "TR",
        "FI",
        "SE"
      ]
    },
    {
      "alias": "registrationservices",
      "title": "Registration Services",
      "parents": [
        "auto"
      ],
      "country_blacklist": [
        "CL",
        "ES",
        "MX",
        "NO",
        "DK",
        "AR"
      ]
    },
    {
      "alias": "registry_office",
      "title": "Registry Office",
      "parents": [
        "publicservicesgovt"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "DK",
        "PT",
        "AT",
        "IT",
        "CH",
        "BR",
        "DE",
        "NO",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "rehabilitation_center",
      "title": "Rehabilitation Center",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "MY",
        "HK",
        "PH",
        "AT",
        "CH",
        "TW",
        "TR",
        "SG",
        "FR"
      ]
    },
    {
      "alias": "reiki",
      "title": "Reiki",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "CL",
        "HK",
        "MX",
        "JP",
        "AR"
      ]
    },
    {
      "alias": "religiousitems",
      "title": "Religious Items",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "religiousorgs",
      "title": "Religious Organizations",
      "parents": []
    },
    {
      "alias": "religiousschools",
      "title": "Religious Schools",
      "parents": [
        "education"
      ],
      "country_whitelist": [
        "MX",
        "MY",
        "AU",
        "DK",
        "PH",
        "AR",
        "PT",
        "NZ",
        "US",
        "CL",
        "ES",
        "BR",
        "NO",
        "CZ"
      ]
    },
    {
      "alias": "rentfurniture",
      "title": "Furniture Rental",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "MX",
        "AU",
        "JP",
        "AR",
        "CA",
        "PT",
        "US",
        "CL",
        "ES"
      ]
    },
    {
      "alias": "reproductivehealthservices",
      "title": "Reproductive Health Services",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "reptileshops",
      "title": "Reptile Shops",
      "parents": [
        "petstore"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "SE",
        "DK",
        "JP",
        "US",
        "IT",
        "ES",
        "DE",
        "NO"
      ]
    },
    {
      "alias": "residences",
      "title": "Residences",
      "parents": [
        "hotels"
      ],
      "country_whitelist": [
        "MY",
        "PH",
        "AT",
        "US",
        "IT",
        "CH",
        "ES",
        "DE",
        "SG",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "resorts",
      "title": "Resorts",
      "parents": [
        "hotelstravel"
      ]
    },
    {
      "alias": "restaurants",
      "title": "Restaurants",
      "parents": []
    },
    {
      "alias": "reststops",
      "title": "Rest Stops",
      "parents": [
        "hotels"
      ]
    },
    {
      "alias": "retinaspecialists",
      "title": "Retina Specialists",
      "parents": [
        "opthamalogists"
      ],
      "country_blacklist": [
        "FR",
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "retirement_homes",
      "title": "Retirement Homes",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "reunion",
      "title": "Reunion",
      "parents": [
        "french"
      ],
      "country_blacklist": [
        "MX",
        "AU",
        "DK",
        "JP",
        "AR",
        "AT",
        "NZ",
        "CH",
        "CL",
        "BR",
        "DE",
        "NO",
        "TR",
        "PL"
      ]
    },
    {
      "alias": "reupholstery",
      "title": "Furniture Reupholstery",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "rhematologists",
      "title": "Rheumatologists",
      "parents": [
        "physicians"
      ],
      "country_blacklist": [
        "HK",
        "AU",
        "JP",
        "CA",
        "NZ",
        "IE",
        "TW",
        "GB",
        "TR",
        "SG",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "rhinelandian",
      "title": "Rhinelandian",
      "parents": [
        "german"
      ],
      "country_whitelist": [
        "DE"
      ]
    },
    {
      "alias": "ribatejo",
      "title": "Ribatejo",
      "parents": [
        "portuguese"
      ],
      "country_whitelist": [
        "PT"
      ]
    },
    {
      "alias": "riceshop",
      "title": "Rice",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "TR",
        "JP"
      ]
    },
    {
      "alias": "roadsideassist",
      "title": "Roadside Assistance",
      "parents": [
        "auto"
      ],
      "country_blacklist": [
        "HK",
        "SE",
        "PT",
        "NZ",
        "IE",
        "TW",
        "BR",
        "GB",
        "TR",
        "SG",
        "FR",
        "FI"
      ]
    },
    {
      "alias": "robatayaki",
      "title": "Robatayaki",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "HK",
        "TW",
        "JP"
      ]
    },
    {
      "alias": "rock_climbing",
      "title": "Rock Climbing",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "rodeo",
      "title": "Rodeo",
      "parents": [
        "arts"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "rodizios",
      "title": "Rodizios",
      "parents": [
        "brazilian"
      ],
      "country_whitelist": [
        "AR",
        "PT",
        "BR"
      ]
    },
    {
      "alias": "roman",
      "title": "Roman",
      "parents": [
        "italian"
      ],
      "country_whitelist": [
        "FR",
        "IT",
        "JP"
      ]
    },
    {
      "alias": "romanian",
      "title": "Romanian",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "BE",
        "AT",
        "CH",
        "ES",
        "DE",
        "FR",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "roofing",
      "title": "Roofing",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "roofinspectors",
      "title": "Roof Inspectors",
      "parents": [
        "homeservices"
      ],
      "country_whitelist": [
        "US",
        "CA"
      ]
    },
    {
      "alias": "rotisserie_chicken",
      "title": "Rotisserie Chicken",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "MX",
        "AU",
        "AR",
        "PT",
        "NZ",
        "IT",
        "CL",
        "ES",
        "BR",
        "FR",
        "PL"
      ]
    },
    {
      "alias": "rugs",
      "title": "Rugs",
      "parents": [
        "homeandgarden"
      ],
      "country_blacklist": [
        "HK",
        "JP",
        "AT",
        "CH",
        "IE",
        "DE",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "russian",
      "title": "Russian",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "rv_dealers",
      "title": "RV Dealers",
      "parents": [
        "auto"
      ],
      "country_blacklist": [
        "HK",
        "MX",
        "MY",
        "AU",
        "JP",
        "PH",
        "AR",
        "PT",
        "NZ",
        "CL",
        "IE",
        "TW",
        "GB",
        "TR",
        "SG"
      ]
    },
    {
      "alias": "rvparks",
      "title": "RV Parks",
      "parents": [
        "hotelstravel"
      ],
      "country_whitelist": [
        "NL",
        "AU",
        "SE",
        "NZ",
        "IT",
        "CH",
        "CL",
        "SG",
        "CZ",
        "PL",
        "BE",
        "MX",
        "DK",
        "AR",
        "CA",
        "AT",
        "US",
        "ES",
        "IE",
        "DE",
        "NO",
        "TR",
        "GB",
        "FR",
        "FI"
      ]
    },
    {
      "alias": "rvrental",
      "title": "RV Rental",
      "parents": [
        "hotelstravel"
      ],
      "country_blacklist": [
        "SG"
      ]
    },
    {
      "alias": "rvrepair",
      "title": "RV Repair",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "NL",
        "AU",
        "NZ",
        "CH",
        "SG",
        "PL",
        "BE",
        "MY",
        "DK",
        "PH",
        "CA",
        "PT",
        "AT",
        "US",
        "IE",
        "BR",
        "DE",
        "NO",
        "GB"
      ]
    },
    {
      "alias": "ryokan",
      "title": "Ryokan",
      "parents": [
        "hotels"
      ],
      "country_whitelist": [
        "JP"
      ]
    },
    {
      "alias": "safestores",
      "title": "Safe Stores",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "safetyequipment",
      "title": "Safety Equipment",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "sailing",
      "title": "Sailing",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "sakebars",
      "title": "Sake Bars",
      "parents": [
        "bars"
      ],
      "country_whitelist": [
        "JP"
      ]
    },
    {
      "alias": "salad",
      "title": "Salad",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "salumerie",
      "title": "Salumerie",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "CL",
        "ES",
        "MX",
        "AR",
        "PT",
        "IT"
      ]
    },
    {
      "alias": "salvadoran",
      "title": "Salvadoran",
      "parents": [
        "latin"
      ],
      "country_whitelist": [
        "US",
        "CA"
      ]
    },
    {
      "alias": "sambaschools",
      "title": "Samba Schools",
      "parents": [
        "specialtyschools"
      ],
      "country_whitelist": [
        "IT",
        "FI",
        "BR",
        "SE"
      ]
    },
    {
      "alias": "sandblasting",
      "title": "Sandblasting",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AT",
        "US",
        "IT",
        "CH",
        "ES",
        "BR",
        "DE"
      ]
    },
    {
      "alias": "sandwiches",
      "title": "Sandwiches",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "sardinian",
      "title": "Sardinian",
      "parents": [
        "italian"
      ],
      "country_whitelist": [
        "FR",
        "US",
        "IT"
      ]
    },
    {
      "alias": "saunainstallation",
      "title": "Sauna Installation & Repair",
      "parents": [
        "homeservices"
      ],
      "country_whitelist": [
        "AU",
        "SE",
        "NZ",
        "IT",
        "CH",
        "SG",
        "CZ",
        "PL",
        "DK",
        "CA",
        "AT",
        "US",
        "IE",
        "DE",
        "NO",
        "GB",
        "FI"
      ]
    },
    {
      "alias": "saunas",
      "title": "Saunas",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "MY",
        "AU",
        "PH",
        "CA",
        "NZ",
        "ES",
        "SG",
        "PL"
      ]
    },
    {
      "alias": "scandinavian",
      "title": "Scandinavian",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "PT"
      ]
    },
    {
      "alias": "scandinaviandesign",
      "title": "Scandinavian Design",
      "parents": [
        "shopping"
      ],
      "country_whitelist": [
        "NO",
        "FI",
        "DK",
        "SE"
      ]
    },
    {
      "alias": "scavengerhunts",
      "title": "Scavenger Hunts",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "schnitzel",
      "title": "Schnitzel",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "PL",
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "scooterrentals",
      "title": "Scooter Rentals",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "scootertours",
      "title": "Scooter Tours",
      "parents": [
        "tours"
      ]
    },
    {
      "alias": "scottish",
      "title": "Scottish",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "IE",
        "DE",
        "GB",
        "CA",
        "AT",
        "US",
        "CH"
      ]
    },
    {
      "alias": "screen_printing_tshirt_printing",
      "title": "Screen Printing/T-Shirt Printing",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "HK",
        "CA",
        "NZ",
        "IT",
        "IE",
        "TW",
        "GB",
        "TR",
        "SG",
        "CZ",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "screenprinting",
      "title": "Screen Printing",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "scuba",
      "title": "Scuba Diving",
      "parents": [
        "diving"
      ]
    },
    {
      "alias": "seafood",
      "title": "Seafood",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "seafoodmarkets",
      "title": "Seafood Markets",
      "parents": [
        "gourmet"
      ]
    },
    {
      "alias": "seasonaldecorservices",
      "title": "Holiday Decorating Services",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "NL",
        "BE",
        "DK",
        "JP",
        "AT",
        "IT",
        "CH",
        "DE",
        "NO",
        "TR",
        "FR"
      ]
    },
    {
      "alias": "security",
      "title": "Security Services",
      "parents": [
        "professional"
      ],
      "country_blacklist": [
        "NZ"
      ]
    },
    {
      "alias": "securitysystems",
      "title": "Security Systems",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "selfdefenseclasses",
      "title": "Self-defense Classes",
      "parents": [
        "fitness"
      ]
    },
    {
      "alias": "selfstorage",
      "title": "Self Storage",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "senegalese",
      "title": "Senegalese",
      "parents": [
        "african"
      ],
      "country_whitelist": [
        "BE",
        "FR",
        "CA",
        "US",
        "IT"
      ]
    },
    {
      "alias": "seniorcenters",
      "title": "Senior Centers",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "FR"
      ]
    },
    {
      "alias": "septicservices",
      "title": "Septic Services",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "DK",
        "CA",
        "PT",
        "US",
        "BR",
        "NO",
        "PL"
      ]
    },
    {
      "alias": "serbocroatian",
      "title": "Serbo Croatian",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "BE",
        "SE",
        "AR",
        "AT",
        "IT",
        "CH",
        "CL",
        "DE",
        "FR",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "service_stations",
      "title": "Service Stations",
      "parents": [
        "auto"
      ],
      "country_blacklist": [
        "HK",
        "MY",
        "SE",
        "DK",
        "JP",
        "PH",
        "PT",
        "TW",
        "BR",
        "NO",
        "TR",
        "FR",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "servicestations",
      "title": "Gas Stations",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "sessionphotography",
      "title": "Session Photography",
      "parents": [
        "photographers"
      ]
    },
    {
      "alias": "sewingalterations",
      "title": "Sewing & Alterations",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "sextherapists",
      "title": "Sex Therapists",
      "parents": [
        "c_and_mh"
      ]
    },
    {
      "alias": "shanghainese",
      "title": "Shanghainese",
      "parents": [
        "chinese"
      ],
      "country_whitelist": [
        "BE",
        "HK",
        "MY",
        "AU",
        "SE",
        "JP",
        "US",
        "IT",
        "TW",
        "SG",
        "FR"
      ]
    },
    {
      "alias": "sharedofficespaces",
      "title": "Shared Office Spaces",
      "parents": [
        "realestate"
      ]
    },
    {
      "alias": "sharedtaxis",
      "title": "Shared Taxis",
      "parents": [
        "transport"
      ],
      "country_whitelist": [
        "BR",
        "SE",
        "NO",
        "TR",
        "DK",
        "PH"
      ]
    },
    {
      "alias": "shavedice",
      "title": "Shaved Ice",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "MX",
        "JP",
        "AR",
        "US",
        "IT",
        "CL",
        "TW",
        "SG",
        "CZ"
      ]
    },
    {
      "alias": "shavedsnow",
      "title": "Shaved Snow",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "MY",
        "HK",
        "TW",
        "SG",
        "CA",
        "US"
      ]
    },
    {
      "alias": "shedsandoutdoorstorage",
      "title": "Sheds & Outdoor Storage",
      "parents": [
        "homeandgarden"
      ],
      "country_blacklist": [
        "HK",
        "SE",
        "DK",
        "JP",
        "ES",
        "TW",
        "NO",
        "TR",
        "FR",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "shipping_centers",
      "title": "Shipping Centers",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "NO",
        "SE"
      ]
    },
    {
      "alias": "shoerepair",
      "title": "Shoe Repair",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "shoes",
      "title": "Shoe Stores",
      "parents": [
        "fashion"
      ]
    },
    {
      "alias": "shoeshine",
      "title": "Shoe Shine",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "NL",
        "BE"
      ]
    },
    {
      "alias": "shopping",
      "title": "Shopping",
      "parents": []
    },
    {
      "alias": "shoppingcenters",
      "title": "Shopping Centers",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "shoppingpassages",
      "title": "Shopping Passages",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "US"
      ]
    },
    {
      "alias": "shredding",
      "title": "Shredding Services",
      "parents": [
        "professional"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "CA",
        "AT",
        "NZ",
        "US",
        "CH",
        "IE",
        "DE",
        "GB",
        "SG",
        "CZ"
      ]
    },
    {
      "alias": "shrines",
      "title": "Shrines",
      "parents": [
        "religiousorgs"
      ],
      "country_whitelist": [
        "CL",
        "ES",
        "MX",
        "JP",
        "AR"
      ]
    },
    {
      "alias": "shutters",
      "title": "Shutters",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "sicilian",
      "title": "Sicilian",
      "parents": [
        "italian"
      ],
      "country_whitelist": [
        "FR",
        "US",
        "CZ",
        "PL",
        "IT"
      ]
    },
    {
      "alias": "signature_cuisine",
      "title": "Signature Cuisine",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "MX",
        "SE",
        "DK",
        "AR",
        "PT",
        "CL",
        "ES",
        "NO"
      ]
    },
    {
      "alias": "signmaking",
      "title": "Signmaking",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "sikhtemples",
      "title": "Sikh Temples",
      "parents": [
        "religiousorgs"
      ]
    },
    {
      "alias": "silentdisco",
      "title": "Silent Disco",
      "parents": [
        "eventservices"
      ],
      "country_blacklist": [
        "JP"
      ]
    },
    {
      "alias": "singaporean",
      "title": "Singaporean",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "ES",
        "TR",
        "DK",
        "PT",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "skate_parks",
      "title": "Skate Parks",
      "parents": [
        "parks"
      ]
    },
    {
      "alias": "skateshops",
      "title": "Skate Shops",
      "parents": [
        "sportgoods"
      ]
    },
    {
      "alias": "skatingrinks",
      "title": "Skating Rinks",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "skiing",
      "title": "Skiing",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "HK",
        "MX",
        "MY",
        "AU",
        "PH",
        "US",
        "IT",
        "IE",
        "TW",
        "BR",
        "GB",
        "TR",
        "SG",
        "FR",
        "PL"
      ]
    },
    {
      "alias": "skillednursing",
      "title": "Skilled Nursing",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "skincare",
      "title": "Skin Care",
      "parents": [
        "beautysvc"
      ]
    },
    {
      "alias": "skiresorts",
      "title": "Ski Resorts",
      "parents": [
        "hotelstravel"
      ],
      "country_blacklist": [
        "MX",
        "DK",
        "BR",
        "SG"
      ]
    },
    {
      "alias": "skischools",
      "title": "Ski Schools",
      "parents": [
        "specialtyschools"
      ]
    },
    {
      "alias": "skishops",
      "title": "Ski & Snowboard Shops",
      "parents": [
        "sportgoods"
      ],
      "country_blacklist": [
        "MX",
        "HK",
        "MY",
        "DK",
        "PH",
        "PT",
        "TW",
        "BR",
        "TR",
        "SG"
      ]
    },
    {
      "alias": "skydiving",
      "title": "Skydiving",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "sledding",
      "title": "Sledding",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "CA",
        "AT",
        "NZ",
        "PT",
        "US",
        "IT",
        "CH",
        "DE",
        "NO",
        "TR",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "sleepspecialists",
      "title": "Sleep Specialists",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "sleepwear",
      "title": "Sleepwear",
      "parents": [
        "fashion"
      ],
      "country_whitelist": [
        "PT",
        "AU"
      ]
    },
    {
      "alias": "slovakian",
      "title": "Slovakian",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "BE",
        "AU",
        "CA",
        "US",
        "IT",
        "IE",
        "GB",
        "FR",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "smog_check_stations",
      "title": "Smog Check Stations",
      "parents": [
        "auto"
      ],
      "country_blacklist": [
        "NO",
        "FI",
        "DK",
        "SE"
      ]
    },
    {
      "alias": "smokehouse",
      "title": "Smokehouse",
      "parents": [
        "food"
      ],
      "country_blacklist": [
        "CL",
        "MX",
        "TR",
        "FR",
        "AR",
        "PL",
        "IT"
      ]
    },
    {
      "alias": "smokingareas",
      "title": "Smoking Areas",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "JP"
      ]
    },
    {
      "alias": "snorkeling",
      "title": "Snorkeling",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "snowremoval",
      "title": "Snow Removal",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "HK",
        "NZ",
        "MX",
        "BR"
      ]
    },
    {
      "alias": "snuggleservices",
      "title": "Snuggle Services",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "US",
        "JP"
      ]
    },
    {
      "alias": "soba",
      "title": "Soba",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "TW",
        "JP"
      ]
    },
    {
      "alias": "social_clubs",
      "title": "Social Clubs",
      "parents": [
        "arts"
      ]
    },
    {
      "alias": "socialsecuritylaw",
      "title": "Social Security Law",
      "parents": [
        "lawyers"
      ],
      "country_blacklist": [
        "PL",
        "CZ"
      ]
    },
    {
      "alias": "softwaredevelopment",
      "title": "Software Development",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "solarinstallation",
      "title": "Solar Installation",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "solarpanelcleaning",
      "title": "Solar Panel Cleaning",
      "parents": [
        "homeservices"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "somali",
      "title": "Somali",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "DE",
        "US",
        "AT",
        "PL",
        "IT",
        "CH"
      ]
    },
    {
      "alias": "sommelierservices",
      "title": "Sommelier Services",
      "parents": [
        "eventservices"
      ],
      "country_blacklist": [
        "FR"
      ]
    },
    {
      "alias": "sophrologists",
      "title": "Sophrologists",
      "parents": [
        "c_and_mh"
      ],
      "country_whitelist": [
        "FR",
        "PL",
        "BE",
        "CZ"
      ]
    },
    {
      "alias": "soulfood",
      "title": "Soul Food",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "NL",
        "SE",
        "CA",
        "US",
        "ES",
        "IE",
        "NO",
        "GB",
        "PL"
      ]
    },
    {
      "alias": "soup",
      "title": "Soup",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "southafrican",
      "title": "South African",
      "parents": [
        "african"
      ],
      "country_whitelist": [
        "BE",
        "AU",
        "FR",
        "CA",
        "US",
        "IT"
      ]
    },
    {
      "alias": "southern",
      "title": "Southern",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "NL",
        "SE",
        "CA",
        "NZ",
        "US",
        "IE",
        "GB",
        "TR",
        "PL"
      ]
    },
    {
      "alias": "souvenirs",
      "title": "Souvenir Shops",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "CA",
        "SG"
      ]
    },
    {
      "alias": "spanish",
      "title": "Spanish",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "spas",
      "title": "Day Spas",
      "parents": [
        "beautysvc"
      ]
    },
    {
      "alias": "speakeasies",
      "title": "Speakeasies",
      "parents": [
        "bars"
      ],
      "country_blacklist": [
        "NO",
        "IT",
        "DK",
        "TR"
      ]
    },
    {
      "alias": "specialbikes",
      "title": "Special Bikes",
      "parents": [
        "bicycles"
      ],
      "country_whitelist": [
        "PT",
        "DK"
      ]
    },
    {
      "alias": "specialed",
      "title": "Special Education",
      "parents": [
        "education"
      ],
      "country_blacklist": [
        "FI"
      ]
    },
    {
      "alias": "specialtyschools",
      "title": "Specialty Schools",
      "parents": [
        "education"
      ]
    },
    {
      "alias": "speech_therapists",
      "title": "Speech Therapists",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "speechtraining",
      "title": "Speech Training",
      "parents": [
        "specialtyschools"
      ]
    },
    {
      "alias": "spermclinic",
      "title": "Sperm Clinic",
      "parents": [
        "health"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "MX",
        "DK",
        "AR",
        "US",
        "IT",
        "CL",
        "ES",
        "DE",
        "NO",
        "FR"
      ]
    },
    {
      "alias": "spinesurgeons",
      "title": "Spine Surgeons",
      "parents": [
        "physicians"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "spiritism",
      "title": "Spiritism",
      "parents": [
        "religiousorgs"
      ],
      "country_whitelist": [
        "BR"
      ]
    },
    {
      "alias": "spiritual_shop",
      "title": "Spiritual Shop",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "sport_equipment_hire",
      "title": "Sport Equipment Hire",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "MX",
        "AU",
        "DK",
        "AR",
        "PT",
        "CL",
        "ES",
        "NO",
        "CZ"
      ]
    },
    {
      "alias": "sportgoods",
      "title": "Sporting Goods",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "sports_clubs",
      "title": "Sports Clubs",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "sportsbars",
      "title": "Sports Bars",
      "parents": [
        "bars"
      ],
      "country_blacklist": [
        "AT",
        "CH"
      ]
    },
    {
      "alias": "sportsbetting",
      "title": "Sports Betting",
      "parents": [
        "arts"
      ],
      "country_whitelist": [
        "US",
        "IT"
      ]
    },
    {
      "alias": "sportsmed",
      "title": "Sports Medicine",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "sportspsychologists",
      "title": "Sports Psychologists",
      "parents": [
        "c_and_mh"
      ],
      "country_whitelist": [
        "US",
        "IT",
        "NZ",
        "SG"
      ]
    },
    {
      "alias": "sportsteams",
      "title": "Professional Sports Teams",
      "parents": [
        "arts"
      ]
    },
    {
      "alias": "sportswear",
      "title": "Sports Wear",
      "parents": [
        "fashion",
        "sportgoods"
      ]
    },
    {
      "alias": "spraytanning",
      "title": "Spray Tanning",
      "parents": [
        "tanning"
      ],
      "country_blacklist": [
        "IE",
        "BR",
        "SE",
        "CA",
        "PL"
      ]
    },
    {
      "alias": "squash",
      "title": "Squash",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "PT",
        "NZ",
        "SG",
        "BR"
      ]
    },
    {
      "alias": "srilankan",
      "title": "Sri Lankan",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "stadiumsarenas",
      "title": "Stadiums & Arenas",
      "parents": [
        "arts"
      ]
    },
    {
      "alias": "stationery",
      "title": "Cards & Stationery",
      "parents": [
        "flowers",
        "eventservices",
        "artsandcrafts"
      ]
    },
    {
      "alias": "steak",
      "title": "Steakhouses",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "stereo_installation",
      "title": "Car Stereo Installation",
      "parents": [
        "auto"
      ],
      "country_blacklist": [
        "AT",
        "DK",
        "CH"
      ]
    },
    {
      "alias": "stockings",
      "title": "Stockings",
      "parents": [
        "fashion"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "DE",
        "PT",
        "AT",
        "CZ",
        "CH"
      ]
    },
    {
      "alias": "stonemasons",
      "title": "Stonemasons",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "streetart",
      "title": "Street Art",
      "parents": [
        "arts"
      ],
      "country_blacklist": [
        "MY",
        "CA",
        "AT",
        "US",
        "CH",
        "IE",
        "GB",
        "TR",
        "SG",
        "FI"
      ]
    },
    {
      "alias": "streetvendors",
      "title": "Street Vendors",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "stripclubs",
      "title": "Strip Clubs",
      "parents": [
        "adultentertainment"
      ]
    },
    {
      "alias": "stripteasedancers",
      "title": "Striptease Dancers",
      "parents": [
        "adultentertainment"
      ]
    },
    {
      "alias": "structuralengineers",
      "title": "Structural Engineers",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "stucco",
      "title": "Stucco Services",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "studiotaping",
      "title": "Studio Taping",
      "parents": [
        "arts"
      ],
      "country_whitelist": [
        "US",
        "NL",
        "BE"
      ]
    },
    {
      "alias": "sud_ouest",
      "title": "French Southwest",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "FR",
        "BE"
      ]
    },
    {
      "alias": "sugaring",
      "title": "Sugaring",
      "parents": [
        "hairremoval"
      ],
      "country_whitelist": [
        "DK",
        "AT",
        "US",
        "CH",
        "DE",
        "NO",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "sugarshacks",
      "title": "Sugar Shacks",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "CA"
      ]
    },
    {
      "alias": "sukiyaki",
      "title": "Sukiyaki",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "TW",
        "JP"
      ]
    },
    {
      "alias": "summer_camps",
      "title": "Summer Camps",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "sunglasses",
      "title": "Sunglasses",
      "parents": [
        "opticians"
      ]
    },
    {
      "alias": "supperclubs",
      "title": "Supper Clubs",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "US",
        "CA",
        "GB",
        "ES"
      ]
    },
    {
      "alias": "suppliesrestaurant",
      "title": "Restaurant Supplies",
      "parents": [
        "wholesalers"
      ],
      "country_whitelist": [
        "NL",
        "AU",
        "JP",
        "NZ",
        "IT",
        "CH",
        "CL",
        "SG",
        "PL",
        "BE",
        "MX",
        "DK",
        "AR",
        "CA",
        "AT",
        "US",
        "ES",
        "IE",
        "DE",
        "NO",
        "GB"
      ]
    },
    {
      "alias": "surfing",
      "title": "Surfing",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "NL",
        "MX",
        "SE",
        "DK",
        "JP",
        "AR",
        "PT",
        "NZ",
        "US",
        "IT",
        "CL",
        "ES",
        "BR",
        "DE",
        "FR"
      ]
    },
    {
      "alias": "surflifesaving",
      "title": "Surf Lifesaving",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "MX",
        "AU",
        "AR",
        "PT",
        "NZ",
        "CL",
        "ES",
        "BR"
      ]
    },
    {
      "alias": "surfschools",
      "title": "Surf Schools",
      "parents": [
        "specialtyschools"
      ]
    },
    {
      "alias": "surfshop",
      "title": "Surf Shop",
      "parents": [
        "fashion"
      ],
      "country_blacklist": [
        "NL",
        "BE",
        "SE",
        "CA",
        "IE",
        "BR",
        "NO",
        "SG",
        "FR",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "surgeons",
      "title": "Surgeons",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "sushi",
      "title": "Sushi Bars",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "swabian",
      "title": "Swabian",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "swedish",
      "title": "Swedish",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "SE"
      ]
    },
    {
      "alias": "swimminglessons",
      "title": "Swimming Lessons/Schools",
      "parents": [
        "specialtyschools",
        "fitness"
      ]
    },
    {
      "alias": "swimmingpools",
      "title": "Swimming Pools",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "swimwear",
      "title": "Swimwear",
      "parents": [
        "fashion"
      ]
    },
    {
      "alias": "swissfood",
      "title": "Swiss Food",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "CL",
        "ES",
        "MX",
        "DE",
        "AR",
        "CZ",
        "CH"
      ]
    },
    {
      "alias": "synagogues",
      "title": "Synagogues",
      "parents": [
        "religiousorgs"
      ]
    },
    {
      "alias": "syrian",
      "title": "Syrian",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "szechuan",
      "title": "Szechuan",
      "parents": [
        "chinese"
      ],
      "country_whitelist": [
        "HK",
        "MY",
        "AU",
        "JP",
        "NZ",
        "US",
        "IE",
        "TW",
        "GB",
        "SG",
        "FR"
      ]
    },
    {
      "alias": "tabac",
      "title": "Tabac",
      "parents": [
        "bars"
      ],
      "country_whitelist": [
        "BE",
        "ES",
        "FR",
        "CZ",
        "IT"
      ]
    },
    {
      "alias": "tabernas",
      "title": "Tabernas",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "ES",
        "PT",
        "TR"
      ]
    },
    {
      "alias": "tablaoflamenco",
      "title": "Tablao Flamenco",
      "parents": [
        "arts"
      ],
      "country_whitelist": [
        "CL",
        "ES",
        "MX",
        "AR",
        "PT"
      ]
    },
    {
      "alias": "tabletopgames",
      "title": "Tabletop Games",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "tableware",
      "title": "Tableware",
      "parents": [
        "homeandgarden"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "MX",
        "DK",
        "AR",
        "PT",
        "AT",
        "US",
        "CH",
        "CL",
        "BR",
        "DE",
        "NO",
        "FR",
        "CZ"
      ]
    },
    {
      "alias": "tacos",
      "title": "Tacos",
      "parents": [
        "mexican"
      ],
      "country_whitelist": [
        "US",
        "MX"
      ]
    },
    {
      "alias": "taekwondo",
      "title": "Taekwondo",
      "parents": [
        "martialarts"
      ]
    },
    {
      "alias": "taichi",
      "title": "Tai Chi",
      "parents": [
        "fitness"
      ]
    },
    {
      "alias": "taiwanese",
      "title": "Taiwanese",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "ES",
        "TR",
        "PT",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "taiyaki",
      "title": "Taiyaki",
      "parents": [
        "jpsweets"
      ],
      "country_whitelist": [
        "JP"
      ]
    },
    {
      "alias": "takoyaki",
      "title": "Takoyaki",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "TW",
        "JP"
      ]
    },
    {
      "alias": "talentagencies",
      "title": "Talent Agencies",
      "parents": [
        "professional"
      ],
      "country_blacklist": [
        "HK",
        "AU",
        "CA",
        "AT",
        "NZ",
        "CH",
        "IE",
        "GB",
        "TR",
        "SG",
        "CZ"
      ]
    },
    {
      "alias": "tamales",
      "title": "Tamales",
      "parents": [
        "mexican"
      ],
      "country_whitelist": [
        "MX"
      ]
    },
    {
      "alias": "tanning",
      "title": "Tanning",
      "parents": [
        "beautysvc"
      ]
    },
    {
      "alias": "tanningbeds",
      "title": "Tanning Beds",
      "parents": [
        "tanning"
      ],
      "country_blacklist": [
        "PL",
        "FI",
        "BR",
        "SE"
      ]
    },
    {
      "alias": "taoisttemples",
      "title": "Taoist Temples",
      "parents": [
        "religiousorgs"
      ],
      "country_whitelist": [
        "HK",
        "TW"
      ]
    },
    {
      "alias": "tapas",
      "title": "Tapas Bars",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "FI",
        "SG",
        "AU"
      ]
    },
    {
      "alias": "tapasmallplates",
      "title": "Tapas/Small Plates",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "tastingclasses",
      "title": "Tasting Classes",
      "parents": [
        "education"
      ]
    },
    {
      "alias": "tattoo",
      "title": "Tattoo",
      "parents": [
        "beautysvc"
      ]
    },
    {
      "alias": "tattooremoval",
      "title": "Tattoo Removal",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "tavolacalda",
      "title": "Tavola Calda",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "IT"
      ]
    },
    {
      "alias": "taxidermy",
      "title": "Taxidermy",
      "parents": [
        "professional"
      ],
      "country_blacklist": [
        "NL",
        "SE",
        "DK",
        "CA",
        "NZ",
        "IE",
        "BR",
        "NO",
        "SG",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "taxis",
      "title": "Taxis",
      "parents": [
        "transport"
      ]
    },
    {
      "alias": "taxlaw",
      "title": "Tax Law",
      "parents": [
        "lawyers"
      ],
      "country_whitelist": [
        "BE",
        "AU",
        "AT",
        "US",
        "CH",
        "BR",
        "DE",
        "SG",
        "FR",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "taxoffice",
      "title": "Tax Office",
      "parents": [
        "publicservicesgovt"
      ],
      "country_blacklist": [
        "ES",
        "SG",
        "CA",
        "PL",
        "US"
      ]
    },
    {
      "alias": "taxservices",
      "title": "Tax Services",
      "parents": [
        "financialservices"
      ]
    },
    {
      "alias": "tcm",
      "title": "Traditional Chinese Medicine",
      "parents": [
        "health"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "tea",
      "title": "Tea Rooms",
      "parents": [
        "food"
      ]
    },
    {
      "alias": "teachersupplies",
      "title": "Teacher Supplies",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "FR",
        "IT"
      ]
    },
    {
      "alias": "teambuilding",
      "title": "Team Building Activities",
      "parents": [
        "eventservices"
      ]
    },
    {
      "alias": "teethwhitening",
      "title": "Teeth Whitening",
      "parents": [
        "beautysvc"
      ],
      "country_blacklist": [
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "telecommunications",
      "title": "Telecommunications",
      "parents": [
        "itservices"
      ],
      "country_blacklist": [
        "CL",
        "AR",
        "MX",
        "JP"
      ]
    },
    {
      "alias": "televisionserviceproviders",
      "title": "Television Service Providers",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "televisionstations",
      "title": "Television Stations",
      "parents": [
        "massmedia"
      ]
    },
    {
      "alias": "tempura",
      "title": "Tempura",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "TW",
        "JP",
        "SG"
      ]
    },
    {
      "alias": "tenantlaw",
      "title": "Tenant and Eviction Law",
      "parents": [
        "professional"
      ],
      "country_blacklist": [
        "CZ"
      ]
    },
    {
      "alias": "tennis",
      "title": "Tennis",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "teochew",
      "title": "Teochew",
      "parents": [
        "chinese"
      ],
      "country_whitelist": [
        "MY",
        "HK",
        "TW",
        "SG"
      ]
    },
    {
      "alias": "teppanyaki",
      "title": "Teppanyaki",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "MX",
        "HK",
        "AU",
        "JP",
        "NZ",
        "US",
        "TW",
        "SG"
      ]
    },
    {
      "alias": "testprep",
      "title": "Test Preparation",
      "parents": [
        "education"
      ]
    },
    {
      "alias": "tex-mex",
      "title": "Tex-Mex",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "ES",
        "PT",
        "DK",
        "AU"
      ]
    },
    {
      "alias": "thai",
      "title": "Thai",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "theater",
      "title": "Performing Arts",
      "parents": [
        "arts"
      ]
    },
    {
      "alias": "themedcafes",
      "title": "Themed Cafes",
      "parents": [
        "cafes"
      ],
      "country_whitelist": [
        "NL",
        "HK",
        "AU",
        "SE",
        "JP",
        "NZ",
        "CH",
        "CL",
        "SG",
        "PL",
        "BE",
        "MY",
        "MX",
        "DK",
        "PH",
        "AR",
        "CA",
        "AT",
        "US",
        "IE",
        "TW",
        "DE",
        "NO",
        "GB",
        "FR",
        "FI"
      ]
    },
    {
      "alias": "threadingservices",
      "title": "Threading Services",
      "parents": [
        "hairremoval"
      ]
    },
    {
      "alias": "thrift_stores",
      "title": "Thrift Stores",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "FI"
      ]
    },
    {
      "alias": "tickets",
      "title": "Tickets",
      "parents": [
        "shopping"
      ],
      "country_whitelist": [
        "SE",
        "DK",
        "PT",
        "CL",
        "NO",
        "CZ",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "ticketsales",
      "title": "Ticket Sales",
      "parents": [
        "arts"
      ],
      "country_blacklist": [
        "NL",
        "SE",
        "NZ",
        "ES",
        "IE",
        "GB",
        "TR",
        "SG",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "tikibars",
      "title": "Tiki Bars",
      "parents": [
        "bars"
      ],
      "country_blacklist": [
        "DE",
        "TR",
        "JP",
        "FR",
        "AT",
        "PL",
        "CH"
      ]
    },
    {
      "alias": "tiling",
      "title": "Tiling",
      "parents": [
        "homeservices"
      ],
      "country_blacklist": [
        "NL",
        "BE",
        "HK",
        "MY",
        "JP",
        "PH",
        "CA",
        "PT",
        "IE",
        "TW",
        "BR",
        "GB",
        "TR",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "tires",
      "title": "Tires",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "titleloans",
      "title": "Title Loans",
      "parents": [
        "financialservices"
      ],
      "country_whitelist": [
        "US",
        "CA"
      ]
    },
    {
      "alias": "tobaccoshops",
      "title": "Tobacco Shops",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "tofu",
      "title": "Tofu Shops",
      "parents": [
        "gourmet"
      ],
      "country_whitelist": [
        "JP"
      ]
    },
    {
      "alias": "tonkatsu",
      "title": "Tonkatsu",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "TW",
        "JP",
        "SG"
      ]
    },
    {
      "alias": "torshi",
      "title": "Torshi",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "TR"
      ]
    },
    {
      "alias": "tortillas",
      "title": "Tortillas",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "MX"
      ]
    },
    {
      "alias": "tours",
      "title": "Tours",
      "parents": [
        "hotelstravel"
      ]
    },
    {
      "alias": "towing",
      "title": "Towing",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "towncarservice",
      "title": "Town Car Service",
      "parents": [
        "transport"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "MY",
        "HK",
        "AU",
        "PH",
        "CA",
        "NZ",
        "US",
        "IE",
        "TW",
        "GB",
        "SG"
      ]
    },
    {
      "alias": "townhall",
      "title": "Town Hall",
      "parents": [
        "publicservicesgovt"
      ],
      "country_blacklist": [
        "HK",
        "MY",
        "AU",
        "JP",
        "PH",
        "CA",
        "NZ",
        "IE",
        "TW",
        "GB",
        "SG",
        "PL",
        "FI"
      ]
    },
    {
      "alias": "toxicologists",
      "title": "Toxicologists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "toys",
      "title": "Toy Stores",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "tradamerican",
      "title": "American (Traditional)",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "tradclothing",
      "title": "Traditional Clothing",
      "parents": [
        "fashion"
      ]
    },
    {
      "alias": "tradefairs",
      "title": "Trade Fairs",
      "parents": [
        "festivals"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "MX",
        "DK",
        "JP",
        "PT",
        "AT",
        "NZ",
        "IT",
        "CH",
        "DE",
        "NO",
        "TR",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "traditional_swedish",
      "title": "Traditional Swedish",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "FI",
        "SE"
      ]
    },
    {
      "alias": "trafficschools",
      "title": "Traffic Schools",
      "parents": [
        "specialtyschools"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "trafficticketinglaw",
      "title": "Traffic Ticketing Law",
      "parents": [
        "lawyers"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "trailerdealers",
      "title": "Trailer Dealers",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "AU",
        "DK",
        "CA",
        "NZ",
        "US",
        "IE",
        "DE",
        "NO",
        "GB",
        "SG"
      ]
    },
    {
      "alias": "trailerrental",
      "title": "Trailer Rental",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "trailerrepair",
      "title": "Trailer Repair",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "NL",
        "AU",
        "SE",
        "NZ",
        "CH",
        "SG",
        "PL",
        "BE",
        "MY",
        "DK",
        "PH",
        "CA",
        "PT",
        "AT",
        "US",
        "IE",
        "BR",
        "DE",
        "NO",
        "GB"
      ]
    },
    {
      "alias": "trains",
      "title": "Trains",
      "parents": [
        "transport"
      ],
      "country_blacklist": [
        "HK",
        "MX",
        "MY",
        "JP",
        "PH",
        "AR",
        "NZ",
        "IT",
        "CL",
        "ES",
        "TW",
        "TR",
        "SG",
        "FI"
      ]
    },
    {
      "alias": "trainstations",
      "title": "Train Stations",
      "parents": [
        "hotelstravel"
      ]
    },
    {
      "alias": "trampoline",
      "title": "Trampoline Parks",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "HK",
        "MX",
        "MY",
        "JP",
        "PH",
        "AR",
        "NZ",
        "CL",
        "ES",
        "TW",
        "BR",
        "SG"
      ]
    },
    {
      "alias": "translationservices",
      "title": "Translation Services",
      "parents": [
        "professional"
      ],
      "country_blacklist": [
        "SE"
      ]
    },
    {
      "alias": "transmissionrepair",
      "title": "Transmission Repair",
      "parents": [
        "auto"
      ],
      "country_blacklist": [
        "MY",
        "DE",
        "PH",
        "AT",
        "IT",
        "CH"
      ]
    },
    {
      "alias": "transport",
      "title": "Transportation",
      "parents": [
        "hotelstravel"
      ]
    },
    {
      "alias": "tras_os_montes",
      "title": "Tras-os-Montes",
      "parents": [
        "portuguese"
      ],
      "country_whitelist": [
        "PT"
      ]
    },
    {
      "alias": "trattorie",
      "title": "Trattorie",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "CL",
        "FR",
        "AR",
        "PL",
        "IT",
        "CH"
      ]
    },
    {
      "alias": "travelagents",
      "title": "Travel Agents",
      "parents": [
        "travelservices"
      ],
      "country_blacklist": [
        "IT"
      ]
    },
    {
      "alias": "travelservices",
      "title": "Travel Services",
      "parents": [
        "hotelstravel"
      ]
    },
    {
      "alias": "treeservices",
      "title": "Tree Services",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "trinidadian",
      "title": "Trinidadian",
      "parents": [
        "caribbean"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "triviahosts",
      "title": "Trivia Hosts",
      "parents": [
        "eventservices"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "trophyshops",
      "title": "Trophy Shops",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "BR",
        "SE",
        "TR",
        "SG",
        "NZ",
        "FI"
      ]
    },
    {
      "alias": "tropicalmedicine",
      "title": "Tropical Medicine",
      "parents": [
        "physicians"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "BR",
        "DE",
        "AT",
        "IT",
        "CH"
      ]
    },
    {
      "alias": "truck_rental",
      "title": "Truck Rental",
      "parents": [
        "auto"
      ],
      "country_blacklist": [
        "NL",
        "SE",
        "TR",
        "JP",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "truckdealers",
      "title": "Commercial Truck Dealers",
      "parents": [
        "auto"
      ],
      "country_blacklist": [
        "HK",
        "TW",
        "SE",
        "TR",
        "JP",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "truckrepair",
      "title": "Commercial Truck Repair",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "NL",
        "AU",
        "NZ",
        "IT",
        "CH",
        "CL",
        "SG",
        "PL",
        "BE",
        "MX",
        "MY",
        "DK",
        "PH",
        "AR",
        "CA",
        "AT",
        "US",
        "ES",
        "IE",
        "BR",
        "DE",
        "NO",
        "GB",
        "FR"
      ]
    },
    {
      "alias": "tubing",
      "title": "Tubing",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "tuina",
      "title": "Tui Na",
      "parents": [
        "tcm"
      ]
    },
    {
      "alias": "turkish",
      "title": "Turkish",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "turkishravioli",
      "title": "Turkish Ravioli",
      "parents": [
        "turkish"
      ],
      "country_whitelist": [
        "TR"
      ]
    },
    {
      "alias": "tuscan",
      "title": "Tuscan",
      "parents": [
        "italian"
      ],
      "country_whitelist": [
        "FR",
        "US",
        "IT"
      ]
    },
    {
      "alias": "tutoring",
      "title": "Tutoring Centers",
      "parents": [
        "education"
      ]
    },
    {
      "alias": "tvmounting",
      "title": "TV Mounting",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "NL",
        "BE",
        "JP",
        "FR",
        "IT"
      ]
    },
    {
      "alias": "udon",
      "title": "Udon",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "HK",
        "TW",
        "SE",
        "NO",
        "DK",
        "JP",
        "FI"
      ]
    },
    {
      "alias": "ukrainian",
      "title": "Ukrainian",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "ES",
        "DK",
        "TR"
      ]
    },
    {
      "alias": "ultrasoundimagingcenters",
      "title": "Ultrasound Imaging Centers",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "unagi",
      "title": "Unagi",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "TW",
        "JP"
      ]
    },
    {
      "alias": "underseamedicine",
      "title": "Undersea/Hyperbaric Medicine",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "uniforms",
      "title": "Uniforms",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "NL",
        "SE",
        "JP",
        "AT",
        "CH",
        "IE",
        "TR",
        "CZ"
      ]
    },
    {
      "alias": "university_housing",
      "title": "University Housing",
      "parents": [
        "realestate"
      ]
    },
    {
      "alias": "unofficialyelpevents",
      "title": "Unofficial Yelp Events",
      "parents": [
        "localflavor"
      ]
    },
    {
      "alias": "urgent_care",
      "title": "Urgent Care",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "urologists",
      "title": "Urologists",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "usedbooks",
      "title": "Used Bookstore",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "CL",
        "AR",
        "TR",
        "AU"
      ]
    },
    {
      "alias": "usedcardealers",
      "title": "Used Car Dealers",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "utilities",
      "title": "Utilities",
      "parents": [
        "homeservices"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "PT",
        "US",
        "IT",
        "GB",
        "SG",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "uzbek",
      "title": "Uzbek",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "US",
        "CZ"
      ]
    },
    {
      "alias": "vacation_rentals",
      "title": "Vacation Rentals",
      "parents": [
        "hotelstravel"
      ],
      "country_blacklist": [
        "SG"
      ]
    },
    {
      "alias": "vacationrentalagents",
      "title": "Vacation Rental Agents",
      "parents": [
        "hotelstravel"
      ],
      "country_blacklist": [
        "ES",
        "SG"
      ]
    },
    {
      "alias": "valetservices",
      "title": "Valet Services",
      "parents": [
        "eventservices"
      ],
      "country_whitelist": [
        "US",
        "TR",
        "BR"
      ]
    },
    {
      "alias": "vapeshops",
      "title": "Vape Shops",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "SG",
        "BR"
      ]
    },
    {
      "alias": "vascularmedicine",
      "title": "Vascular Medicine",
      "parents": [
        "physicians"
      ]
    },
    {
      "alias": "vegan",
      "title": "Vegan",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "vegetarian",
      "title": "Vegetarian",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "vehicleshipping",
      "title": "Vehicle Shipping",
      "parents": [
        "auto"
      ]
    },
    {
      "alias": "vehiclewraps",
      "title": "Vehicle Wraps",
      "parents": [
        "auto"
      ],
      "country_blacklist": [
        "FR",
        "BE",
        "TR"
      ]
    },
    {
      "alias": "venetian",
      "title": "Venetian",
      "parents": [
        "italian"
      ],
      "country_whitelist": [
        "FR",
        "IT"
      ]
    },
    {
      "alias": "venezuelan",
      "title": "Venezuelan",
      "parents": [
        "latin"
      ],
      "country_whitelist": [
        "CL",
        "ES",
        "FR",
        "AR",
        "CA",
        "PT",
        "US"
      ]
    },
    {
      "alias": "venison",
      "title": "Venison",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "AU",
        "DK",
        "CA",
        "NZ",
        "IT",
        "IE",
        "NO",
        "GB",
        "SG",
        "CZ",
        "PL"
      ]
    },
    {
      "alias": "venues",
      "title": "Venues & Event Spaces",
      "parents": [
        "eventservices"
      ]
    },
    {
      "alias": "vermouthbars",
      "title": "Vermouth Bars",
      "parents": [
        "bars"
      ],
      "country_blacklist": [
        "JP",
        "DK",
        "IT",
        "BR",
        "NO",
        "TR",
        "FR",
        "PL"
      ]
    },
    {
      "alias": "vet",
      "title": "Veterinarians",
      "parents": [
        "pets"
      ]
    },
    {
      "alias": "veteransorganizations",
      "title": "Veterans Organizations",
      "parents": [
        "social_clubs"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "videoandgames",
      "title": "Videos & Video Game Rental",
      "parents": [
        "media"
      ]
    },
    {
      "alias": "videofilmproductions",
      "title": "Video/Film Production",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "videogamestores",
      "title": "Video Game Stores",
      "parents": [
        "media"
      ]
    },
    {
      "alias": "videographers",
      "title": "Videographers",
      "parents": [
        "eventservices"
      ]
    },
    {
      "alias": "vietnamese",
      "title": "Vietnamese",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "vintage",
      "title": "Used, Vintage & Consignment",
      "parents": [
        "fashion"
      ]
    },
    {
      "alias": "vinyl_records",
      "title": "Vinyl Records",
      "parents": [
        "media"
      ]
    },
    {
      "alias": "vinylsiding",
      "title": "Siding",
      "parents": [
        "homeservices"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "SE",
        "DK",
        "CA",
        "NZ",
        "US",
        "IE",
        "NO",
        "GB",
        "SG"
      ]
    },
    {
      "alias": "virtualrealitycenters",
      "title": "Virtual Reality Centers",
      "parents": [
        "arts"
      ]
    },
    {
      "alias": "visitorcenters",
      "title": "Visitor Centers",
      "parents": [
        "travelservices"
      ]
    },
    {
      "alias": "vitaminssupplements",
      "title": "Vitamins & Supplements",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "MY",
        "PH"
      ]
    },
    {
      "alias": "vocalcoach",
      "title": "Vocal Coach",
      "parents": [
        "musicinstrumentservices"
      ]
    },
    {
      "alias": "vocation",
      "title": "Vocational & Technical School",
      "parents": [
        "specialtyschools"
      ]
    },
    {
      "alias": "volleyball",
      "title": "Volleyball",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "AU",
        "SE",
        "DK",
        "JP",
        "AT",
        "NZ",
        "BR",
        "DE",
        "NO",
        "SG",
        "FR",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "waffles",
      "title": "Waffles",
      "parents": [
        "restaurants"
      ]
    },
    {
      "alias": "waldorfschools",
      "title": "Waldorf Schools",
      "parents": [
        "education"
      ],
      "country_blacklist": [
        "FI"
      ]
    },
    {
      "alias": "walkinclinics",
      "title": "Walk-in Clinics",
      "parents": [
        "medcenters"
      ],
      "country_blacklist": [
        "IT",
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "walkingtours",
      "title": "Walking Tours",
      "parents": [
        "tours"
      ]
    },
    {
      "alias": "wallpapering",
      "title": "Wallpapering",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "watch_repair",
      "title": "Watch Repair",
      "parents": [
        "localservices"
      ]
    },
    {
      "alias": "watches",
      "title": "Watches",
      "parents": [
        "shopping"
      ]
    },
    {
      "alias": "waterdelivery",
      "title": "Water Delivery",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "HK",
        "MY",
        "BR",
        "PH",
        "CA",
        "US"
      ]
    },
    {
      "alias": "waterheaterinstallrepair",
      "title": "Water Heater Installation/Repair",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "waterparks",
      "title": "Water Parks",
      "parents": [
        "active"
      ],
      "country_blacklist": [
        "HK",
        "MY",
        "AU",
        "AR",
        "AT",
        "NZ",
        "CH",
        "CL",
        "IE",
        "DE",
        "GB",
        "FI"
      ]
    },
    {
      "alias": "waterproofing",
      "title": "Waterproofing",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "waterpurification",
      "title": "Water Purification Services",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "waterstores",
      "title": "Water Stores",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "US",
        "CA",
        "MX",
        "BR"
      ]
    },
    {
      "alias": "watersuppliers",
      "title": "Water Suppliers",
      "parents": [
        "utilities"
      ]
    },
    {
      "alias": "watertaxis",
      "title": "Water Taxis",
      "parents": [
        "transport"
      ],
      "country_whitelist": [
        "MX",
        "IE",
        "AU",
        "GB",
        "NZ",
        "IT"
      ]
    },
    {
      "alias": "waxing",
      "title": "Waxing",
      "parents": [
        "hairremoval"
      ]
    },
    {
      "alias": "web_design",
      "title": "Web Design",
      "parents": [
        "professional"
      ]
    },
    {
      "alias": "wedding_planning",
      "title": "Wedding Planning",
      "parents": [
        "eventservices"
      ]
    },
    {
      "alias": "weddingchappels",
      "title": "Wedding Chapels",
      "parents": [
        "eventservices"
      ],
      "country_whitelist": [
        "US",
        "JP",
        "AU"
      ]
    },
    {
      "alias": "weightlosscenters",
      "title": "Weight Loss Centers",
      "parents": [
        "health"
      ]
    },
    {
      "alias": "welldrilling",
      "title": "Well Drilling",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "IT",
        "CH",
        "CL",
        "CZ",
        "PL",
        "MX",
        "MY",
        "DK",
        "PH",
        "AR",
        "AT",
        "US",
        "ES",
        "BR",
        "DE",
        "NO"
      ]
    },
    {
      "alias": "westernjapanese",
      "title": "Western Style Japanese Food",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "TW",
        "JP",
        "SG"
      ]
    },
    {
      "alias": "whalewatchingtours",
      "title": "Whale Watching Tours",
      "parents": [
        "tours"
      ],
      "country_blacklist": [
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "wheelrimrepair",
      "title": "Wheel & Rim Repair",
      "parents": [
        "auto"
      ],
      "country_whitelist": [
        "US",
        "IT",
        "PT"
      ]
    },
    {
      "alias": "whiskeybars",
      "title": "Whiskey Bars",
      "parents": [
        "bars"
      ],
      "country_blacklist": [
        "IT"
      ]
    },
    {
      "alias": "wholesale_stores",
      "title": "Wholesale Stores",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "wholesalers",
      "title": "Wholesalers",
      "parents": [
        "professional"
      ],
      "country_blacklist": [
        "HK",
        "MY",
        "SE",
        "PH",
        "PT",
        "TW",
        "BR",
        "TR",
        "FR",
        "CZ",
        "FI"
      ]
    },
    {
      "alias": "wigs",
      "title": "Wigs",
      "parents": [
        "shopping"
      ],
      "country_blacklist": [
        "HK",
        "MY",
        "SE",
        "JP",
        "PH",
        "AT",
        "NZ",
        "CH",
        "IE",
        "TW",
        "BR",
        "GB",
        "TR",
        "SG"
      ]
    },
    {
      "alias": "wildlifecontrol",
      "title": "Wildlife Control",
      "parents": [
        "localservices"
      ],
      "country_blacklist": [
        "JP"
      ]
    },
    {
      "alias": "wildlifehunting",
      "title": "Wildlife Hunting Ranges",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "US"
      ]
    },
    {
      "alias": "willstrustsprobates",
      "title": "Wills, Trusts, & Probates",
      "parents": [
        "estateplanning"
      ],
      "country_whitelist": [
        "NL",
        "BE",
        "AU",
        "CA",
        "NZ",
        "US",
        "IT",
        "IE",
        "GB",
        "SG"
      ]
    },
    {
      "alias": "windowsinstallation",
      "title": "Windows Installation",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "windowwashing",
      "title": "Window Washing",
      "parents": [
        "homeservices"
      ]
    },
    {
      "alias": "windshieldinstallrepair",
      "title": "Windshield Installation & Repair",
      "parents": [
        "auto"
      ],
      "country_blacklist": [
        "DE",
        "AT",
        "CH",
        "CZ"
      ]
    },
    {
      "alias": "wine_bars",
      "title": "Wine Bars",
      "parents": [
        "bars"
      ]
    },
    {
      "alias": "wineries",
      "title": "Wineries",
      "parents": [
        "food",
        "arts"
      ],
      "country_blacklist": [
        "FI"
      ]
    },
    {
      "alias": "winetasteclasses",
      "title": "Wine Tasting Classes",
      "parents": [
        "tastingclasses"
      ]
    },
    {
      "alias": "winetastingroom",
      "title": "Wine Tasting Room",
      "parents": [
        "wineries"
      ]
    },
    {
      "alias": "winetours",
      "title": "Wine Tours",
      "parents": [
        "tours"
      ]
    },
    {
      "alias": "wok",
      "title": "Wok",
      "parents": [
        "restaurants"
      ],
      "country_blacklist": [
        "HK",
        "AU",
        "JP",
        "AR",
        "CA",
        "NZ",
        "US",
        "IT",
        "IE",
        "TW",
        "BR",
        "GB",
        "TR",
        "SG",
        "PL"
      ]
    },
    {
      "alias": "womenscloth",
      "title": "Women's Clothing",
      "parents": [
        "fashion"
      ]
    },
    {
      "alias": "workerscomplaw",
      "title": "Workers Compensation Law",
      "parents": [
        "lawyers"
      ],
      "country_blacklist": [
        "FR",
        "AT",
        "CH",
        "DE"
      ]
    },
    {
      "alias": "wraps",
      "title": "Wraps",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "SE",
        "NO",
        "TR",
        "DK",
        "PT",
        "CZ",
        "US"
      ]
    },
    {
      "alias": "xmasmarkets",
      "title": "Christmas Markets",
      "parents": [
        "festivals"
      ],
      "country_blacklist": [
        "IE",
        "BR",
        "TR",
        "SG",
        "CA",
        "NZ",
        "US"
      ]
    },
    {
      "alias": "yakiniku",
      "title": "Yakiniku",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "TW",
        "JP",
        "SG"
      ]
    },
    {
      "alias": "yakitori",
      "title": "Yakitori",
      "parents": [
        "japanese"
      ],
      "country_whitelist": [
        "TW",
        "JP",
        "SG"
      ]
    },
    {
      "alias": "yelpevents",
      "title": "Yelp Events",
      "parents": [
        "localflavor"
      ]
    },
    {
      "alias": "yoga",
      "title": "Yoga",
      "parents": [
        "fitness"
      ]
    },
    {
      "alias": "youth_club",
      "title": "Youth Club",
      "parents": [
        "localservices"
      ],
      "country_whitelist": [
        "NL",
        "AU",
        "SE",
        "NZ",
        "IT",
        "CH",
        "SG",
        "CZ",
        "BE",
        "DK",
        "PT",
        "CA",
        "IE",
        "DE",
        "NO",
        "GB",
        "FR",
        "FI"
      ]
    },
    {
      "alias": "yucatan",
      "title": "Yucatan",
      "parents": [
        "mexican"
      ],
      "country_whitelist": [
        "MX"
      ]
    },
    {
      "alias": "yugoslav",
      "title": "Yugoslav",
      "parents": [
        "restaurants"
      ],
      "country_whitelist": [
        "BE",
        "AU",
        "SE",
        "FR",
        "PT",
        "IT"
      ]
    },
    {
      "alias": "zapiekanka",
      "title": "Zapiekanka",
      "parents": [
        "food"
      ],
      "country_whitelist": [
        "PL"
      ]
    },
    {
      "alias": "zipline",
      "title": "Ziplining",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "zoos",
      "title": "Zoos",
      "parents": [
        "active"
      ]
    },
    {
      "alias": "zorbing",
      "title": "Zorbing",
      "parents": [
        "active"
      ],
      "country_whitelist": [
        "ES",
        "MX",
        "PT",
        "NZ",
        "CZ",
        "US"
      ]
    }
  ]
};

export default categories;
