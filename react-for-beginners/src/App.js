import React, { useEffect, useState } from 'react';
function App() {
  const [counter, setValue] = React.useState(0);
  const [keyword, setKeyword] = useState('');
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('render11');
  const iRunOnlyOnce = () => {
    console.log('render');
  };
  console.log('SEARCH FOR', keyword);
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search here...."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default App;
