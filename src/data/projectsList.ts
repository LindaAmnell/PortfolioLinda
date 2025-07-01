import GoGhibliImg from "../images/GoGhibli1.png";
import ChappyImg from "../images/chappyChat.png";
import PlayToysImg from "../images/PlayToys1.png";
import SpicyFoodImg from "../images/Spicy 1.png";
import TeamManagerImg from "../images/pok 1.png";
import HangmanImg from "../images/HangBot.png";
import BlackValleyImg from "../images/image.png";

export const EnProjects = [
  {
    isPrivate: false,
    title: "Black Valley",
    image: BlackValleyImg,
    description: [
      "A graduation project developed by me and a classmate for a friend who runs a Swedish craft brand focused on handmade dog accessories. The app offers a clean, mobile-optimized user experience with modular components for browsing products, viewing galleries, and submitting custom orders.",
    ],
    techStack: ["React Native", "JavaScript", "Expo", "CSS-in-JS"],
    webLink: "https://www.blackvalley.nu/",
  },
  {
    isPrivate: false,
    title: "Go Ghibli – Mini Project",
    image: GoGhibliImg,
    description: [
      "A frontend application that displays movies from Studio Ghibli using the Go Ghibli API. Focus on strict typing, data validation with Joi, and features like movie search, detailed views, and favorite management. Users can mark favorite movies.",
    ],
    techStack: ["React", "TypeScript", "Joi", "CSS"],
    webLink: "https://lindaamnell.github.io/GoGhibli/",
    gitHubLink: "https://github.com/LindaAmnell/GoGhibli",
  },
  {
    title: "Chappy - Individual Assignment",
    image: ChappyImg,
    description: [
      "Built an API and frontend for a chat app where users can send messages to specific users or channels. Guests can read and send messages in open channels, while logged-in users also have access to locked channels and direct messages.",
    ],
    techStack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Joi",
      "React Router",
      "Zustand",
    ],
    gitHubLink: "https://github.com/LindaAmnell/Chat-app-Chappy",
    webLink: "https://chat-app-chappy.onrender.com/",
  },
  {
    title: "Play Toys - Individual Assignment",
    image: PlayToysImg,
    description: [
      "Created a webshop selling summer toys with the help of Firebase. The webshop supports two user types: customers and administrators.",
    ],
    techStack: ["React", "React Router", "Zustand", "Firestore"],
    gitHubLink: "https://github.com/LindaAmnell/webbshop-PlayToys",
    webLink: "https://lindaamnell.github.io/webbshop-PlayToys/",
  },
  {
    title: "Restaurant Menu - Group Project",
    image: SpicyFoodImg,
    description: [
      "A group project where we created a website for a restaurant. Logged-in users can add, remove, and update dishes, while customers can browse the menu and place orders.",
    ],
    techStack: ["React", "Zustand", "React Router", "Joi"],
    gitHubLink: "https://github.com/ha-fed23-js-2/Spicy-stars",
    webLink: "https://ha-fed23-js-2.github.io/Spicy-stars/",
  },
  {
    title: "Pokémon Team Manager - Individual Assignment",
    image: TeamManagerImg,
    description: [
      "An individual project using the PokéAPI to build a Pokémon team manager. Users can search Pokémon by name, add them to a team with nicknames, and manage active team members and reserves.",
    ],
    techStack: ["JavaScript", "HTML", "CSS", "PokéAPI"],
    gitHubLink: "https://github.com/LindaAmnell/psychic-palm-tree-pok-mon",
    webLink: "https://lindaamnell.github.io/psychic-palm-tree-pok-mon/",
  },
  {
    title: "Hangman Game - Group Project",
    image: HangmanImg,
    description: [
      "A classic Hangman word guessing game developed as a group project, featuring multiple difficulty levels and local saving of the player's results",
    ],
    techStack: ["JavaScript", "HTML", "CSS"],
    gitHubLink: "https://github.com/wanderingkitty/BionicCriminals",
    webLink: "https://wanderingkitty.github.io/BionicCriminals/",
  },
];

