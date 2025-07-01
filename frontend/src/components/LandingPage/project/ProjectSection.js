import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

function ProjectSection() {
  const [projects, setProjects] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null); // Track which card is open

  const fetchProjects = async () => {
    try {
      const res = await axios.get('/api/projects');
      setProjects(res.data);
    } catch (err) {
      console.error('❌ Error fetching projects:', err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id); // toggle
  };

  return (
    <section className="project-section">
      <h2>Our Projects</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod nisl sed nulla dapibus, sed luctus lacus rutrum.

      </p>
      <div className="project-grid">
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((project) => (
            <div className="project-card" key={project._id}>
              <img
                src={`http://localhost:5000/uploads/${project.image}`}
                alt={project.name}
                className="project-image"
              />
              <h3>{project.name}</h3>
              <p>
                {expandedCard === project._id
                  ? project.description
                  : `${project.description.slice(0, 80)}...`}
              </p>

              <button
                className="see-more-button"
                onClick={() => toggleExpand(project._id)}
              >
                {expandedCard === project._id ? 'Show Less' : 'See More'}
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default ProjectSection;
