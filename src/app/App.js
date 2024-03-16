import logo from '../logo.svg';
import './App.css';
import './money.css'
import {LandingPageHeader} from './components/landingPageHeader/LandingPageHeader'
import { Hero } from './components/hero/Hero';
import { Premium } from './components/premium';
import { PickPremium } from './components/pickPremium';
import { Footer} from './components/footer';
// import { Logo } from './components/Logo'

export function App() {
  return (
    <div>
      <LandingPageHeader/>
      <Hero/>
      <Premium/>
      <PickPremium/>
      <Footer/>
    </div>
  );
}

export default App;
