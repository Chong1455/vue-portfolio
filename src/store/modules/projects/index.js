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
          areas: ["website"],
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
          areas: ["website"],
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
          areas: ["website"],
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
          areas: ["website"],
          imageName: "project4.jpg",
          demoLink: "https://chong1455.github.io/paparazi/",
          githubLink: "https://github.com/Chong1455/paparazi",
        },
        {
          id: "p7",
          name: "Cryptochain",
          description:
            "A demo blockchain network with each block containing information about the sender, receiver and amount of bitcoins to be transfered. Users can view transaction pool and mine transaction.",
          areas: ["website"],
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
          areas: ["website"],
          technology: "React, Node, Express, DialoagFlow, MongoDB",
          imageName: "project8.jpg",
          demoLink: "https://still-lake-86205.herokuapp.com/",
          githubLink: "https://github.com/Chong1455/chatbot",
        },
        {
          id: "p12",
          name: "Real Estate Website",
          description:
            "A real working application with an admin area to manage resources including property listings, realtors and contact inquiries.",
          areas: ["website"],
          technology: "HTML, CSS, Django, PostgreSQL, Digital Ocean",
          imageName: "project12.jpg",
          demoLink: "https://github.com/Chong1455/btre_project",
          githubLink: "https://github.com/Chong1455/btre_project",
        },
        {
          id: "p9",
          name: "My Selamat",
          description:
            "A Covid-19 contact tracing mobile app that allows user to register for a vaccine, update status, view SOP and scan QR code for travel history. Firebase is used to manage and store user data. MySelamat can be installed from Play Store.",
          areas: ["mobile"],
          technology: "React native, Expo, Firebase",
          imageName: "project9.jpg",
          demoLink:
            "https://play.google.com/store/apps/details?id=com.cks.my_selamat2",
          githubLink: "https://github.com/Chong1455/mySelamat",
        },
        {
          id: "p10",
          name: "Forever & Ever",
          description:
            "A wedding planner website that guides couples through the wedding planning process. It provides many beautiful destinations for a wedding to take place.",
          areas: ["website"],
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
          areas: ["website"],
          technology: "Solidity, Python, Smart Contract, Brownie, React",
          imageName: "project11.jpg",
          demoLink: "https://chong1455.github.io/defi_front_end/",
          githubLink: "https://github.com/Chong1455/defi-stake-yield-brownie",
        },
        {
          id: "p13",
          name: "Memorable Locations",
          description:
            "An app that lets users to save their favourite locations and access them on the home screen. Users can add a new place by long click on the map or even use the search bar on top to search a location.",
          areas: ["mobile"],
          technology: "Java, Android studio, Google maps API",
          imageName: "project13.jpg",
          demoLink:
            "https://play.google.com/store/apps/details?id=com.cks.memorableplaces",
          githubLink: "https://github.com/Chong1455/Memorable-places",
        },
        {
          id: "p14",
          name: "Travel Blog",
          description:
            "An app that shows blog articles about the world's most popular travel destinations. Users can search, filter and click on the blog articles to view more details.",
          areas: ["mobile"],
          technology: "Java, Android studio, cache",
          imageName: "project14.jpg",
          demoLink:
            "https://play.google.com/store/apps/details?id=com.cks.travelblog",
          githubLink: "https://github.com/Chong1455/TravelBlog",
        },
        {
          id: "p15",
          name: "BMI Calculator",
          description:
            "A simple app that lets you to calculate your body mass index (BMI) based on your weight and height.",
          areas: ["mobile"],
          technology: "Flutter",
          imageName: "project15.jpg",
          demoLink:
            "https://play.google.com/store/apps/details?id=com.cks.bmi_calculator",
          githubLink: "https://github.com/Chong1455/BMI-Calculator",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
