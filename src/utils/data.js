
export const categoriess = [
  { id: "react", value: "ReactJS" },
  { id: "firebase", value: "Firebase" },
  { id: "node", value: "nodeJS" },
  { id: "mysql", value: "MySQL" },
  { id: "mongodb", value: "MongoDB" },
];
export const resources = [
  { id: "libraries", value: "Usefull Libraries" },
  { id: "snippets", value: "Code Snippets" },
  { id: "courses", value: "Free Courses" },
  { id: "articles", value: "Amazing Articles" },
];

export const colourOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

export const homeData = {
  libraries: [
    {
      id: 5519145,
      name: "express",
      description: "Fast, unopinionated, minimalist web framework for node.",
      category: ["nodejs", "backend"],
      url: "https://www.npmjs.com/package/express/",
      contributor: {
        name: "Pavan Kumar",
        image: "https://avatars.githubusercontent.com/u/52795191?v=4",
        id: 52795191,
      },
      keywords: ["nodejs", "mern", "expressjs", "node-express"],
      language: "JavaScript",
    },
    {
      id: 5519144,
      name: "mysql",
      description:
        "This is a node.js driver for mysql. It is written in JavaScript, does not require compiling, and is 100% MIT licensed.",
      category: ["mysql", "database", "RDMS"],
      url: "https://www.npmjs.com/package/mysql/",
      contributor: {
        name: "Pavan Kumar",
        image: "https://avatars.githubusercontent.com/u/52795191?v=4",
        id: 52795191,
      },
      keywords: ["mysql", "database", "relation", "node-mysql"],
      language: "JavaScript",
    },
    {
      id: 5514491,
      name: "mysql 0.0.2",
      description:
        "This package is a ‘virtual package’, which requires MySQL-python to install. In effect, this means ‘pip install mysql’ will actually install MySQL-python.",
      category: ["mysql", "database", "RDMS", "python"],
      url: "https://pypi.org/project/mysql/",
      contributor: {
        name: "Devakumar",
        image: "https://avatars.githubusercontent.com/u/46824652?v=4",
        id: 46824652,
      },
      keywords: ["mysql", "database", "relation", "python-mysql"],
      language: "Python",
    },
    {
      id: 5514491,
      name: "Panda3D 1.10.8",
      description: `Panda3D is a powerful 3D engine written in C++, with a complete set of Python bindings. Unlike other engines, these bindings are automatically generated, meaning that they are always up-to-date and complete: all functions of the engine can be controlled from Python. All major Panda3D applications have been written in Python, this is the intended way of using the engine.

        Panda3D now supports automatic shader generation, which now means you can use normal maps, gloss maps, glow maps, HDR, cartoon shading, and the like without having to write any shaders.
        
        Panda3D is a modern engine supporting advanced features such as shaders, stencil, and render-to-texture. Panda3D is unusual in that it emphasizes a short learning curve, rapid development, and extreme stability and robustness. Panda3D is free software that runs under Windows, Linux, or macOS.
        
        The Panda3D team is very concerned with making the engine accessible to new users. We provide a detailed manual, a complete API reference, and a large collection of sample programs to help you get started. We have active forums, with many helpful users, and the developers are regularly online to answer questions.`,
      category: ["3d", "3d engine", "panda", "python"],
      url: "https://pypi.org/project/Panda3D/",
      contributor: {
        name: "Sree Harsha R",
        image: "https://avatars.githubusercontent.com/u/61697100?v=4",
        id: 61697100,
      },
      keywords: ["panda3d", "3d render", "python-3d"],
      language: "Python",
    },
  ],
  codeSnippets: [
    {
      id: 5519145,
      name: "Node.js Hello World with Express.js",
      description: "Node.js Hello World with Express.js",
      category: ["nodejs", "backend"],
      url: "https://gist.github.com/sangkyoonnam/9128870/",
      contributor: {
        name: "Pavan Kumar",
        image: "https://avatars.githubusercontent.com/u/52795191?v=4",
        id: 52795191,
      },
      keywords: ["nodejs", "mern", "expressjs", "node-express"],
      language: "JavaScript",
    },
    {
      id: 5519144,
      name: "node.js mysql wrapper",
      description:
        "Custom module to expose mysql to node.js. Handles re-connections. ",
      category: ["mysql", "database", "RDMS"],
      url: "https://gist.github.com/polimux/4691229/",
      contributor: {
        name: "Pavan Kumar",
        image: "https://avatars.githubusercontent.com/u/52795191?v=4",
        id: 52795191,
      },
      keywords: ["mysql", "database", "relation", "node-mysql"],
      language: "JavaScript",
    },
    {
      id: 5514491,
      name: "mysql.py",
      description: "Examples of Mysql programming in Python",
      category: ["mysql", "database", "RDMS", "python"],
      url: "https://gist.github.com/naiquevin/1746005/",
      contributor: {
        name: "Devakumar",
        image: "https://avatars.githubusercontent.com/u/46824652?v=4",
        id: 46824652,
      },
      keywords: ["mysql", "database", "relation", "python-mysql"],
      language: "Python",
    },
    {
      id: 5514491,
      name: "Panda3D",
      description: `Custom Python loader plug-in example for Panda3D`,
      category: ["3d", "3d engine", "panda", "python"],
      url: "https://gist.github.com/rdb/cb3c2f4a98ce371c722e3f297b445153/",
      contributor: {
        name: "Sree Harsha R",
        image: "https://avatars.githubusercontent.com/u/61697100?v=4",
        id: 61697100,
      },
      keywords: ["panda3d", "3d render", "python-3d"],
      language: "Python",
    },
  ],
  courses: [
    {
      id: 5514491,
      name: "Node JS API Development for Beginners",
      description: `Learn Node JS API Development from absolute scratch. This course is for complete beginners getting started guide!`,
      category: ["nodejs", "backend", "api development"],
      thumbnail:
        "https://img-a.udemycdn.com/course/240x135/461160_8d87_6.jpg?JjnzouDAM-hqJo2KlPeMevc5-8jqMIwslGgFAgwhWRlVxZNFzZdsAnlWvlJ2Cj6CObzjNoX_ESBUqSTyY1euFnr2SedxyCWQKxNFTdH9zInECNcP_Aga_RS2uMwrvHQ",
      url: "https://www.udemy.com/course/node-js-api-tutorial/",
      contributor: {
        name: "Pavan Kumar",
        image: "https://avatars.githubusercontent.com/u/52795191?v=4",
        id: 52795191,
      },
      keywords: ["nodejs", "mern", "expressjs", "node-express"],
      language: "JavaScript",
    },
    {
      id: 5514491,
      name: "Node.js MySQL Crash Course | Node.js MySQL CRUD App",
      description: `Node.js MySQL Crash Course | Node.js MySQL CRUD App`,
      category: ["mysql", "database", "RDMS"],
      thumbnail:
        "https://img-a.udemycdn.com/course/240x135/3143260_6c86_2.jpg?yG12iE2_aXszqgkGyMhg4w3WQ7geV2CLaaw8QraS5iQxFhUXywWOFAuMD7-mllDiNCJFRQBIK_MKSo-27Jip7ncC0EggiFrIMEntvER7QCYkK4GDrPIslQdzfKqwtA",
      url: "https://www.youtube.com/watch?v=cfff2lQfXsw",
      contributor: {
        name: "Pavan Kumar",
        image: "https://avatars.githubusercontent.com/u/52795191?v=4",
        id: 52795191,
      },
      keywords: ["mysql", "database", "relation", "python-mysql"],
      language: "JavaScript",
    },
    {
      id: 5514491,
      name: "Python MySQL Tutorial - Setup & Basic Queries",
      description:
        "Learn how to use MySQL and SQL with python. In this series I will show you how to use the python mysql connector to create tables, insert data and work with a MySQL database.",
      category: ["mysql", "database", "RDMS", "python"],
      thumbnail:
        "https://img-a.udemycdn.com/course/240x135/1907136_9cc5_7.jpg?lzuqSLdimFeEdP6m7oBdReSUVIMp2pqk4P4xU1TdxSNIrBv8mmwehBSjghSPEtWYD3c4LFZTeD9m7DT4l2aWII4yJxWFQ_zIHkBGyN1jxe39GHPQ4ViQPtbdy4euPg",
      url: "https://www.youtube.com/watch?v=3vsC05rxZ8c",
      contributor: {
        name: "Devakumar",
        image: "https://avatars.githubusercontent.com/u/46824652?v=4",
        id: 46824652,
      },
      keywords: ["mysql", "database", "relation", "python-mysql"],
      language: "Python",
    },
    {
      id: 5514491,
      name: "Panda3D Game Engine - Getting Started Tutorial",
      description: `Learn how to create a very basic game by following the Hello World tutorial from the Panda3D docs!`,
      category: ["3d", "3d engine", "panda", "python"],
      url: "https://www.youtube.com/watch?v=t2eC6JsImwc",
      thumbnail:
        "https://img-a.udemycdn.com/course/240x135/1946104_668a_2.jpg?8Z9tNZ_1R6nJAixi3CGvdA2eXP49nPtOU20UdS_l40pWVxgctUBMVhmU6CX9oJu8bVY61F9KX_EkJwLLnUVfe09mIIJypSwhBGEgjMaMNk3GxsaaCJev3ALfeaOUzQ",
      contributor: {
        name: "Sree Harsha R",
        image: "https://avatars.githubusercontent.com/u/61697100?v=4",
        id: 61697100,
      },
      keywords: ["panda3d", "3d render", "python-3d"],
      language: "Python",
    },
  ],
  articles: [
    {
      id: 5514491,
      name: "Node JS API Development for Beginners",
      description: `Learn Node JS API Development from absolute scratch. This course is for complete beginners getting started guide!`,
      category: ["nodejs", "backend", "api development"],
      thumbnail:
        "https://img-a.udemycdn.com/course/240x135/461160_8d87_6.jpg?JjnzouDAM-hqJo2KlPeMevc5-8jqMIwslGgFAgwhWRlVxZNFzZdsAnlWvlJ2Cj6CObzjNoX_ESBUqSTyY1euFnr2SedxyCWQKxNFTdH9zInECNcP_Aga_RS2uMwrvHQ",
      url: "https://www.udemy.com/course/node-js-api-tutorial/",
      contributor: {
        name: "Pavan Kumar",
        image: "https://avatars.githubusercontent.com/u/52795191?v=4",
        id: 52795191,
      },
      keywords: ["nodejs", "mern", "expressjs", "node-express"],
      language: "JavaScript",
    },
    {
      id: 5514491,
      name: "Node.js MySQL Crash Course | Node.js MySQL CRUD App",
      description: `Node.js MySQL Crash Course | Node.js MySQL CRUD App`,
      category: ["mysql", "database", "RDMS"],
      thumbnail:
        "https://img-a.udemycdn.com/course/240x135/3143260_6c86_2.jpg?yG12iE2_aXszqgkGyMhg4w3WQ7geV2CLaaw8QraS5iQxFhUXywWOFAuMD7-mllDiNCJFRQBIK_MKSo-27Jip7ncC0EggiFrIMEntvER7QCYkK4GDrPIslQdzfKqwtA",
      url: "https://www.youtube.com/watch?v=cfff2lQfXsw",
      contributor: {
        name: "Pavan Kumar",
        image: "https://avatars.githubusercontent.com/u/52795191?v=4",
        id: 52795191,
      },
      keywords: ["mysql", "database", "relation", "python-mysql"],
      language: "JavaScript",
    },
    {
      id: 5514491,
      name: "Python MySQL Tutorial - Setup & Basic Queries",
      description:
        "Learn how to use MySQL and SQL with python. In this series I will show you how to use the python mysql connector to create tables, insert data and work with a MySQL database.",
      category: ["mysql", "database", "RDMS", "python"],
      thumbnail:
        "https://img-a.udemycdn.com/course/240x135/1907136_9cc5_7.jpg?lzuqSLdimFeEdP6m7oBdReSUVIMp2pqk4P4xU1TdxSNIrBv8mmwehBSjghSPEtWYD3c4LFZTeD9m7DT4l2aWII4yJxWFQ_zIHkBGyN1jxe39GHPQ4ViQPtbdy4euPg",
      url: "https://www.youtube.com/watch?v=3vsC05rxZ8c",
      contributor: {
        name: "Devakumar",
        image: "https://avatars.githubusercontent.com/u/46824652?v=4",
        id: 46824652,
      },
      keywords: ["mysql", "database", "relation", "python-mysql"],
      language: "Python",
    },
    {
      id: 5514491,
      name: "Panda3D Game Engine - Getting Started Tutorial",
      description: `Learn how to create a very basic game by following the Hello World tutorial from the Panda3D docs!`,
      category: ["3d", "3d engine", "panda", "python"],
      url: "https://www.youtube.com/watch?v=t2eC6JsImwc",
      thumbnail:
        "https://img-a.udemycdn.com/course/240x135/1946104_668a_2.jpg?8Z9tNZ_1R6nJAixi3CGvdA2eXP49nPtOU20UdS_l40pWVxgctUBMVhmU6CX9oJu8bVY61F9KX_EkJwLLnUVfe09mIIJypSwhBGEgjMaMNk3GxsaaCJev3ALfeaOUzQ",
      contributor: {
        name: "Sree Harsha R",
        image: "https://avatars.githubusercontent.com/u/61697100?v=4",
        id: 61697100,
      },
      keywords: ["panda3d", "3d render", "python-3d"],
      language: "Python",
    },
  ],
};

