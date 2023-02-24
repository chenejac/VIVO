/* $This file is distributed under the terms of the license in LICENSE$ */
var DISCIPLINES = {
    "11": {
        "labelLongitude": -154.60900000000001,
        "color": "#A819FA",
        "image": "mathphys.png",
        "longitude": -129.375,
        "label": "Math & Physics",
        "labelLatitude": 82.645889999999994,
        "latitude": 81.850399999999993
    },
    "10": {
        "labelLongitude": 30.34375,
        "color": "#B8150B",
        "image": "infect.png",
        "longitude": 47.109375,
        "label": "Infectious Diseases",
        "labelLatitude": 49.801349999999999,
        "latitude": 55.881900000000002
    },
    "13": {
        "labelLongitude": 120.0,
        "color": "#FFFF00",
        "image": "socsci.png",
        "longitude": 164.53125,
        "label": "Social Sciences",
        "labelLatitude": 46.0,
        "latitude": 61.695430000000002
    },
    "12": {
        "labelLongitude": 101.5,
        "color": "#FF804D",
        "image": "health.png",
        "longitude": 76.641000000000005,
        "label": "Health Professionals",
        "labelLatitude": 84.591988000000001,
        "latitude": 83.217100000000002
    },
    "1": {
        "labelLongitude": 10.4375,
        "color": "#379908",
        "image": "bio.png",
        "longitude": -19.6875,
        "label": "Biology",
        "labelLatitude": -20.576339999999998,
        "latitude": 1.593542
    },
    "3": {
        "labelLongitude": 30.914000000000001,
        "color": "#FF0000",
        "image": "medspec.png",
        "longitude": 44.296875,
        "label": "Medical Specialties",
        "labelLatitude": 78.219527999999997,
        "latitude": 71.360810000000001
    },
    "2": {
        "labelLongitude": -35.375,
        "color": "#00FF80",
        "image": "biotech.png",
        "longitude": 0.0,
        "label": "Biotechnology",
        "labelLatitude": 64.093400000000003,
        "latitude": 48.582349999999998
    },
    "5": {
        "labelLongitude": -42.890000000000001,
        "color": "#0000FF",
        "image": "chem.png",
        "longitude": -45.703099999999999,
        "label": "Chemistry",
        "labelLatitude": 85.499639999999999,
        "latitude": 81.648629999999997
    },
    "4": {
        "labelLongitude": -63.719999999999999,
        "color": "#61FFFF",
        "image": "chemeng.png",
        "longitude": -74.53125,
        "label": "Chemical, Mechanical, & Civil Engineering",
        "labelLatitude": 37.326900000000002,
        "latitude": 57.804189999999998
    },
    "7": {
        "labelLongitude": -102.3125,
        "color": "#FF85FF",
        "image": "eecs.png",
        "longitude": -144.140625,
        "label": "Electrical Engineering & Computer Science",
        "labelLatitude": 71.558999999999997,
        "latitude": 75.890950000000004
    },
    "6": {
        "labelLongitude": -75.078000000000003,
        "color": "#A71916",
        "image": "earthsci.png",
        "longitude": -52.734375,
        "label": "Earth Sciences",
        "labelLatitude": -37.3093,
        "latitude": -19.797000000000001
    },
    "9": {
        "labelLongitude": 130.17099999999999,
        "color": "#FFFF80",
        "image": "human.png",
        "longitude": 163.125,
        "label": "Humanities",
        "labelLatitude": -20.454179,
        "latitude": -14.42333
    },
    "8": {
        "labelLongitude": 75.078000000000003,
        "color": "#FFB529",
        "image": "brain.png",
        "longitude": 99.84375,
        "label": "Brain Research",
        "labelLatitude": 64.4636,
        "latitude": 68.724699999999999
    }
};
var SUBDISCIPLINES = {
    "344": {"latitude": 75.320025000000001, "discipline": "4", "longitude": -92.109375, "label": "Printing"},
    "345": {"latitude": 12.554563999999999, "discipline": "1", "longitude": -16.875, "label": "Genetics"},
    "346": {"latitude": 74.402163000000002, "discipline": "4", "longitude": -94.21875, "label": "Industrial Chemistry"},
    "347": {"latitude": 77.617709000000005, "discipline": "12", "longitude": 56.25, "label": "Obesity"},
    "340": {"latitude": 11.178402, "discipline": "1", "longitude": 8.4375, "label": "Parasitology"},
    "341": {"latitude": 54.162433999999998, "discipline": "10", "longitude": -1.40625, "label": "Dairy Science"},
    "342": {"latitude": 42.553080000000001, "discipline": "4", "longitude": -65.390625, "label": "Water Policy"},
    "343": {"latitude": -7.013668, "discipline": "1", "longitude": -38.671875, "label": "Fish Research"},
    "348": {"latitude": -21.943045999999999, "discipline": "9", "longitude": 165.234375, "label": "Literary Criticism"},
    "349": {"latitude": 31.952162000000001, "discipline": "3", "longitude": 40.78125, "label": "Hepatology"},
    "298": {"latitude": 84.865781999999996, "discipline": "12", "longitude": 89.296875, "label": "AIDS Treatment"},
    "299": {
        "latitude": 77.312520000000006,
        "discipline": "7",
        "longitude": -140.625,
        "label": "Wireless Communication"
    },
    "296": {
        "latitude": 67.609221000000005,
        "discipline": "4",
        "longitude": -99.84375,
        "label": "Vehicle System Design"
    },
    "297": {"latitude": 59.888936999999999, "discipline": "3", "longitude": 35.859375, "label": "Transfusion"},
    "294": {"latitude": 27.683527999999999, "discipline": "1", "longitude": -21.09375, "label": "Crop Science"},
    "295": {"latitude": 74.775842999999995, "discipline": "7", "longitude": -148.359375, "label": "Fuzzy Sets"},
    "292": {"latitude": 79.560546000000002, "discipline": "12", "longitude": 74.53125, "label": "Hospice Care"},
    "293": {"latitude": -2.8113709999999998, "discipline": "6", "longitude": -54.140625, "label": "Climatology"},
    "290": {"latitude": 58.447732999999999, "discipline": "13", "longitude": 157.5, "label": "Science Education"},
    "291": {
        "latitude": 74.775842999999995,
        "discipline": "11",
        "longitude": -156.09375,
        "label": "Design & Analysis of Algorithms"
    },
    "199": {"latitude": 82.214217000000005, "discipline": "5", "longitude": -68.203125, "label": "Catalysis"},
    "198": {
        "latitude": 49.382373000000001,
        "discipline": "13",
        "longitude": 168.046875,
        "label": "Political Geography"
    },
    "195": {"latitude": 81.723187999999993, "discipline": "5", "longitude": -23.203125, "label": "Atomic Spectrometry"},
    "194": {"latitude": 80.647035000000002, "discipline": "12", "longitude": 62.578125, "label": "Dental Research"},
    "197": {
        "latitude": 84.865781999999996,
        "discipline": "12",
        "longitude": 63.984375,
        "label": "Public Health Service"
    },
    "196": {"latitude": 16.636192000000001, "discipline": "1", "longitude": -22.5, "label": "Botany"},
    "191": {
        "latitude": 80.872827000000001,
        "discipline": "12",
        "longitude": 63.984375,
        "label": "Prosthetic Dentistry"
    },
    "190": {
        "latitude": 57.704146999999999,
        "discipline": "3",
        "longitude": 33.046875,
        "label": "Clinical Infectious Disease"
    },
    "193": {"latitude": 74.959391999999994, "discipline": "7", "longitude": -139.921875, "label": "Robotic Systems"},
    "192": {"latitude": 79.812302000000003, "discipline": "12", "longitude": 60.46875, "label": "Orthodontics"},
    "270": {
        "latitude": 53.330872999999997,
        "discipline": "13",
        "longitude": -179.296875,
        "label": "Agricultural Economics"
    },
    "271": {"latitude": 65.366837000000004, "discipline": "13", "longitude": 143.4375, "label": "Social Work"},
    "272": {"latitude": 83.753911000000002, "discipline": "12", "longitude": 80.15625, "label": "Medical Insurance"},
    "273": {
        "latitude": 81.823794000000007,
        "discipline": "4",
        "longitude": -76.640625,
        "label": "Fluid Phase Equilibrium"
    },
    "274": {"latitude": 52.052489999999999, "discipline": "2", "longitude": 7.734375, "label": "Biotechnology Trends"},
    "275": {"latitude": -15.961328999999999, "discipline": "6", "longitude": -58.359375, "label": "Air Quality"},
    "276": {
        "latitude": 68.911005000000003,
        "discipline": "7",
        "longitude": -168.046875,
        "label": "Search Engines; Web Crawling"
    },
    "277": {"latitude": 82.214217000000005, "discipline": "5", "longitude": -78.75, "label": "Colloid"},
    "278": {
        "latitude": 76.351895999999996,
        "discipline": "12",
        "longitude": 61.875,
        "label": "Applied Physiology; Muscle"
    },
    "279": {"latitude": -21.943045999999999, "discipline": "9", "longitude": 164.53125, "label": "Biblical Literature"},
    "524": {"latitude": -6.3152990000000004, "discipline": "1", "longitude": -23.90625, "label": "Mammals"},
    "525": {"latitude": 30.751277999999999, "discipline": "3", "longitude": 54.84375, "label": "Impotence"},
    "526": {"latitude": 76.840816000000004, "discipline": "7", "longitude": -144.140625, "label": "Fuzzy Logic"},
    "527": {"latitude": 58.813741999999998, "discipline": "13", "longitude": 168.75, "label": "Tourism"},
    "520": {"latitude": 2.8113709999999998, "discipline": "1", "longitude": -35.859375, "label": "Rangeland Ecology"},
    "521": {"latitude": 81.518271999999996, "discipline": "4", "longitude": -100.546875, "label": "Welding"},
    "522": {
        "latitude": 74.402163000000002,
        "discipline": "13",
        "longitude": -168.75,
        "label": "Reliability Engineering"
    },
    "523": {
        "latitude": 48.458351999999998,
        "discipline": "10",
        "longitude": 18.984375,
        "label": "Molecular Biology Methods"
    },
    "528": {"latitude": -14.604846999999999, "discipline": "1", "longitude": -19.6875, "label": "Aquatic Disease"},
    "529": {
        "latitude": -23.885838,
        "discipline": "6",
        "longitude": -63.28125,
        "label": "Geographic Information Science"
    },
    "449": {
        "latitude": 38.822591000000003,
        "discipline": "2",
        "longitude": 1.40625,
        "label": "Systematics & Evolutionary Microbiology"
    },
    "448": {"latitude": 78.490551999999994, "discipline": "4", "longitude": -97.03125, "label": "Sensors & Actuators"},
    "443": {
        "latitude": 55.776572999999999,
        "discipline": "10",
        "longitude": 23.90625,
        "label": "Sexually Transmitted Diseases"
    },
    "442": {"latitude": 38.822591000000003, "discipline": "4", "longitude": -75.9375, "label": "Applied Geophysics"},
    "441": {"latitude": 59.534317999999999, "discipline": "10", "longitude": 9.84375, "label": "Peptides"},
    "440": {"latitude": 76.679784999999995, "discipline": "4", "longitude": -88.59375, "label": "Digital Printing"},
    "447": {"latitude": 83.277704999999997, "discipline": "12", "longitude": 88.59375, "label": "Geratric Nursing"},
    "446": {"latitude": 71.965388000000004, "discipline": "7", "longitude": -157.5, "label": "Machine Learning"},
    "445": {"latitude": 65.946472, "discipline": "8", "longitude": 81.5625, "label": "NeuroImmunology"},
    "444": {
        "latitude": 58.813741999999998,
        "discipline": "13",
        "longitude": 156.796875,
        "label": "Engineering Education"
    },
    "108": {
        "latitude": 82.586106000000001,
        "discipline": "11",
        "longitude": -127.265625,
        "label": "Chaos Fractals & Complexity"
    },
    "109": {
        "latitude": 12.554563999999999,
        "discipline": "1",
        "longitude": -21.09375,
        "label": "Environmental Contamination"
    },
    "102": {"latitude": 81.823794000000007, "discipline": "4", "longitude": -101.953125, "label": "Alloys"},
    "103": {
        "latitude": 80.647035000000002,
        "discipline": "11",
        "longitude": -116.015625,
        "label": "Astronomy & Astrophysics"
    },
    "100": {"latitude": 84.673513, "discipline": "12", "longitude": 85.78125, "label": "Employee Health Benefit Plans"},
    "101": {"latitude": 63.548552000000001, "discipline": "3", "longitude": 51.328125, "label": "Transplantation"},
    "106": {"latitude": 83.676942999999994, "discipline": "12", "longitude": 59.0625, "label": "Drug Discovery"},
    "107": {"latitude": 39.909736000000002, "discipline": "10", "longitude": -2.109375, "label": "Animal Science"},
    "104": {"latitude": 72.816074, "discipline": "12", "longitude": 112.5, "label": "Substance-abuse Treatment"},
    "105": {
        "latitude": 64.472793999999993,
        "discipline": "13",
        "longitude": 174.375,
        "label": "Research Policy; Technology Management"
    },
    "39": {"latitude": 78.903929000000005, "discipline": "3", "longitude": 45.0, "label": "Diabetes Care"},
    "38": {
        "latitude": 82.308892999999998,
        "discipline": "11",
        "longitude": -106.875,
        "label": "Semiconducting Materials"
    },
    "33": {
        "latitude": 64.168107000000006,
        "discipline": "3",
        "longitude": 30.234375,
        "label": "Toxicology Applied Pharmacology"
    },
    "32": {"latitude": 21.943045999999999, "discipline": "3", "longitude": 50.625, "label": "Digestion"},
    "31": {"latitude": 62.267923000000003, "discipline": "3", "longitude": 45.0, "label": "Developmental Biology"},
    "30": {"latitude": -7.013668, "discipline": "1", "longitude": -38.671875, "label": "Marine Biology"},
    "37": {"latitude": 81.823794000000007, "discipline": "5", "longitude": 5.625, "label": "Pharmaceutical Research"},
    "36": {"latitude": 76.184995000000001, "discipline": "4", "longitude": -84.375, "label": "Chemical Engineering"},
    "35": {"latitude": 83.111070999999995, "discipline": "5", "longitude": -49.921875, "label": "Inorganic Chemistry"},
    "34": {
        "latitude": 63.548552000000001,
        "discipline": "4",
        "longitude": -93.515625,
        "label": "Transportation Research"
    },
    "438": {"latitude": 52.052489999999999, "discipline": "13", "longitude": 171.5625, "label": "Regional Studies"},
    "439": {
        "latitude": 81.823794000000007,
        "discipline": "4",
        "longitude": -102.65625,
        "label": "Electrochemical Development"
    },
    "436": {"latitude": 68.399180000000001, "discipline": "4", "longitude": -88.59375, "label": "Construction"},
    "437": {"latitude": 56.944974000000002, "discipline": "4", "longitude": -82.265625, "label": "Dams & Tunnels"},
    "434": {
        "latitude": 51.179343000000003,
        "discipline": "13",
        "longitude": 169.453125,
        "label": "Environmental Policy"
    },
    "435": {"latitude": 80.532071000000002, "discipline": "11", "longitude": -145.546875, "label": "Topology"},
    "432": {"latitude": 82.214217000000005, "discipline": "5", "longitude": -47.109375, "label": "Liquid Crystals"},
    "433": {"latitude": 76.840816000000004, "discipline": "7", "longitude": -144.140625, "label": "Control Systems"},
    "430": {
        "latitude": 71.965388000000004,
        "discipline": "7",
        "longitude": -146.953125,
        "label": "User Interface Design"
    },
    "431": {"latitude": 47.040182000000001, "discipline": "13", "longitude": 168.046875, "label": "Public Policy"},
    "339": {
        "latitude": 83.111070999999995,
        "discipline": "5",
        "longitude": -32.34375,
        "label": "Environmental Chemistry"
    },
    "338": {
        "latitude": -14.604846999999999,
        "discipline": "6",
        "longitude": -62.578125,
        "label": "Geology (International)"
    },
    "335": {
        "latitude": 44.087584999999997,
        "discipline": "4",
        "longitude": -67.5,
        "label": "Hydrology Soil Contamination"
    },
    "334": {
        "latitude": -31.952162000000001,
        "discipline": "9",
        "longitude": 172.96875,
        "label": "Contemporary Philosophy"
    },
    "337": {
        "latitude": 81.823794000000007,
        "discipline": "11",
        "longitude": -144.84375,
        "label": "Mathematics Research"
    },
    "336": {"latitude": 67.339860999999999, "discipline": "13", "longitude": 132.1875, "label": "Child Abuse"},
    "331": {"latitude": 77.617709000000005, "discipline": "7", "longitude": -153.984375, "label": "Logic"},
    "330": {"latitude": 78.767792, "discipline": "7", "longitude": -131.484375, "label": "Test Equipment"},
    "333": {"latitude": 77.157162999999997, "discipline": "4", "longitude": -82.265625, "label": "Textiles"},
    "332": {"latitude": 78.903929000000005, "discipline": "4", "longitude": -82.265625, "label": "Pulp Paper Science"},
    "6": {
        "latitude": 65.366837000000004,
        "discipline": "8",
        "longitude": 72.421875,
        "label": "Neuroscience; Molecular & Cellular"
    },
    "99": {"latitude": 75.320025000000001, "discipline": "13", "longitude": 177.890625, "label": "BioStatistics"},
    "98": {
        "latitude": 72.607119999999995,
        "discipline": "4",
        "longitude": -108.28125,
        "label": "Automotive Engineering"
    },
    "91": {"latitude": 59.534317999999999, "discipline": "3", "longitude": 30.9375, "label": "AIDS Research"},
    "90": {"latitude": 81.518271999999996, "discipline": "4", "longitude": -97.734375, "label": "Ceramics"},
    "93": {"latitude": 84.474064999999996, "discipline": "12", "longitude": 87.890625, "label": "Medical Records"},
    "92": {"latitude": 68.138852, "discipline": "4", "longitude": -109.6875, "label": "Military Aviation"},
    "95": {"latitude": 52.482779999999998, "discipline": "13", "longitude": 179.296875, "label": "Applied Economics"},
    "94": {"latitude": 74.211983000000004, "discipline": "13", "longitude": -174.375, "label": "Statistics"},
    "97": {"latitude": -4.2149429999999999, "discipline": "6", "longitude": -55.546875, "label": "Atmospheric Science"},
    "96": {"latitude": 75.497157000000001, "discipline": "7", "longitude": -136.40625, "label": "Automatic Control"},
    "554": {
        "latitude": 55.379109999999997,
        "discipline": "10",
        "longitude": 23.203125,
        "label": "Agricultural Environmental Medicine"
    },
    "551": {"latitude": -9.1020970000000005, "discipline": "1", "longitude": -33.75, "label": "Wetlands"},
    "550": {"latitude": 54.162433999999998, "discipline": "4", "longitude": -82.265625, "label": "Bulk Solid Handling"},
    "553": {"latitude": 72.607119999999995, "discipline": "7", "longitude": -124.453125, "label": "Hydraulics"},
    "552": {"latitude": -21.943045999999999, "discipline": "6", "longitude": -59.0625, "label": "GIS (non English)"},
    "238": {"latitude": 77.312520000000006, "discipline": "3", "longitude": 47.109375, "label": "Diabetes Metabolism"},
    "239": {
        "latitude": 59.534317999999999,
        "discipline": "4",
        "longitude": -79.453125,
        "label": "Geotechnical Engineering"
    },
    "234": {
        "latitude": 59.888936999999999,
        "discipline": "13",
        "longitude": 158.203125,
        "label": "Symbolic Interaction"
    },
    "235": {
        "latitude": 69.411242000000001,
        "discipline": "8",
        "longitude": 124.453125,
        "label": "Child & Adolescent Psychiatry"
    },
    "236": {"latitude": 83.277704999999997, "discipline": "12", "longitude": 83.671875, "label": "General Practice"},
    "237": {
        "latitude": 50.736454999999999,
        "discipline": "13",
        "longitude": 175.078125,
        "label": "Environmental Management"
    },
    "230": {"latitude": -21.943045999999999, "discipline": "9", "longitude": 165.234375, "label": "Hispanic Studies"},
    "231": {"latitude": 7.013668, "discipline": "1", "longitude": -33.046875, "label": "Forest Science"},
    "232": {"latitude": 82.214217000000005, "discipline": "11", "longitude": -118.125, "label": "Plasma Physics"},
    "233": {"latitude": 65.072130000000001, "discipline": "2", "longitude": 4.921875, "label": "Proteomics"},
    "1": {
        "latitude": 59.888936999999999,
        "discipline": "3",
        "longitude": 35.859375,
        "label": "Clinical Cancer Research"
    },
    "146": {"latitude": 54.162433999999998, "discipline": "2", "longitude": 4.921875, "label": "BioInformatics"},
    "147": {
        "latitude": 76.184995000000001,
        "discipline": "4",
        "longitude": -104.765625,
        "label": "Mechanics of Solids & Structures"
    },
    "144": {"latitude": 71.524908999999994, "discipline": "8", "longitude": 94.21875, "label": "Vision"},
    "145": {
        "latitude": 59.888936999999999,
        "discipline": "13",
        "longitude": 168.046875,
        "label": "Communication Research"
    },
    "142": {"latitude": -39.909736000000002, "discipline": "9", "longitude": 163.828125, "label": "Music & Theatre"},
    "143": {"latitude": 66.791909000000004, "discipline": "8", "longitude": 113.203125, "label": "Memory & Cognition"},
    "140": {
        "latitude": 74.775842999999995,
        "discipline": "12",
        "longitude": 64.6875,
        "label": "Alternative Complementary Medicine"
    },
    "141": {
        "latitude": 54.572062000000003,
        "discipline": "4",
        "longitude": -82.265625,
        "label": "Petroleum Engineering"
    },
    "148": {"latitude": 76.679784999999995, "discipline": "3", "longitude": 48.515625, "label": "Pharmacy"},
    "149": {"latitude": -7.013668, "discipline": "6", "longitude": -58.359375, "label": "Geomorphology"},
    "133": {"latitude": 43.068888000000001, "discipline": "10", "longitude": 9.140625, "label": "Veterinary Science"},
    "132": {"latitude": 83.520161999999999, "discipline": "4", "longitude": -82.96875, "label": "Corrosion"},
    "131": {
        "latitude": 8.4071680000000004,
        "discipline": "1",
        "longitude": -9.84375,
        "label": "Pest Management Science"
    },
    "130": {"latitude": 58.813741999999998, "discipline": "3", "longitude": 45.0, "label": "Pathology"},
    "137": {"latitude": 74.402163000000002, "discipline": "7", "longitude": -149.765625, "label": "Neural Networks"},
    "136": {"latitude": 76.840816000000004, "discipline": "7", "longitude": -146.953125, "label": "Image Processing"},
    "135": {"latitude": 69.411242000000001, "discipline": "3", "longitude": 32.34375, "label": "Stem Cells"},
    "134": {
        "latitude": 63.233626999999998,
        "discipline": "13",
        "longitude": 158.203125,
        "label": "Teacher Education; Evaluation"
    },
    "494": {"latitude": 84.541360999999995, "discipline": "12", "longitude": 81.5625, "label": "Medical Libraries"},
    "495": {"latitude": -31.952162000000001, "discipline": "9", "longitude": 164.53125, "label": "Opera"},
    "139": {"latitude": 68.399180000000001, "discipline": "3", "longitude": 59.0625, "label": "Intensive Care"},
    "138": {"latitude": 83.520161999999999, "discipline": "12", "longitude": 99.84375, "label": "Nursing Education"},
    "490": {"latitude": 73.428424000000007, "discipline": "3", "longitude": 41.484375, "label": "Menopause"},
    "491": {"latitude": 82.765372999999997, "discipline": "5", "longitude": -44.296875, "label": "Chemistry (Russia)"},
    "492": {"latitude": 49.837981999999997, "discipline": "13", "longitude": 166.640625, "label": "GeoPolitics"},
    "493": {"latitude": -10.487812, "discipline": "6", "longitude": -57.65625, "label": "Glaciology"},
    "24": {"latitude": 76.351895999999996, "discipline": "3", "longitude": 47.8125, "label": "Dermatology"},
    "25": {"latitude": 66.791909000000004, "discipline": "3", "longitude": 54.84375, "label": "Kidney"},
    "26": {"latitude": 62.267923000000003, "discipline": "3", "longitude": 56.953125, "label": "Pharmacology Science"},
    "27": {"latitude": 38.822591000000003, "discipline": "13", "longitude": 167.34375, "label": "Law"},
    "20": {"latitude": 49.837981999999997, "discipline": "10", "longitude": 25.3125, "label": "Virology"},
    "21": {"latitude": 31.952162000000001, "discipline": "1", "longitude": -7.734375, "label": "Plant Physiology"},
    "22": {
        "latitude": 62.593341000000002,
        "discipline": "3",
        "longitude": 47.8125,
        "label": "Allergy & Clinical Immunology"
    },
    "23": {"latitude": 81.823794000000007, "discipline": "4", "longitude": -102.65625, "label": "Material Science"},
    "28": {"latitude": 63.233626999999998, "discipline": "8", "longitude": 64.6875, "label": "Medical Imaging"},
    "29": {"latitude": 52.052489999999999, "discipline": "10", "longitude": 10.546875, "label": "Bacteriology"},
    "407": {"latitude": -15.961328999999999, "discipline": "9", "longitude": 165.234375, "label": "Ethics"},
    "406": {"latitude": 79.171334999999999, "discipline": "4", "longitude": -99.140625, "label": "Metallurgy"},
    "405": {"latitude": 65.072130000000001, "discipline": "3", "longitude": 56.25, "label": "Clinical Rehabilitation"},
    "404": {"latitude": 3.5134210000000001, "discipline": "1", "longitude": -33.75, "label": "Ecological Modeling"},
    "403": {
        "latitude": 58.447732999999999,
        "discipline": "13",
        "longitude": 167.34375,
        "label": "Human Resource Management"
    },
    "402": {"latitude": 82.214217000000005, "discipline": "12", "longitude": 26.015625, "label": "Molecular Medicine"},
    "401": {"latitude": 2.8113709999999998, "discipline": "1", "longitude": -16.875, "label": "Sociobiology"},
    "400": {
        "latitude": 73.428424000000007,
        "discipline": "7",
        "longitude": -139.21875,
        "label": "Chip Design & Manufacturing"
    },
    "409": {"latitude": 74.402163000000002, "discipline": "4", "longitude": -121.640625, "label": "Aerospace"},
    "408": {
        "latitude": 66.791909000000004,
        "discipline": "13",
        "longitude": 133.59375,
        "label": "Marital & Family Therapy"
    },
    "379": {"latitude": -14.604846999999999, "discipline": "9", "longitude": 167.34375, "label": "German Studies"},
    "378": {"latitude": 50.736454999999999, "discipline": "3", "longitude": 63.984375, "label": "Radiology"},
    "371": {
        "latitude": 71.074055999999999,
        "discipline": "7",
        "longitude": -153.984375,
        "label": "Functional Programing"
    },
    "370": {"latitude": 78.349411000000003, "discipline": "7", "longitude": -146.25, "label": "Electronic Imaging"},
    "373": {"latitude": 14.604846999999999, "discipline": "1", "longitude": -15.46875, "label": "Plant Disease"},
    "372": {"latitude": 18.646245, "discipline": "1", "longitude": -9.84375, "label": "Applied Genetics"},
    "375": {
        "latitude": 53.330872999999997,
        "discipline": "13",
        "longitude": -179.296875,
        "label": "Developmental Economics"
    },
    "374": {"latitude": 23.885838, "discipline": "6", "longitude": -59.0625, "label": "Water Resource"},
    "377": {
        "latitude": 53.330872999999997,
        "discipline": "13",
        "longitude": -179.296875,
        "label": "International Economics"
    },
    "376": {"latitude": 81.723187999999993, "discipline": "11", "longitude": -108.28125, "label": "Nuclear Physics"},
    "393": {
        "latitude": 80.532071000000002,
        "discipline": "11",
        "longitude": -145.546875,
        "label": "Mathematical Science (Russia)"
    },
    "392": {
        "latitude": 81.201419999999999,
        "discipline": "11",
        "longitude": -145.546875,
        "label": "Optimization Theory"
    },
    "88": {
        "latitude": 84.267172000000002,
        "discipline": "5",
        "longitude": -77.34375,
        "label": "Computational Chemistry"
    },
    "89": {"latitude": 58.813741999999998, "discipline": "3", "longitude": 58.359375, "label": "Surgery"},
    "397": {"latitude": 83.753911000000002, "discipline": "12", "longitude": 83.671875, "label": "Rural Health Care"},
    "396": {
        "latitude": 81.518271999999996,
        "discipline": "4",
        "longitude": -100.546875,
        "label": "Materials Processing"
    },
    "395": {
        "latitude": 73.226699999999994,
        "discipline": "7",
        "longitude": -146.953125,
        "label": "Security; Cryptography"
    },
    "394": {"latitude": 55.776572999999999, "discipline": "10", "longitude": 37.265625, "label": "Gene Therapy"},
    "82": {"latitude": 75.497157000000001, "discipline": "3", "longitude": 40.78125, "label": "Clinical Endocrinology"},
    "83": {"latitude": 78.767792, "discipline": "3", "longitude": 42.1875, "label": "Dietetics"},
    "80": {"latitude": 76.840816000000004, "discipline": "12", "longitude": 57.65625, "label": "Hypertension"},
    "81": {
        "latitude": 55.776572999999999,
        "discipline": "3",
        "longitude": 53.4375,
        "label": "Human Molecular Genetics"
    },
    "86": {"latitude": 73.428424000000007, "discipline": "4", "longitude": -98.4375, "label": "Gas Turbines"},
    "87": {"latitude": -12.554563999999999, "discipline": "6", "longitude": -53.4375, "label": "Remote Sensing"},
    "84": {"latitude": 54.162433999999998, "discipline": "10", "longitude": 18.28125, "label": "Clinical Microbiology"},
    "85": {"latitude": 81.518271999999996, "discipline": "12", "longitude": 63.984375, "label": "Hospital Pharmacy"},
    "7": {
        "latitude": 70.140364000000005,
        "discipline": "3",
        "longitude": 61.171875,
        "label": "Anesthetics & Analgesics"
    },
    "245": {
        "latitude": 43.068888000000001,
        "discipline": "4",
        "longitude": -64.6875,
        "label": "Water Quality & Resource Management"
    },
    "244": {
        "latitude": 68.911005000000003,
        "discipline": "13",
        "longitude": 141.328125,
        "label": "Eating Disorders; Sex Roles"
    },
    "247": {"latitude": 68.911005000000003, "discipline": "8", "longitude": 104.0625, "label": "Geriatric Psychiatry"},
    "246": {"latitude": 46.073231, "discipline": "13", "longitude": 168.046875, "label": "Ethnic Migration"},
    "241": {"latitude": 68.911005000000003, "discipline": "3", "longitude": 47.8125, "label": "Clinical Chemistry"},
    "240": {"latitude": 81.201419999999999, "discipline": "7", "longitude": -125.15625, "label": "Instrumentation"},
    "243": {"latitude": 71.074055999999999, "discipline": "12", "longitude": 71.015625, "label": "Arthroscopy"},
    "242": {"latitude": 71.074055999999999, "discipline": "4", "longitude": -94.921875, "label": "Fluid Engineering"},
    "249": {"latitude": 72.607119999999995, "discipline": "4", "longitude": -90.703125, "label": "Ore Processing"},
    "248": {"latitude": 71.965388000000004, "discipline": "4", "longitude": -107.578125, "label": "Sound & Vibration"},
    "519": {"latitude": 73.226699999999994, "discipline": "8", "longitude": 99.140625, "label": "Forensic Science"},
    "518": {
        "latitude": 82.494823999999994,
        "discipline": "4",
        "longitude": -101.25,
        "label": "Defects & Diffusion in Materials"
    },
    "511": {"latitude": 47.040182000000001, "discipline": "13", "longitude": 165.9375, "label": "Human Rights"},
    "510": {"latitude": 62.593341000000002, "discipline": "8", "longitude": 77.34375, "label": "Hearing Research"},
    "513": {"latitude": 53.330872999999997, "discipline": "13", "longitude": 178.59375, "label": "Social Economics"},
    "512": {"latitude": 59.534317999999999, "discipline": "3", "longitude": 54.140625, "label": "Lung Cancer"},
    "515": {
        "latitude": 55.379109999999997,
        "discipline": "2",
        "longitude": 2.109375,
        "label": "Biotechnology Bioengineering"
    },
    "514": {"latitude": 65.946472, "discipline": "5", "longitude": -20.390625, "label": "Carbohydrate Research"},
    "517": {"latitude": 81.413933, "discipline": "7", "longitude": -125.15625, "label": "Electronics"},
    "516": {"latitude": 43.068888000000001, "discipline": "13", "longitude": 168.75, "label": "Rural Studies"},
    "458": {"latitude": 72.181804, "discipline": "7", "longitude": -150.46875, "label": "Computer Systems Theory"},
    "459": {"latitude": 69.657086000000007, "discipline": "4", "longitude": -94.21875, "label": "Combustion"},
    "450": {
        "latitude": 78.903929000000005,
        "discipline": "7",
        "longitude": -140.625,
        "label": "Medical Image Processing"
    },
    "451": {"latitude": 81.823794000000007, "discipline": "12", "longitude": 70.3125, "label": "Medical Education"},
    "452": {
        "latitude": 62.593341000000002,
        "discipline": "8",
        "longitude": 70.3125,
        "label": "Magnetic Resonance Imagery"
    },
    "453": {"latitude": 84.865781999999996, "discipline": "12", "longitude": 78.046875, "label": "Hospital Management"},
    "454": {"latitude": 0.70310700000000004, "discipline": "1", "longitude": -6.328125, "label": "Insect Physiology"},
    "455": {"latitude": 78.061988999999997, "discipline": "7", "longitude": -134.296875, "label": "Power Transmission"},
    "456": {"latitude": 55.776572999999999, "discipline": "2", "longitude": -7.734375, "label": "Food Engineering"},
    "457": {"latitude": 77.617709000000005, "discipline": "12", "longitude": 67.5, "label": "Oral Surgery"},
    "179": {"latitude": 84.124972999999997, "discipline": "5", "longitude": -91.40625, "label": "Molecular Physics"},
    "178": {"latitude": 74.775842999999995, "discipline": "12", "longitude": 68.90625, "label": "Biomechanics"},
    "177": {"latitude": 77.157162999999997, "discipline": "4", "longitude": -82.265625, "label": "Wool"},
    "176": {"latitude": 82.765372999999997, "discipline": "11", "longitude": -117.421875, "label": "Optics & Lasers"},
    "175": {
        "latitude": 80.872827000000001,
        "discipline": "7",
        "longitude": -122.34375,
        "label": "Solid State Electronics"
    },
    "174": {"latitude": 68.911005000000003, "discipline": "8", "longitude": 107.578125, "label": "Geriatrics"},
    "173": {
        "latitude": 70.140364000000005,
        "discipline": "13",
        "longitude": -166.640625,
        "label": "Computer-Aided Process Planning"
    },
    "172": {
        "latitude": 31.952162000000001,
        "discipline": "4",
        "longitude": -42.1875,
        "label": "Agricultural Engineering"
    },
    "171": {
        "latitude": 65.072130000000001,
        "discipline": "13",
        "longitude": 172.96875,
        "label": "Leadership & Organizational Behavior"
    },
    "170": {"latitude": -2.8113709999999998, "discipline": "9", "longitude": 165.9375, "label": "American History"},
    "253": {"latitude": 80.297927000000001, "discipline": "7", "longitude": -126.5625, "label": "Dielectrics"},
    "182": {"latitude": -17.978732999999998, "discipline": "9", "longitude": 168.75, "label": "Science History"},
    "183": {"latitude": -21.943045999999999, "discipline": "9", "longitude": 165.9375, "label": "Poetry"},
    "180": {
        "latitude": -4.2149429999999999,
        "discipline": "1",
        "longitude": -20.390625,
        "label": "Comparative Animal Physiology"
    },
    "181": {"latitude": 49.382373000000001, "discipline": "13", "longitude": 165.9375, "label": "Political Science"},
    "186": {"latitude": 77.157162999999997, "discipline": "7", "longitude": -143.4375, "label": "Speech Recognition"},
    "187": {"latitude": 76.184995000000001, "discipline": "4", "longitude": -103.359375, "label": "Fluid Mechanics"},
    "184": {"latitude": 51.179343000000003, "discipline": "3", "longitude": 63.28125, "label": "Nuclear Medicine"},
    "185": {"latitude": 82.765372999999997, "discipline": "5", "longitude": -92.109375, "label": "Nanotechnology"},
    "188": {"latitude": 76.184995000000001, "discipline": "7", "longitude": -149.0625, "label": "Computer Graphics"},
    "189": {"latitude": 77.312520000000006, "discipline": "4", "longitude": -73.125, "label": "Filtration Membrane"},
    "11": {"latitude": 70.844673, "discipline": "8", "longitude": 109.6875, "label": "Affective Disorders"},
    "10": {
        "latitude": 79.812302000000003,
        "discipline": "5",
        "longitude": -54.140625,
        "label": "Macromolecules & Polymers"
    },
    "13": {"latitude": 83.026218999999998, "discipline": "11", "longitude": -106.171875, "label": "Surface Science"},
    "12": {"latitude": 58.447732999999999, "discipline": "3", "longitude": 52.03125, "label": "Oncology"},
    "15": {
        "latitude": 84.124972999999997,
        "discipline": "12",
        "longitude": 85.78125,
        "label": "Hospital Financial Management"
    },
    "14": {"latitude": 79.935918000000001, "discipline": "11", "longitude": -149.0625, "label": "Nonlinear Analysis"},
    "17": {"latitude": 81.518271999999996, "discipline": "12", "longitude": 32.34375, "label": "Occupational Health"},
    "16": {"latitude": 67.339860999999999, "discipline": "3", "longitude": 47.8125, "label": "Rheumatology"},
    "19": {"latitude": 61.606395999999997, "discipline": "3", "longitude": 38.671875, "label": "Leukemia"},
    "18": {"latitude": 83.111070999999995, "discipline": "5", "longitude": -44.296875, "label": "Organic Chemistry"},
    "62": {"latitude": 72.816074, "discipline": "12", "longitude": 69.609375, "label": "Bone Joint Surgery"},
    "322": {"latitude": 79.171334999999999, "discipline": "11", "longitude": -122.34375, "label": "Space Research"},
    "323": {"latitude": -7.013668, "discipline": "1", "longitude": -15.46875, "label": "Entomology"},
    "320": {
        "latitude": 53.330872999999997,
        "discipline": "10",
        "longitude": 28.828125,
        "label": "Mutation; DNA Repair"
    },
    "321": {"latitude": -12.554563999999999, "discipline": "1", "longitude": -24.609375, "label": "Human Evolution"},
    "326": {
        "latitude": 83.676942999999994,
        "discipline": "5",
        "longitude": -35.859375,
        "label": "Computer Aided Molecular Design"
    },
    "327": {"latitude": 60.586967000000001, "discipline": "13", "longitude": 144.84375, "label": "Criminology"},
    "324": {"latitude": 65.946472, "discipline": "8", "longitude": 92.8125, "label": "Epilepsy"},
    "325": {"latitude": 0.70310700000000004, "discipline": "1", "longitude": -29.53125, "label": "Plant Ecology"},
    "328": {"latitude": 70.844673, "discipline": "8", "longitude": 122.34375, "label": "Forensic Psychiatry"},
    "329": {"latitude": 70.844673, "discipline": "13", "longitude": 139.921875, "label": "Personality"},
    "201": {"latitude": 80.647035000000002, "discipline": "4", "longitude": -108.984375, "label": "Machine Tools"},
    "200": {"latitude": 40.446947000000002, "discipline": "3", "longitude": 68.203125, "label": "Radiation Protection"},
    "203": {"latitude": 80.178713999999999, "discipline": "12", "longitude": 59.765625, "label": "Periodontology"},
    "202": {"latitude": 44.590466999999997, "discipline": "10", "longitude": 6.328125, "label": "Veterinary Medicine"},
    "205": {"latitude": 71.074055999999999, "discipline": "3", "longitude": 52.03125, "label": "Thrombosis"},
    "204": {"latitude": 70.140364000000005, "discipline": "3", "longitude": 52.03125, "label": "Birth Defects"},
    "207": {
        "latitude": 82.494823999999994,
        "discipline": "12",
        "longitude": 104.0625,
        "label": "Mental Health Nursing"
    },
    "206": {"latitude": -7.013668, "discipline": "1", "longitude": -35.859375, "label": "Freshwater Biology"},
    "209": {"latitude": -21.943045999999999, "discipline": "9", "longitude": 165.234375, "label": "English Literature"},
    "208": {"latitude": 72.607119999999995, "discipline": "7", "longitude": -157.5, "label": "Artificial Evolution"},
    "77": {"latitude": 71.965388000000004, "discipline": "3", "longitude": 54.140625, "label": "Cardiovascular"},
    "76": {"latitude": 68.399180000000001, "discipline": "3", "longitude": 45.0, "label": "Pediatrics"},
    "75": {
        "latitude": 80.532071000000002,
        "discipline": "5",
        "longitude": -20.390625,
        "label": "Chromatography; Electrophoresis"
    },
    "74": {"latitude": 70.844673, "discipline": "13", "longitude": -167.34375, "label": "Operations Research"},
    "73": {"latitude": 76.184995000000001, "discipline": "12", "longitude": 75.9375, "label": "Sports Medicine"},
    "72": {"latitude": 3.5134210000000001, "discipline": "6", "longitude": -58.359375, "label": "Oceanography"},
    "71": {"latitude": 72.181804, "discipline": "12", "longitude": 127.265625, "label": "Psychoanalysis"},
    "70": {
        "latitude": 75.320025000000001,
        "discipline": "4",
        "longitude": -108.984375,
        "label": "Aeronautics & Astronautics"
    },
    "79": {"latitude": 50.736454999999999, "discipline": "13", "longitude": 177.890625, "label": "Economics"},
    "78": {"latitude": -15.961328999999999, "discipline": "6", "longitude": -51.328125, "label": "Paleobiology"},
    "2": {"latitude": 73.428424000000007, "discipline": "3", "longitude": 59.765625, "label": "Circulation"},
    "542": {
        "latitude": 76.184995000000001,
        "discipline": "12",
        "longitude": 87.1875,
        "label": "Perception Motor Skills"
    },
    "543": {"latitude": 40.446947000000002, "discipline": "13", "longitude": 167.34375, "label": "World Trade; Law"},
    "540": {"latitude": 77.617709000000005, "discipline": "4", "longitude": -74.53125, "label": "Textile Art"},
    "541": {"latitude": -23.885838, "discipline": "9", "longitude": 165.234375, "label": "Italian Studies"},
    "546": {"latitude": 83.026218999999998, "discipline": "5", "longitude": -64.6875, "label": "Paints & Coatings"},
    "547": {"latitude": 83.979259999999996, "discipline": "12", "longitude": 100.546875, "label": "Nursing Theory"},
    "544": {"latitude": -7.013668, "discipline": "1", "longitude": -20.390625, "label": "Insects"},
    "545": {"latitude": -6.3152990000000004, "discipline": "1", "longitude": -28.828125, "label": "Australian Ecology"},
    "8": {"latitude": 52.482779999999998, "discipline": "3", "longitude": 51.328125, "label": "Urology"},
    "548": {"latitude": -12.554563999999999, "discipline": "1", "longitude": -32.34375, "label": "Crustaceans"},
    "549": {"latitude": 79.560546000000002, "discipline": "12", "longitude": 52.03125, "label": "Laser Surgery"},
    "68": {"latitude": 75.497157000000001, "discipline": "12", "longitude": 60.46875, "label": "Retinal Surgery"},
    "120": {"latitude": 18.646245, "discipline": "4", "longitude": -44.296875, "label": "Soil Quality"},
    "121": {
        "latitude": 76.351895999999996,
        "discipline": "7",
        "longitude": -139.21875,
        "label": "Integrated Circuit Design"
    },
    "122": {
        "latitude": -39.909736000000002,
        "discipline": "9",
        "longitude": 179.296875,
        "label": "Philosophy Psychology"
    },
    "123": {
        "latitude": 65.946472,
        "discipline": "13",
        "longitude": 178.59375,
        "label": "Construction & Project Management"
    },
    "124": {"latitude": 67.609221000000005, "discipline": "13", "longitude": 144.84375, "label": "Social Psychology"},
    "125": {
        "latitude": 82.765372999999997,
        "discipline": "11",
        "longitude": -117.421875,
        "label": "High Energy Physics"
    },
    "126": {"latitude": 63.548552000000001, "discipline": "13", "longitude": 171.5625, "label": "Strategic Management"},
    "127": {
        "latitude": 38.822591000000003,
        "discipline": "2",
        "longitude": 14.0625,
        "label": "Genomics & Nucleic Acids"
    },
    "128": {"latitude": 76.351895999999996, "discipline": "4", "longitude": -97.03125, "label": "Heat Transfer"},
    "129": {"latitude": 69.411242000000001, "discipline": "4", "longitude": -82.96875, "label": "Cement & Concrete"},
    "414": {"latitude": 72.607119999999995, "discipline": "12", "longitude": 75.9375, "label": "Trauma"},
    "415": {"latitude": 82.214217000000005, "discipline": "5", "longitude": -34.453125, "label": "Thermal Analysis"},
    "416": {"latitude": 77.312520000000006, "discipline": "4", "longitude": -98.4375, "label": "Solar & Wind Power"},
    "417": {"latitude": 49.837981999999997, "discipline": "4", "longitude": -82.265625, "label": "Ocean Engineering"},
    "410": {"latitude": -14.604846999999999, "discipline": "9", "longitude": 165.234375, "label": "Critical Studies"},
    "411": {"latitude": 56.944974000000002, "discipline": "13", "longitude": 177.890625, "label": "Econometrics"},
    "412": {
        "latitude": 67.609221000000005,
        "discipline": "8",
        "longitude": 103.359375,
        "label": "Neuroscience Methods"
    },
    "413": {"latitude": -2.8113709999999998, "discipline": "6", "longitude": -65.390625, "label": "Mineralogy"},
    "498": {"latitude": 11.178402, "discipline": "13", "longitude": 159.609375, "label": "Pragmatics & Discourse"},
    "418": {
        "latitude": 61.606395999999997,
        "discipline": "13",
        "longitude": 146.953125,
        "label": "Educational Psychology"
    },
    "419": {"latitude": 7.013668, "discipline": "1", "longitude": -23.90625, "label": "Mycology"},
    "499": {
        "latitude": 54.572062000000003,
        "discipline": "10",
        "longitude": 17.578125,
        "label": "Reproduction Veterinary"
    },
    "319": {
        "latitude": 57.704146999999999,
        "discipline": "3",
        "longitude": 55.546875,
        "label": "Clinical Medicine (translated)"
    },
    "318": {
        "latitude": 71.524908999999994,
        "discipline": "12",
        "longitude": 118.125,
        "label": "Mental Health Assessment"
    },
    "313": {"latitude": 72.607119999999995, "discipline": "12", "longitude": 74.53125, "label": "Pain"},
    "312": {"latitude": 67.339860999999999, "discipline": "13", "longitude": 131.484375, "label": "Child Development"},
    "311": {
        "latitude": 81.723187999999993,
        "discipline": "12",
        "longitude": 47.109375,
        "label": "Medical Screening & Epidemiology"
    },
    "310": {
        "latitude": 83.676942999999994,
        "discipline": "5",
        "longitude": -82.265625,
        "label": "Chemistry & Material Science"
    },
    "317": {"latitude": 76.351895999999996, "discipline": "7", "longitude": -143.4375, "label": "Pattern Recognition"},
    "316": {"latitude": 58.813741999999998, "discipline": "4", "longitude": -82.265625, "label": "Safety Management"},
    "315": {"latitude": 17.978732999999998, "discipline": "1", "longitude": -31.640625, "label": "Soil Analysis"},
    "314": {"latitude": 58.447732999999999, "discipline": "13", "longitude": 168.75, "label": "Public Administration"},
    "496": {"latitude": 57.704146999999999, "discipline": "13", "longitude": 156.09375, "label": "Education"},
    "497": {"latitude": 73.428424000000007, "discipline": "4", "longitude": -103.359375, "label": "Acoustics"},
    "3": {"latitude": 74.211983000000004, "discipline": "7", "longitude": -152.578125, "label": "Data Mining"},
    "368": {"latitude": 58.447732999999999, "discipline": "4", "longitude": -108.984375, "label": "Naval Architecture"},
    "369": {
        "latitude": -0.70310700000000004,
        "discipline": "1",
        "longitude": -42.890625,
        "label": "Environmental Microbiology"
    },
    "366": {"latitude": 74.959391999999994, "discipline": "3", "longitude": 42.890625, "label": "Eye"},
    "367": {"latitude": 74.959391999999994, "discipline": "12", "longitude": 116.015625, "label": "Addictive Behavior"},
    "364": {"latitude": -12.554563999999999, "discipline": "6", "longitude": -61.875, "label": "Geodesy"},
    "365": {"latitude": 84.474064999999996, "discipline": "5", "longitude": -77.34375, "label": "Surfactants"},
    "362": {"latitude": 52.482779999999998, "discipline": "4", "longitude": -73.125, "label": "Water Utilities"},
    "363": {
        "latitude": -14.604846999999999,
        "discipline": "6",
        "longitude": -62.578125,
        "label": "Sedimentary Geology"
    },
    "360": {"latitude": 52.052489999999999, "discipline": "13", "longitude": 174.375, "label": "Financial Accounting"},
    "361": {
        "latitude": 49.382373000000001,
        "discipline": "2",
        "longitude": -8.4375,
        "label": "Microbiology Biotechnology"
    },
    "380": {"latitude": -19.973348999999999, "discipline": "9", "longitude": 163.828125, "label": "Medieval History"},
    "381": {
        "latitude": -39.909736000000002,
        "discipline": "9",
        "longitude": 179.296875,
        "label": "Philosophy of Education"
    },
    "382": {
        "latitude": 61.606395999999997,
        "discipline": "4",
        "longitude": -104.765625,
        "label": "Oceanographic Instrumentation"
    },
    "383": {"latitude": 46.073231, "discipline": "13", "longitude": 168.75, "label": "Foreign Policy"},
    "384": {"latitude": 21.943045999999999, "discipline": "3", "longitude": 50.625, "label": "Gut"},
    "385": {
        "latitude": 81.723187999999993,
        "discipline": "7",
        "longitude": -126.5625,
        "label": "Microwaves; Radio Frequencies"
    },
    "386": {"latitude": 67.339860999999999, "discipline": "13", "longitude": 134.296875, "label": "School Psychology"},
    "387": {"latitude": 54.572062000000003, "discipline": "10", "longitude": 29.53125, "label": "Vaccines"},
    "388": {"latitude": 47.040182000000001, "discipline": "13", "longitude": 171.5625, "label": "Environmental Law"},
    "389": {"latitude": 78.903929000000005, "discipline": "5", "longitude": -15.46875, "label": "Mass Spectrometry"},
    "60": {"latitude": 76.679784999999995, "discipline": "4", "longitude": -88.59375, "label": "Pulp & Paper"},
    "61": {"latitude": -12.554563999999999, "discipline": "6", "longitude": -62.578125, "label": "Seismology"},
    "258": {"latitude": 72.607119999999995, "discipline": "3", "longitude": 56.25, "label": "Electrocardiography"},
    "259": {
        "latitude": 49.837981999999997,
        "discipline": "13",
        "longitude": 176.484375,
        "label": "International Development"
    },
    "64": {"latitude": 80.297927000000001, "discipline": "11", "longitude": -146.953125, "label": "Algebra"},
    "65": {"latitude": 80.872827000000001, "discipline": "7", "longitude": -127.96875, "label": "Antenna"},
    "66": {"latitude": 78.767792, "discipline": "7", "longitude": -134.296875, "label": "Circuit Systems"},
    "67": {"latitude": 83.676942999999994, "discipline": "12", "longitude": 95.625, "label": "Nursing Specialists"},
    "252": {"latitude": 56.559482000000003, "discipline": "3", "longitude": 60.46875, "label": "Cancer (translated)"},
    "69": {"latitude": 65.946472, "discipline": "8", "longitude": 94.21875, "label": "Psychopharmacology"},
    "250": {"latitude": 31.952162000000001, "discipline": "13", "longitude": 165.9375, "label": "Ethnology"},
    "251": {"latitude": 67.339860999999999, "discipline": "3", "longitude": 49.21875, "label": "Prenatal Diagnostics"},
    "256": {
        "latitude": 76.351895999999996,
        "discipline": "4",
        "longitude": -107.578125,
        "label": "Numerical Methods in Engineering"
    },
    "257": {"latitude": 80.872827000000001, "discipline": "5", "longitude": 2.109375, "label": "EthnoPharmacology"},
    "254": {"latitude": -10.487812, "discipline": "6", "longitude": -54.140625, "label": "Atmospheric GeoPhysics"},
    "255": {"latitude": 80.872827000000001, "discipline": "5", "longitude": -14.0625, "label": "Flavors & Fragrance"},
    "508": {"latitude": -0.70310700000000004, "discipline": "1", "longitude": -44.296875, "label": "Marine Pollution"},
    "509": {"latitude": 75.320025000000001, "discipline": "5", "longitude": -2.8125, "label": "Toxins"},
    "506": {"latitude": 65.072130000000001, "discipline": "3", "longitude": 45.0, "label": "Pulmonary"},
    "507": {"latitude": 65.366837000000004, "discipline": "4", "longitude": -100.546875, "label": "Waste Management"},
    "504": {"latitude": 70.844673, "discipline": "12", "longitude": 59.0625, "label": "Artifical Organs"},
    "505": {
        "latitude": 73.824820000000003,
        "discipline": "12",
        "longitude": 72.421875,
        "label": "Physical Therapy; Orthopedic"
    },
    "502": {
        "latitude": -12.554563999999999,
        "discipline": "9",
        "longitude": 167.34375,
        "label": "Socio-Cultural Anthropology"
    },
    "503": {"latitude": 33.724339999999998, "discipline": "10", "longitude": 1.40625, "label": "Poultry Science"},
    "500": {"latitude": 82.765372999999997, "discipline": "5", "longitude": -44.296875, "label": "Crystallography"},
    "501": {"latitude": 79.560546000000002, "discipline": "11", "longitude": -135.0, "label": "Applied Math"},
    "469": {"latitude": 82.214217000000005, "discipline": "12", "longitude": 79.453125, "label": "Preventive Medicine"},
    "468": {"latitude": -19.973348999999999, "discipline": "6", "longitude": -45.0, "label": "Archeological Science"},
    "465": {"latitude": 79.171334999999999, "discipline": "4", "longitude": -99.84375, "label": "Fractures & Fatigue"},
    "464": {
        "latitude": 65.946472,
        "discipline": "13",
        "longitude": 129.375,
        "label": "Pychiatric & Behavioral Genetics"
    },
    "467": {
        "latitude": -21.943045999999999,
        "discipline": "9",
        "longitude": 164.53125,
        "label": "Cross Disciplinary Studies"
    },
    "466": {"latitude": 76.679784999999995, "discipline": "12", "longitude": 75.9375, "label": "Emergency Medicine"},
    "461": {"latitude": -6.3152990000000004, "discipline": "1", "longitude": -25.3125, "label": "Wildlife Research"},
    "460": {
        "latitude": 73.226699999999994,
        "discipline": "3",
        "longitude": 42.890625,
        "label": "Dermatological Surgery"
    },
    "463": {
        "latitude": 83.026218999999998,
        "discipline": "11",
        "longitude": -116.015625,
        "label": "Physics; Current Developments"
    },
    "462": {"latitude": 83.979259999999996, "discipline": "12", "longitude": 97.734375, "label": "Midwifery"},
    "168": {"latitude": 77.157162999999997, "discipline": "4", "longitude": -94.21875, "label": "Composites"},
    "169": {"latitude": 41.508577000000002, "discipline": "13", "longitude": 154.6875, "label": "Language Learning"},
    "164": {
        "latitude": 68.399180000000001,
        "discipline": "7",
        "longitude": -171.5625,
        "label": "Library Science; Infomation Retrieval"
    },
    "165": {"latitude": 77.767582000000004, "discipline": "12", "longitude": 63.28125, "label": "Biomaterials"},
    "166": {"latitude": -15.961328999999999, "discipline": "6", "longitude": -60.46875, "label": "Quaternary Research"},
    "167": {"latitude": 42.553080000000001, "discipline": "3", "longitude": 56.25, "label": "Endoscopic Surgery"},
    "160": {
        "latitude": 73.226699999999994,
        "discipline": "7",
        "longitude": -151.875,
        "label": "Artificial Intelligence"
    },
    "161": {
        "latitude": 83.111070999999995,
        "discipline": "5",
        "longitude": -45.0,
        "label": "Electro Analytical Chemistry"
    },
    "162": {"latitude": 82.214217000000005, "discipline": "12", "longitude": 68.90625, "label": "Dental Education"},
    "163": {
        "latitude": 58.447732999999999,
        "discipline": "2",
        "longitude": -4.21875,
        "label": "Enzyme Microbiological Techniques"
    },
    "9": {"latitude": 59.534317999999999, "discipline": "10", "longitude": 29.53125, "label": "Immunology"},
    "357": {
        "latitude": -4.2149429999999999,
        "discipline": "1",
        "longitude": -26.015625,
        "label": "Wildlife Management"
    },
    "356": {
        "latitude": 70.844673,
        "discipline": "7",
        "longitude": -152.578125,
        "label": "Software Design and Development"
    },
    "355": {
        "latitude": 71.074055999999999,
        "discipline": "12",
        "longitude": 123.046875,
        "label": "Psychiatric Services"
    },
    "354": {"latitude": 71.965388000000004, "discipline": "12", "longitude": 112.5, "label": "Forensic Medicine"},
    "353": {
        "latitude": 80.297927000000001,
        "discipline": "11",
        "longitude": -116.71875,
        "label": "Geophysical Science"
    },
    "352": {
        "latitude": 42.553080000000001,
        "discipline": "10",
        "longitude": 23.203125,
        "label": "World Health Organization"
    },
    "351": {
        "latitude": 79.935918000000001,
        "discipline": "11",
        "longitude": -134.296875,
        "label": "Computational Math"
    },
    "350": {
        "latitude": 72.607119999999995,
        "discipline": "8",
        "longitude": 92.109375,
        "label": "Physical Therapy; Brain Injury"
    },
    "359": {"latitude": 72.181804, "discipline": "7", "longitude": -157.5, "label": "Database Design & Management"},
    "358": {
        "latitude": 14.604846999999999,
        "discipline": "4",
        "longitude": -72.421875,
        "label": "Ocean Coastal Management"
    },
    "216": {"latitude": 63.233626999999998, "discipline": "4", "longitude": -85.78125, "label": "Mining"},
    "217": {"latitude": 0.70310700000000004, "discipline": "1", "longitude": -18.28125, "label": "Aquaculture"},
    "214": {"latitude": -21.943045999999999, "discipline": "9", "longitude": 165.234375, "label": "Modern Language"},
    "215": {
        "latitude": 66.513260000000002,
        "discipline": "8",
        "longitude": 82.96875,
        "label": "Neurophsyiology & Neuroscience"
    },
    "212": {"latitude": 64.168107000000006, "discipline": "13", "longitude": 167.34375, "label": "Higher Education"},
    "213": {"latitude": -2.8113709999999998, "discipline": "1", "longitude": -26.015625, "label": "Ecology"},
    "210": {"latitude": 74.211983000000004, "discipline": "12", "longitude": 63.984375, "label": "Plastic Surgery"},
    "211": {
        "latitude": 84.124972999999997,
        "discipline": "12",
        "longitude": 96.328125,
        "label": "Nursing Administration"
    },
    "218": {
        "latitude": 2.8113709999999998,
        "discipline": "1",
        "longitude": -11.25,
        "label": "Molecular Biological Evolution"
    },
    "219": {"latitude": 82.765372999999997, "discipline": "11", "longitude": -118.828125, "label": "Photonics"},
    "289": {"latitude": 68.138852, "discipline": "12", "longitude": 127.96875, "label": "Behavioral Research Therapy"},
    "288": {"latitude": 72.816074, "discipline": "7", "longitude": -144.140625, "label": "Spyware; Malware"},
    "4": {"latitude": 64.472793999999993, "discipline": "2", "longitude": 14.765625, "label": "Protein Science"},
    "281": {
        "latitude": 49.837981999999997,
        "discipline": "13",
        "longitude": 166.640625,
        "label": "Third World Political Economics"
    },
    "280": {
        "latitude": 75.497157000000001,
        "discipline": "7",
        "longitude": -140.625,
        "label": "Fault Tolerant Computing"
    },
    "283": {"latitude": 58.447732999999999, "discipline": "13", "longitude": 164.53125, "label": "Sociology"},
    "282": {"latitude": 84.541360999999995, "discipline": "12", "longitude": 87.1875, "label": "Public Hospitals"},
    "285": {"latitude": 74.775842999999995, "discipline": "3", "longitude": 54.140625, "label": "Bone & Osteoporosis"},
    "284": {"latitude": 21.943045999999999, "discipline": "1", "longitude": -28.125, "label": "Horticulture"},
    "287": {"latitude": 55.379109999999997, "discipline": "4", "longitude": -66.796875, "label": "Water Treatment"},
    "286": {"latitude": 55.379109999999997, "discipline": "3", "longitude": 61.171875, "label": "Radiation Therapy"},
    "263": {
        "latitude": 81.723187999999993,
        "discipline": "11",
        "longitude": -104.765625,
        "label": "Surface Coating Technology"
    },
    "262": {
        "latitude": 72.607119999999995,
        "discipline": "3",
        "longitude": 40.078125,
        "label": "Molecular Endocrinology"
    },
    "261": {"latitude": 51.179343000000003, "discipline": "13", "longitude": 165.9375, "label": "Political Studies"},
    "260": {"latitude": 82.494823999999994, "discipline": "4", "longitude": -83.671875, "label": "Electrochemistry"},
    "267": {"latitude": 46.073231, "discipline": "13", "longitude": 165.234375, "label": "International Conflict"},
    "266": {"latitude": 54.572062000000003, "discipline": "4", "longitude": -82.265625, "label": "Oil & Natural Gas"},
    "265": {"latitude": 65.072130000000001, "discipline": "13", "longitude": 151.875, "label": "Vocational Counseling"},
    "264": {
        "latitude": 23.241346,
        "discipline": "1",
        "longitude": 9.140625,
        "label": "Molecular Biochemical Parasitology"
    },
    "269": {"latitude": 82.214217000000005, "discipline": "5", "longitude": -66.09375, "label": "Applied Catalysis"},
    "268": {"latitude": -21.943045999999999, "discipline": "9", "longitude": 164.53125, "label": "Art History"},
    "59": {"latitude": 62.593341000000002, "discipline": "3", "longitude": 61.875, "label": "Vascular Surgery"},
    "58": {"latitude": 63.548552000000001, "discipline": "13", "longitude": 171.5625, "label": "Business Ethics"},
    "55": {"latitude": 59.534317999999999, "discipline": "10", "longitude": 26.015625, "label": "AntiMicrobial Agents"},
    "54": {"latitude": 77.617709000000005, "discipline": "5", "longitude": 1.40625, "label": "Pharmaceutical Design"},
    "57": {
        "latitude": 66.513260000000002,
        "discipline": "13",
        "longitude": -179.296875,
        "label": "Decision Support Systems"
    },
    "56": {"latitude": 71.965388000000004, "discipline": "7", "longitude": -157.5, "label": "Systems Software"},
    "51": {"latitude": 65.366837000000004, "discipline": "3", "longitude": 49.21875, "label": "Chest & Respiratory"},
    "50": {"latitude": 70.140364000000005, "discipline": "3", "longitude": 42.890625, "label": "Obstetrics"},
    "53": {"latitude": -15.961328999999999, "discipline": "1", "longitude": -26.015625, "label": "Zoology"},
    "52": {"latitude": 72.181804, "discipline": "4", "longitude": -82.265625, "label": "Earthquake Engineering"},
    "537": {
        "latitude": 59.888936999999999,
        "discipline": "3",
        "longitude": 63.28125,
        "label": "Clinical Medicine (Romania)"
    },
    "536": {"latitude": 64.168107000000006, "discipline": "13", "longitude": 168.046875, "label": "Marketing"},
    "535": {
        "latitude": 72.181804,
        "discipline": "13",
        "longitude": 162.421875,
        "label": "Education Psychological Measures"
    },
    "63": {"latitude": 65.366837000000004, "discipline": "8", "longitude": 90.0, "label": "Neurology"},
    "533": {"latitude": 69.411242000000001, "discipline": "8", "longitude": 88.59375, "label": "Neurotoxicology"},
    "532": {"latitude": 66.513260000000002, "discipline": "8", "longitude": 92.8125, "label": "Sleep"},
    "531": {"latitude": 83.111070999999995, "discipline": "12", "longitude": 59.0625, "label": "Public Health"},
    "530": {"latitude": 76.184995000000001, "discipline": "3", "longitude": 43.59375, "label": "Hormone Research"},
    "539": {"latitude": 78.349411000000003, "discipline": "12", "longitude": 54.140625, "label": "Optometry"},
    "538": {"latitude": 82.586106000000001, "discipline": "5", "longitude": -44.296875, "label": "Green Chemistry"},
    "115": {"latitude": 80.647035000000002, "discipline": "5", "longitude": -4.921875, "label": "Phytochemistry"},
    "114": {"latitude": 66.513260000000002, "discipline": "3", "longitude": 58.359375, "label": "Thoracic Surgery"},
    "117": {"latitude": 56.944974000000002, "discipline": "2", "longitude": 5.625, "label": "Food Protection"},
    "116": {"latitude": 31.952162000000001, "discipline": "10", "longitude": 16.875, "label": "Tropical Medicine"},
    "111": {
        "latitude": 74.959391999999994,
        "discipline": "4",
        "longitude": -116.015625,
        "label": "Mechanical Design Engineering"
    },
    "110": {
        "latitude": 67.609221000000005,
        "discipline": "8",
        "longitude": 67.5,
        "label": "Otolaryngology; Laryngoscope"
    },
    "113": {
        "latitude": -2.8113709999999998,
        "discipline": "1",
        "longitude": -33.046875,
        "label": "Biological Conservation"
    },
    "112": {"latitude": -19.973348999999999, "discipline": "9", "longitude": 165.234375, "label": "Classics"},
    "119": {"latitude": 69.411242000000001, "discipline": "4", "longitude": -85.078125, "label": "Energy Fuel"},
    "118": {
        "latitude": 75.320025000000001,
        "discipline": "7",
        "longitude": -141.328125,
        "label": "Broadband Communication"
    },
    "429": {"latitude": 23.885838, "discipline": "1", "longitude": -40.78125, "label": "Weed Management"},
    "428": {"latitude": 73.824820000000003, "discipline": "7", "longitude": -147.65625, "label": "Computer Networks"},
    "534": {"latitude": 70.377853999999999, "discipline": "3", "longitude": 47.109375, "label": "Pediatric Research"},
    "421": {"latitude": 75.320025000000001, "discipline": "4", "longitude": -71.71875, "label": "Dyes & Pigments"},
    "420": {"latitude": -14.604846999999999, "discipline": "9", "longitude": 164.53125, "label": "Semiotics"},
    "423": {"latitude": -4.2149429999999999, "discipline": "1", "longitude": -25.3125, "label": "Molecular Ecology"},
    "422": {"latitude": 73.428424000000007, "discipline": "3", "longitude": 52.03125, "label": "Drug Safety"},
    "425": {"latitude": 70.140364000000005, "discipline": "12", "longitude": 125.15625, "label": "Clinical Psychiatry"},
    "424": {
        "latitude": 56.559482000000003,
        "discipline": "10",
        "longitude": 38.671875,
        "label": "Cytogentics & Genome Mapping"
    },
    "427": {"latitude": 38.272689, "discipline": "4", "longitude": -61.875, "label": "Water Waste"},
    "426": {"latitude": -9.1020970000000005, "discipline": "6", "longitude": -55.546875, "label": "Paleogeography"},
    "308": {
        "latitude": 78.490551999999994,
        "discipline": "7",
        "longitude": -134.296875,
        "label": "Electrical Networks"
    },
    "309": {"latitude": 21.943045999999999, "discipline": "3", "longitude": 50.625, "label": "Endoscopy"},
    "300": {"latitude": 71.524908999999994, "discipline": "3", "longitude": 49.21875, "label": "Atherosclerosis"},
    "301": {
        "latitude": 84.267172000000002,
        "discipline": "12",
        "longitude": 82.96875,
        "label": "Region & Medical Ethics"
    },
    "302": {
        "latitude": 65.072130000000001,
        "discipline": "8",
        "longitude": 115.3125,
        "label": "Speech Language & Hearing"
    },
    "303": {
        "latitude": 61.606395999999997,
        "discipline": "3",
        "longitude": 38.671875,
        "label": "Thoracic & Respiratory"
    },
    "304": {
        "latitude": 47.040182000000001,
        "discipline": "10",
        "longitude": 8.4375,
        "label": "Veterinary Microbiology"
    },
    "305": {"latitude": 32.546813, "discipline": "4", "longitude": -45.0, "label": "Environmental Protection"},
    "306": {"latitude": 72.181804, "discipline": "7", "longitude": -150.46875, "label": "Computer Systems Design"},
    "307": {
        "latitude": 25.165172999999999,
        "discipline": "4",
        "longitude": -46.40625,
        "label": "Environmental Pollution"
    },
    "229": {
        "latitude": 82.586106000000001,
        "discipline": "11",
        "longitude": -116.015625,
        "label": "Nuclear Instrumentation"
    },
    "228": {"latitude": 80.178713999999999, "discipline": "11", "longitude": -130.78125, "label": "Simulation"},
    "227": {"latitude": 12.554563999999999, "discipline": "4", "longitude": -45.0, "label": "Soil Science"},
    "226": {"latitude": 65.366837000000004, "discipline": "12", "longitude": 84.375, "label": "Audiology"},
    "225": {"latitude": 74.775842999999995, "discipline": "7", "longitude": -131.484375, "label": "Robotics"},
    "224": {"latitude": 70.377853999999999, "discipline": "12", "longitude": 69.609375, "label": "Spine"},
    "223": {"latitude": 81.518271999999996, "discipline": "7", "longitude": -120.9375, "label": "Photo-Optics"},
    "222": {"latitude": -7.013668, "discipline": "9", "longitude": 161.71875, "label": "Linguistics"},
    "221": {
        "latitude": 80.178713999999999,
        "discipline": "11",
        "longitude": -148.359375,
        "label": "Functional Analysis"
    },
    "220": {"latitude": 52.482779999999998, "discipline": "13", "longitude": 168.75, "label": "Urban Studies"},
    "391": {"latitude": -0.70310700000000004, "discipline": "9", "longitude": 165.234375, "label": "Asian Studies"},
    "390": {"latitude": 78.490551999999994, "discipline": "12", "longitude": 112.5, "label": "Psychiatric Nursing"},
    "151": {"latitude": 84.267172000000002, "discipline": "12", "longitude": 82.265625, "label": "BioEthics"},
    "150": {
        "latitude": 69.657086000000007,
        "discipline": "8",
        "longitude": 104.0625,
        "label": "Psychosis; Schizophrenia"
    },
    "153": {"latitude": 77.617709000000005, "discipline": "7", "longitude": -134.296875, "label": "Power Distribution"},
    "152": {"latitude": 72.181804, "discipline": "7", "longitude": -144.140625, "label": "Parellel Computing"},
    "155": {"latitude": 76.351895999999996, "discipline": "4", "longitude": -83.671875, "label": "Wood"},
    "154": {"latitude": 74.402163000000002, "discipline": "12", "longitude": 121.640625, "label": "Gerontology"},
    "157": {
        "latitude": -14.604846999999999,
        "discipline": "6",
        "longitude": -62.578125,
        "label": "Geology & Tectonics"
    },
    "156": {
        "latitude": 78.490551999999994,
        "discipline": "11",
        "longitude": -152.578125,
        "label": "Discrete Applied Mathematics"
    },
    "159": {"latitude": 74.402163000000002, "discipline": "7", "longitude": -146.953125, "label": "Mobile Networks"},
    "158": {"latitude": -14.604846999999999, "discipline": "6", "longitude": -63.984375, "label": "GeoChemistry"},
    "399": {"latitude": 56.559482000000003, "discipline": "3", "longitude": 54.140625, "label": "Surgical Oncology"},
    "398": {"latitude": 77.767582000000004, "discipline": "7", "longitude": -138.515625, "label": "Power Systems"},
    "48": {
        "latitude": 58.813741999999998,
        "discipline": "10",
        "longitude": 23.203125,
        "label": "Molecular Cell Biology"
    },
    "49": {"latitude": 69.411242000000001, "discipline": "5", "longitude": 4.21875, "label": "Food Chemistry"},
    "46": {"latitude": 82.214217000000005, "discipline": "7", "longitude": -122.34375, "label": "Applied Optics"},
    "47": {"latitude": 73.226699999999994, "discipline": "4", "longitude": -94.21875, "label": "Nuclear Engineering"},
    "44": {"latitude": 63.548552000000001, "discipline": "8", "longitude": 74.53125, "label": "Neurosurgery"},
    "45": {"latitude": 67.609221000000005, "discipline": "3", "longitude": 38.671875, "label": "Fertility"},
    "42": {"latitude": 73.824820000000003, "discipline": "12", "longitude": 30.9375, "label": "Nutrition"},
    "43": {"latitude": 59.534317999999999, "discipline": "13", "longitude": -177.890625, "label": "Finance"},
    "40": {"latitude": 65.946472, "discipline": "8", "longitude": 99.84375, "label": "Clinical Neurophysiology"},
    "41": {"latitude": 75.497157000000001, "discipline": "3", "longitude": 54.140625, "label": "Opthamology"},
    "5": {"latitude": 76.679784999999995, "discipline": "7", "longitude": -140.625, "label": "Signal Processing"},
    "489": {"latitude": 75.497157000000001, "discipline": "7", "longitude": -143.4375, "label": "Consumer Electronics"},
    "488": {"latitude": -12.554563999999999, "discipline": "9", "longitude": 166.640625, "label": "Social History"},
    "487": {"latitude": -10.487812, "discipline": "1", "longitude": -28.125, "label": "Fish Biology"},
    "486": {"latitude": 65.946472, "discipline": "13", "longitude": 178.59375, "label": "Operations Management"},
    "485": {"latitude": 70.140364000000005, "discipline": "8", "longitude": 81.5625, "label": "Headache"},
    "484": {"latitude": 78.767792, "discipline": "7", "longitude": -134.296875, "label": "Antennae; Mobile Radio"},
    "483": {
        "latitude": 81.201419999999999,
        "discipline": "11",
        "longitude": -116.015625,
        "label": "Superconductor Science"
    },
    "482": {"latitude": 81.413933, "discipline": "4", "longitude": -101.953125, "label": "Friction Lubrication & Wear"},
    "481": {"latitude": 76.679784999999995, "discipline": "7", "longitude": -140.625, "label": "Circuits"},
    "480": {"latitude": 77.312520000000006, "discipline": "4", "longitude": -78.75, "label": "Wood Components"},
    "472": {
        "latitude": 70.377853999999999,
        "discipline": "13",
        "longitude": 130.78125,
        "label": "Psychosomatic Medicine"
    },
    "473": {"latitude": 80.647035000000002, "discipline": "12", "longitude": 66.09375, "label": "Pharmaco Economics"},
    "470": {"latitude": 80.872827000000001, "discipline": "5", "longitude": -70.3125, "label": "Carbon"},
    "471": {"latitude": 60.930432000000003, "discipline": "3", "longitude": 46.40625, "label": "Gynecology Oncology"},
    "476": {"latitude": 75.320025000000001, "discipline": "11", "longitude": -161.71875, "label": "Cancer Statistics"},
    "477": {"latitude": 67.339860999999999, "discipline": "8", "longitude": 118.125, "label": "Consciousness"},
    "474": {
        "latitude": 78.061988999999997,
        "discipline": "7",
        "longitude": -149.765625,
        "label": "Computer Modeling and Animation"
    },
    "475": {"latitude": 84.267172000000002, "discipline": "12", "longitude": 78.75, "label": "Medical Practice"},
    "478": {
        "latitude": 67.339860999999999,
        "discipline": "12",
        "longitude": 68.203125,
        "label": "Otolyngology; Head Neck"
    },
    "479": {"latitude": 70.844673, "discipline": "3", "longitude": 59.0625, "label": "Heart Failure; Catheters"}
};
var SCIMAP_TYPE = {
    DISCIPLINE: "DISCIPLINE",
    SUBDISCIPLINE: "SUBDISCIPLINE"
};

