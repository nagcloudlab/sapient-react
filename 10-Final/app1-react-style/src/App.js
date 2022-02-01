import './App.css';


import CompOne from './feature1/CompOne';
import CompTwo from './feature2/CompTwo';
import Button from './styled/Button';
import TomatoButton from './styled/TomatoButton';
import Link from './styled/Link';


function App() {
  return (
    <div className="">
      <CompOne />
      <CompTwo />
      <Button onClick={e => console.log("playing...")}>Play</Button>
      <TomatoButton>Pause</TomatoButton>
      <Link
        href="https://github.com/styled-components/styled-components"
        target="_blank"
        rel="noopener"
        primary
      >
        GitHub
      </Link>
    </div>
  );
}

export default App;
