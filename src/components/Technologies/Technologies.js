import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id='tech'>
  <SectionDivider/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I have used several programming languages in the web development world.

  </SectionText>
  <ListItem>
    <DiReact size='3rem'/>


    <ListContainer>
Front-end
<ListParagraph>
  JavaScript and React.js<br/>
  Html and CSS<br/>
  Next.JS, Tailwind CSS and TypeScript
</ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiFirebase size='3rem'/>


    <ListContainer>
Back-end
<ListParagraph>
  Experience with <br/>
  Ruby on rails and Databases
</ListParagraph>
    </ListContainer>
  </ListItem>

</Section>
);

export default Technologies;