export const resourceContributors = [
  {
    username: "pavankpdev",
    image: "https://avatars.githubusercontent.com/u/52795191?v=4",
    name: "Pavan Kumar",
    id: 61697100,
  },
  {
    username: "DevNM21",
    image: "https://avatars.githubusercontent.com/u/46824652?v=4",
    name: "Devakumar",
    id: 61697100,
  },
  {
    username: "sreeharshabalaji",
    image: "https://avatars.githubusercontent.com/u/61697100?v=4",
    name: "Sree Harsha R",
    id: 61697100,
  },
  {
    username: "thebestestkhan",
    image: "https://avatars.githubusercontent.com/u/61203329?v=4",
    name: "Abdul Rawoof Khan",
    id: 61697100,
  },
  {
    username: "iBharath01",
    image: "https://avatars.githubusercontent.com/u/61697610?v=4",
    name: "Bharath M U",
    id: 61697100,
  },
];
export const projectContributors = [
  {
    username: "pavankpdev",
    image: "https://avatars.githubusercontent.com/u/52795191?v=4",
    name: "Pavan Kumar",
    id: 61697100,
  },
  {
    username: "DevNM21",
    image: "https://avatars.githubusercontent.com/u/46824652?v=4",
    name: "Devakumar",
    id: 61697100,
  },
  {
    username: "sreeharshabalaji",
    image: "https://avatars.githubusercontent.com/u/61697100?v=4",
    name: "Sree Harsha R",
    id: 61697100,
  },
  {
    username: "thebestestkhan",
    image: "https://avatars.githubusercontent.com/u/61203329?v=4",
    name: "Abdul Rawoof Khan",
    id: 61697100,
  },
  {
    username: "iBharath01",
    image: "https://avatars.githubusercontent.com/u/61697610?v=4",
    name: "Bharath M U",
    id: 61697100,
  },
];

export const profile = {
  fullname: "Pavan Kumar",
  username: "pavankpdev",
  image: "https://avatars.githubusercontent.com/u/52795191?v=4",
  url: "https://github.com/pavankpdev/",
  contribution: [
    {
      resourceType: "libraries",
      name: "express",
      description: "Fast, unopinionated, minimalist web framework for node.",
      id: 5519145,
    },
    {
      resourceType: "codeSnippets",
      id: 5519145,
      name: "Node.js Hello World with Express.js",
      description: "Node.js Hello World with Express.js",
    },
    {
      resourceType: "courses",
      id: 5514491,
      name: "Node JS API Development for Beginners",
      description: `Learn Node JS API Development from absolute scratch. This course is for complete beginners getting started guide!`,
    },
    {
      resourceType: "articles",
      id: 5514491,
      name: "Node JS API Development for Beginners",
      description: `Learn Node JS API Development from absolute scratch. This course is for complete beginners getting started guide!`,
    },
  ],
};
