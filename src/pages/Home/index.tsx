import { Fragment } from 'react';
import { Composition } from 'atomic-layout';
import PageHeader from '../../components/PageHeader'
import AddNewTask from '../../components/AddNewTask';
import ListTasks from '../../components/ListTasks';

const areas = `
  header
  body
`;

const Home = () => (
  <Composition areas={areas}>
    {({ Header, Body }) => (
      <Fragment>
        <Header><PageHeader title="Todo list" actions={<AddNewTask />} /></Header>
        <Body>
          <ListTasks />
        </Body>
      </Fragment>
    )}
  </Composition>
);

export default Home;