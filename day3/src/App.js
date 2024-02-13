import './App.css';
import AppScafold from './AppScafold';
import { useScroll } from './components/useScroll';

function App() {
  const {scrollPercentage, elRef} = useScroll();
  return (
    <div  ref={elRef} className='container'>
      <AppScafold counter={scrollPercentage}/>
    </div>
  );
}

export default App;
