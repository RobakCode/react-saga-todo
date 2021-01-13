import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './pages/Home';
import { Container } from './AppStyled';
import GlobalFonts from './assets/fonts';

function App() {
  const randomIds = randomsNumber();
  const dispatch = useDispatch();

  useEffect(() => {
    randomIds.map( (id: number) => {
      dispatch({ type: 'GET_TASK_BY_ID', payload: id });
    });
  }, [])

  return (
    <Container>
      <Home />
      <GlobalFonts />
    </Container>
  );
}

const randomsNumber = () => {
  const result: any = [];
  while ( result.length < 6 ) {
    const random = Math.floor(Math.random() * 200) + 1;
    if ( !result.find( (x: number) => x === random ) ) {
      result.push( random );
    }
  }
  return result;
}

export default App;
