import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Anton Night's Study 
      </SectionTitle>
      <SectionText>
        What is the best way to calculate a risk is from failure. be a stupid person that just taking action without too long to think / strategise
      </SectionText>
      <Button onclick={() => window.location = "https://zenius.com"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;