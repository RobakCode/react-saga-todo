import { Fragment } from 'react';
import { Composition } from 'atomic-layout';
import { WrapStyled, TitleStyled } from './styled';

const areas = `
  title actions
`;

const PageHeader = ({ title, actions }: { title: string, actions: any }) => (
  <WrapStyled>
    <Composition areas={areas}>
      {({ Title, Actions }) => (
        <Fragment>
          <Title><TitleStyled>{ title }</TitleStyled></Title>
          <Actions justifyContent="flex-end" alignItems="center" flex>{ actions }</Actions>
        </Fragment>
      )}
    </Composition>
  </WrapStyled>
);

export default PageHeader;