function getDisciplineLabelImageURL(key) {
    return disciplineLabelImageUrlPrefix + DISCIPLINES[key].image;
}

function getDisciplineBlackLabelImageURL(key) {
    return disciplineBlackLabelImageUrlPrefix + DISCIPLINES[key].image;
}

function createScimapType(map, mapName) {
    var sciMapTypeOptions = {
        getTileUrl: function (coord, zoom) {
            var normalizedCoord = getNormalizedCoord(coord, zoom);
            if (!normalizedCoord) {
                return mapOfScienceImageFolderPrefix + "tiles/blank.png";
            }
            var bound = Math.pow(2, zoom);
            return mapOfScienceImageFolderPrefix + "tiles/tiles" + zoom + "_" + normalizedCoord.x + "_" +
                normalizedCoord.y + ".png";
        },
        tileSize: new google.maps.Size(256, 256),
        isPng: true,
        minZoom: 1,
        maxZoom: 4,
        name: mapName
    };

    var sciMapType = new google.maps.ImageMapType(sciMapTypeOptions);
    new CopyrightPanel({
        map: map,
        controlPositions: google.maps.ControlPosition.BOTTOM_RIGHT,
        html: '&copy; 2008 The Regents of the University of California and SciTech Strategies.<br>' +
            'Map updated by <a href="http://mapofscience.com">SciTech Strategies</a>, ' +
            '<a href="http://www.ost.uqam.ca/" title="Observatoire des sciences et des technologies">OST</a>, ' +
            'and <a href="http://cns.iu.edu" title="CyberInfrastructure for Network Science">CNS</a> in 2011.'
    });
    map.mapTypes.set(mapName, sciMapType);
}

//Normalizes the coords that tiles repeat across the x axis (horizontally)
// like the standard Google map tiles.
function getNormalizedCoord(coord, zoom) {
    var y = coord.y;
    var x = coord.x;

    // tile range in one direction range is dependent on zoom level
    // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
    var tileRange = 1 << zoom;

    // don't repeat across y-axis (vertically)
    if (y < 0 || y > customTileRange(zoom)) {
        return null;
    }

    // repeat across x-axis (horizontal)
    if (x < 0 || x >= tileRange) {
        x = (x % tileRange + tileRange) % tileRange;
    }

    return {
        x: x,
        y: y
    };
}

// horizontal range bound
function customTileRange(zoom) {
    if (zoom < 3) {
        return zoom;
    } else if (zoom == 3) {
        return 4;
    } else if (zoom == 4) {
        return 9;
    }
}
