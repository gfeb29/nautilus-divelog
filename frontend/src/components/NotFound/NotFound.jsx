import React from 'react';
import pulpo from '../../img/pulpo.gif';
import './NotFound.css';

function NotFound() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((x) => setData(x.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          A este proyecto le quedan uno o dos sprint!
        </p>
        <img src={pulpo} className="App-logo" alt="logo" />
        <p>
          404
          Not found
        </p>
        <p>
          {!data ? 'Loading...' : data}
        </p>
      </header>
    </div>
  );
}

export default NotFound;
