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
        },
        {
          id: "p3",
          name: "Heroes vs. Villains",
          description:
            "A search app where you can find your favourite superheros and villains from all universes using a Superhero API.",
          areas: ["frontend"],
          technology: "HTML, CSS, React, Superhero API",
          imageName: "project3.jpg",
          demoLink: "https://chong1455.github.io/robofriends/",
        },
        {
          id: "p4",
          name: "Paparazi",
          description:
            "A website which can tell you the name of celebrity from an image. This model analyses over 10,000 images of recognized celebrities and returns probability scores on the likelihood of celebrity.",
          technology: "HTML, CSS, React, Clarifai API",
          areas: ["frontend"],
          imageName: "project4.jpg",
          demoLink: "https://chong1455.github.io/paparazi/",
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
        },
        {
          id: "p9",
          name: "CKS's Website",
          description:
            "A portfolio within a portfolio! Seriously, this website is a good example of my knowledge in Vue.js. I had made use of vue-router to switch between pages without refreshing the page and utilized vuex for better state management.",
          areas: ["frontend"],
          technology: "HTML, CSS, Vue",
          imageName: "project1.jpg",
          demoLink: "https://chong1455.github.io/background-generator.io/",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
