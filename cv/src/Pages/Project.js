import React from 'react';
import './Project.css';
import Footer from '../components/Footer';

function ProjectDetail({ name, description, imageUrl }) {
  return (
    <div className='projectDetail'>
      <div className='projectName'>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className='projectImage'>
        <img src={imageUrl} alt={name} />
      </div>
    </div>
  );
}

function Project() {
  const projects = [
    {
      name: "Project Name 01",
      description: "This is the frontend traveling website which is very useful for traveling to good places like India, Germany, Paris.",
      imageUrl: "https://media.istockphoto.com/id/925320050/photo/woman-uses-smart-phone-to-book-travel-reservation.jpg?s=612x612&w=0&k=20&c=xIIg4IBD7mGLo0iZGXaRl1VEfAFfmBCyHrn4hCZ49tc="
    },
    {
      name: "Project Name 02",
      description: "This is food delivery app  project with advanced features and beautiful UI/UX design.",
      imageUrl: "https://media.istockphoto.com/id/883136458/photo/frame-of-assorted-fresh-vegetables-on-rustic-wooden-table.jpg?s=612x612&w=0&k=20&c=8XRBY7LoiX3XjzaHszzHBG572KRO0pG-c2hc_hks6HI="
    },
    {
      name: "Project Name 03",
      description: "This is another blogging website project with advanced features and beautiful UI/UX design.",
      imageUrl: "https://media.istockphoto.com/id/626669886/photo/blogging-blog-word-coder-coding-using-laptop.jpg?s=612x612&w=0&k=20&c=gX9o-kj9RohNBAT2n4wR6fldiTdvnpxZOsetFonpBJw="
    },
    {
      name: "Project Name 04",
      description: "This is the real estate website project with  beautiful UI/UX design.",
      imageUrl: "https://media.istockphoto.com/id/1223072133/photo/cityscape-of-a-residential-area-with-modern-apartment-buildings-new-green-urban-landscape-in.jpg?s=612x612&w=0&k=20&c=4Rt3ckwGExlXMJwD7lMMxNEm0CVowexNUp1u08nHVa8="
    },
    // Add more projects as needed
  ];

  return (
    <div className='project' id="projects">
      <h1>Projects</h1>
      <div className='projectContainer'>
        {projects.map((project, index) => (
          <ProjectDetail
            key={index}
            name={project.name}
            description={project.description}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
      <br/>
      <Footer/>
    </div>
    
  );
}

export default Project;
