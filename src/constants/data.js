export const projects = [
  {
    id: 1,
    name: "O U A A A",
    shortName: "O U A A A",
    longName: "Outil des Acteurs Alternatifs en Aunis",
    topic: "Web Development",
    roles: ["Fullstack Developer"],
    description:
      "Eventbrite type website to book and create all sorts of events.",
    shortDescription: "",
    longDescription: "",
    siteGoal: "Accelerate the necessary change of our society by creating links between economic / associative players and general public.",
    devGoal: "First version development to have a functional platform.",
    features: [
      "Mapping of the different players",
      "Agenda of the events",
      "Date or category filters on the mapping and agenda",
      "Newsletter per event and per player",
      "Users and actors registration",
      "Admin panel to manage users, players, and events",
    ],
    langFront: ["ReactJS", "NextJS", "Typescript"],
    langBack: ["NodeJS", "GraphQL", "Docker"],
    dataBase: ["MySQL"],
    tools: ["Leaflet", "MaterialUI"],
    versioning: ["Git"],
    deployment: ["Gitlab CI/CD"],
    test: ["Jest"],
    mainImage: "surf.png",
    diapoImages: ["", ""],
    otherImages: ["surf.png"],
    urlGithub: {
      server: "https://gitlab.acteursdelatransition.fr/acteurs-de-la-transition/serveur",
      client: "https://gitlab.acteursdelatransition.fr/root/acteursdelatransition",
    },
    urlWebsite: "https://ouaaa.org/",
  },
  {
    id: 2,
    name: "BordeauxEvent",
    topic: "Web Development",
    description:
      "Eventbrite type website to book and create all sorts of events.",
    languages: ["Ruby", "Ruby on Rails"],
    mainImage: "surf.png"
  },
  {
    id: 3,
    name: "CoachMe",
    topic: "Web Development",
    description: "Doctolib of sports to find your coach in any sport.",
    languages: ["Ruby", "Ruby on Rails"],
    mainImage: "surf.png"
  },
  {
    id: 4,
    name: "Memory Game",
    topic: "Web Development",
    description: "Memory Game to have fun using ReactJS.",
    languages: ["ReactJS"],
    mainImage: "surf.png"
  }
];
