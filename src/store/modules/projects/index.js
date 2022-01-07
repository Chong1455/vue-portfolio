import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      projects: [
        {
          id: "p1",
          name: "Smart Brain",
          description:
            "A face detection software that displays human face with a bounding box. Designed database in PostgreSQL and communicated with Clarifai API to build face recognition function.",
          areas: ["frontend", "backend"],
          technology:
            "HTML, CSS, React, Express, Tachyons, Clarifai API, PostgreSQL",
          imageName: "project1.jpg",
          demoLink: "https://smart-brain-cks.herokuapp.com/",
          githubLink: "https://github.com/Chong1455/smart-brain",
        },
        {
          id: "p2",
          name: "Natours",
          description:
            "A website which provides tour packages and manages tour booking. Created Stripe payment processing platform to collaborate with front-end app. Implemented Mapbox to allow users to explore different tourist areas on the map.",
          areas: ["backend"],
          technology: "Node.js, Express, Stripe, MongoDB, Mapbox",
          imageName: "project2.jpg",
          demoLink: "https://natours-cks.herokuapp.com/",
          githubLink: "https://github.com/Chong1455/natours",
        },
        {
          id: "p3",
          name: "Heroes vs. Villains",
          description:
            "A website where you can find your favourite superheros and villains from all universes using a Superhero API.",
          areas: ["frontend"],
          technology: "HTML, CSS, React, Superhero API",
          imageName: "project3.jpg",
          demoLink: "https://chong1455.github.io/robofriends/",
          githubLink: "https://github.com/Chong1455/robofriends",
        },
        {
          id: "p4",
          name: "Paparazi",
          description:
            "A website that uses Clarifai API which recognizes over 10,000 images of celebrities and returns the name of celebrity from an image.",
          technology: "HTML, CSS, React, Clarifai API",
          areas: ["frontend"],
          imageName: "project4.jpg",
          demoLink: "https://chong1455.github.io/paparazi/",
          githubLink: "https://github.com/Chong1455/paparazi",
        },
        {
          id: "p5",
          name: "Simple To-Do List",
          description:
            "A nice little app written in pure vanilla Javascript that allows user to add, remove and check/ uncheck tasks. I practised DOM manipulation and event handling.",
          areas: ["frontend"],
          technology: "HTML, CSS, Javascript",
          imageName: "project5.jpg",
          demoLink: "https://chong1455.github.io/todo-list.io/",
          githubLink: "https://github.com/Chong1455/todo-list.io",
        },
        {
          id: "p6",
          name: "Background Generator",
          description:
            "A simple app that allows you to produce custom gradient background with two colour inputs and a button that generates a random colour.",
          areas: ["frontend"],
          technology: "HTML, CSS, Javascript",
          imageName: "project6.gif",
          demoLink: "https://chong1455.github.io/background-generator.io/",
          githubLink: "https://github.com/Chong1455/background-generator.io",
        },
        {
          id: "p7",
          name: "Cryptochain",
          description:
            "A demo blockchain network with each block containing information about the sender, receiver and amount of bitcoins to be transfered. Users can view transaction pool and mine transaction.",
          areas: ["frontend", "backend"],
          technology: "React, Node, Express, Jest, Redis",
          imageName: "project7.jpg",
          demoLink: "https://mighty-oasis-05538.herokuapp.com/",
          githubLink: "https://github.com/Chong1455/cryptochain",
        },
        {
          id: "p8",
          name: "Chatbot",
          description:
            "A sample chatbot built with DialogFlow to process natural language and understand what users want. The purpose of the bot is to help sell products and give recommendations to user. The bot will save data from conversation to a database.",
          areas: ["frontend", "backend"],
          technology: "React, Node, Express, DialoagFlow, MongoDB",
          imageName: "project8.jpg",
          demoLink: "https://still-lake-86205.herokuapp.com/",
          githubLink: "https://github.com/Chong1455/chatbot",
        },
        {
          id: "p9",
          name: "MySelamat",
          description:
            "A Covid-19 contact tracing mobile app that allows user to register for a vaccine, update status, view SOP and scan QR code for travel history. Firebase is used to manage and store user data. MySelamat can be installed from Play Store.",
          areas: ["frontend"],
          technology: "React native, Expo, Firebase",
          imageName: "project9.png",
          demoLink:
            "https://play.google.com/store/apps/details?id=com.cks.my_selamat2",
          githubLink: "https://github.com/Chong1455/mySelamat",
        },
        {
          id: "p10",
          name: "Forever & Ever",
          description:
            "A wedding planner website that guides couples through the wedding planning process. It provides many beautiful destinations for a wedding to take place.",
          areas: ["frontend"],
          technology:
            "HTML, CSS, Javascript, Cookies, Local storage, Progressive Web App",
          imageName: "project10.jpg",
          demoLink: "https://uccd2223-cks.azurewebsites.net/index.html",
          githubLink: "https://github.com/Chong1455/wedding-project",
        },
        {
          id: "p11",
          name: "Dapp Token Farm",
          description:
            "A full stack Decentralized Finance (DeFi) staking application for adding and removing any approved token from the contract to yield farming. Admin can issue tokens as a reward to the users staking on the platform.",
          areas: ["frontend", "backend"],
          technology: "Solidity, Python, Smart Contract, Brownie, React",
          imageName: "project11.jpg",
          demoLink: "https://chong1455.github.io/defi_front_end/",
          githubLink: "https://github.com/Chong1455/defi-stake-yield-brownie",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
