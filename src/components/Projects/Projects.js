import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

// later we will learn about how to use constants (that being imported as projects).
// how that seperate the logic from the content
// it going to make our project so much readable
// and that will going to decrease the number of lines that your react component have

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />  
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {/* // inside here, we want to map over our project  */}
      {/* destructure from projects to {{id (project.id), img (project.img) }} */}
      {projects.map(({id, image, title, description, tags, source, visit}) => ( // use paranthases not curly braces, because thats an instant return kata dia 
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => ( // use paranthases not curly braces, because thats an instant return kata dia // TODO: Question : What is Instant Return in React or Javascript?
                <Tag key={i}>{tag}</Tag> // TODO: Question : Why this need key? and Why he said, this is not best practice?
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;
