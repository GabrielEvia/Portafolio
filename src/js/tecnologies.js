const tecnologias = [
  {
    id: 1,
    name: "HTML",
    icon: '<img src="src/img/tecnologies/HTML5.svg" alt="HTML5" width="24" height="24">',
  },
  {
    id: 2,
    name: "CSS",
    icon: '<img src="src/img/tecnologies/CSS3.svg" alt="CSS3" width="24" height="24">',
  },
  {
    id: 3,
    name: "JavaScript",
    icon: '<img src="src/img/tecnologies/JS.svg" alt="JS" width="24" height="24">',
  },
  {
    id: 4,
    name: "TypeScript",
    icon: '<img src="src/img/tecnologies/TypeScript.svg" alt="TypeScript" width="24" height="24">',
  }, // si usas TS, agrégalo
  {
    id: 5,
    name: "PHP",
    icon: '<img src="src/img/tecnologies/PHP.svg" alt="PHP" width="24" height="24">',
  },
  {
    id: 6,
    name: "Laravel",
    icon: '<img src="src/img/tecnologies/Laravel.svg" alt="Laravel" width="24" height="24">',
  },
  {
    id: 7,
    name: "CodeIgniter",
    icon: '<img src="src/img/tecnologies/CodeIgniter.svg" alt="CodeIgniter" width="24" height="24">',
  },
  {
    id: 8,
    name: "C#",
    icon: '<img src="src/img/tecnologies/Cs.svg" alt="C#" width="24" height="24">',
  },
  {
    id: 9,
    name: ".Net",
    icon: '<img src="src/img/tecnologies/NET.svg" alt=".Net" width="24" height="24">',
  },
  {
    id: 10,
    name: "asp.net",
    icon: '<img src="src/img/tecnologies/ASP.svg" alt="asp.net" width="24" height="24">',
  },
  {
    id: 11,
    name: "Visual Basic",
    icon: '<img src="src/img/tecnologies/VisualBasic.svg" alt="Visual Basic" width="24" height="24">',
  },
  {
    id: 12,
    name: "Java",
    icon: '<img src="src/img/tecnologies/Java.svg" alt="Java" width="24" height="24">',
  },
  {
    id: 13,
    name: "Node.js",
    icon: '<img src="src/img/tecnologies/nodejs.svg" alt="node.js" width="24" height="24">',
  },
  {
    id: 14,
    name: "Express",
    icon: '<img src="src/img/tecnologies/Express.svg" alt="Express" width="24" height="24">',
  },
  {
    id: 15,
    name: "Flutter",
    icon: '<img src="src/img/tecnologies/Flutter.svg" alt="Flutter" width="24" height="24">',
  },
  {
    id: 16,
    name: "Xamarin",
    icon: '<img src="src/img/tecnologies/Xamarin.svg" alt="Xamarin" width="24" height="24">',
  },
  {
    id: 17,
    name: "MAUI",
    icon: '<img src="src/img/tecnologies/MAUI.svg" alt="MAUI" width="24" height="24">',
  },

  // Bases de Datos
  {
    id: 18,
    name: "MySQL",
    icon: '<img src="src/img/tecnologies/MySQL.svg" alt="MySQL" width="24" height="24">',
  },
  {
    id: 19,
    name: "SQLServer",
    icon: '<img src="src/img/tecnologies/SQLServer.svg" alt="SQLServer" width="24" height="24">',
  },
  {
    id: 20,
    name: "SQLite",
    icon: '<img src="src/img/tecnologies/SQLite.svg" alt="SQLite" width="24" height="24">',
  },

  {
    id: 20,
    name: "Access",
    icon: '<img src="src/img/tecnologies/Access.svg" alt="SQLite" width="24" height="24">',
  },

  {
    id: 21,
    name: "Firebase",
    icon: '<img src="src/img/tecnologies/Firebase.svg" alt="Firebase" width="24" height="24">',
  },

  // Herramientas de Desarrollo
  {
    id: 22,
    name: "VS Code",
    icon: '<img src="src/img/tecnologies/VSCode.svg" alt="VS Code" width="24" height="24">',
  },
  {
    id: 23,
    name: "Visual Studio",
    icon: '<img src="src/img/tecnologies/VisualStudio.svg" alt="Visual Studio" width="24" height="24">',
  },
  {
    id: 24,
    name: "PostMan",
    icon: '<img src="src/img/tecnologies/Postman.svg" alt="PostMan" width="24" height="24">',
  },
  {
    id: 25,
    name: "FileZilla",
    icon: '<img src="src/img/tecnologies/FileZilla.svg" alt="FileZilla" width="24" height="24">',
  },

  // Servidores
  {
    id: 41,
    name: "IIS",
    icon: '<img src="src/img/tecnologies/iis.svg" alt="Jira" width="24" height="24">',
  },
  {
    id: 26,
    name: "Apache",
    icon: '<img src="src/img/tecnologies/Apache.svg" alt="Apache" width="24" height="24">',
  },
  {
    id: 27,
    name: "nginx",
    icon: '<img src="src/img/tecnologies/nginx.svg" alt="nginx" width="24" height="24">',
  },

  // Plataformas en la nube
  {
    id: 28,
    name: "Azure",
    icon: '<img src="src/img/tecnologies/Azure.svg" alt="Azure" width="24" height="24">',
  },
  {
    id: 29,
    name: "AWS",
    icon: '<img src="src/img/tecnologies/AWS.svg" alt="AWS" width="24" height="24">',
  },

  // Diseño/UI
  {
    id: 30,
    name: "Bootstrap",
    icon: '<img src="src/img/tecnologies/Bootstrap.svg" alt="Bootstrap" width="24" height="24">',
  },
  {
    id: 31,
    name: "Tailwind CSS",
    icon: '<img src="src/img/tecnologies/Tailwind.svg" alt="Tailwind CSS" width="24" height="24">',
  },
  {
    id: 32,
    name: "Figma",
    icon: '<img src="src/img/tecnologies/Figma.svg" alt="Figma" width="24" height="24">',
  },

  // Control de versiones y colaboración
  {
    id: 33,
    name: "Git",
    icon: '<img src="src/img/tecnologies/Git.svg" alt="Git" width="24" height="24">',
  },
  {
    id: 34,
    name: "GitHub",
    icon: '<img src="src/img/tecnologies/GitHub.svg" alt="GitHub" width="24" height="24">',
  },

  {
    id: 42,
    name: "Trello",
    icon: '<img src="src/img/tecnologies/Trello.svg" alt="Jira" width="24" height="24">',
  },
  {
    id: 35,
    name: "Jira",
    icon: '<img src="src/img/tecnologies/Jira.svg" alt="Jira" width="24" height="24">',
  },
  {
    id: 37,
    name: "Teams",
    icon: '<img src="src/img/tecnologies/Teams.svg" alt="Teams" width="24" height="24">',
  },

  // Otros
  {
    id: 38,
    name: "Ubuntu",
    icon: '<img src="src/img/tecnologies/Ubuntu.svg" alt="Ubuntu" width="24" height="24">',
  },
  {
    id: 39,
    name: "WordPress",
    icon: '<img src="src/img/tecnologies/WordPress.svg" alt="WordPress" width="24" height="24">',
  },
  {
    id: 40,
    name: "Woo Commerce",
    icon: '<img src="src/img/tecnologies/WooCommerce.svg" alt="WooCommerce" width="24" height="24">',
  },
];

const techList = document.getElementById("tech-list");

if (techList) {
  tecnologias.forEach((tech) => {
    const techCard = document.createElement("div");
    techCard.className = "tech-item";
    techCard.innerHTML = `
      ${tech.icon}
      <p>${tech.name}</p>
    `;
    techList.appendChild(techCard);
  });
}
