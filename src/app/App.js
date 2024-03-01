import logo from '../logo.svg';
import './App.css';
import './money.css'
import {LandingPageHeader} from './components/landingPageHeader/LandingPageHeader'
import { PaymentPlan } from './components/paymentPlan/PaymentPlan';
// import { Logo } from './components/Logo'

export function App() {
  return (
    <div>
      <LandingPageHeader/>
      <PaymentPlan/>
    </div>
  );
}

export default App;