export const SvProjects = [
  {
    isPrivate: false,
    title: "Black Valley",
    image: BlackValleyImg,
    description: [
      "Ett examensprojekt utvecklat av mig och en klasskamrat för en vän som driver ett svenskt hantverksmärke med fokus på handgjorda hundtillbehör. Appen erbjuder en ren, mobilanpassad användarupplevelse med modulära komponenter för att bläddra bland produkter, visa gallerier och skicka specialbeställningar.",
    ],
    techStack: ["React Native", "JavaScript", "Expo", "CSS-in-JS"],
    webLink: "https://www.blackvalley.nu/",
  },
  {
    isPrivate: false,
    title: "Go Ghibli – Miniprojekt",
    image: GoGhibliImg,
    description: [
      "En frontend-applikation som visar filmer från Studio Ghibli med hjälp av Go Ghibli API. Fokus på strikt typning, datavalidering med Joi samt funktioner som filmsökning, detaljvyer och favoritlista. Användare kan markera favoritfilmer.",
    ],
    techStack: ["React", "TypeScript", "Joi", "CSS"],
    webLink: "https://lindaamnell.github.io/GoGhibli/",
    gitHubLink: "https://github.com/LindaAmnell/GoGhibli",
  },
  {
    title: "Chappy – Individuell uppgift",
    image: ChappyImg,
    description: [
      "Jag byggde ett API och en frontend för en chattapp där användare kan skicka meddelanden till specifika personer eller kanaler. Gäster kan läsa och skicka meddelanden i öppna kanaler, medan inloggade användare även har tillgång till låsta kanaler och privata meddelanden.",
    ],
    techStack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Joi",
      "React Router",
      "Zustand",
    ],
    gitHubLink: "https://github.com/LindaAmnell/Chat-app-Chappy",
    webLink: "https://chat-app-chappy.onrender.com/",
  },
  {
    title: "Play Toys – Individuell uppgift",
    image: PlayToysImg,
    description: [
      "Jag skapade en webbshop för sommarleksaker med hjälp av Firebase. Webbshopen har två användartyper: kunder och administratörer.",
    ],
    techStack: ["React", "React Router", "Zustand", "Firestore"],
    gitHubLink: "https://github.com/LindaAmnell/webbshop-PlayToys",
    webLink: "https://lindaamnell.github.io/webbshop-PlayToys/",
  },
  {
    title: "Restaurangmeny – Grupprojekt",
    image: SpicyFoodImg,
    description: [
      "Ett grupprojekt där vi skapade en webbplats för en restaurang. Inloggade användare kan lägga till, ta bort och uppdatera rätter, medan kunder kan bläddra i menyn och lägga beställningar.",
    ],
    techStack: ["React", "Zustand", "React Router", "Joi"],
    gitHubLink: "https://github.com/ha-fed23-js-2/Spicy-stars",
    webLink: "https://ha-fed23-js-2.github.io/Spicy-stars/",
  },
  {
    title: "Pokémon Team Manager – Individuell uppgift",
    image: TeamManagerImg,
    description: [
      "Ett individuellt projekt där jag använde PokéAPI för att bygga en Pokémon team manager. Användare kan söka efter Pokémon, lägga till dem i ett lag med smeknamn och hantera både aktiva medlemmar och reserver.",
    ],
    techStack: ["JavaScript", "HTML", "CSS", "PokéAPI"],
    gitHubLink: "https://github.com/LindaAmnell/psychic-palm-tree-pok-mon",
    webLink: "https://lindaamnell.github.io/psychic-palm-tree-pok-mon/",
  },
  {
    title: "Hänga Gubbe – Grupprojekt",
    image: HangmanImg,
    description: [
      "Ett klassiskt ordgissningsspel som grupprojekt med flera svårighetsgrader och lokal lagring av spelarens resultat.",
    ],
    techStack: ["JavaScript", "HTML", "CSS"],
    gitHubLink: "https://github.com/wanderingkitty/BionicCriminals",
    webLink: "https://wanderingkitty.github.io/BionicCriminals/",
  },
];
