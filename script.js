const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click',() =>{
 navLinks.classList.toggle('active')
})
const projects =[
    {
    image:"./q.jpg",
    title:" Animited Navbar",
    description:" A responsive navigation bar with smooth animations and toggle functionality."
    },
   {
    image:"./z.jpg",
    title: "Landing Page",
    description:"A clean and simple landing page using HTML,CSS,and Basic JS"
   },
    {
        image:"./q.jpg",
        title:" Animited Navbar",
        description:" A responsive navigation bar with smooth animations and toggle functionality."
    },
   
];
const Container = document.getElementById("project-container");
projects .forEach(project => { 
  const card = document.createElement("div");
  card.className="card";
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;
  Container.appendChild(card);
}
);
const services =[
  {
  image:"./q.jpg",
  title:" Animited Navbar",
  description:" A responsive navigation bar with smooth animations and toggle functionality."
  },
 {
  image:"./z.jpg",
  title: "Landing Page",
  description:"A clean and simple landing page using HTML,CSS,and Basic JS"
 },
  {
      image:"./q.jpg",
      title:" Animited Navbar",
      description:" A responsive navigation bar with smooth animations and toggle functionality."
  },
 
];
const sContainer = document.getElementById("service-container");
services .forEach(service => { 
const scard = document.createElement("div");
scard.className="scard";
scard.innerHTML = `
  <img src="${service.image}" alt="${project.title}">
  <h3>${service.title}</h3>
  <p>${service.description}</p>
`;
sContainer.appendChild(scard);
}
);
const review =[
  {
    image:"./q.jpg",
    title:"Elon Musk",
    description:"Great work!Very creative and professional"
  }
]
