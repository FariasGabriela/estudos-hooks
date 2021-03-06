import React, { useState, useEffect } from 'react';
import Card from './../components/Card/Card';
import Grid from '@material-ui/core/Grid';
import useNameUser from '../hooks/useNameUser';

function Home() {
  const user = useNameUser(0);
  console.log(user);
  const user2 = useNameUser(1);
  console.log(user2);
  const [count, setCount] = useState(0);
  const fruitVariable = useState('Banana');

  useEffect(() => {
    console.log('use effect teste');
    document.title = `Você clicou ${count} vezes!`;
  }, [count]);

  const clickButton = () => {
    setCount(count + 1);
  };

  const question = 'answer';

  const item = {
    [question]: 4,
  };

  console.log(item.answer);

  const [first, ...restOfItems] = [10, 20, 30, 40];

  console.log(first);
  console.log(restOfItems);

  return (
    <div
      style={{
        backgroundColor: '#D3D3D3',
        height: 'calc(100% - 30px)',
        width: 'calc(100% - 30px)',
        position: 'absolute',
        padding: 15,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <p>User: {user}</p>
        </Grid>

        <Grid item xs={3}>
          <Card onClick={clickButton} count={count + 'GB'} />
        </Grid>

        <Grid item xs={3}>
          <Card onClick={() => fruitVariable[1]('Maça')} count={fruitVariable[0]} />
        </Grid>

        <Grid item xs={3}>
          <Card onClick={clickButton} count={count} />
        </Grid>

        <Grid item xs={3}>
          <Card onClick={clickButton} count={count} />
        </Grid>
      </Grid>
    </div>
  );
}

class Teste extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('teste');
  }

  render() {
    return <Home />;
  }
}

export default Teste;
