import React from 'react';

import Card from 'components/Card';
import LinkedTitle from 'components/LinkedTitle';
import ProjectCard from 'components/ProjectCard';
import ROUTES from 'constants/routes';
import projects from './projects';
import Styled from './styles';

const Projects = () => {
  return (
    <Styled.Root>
      <LinkedTitle id={ROUTES.PROJECTS} text="Projects" link={`/#${ROUTES.PROJECTS}`} />
      <Card>
        <Styled.Container>
          {projects.map((project) => (
            <article key={project.id}>
              <ProjectCard {...project} />
            </article>
          ))}
        </Styled.Container>
      </Card>
    </Styled.Root>
  );
};

export default Projects;
