import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id='projects'>
<SectionDivider/>
<SectionTitle main>
  Projects

</SectionTitle>
<GridContainer>
  {projects.map(({id,image, title, description,tags, source, visit})=>(
    <div>
      <BlogCard key={id}>
        <Img src={image}/>
        <TitleContent>
          <HeaderThree>
            {title}
          </HeaderThree>
          <Hr></Hr>
        </TitleContent>
        <CardInfo>{description}</CardInfo>
        <div>
          <TitleContent>Stack</TitleContent>
          <TagList>
            {tags.map((tag,index)=>(
              <Tag key={index}>{tag}</Tag>
            ))}
          </TagList>
        </div>
        <UtilityList>
          <ExternalLinks href={visit}>Visit</ExternalLinks>
          <ExternalLinks href={source}>Github</ExternalLinks>
        </UtilityList>
      </BlogCard>
    </div>
  ))}
</GridContainer>
  </Section>
);

export default Projects;