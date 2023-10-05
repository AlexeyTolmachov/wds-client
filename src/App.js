import './App.css';
import DynamicRenderingReviews from './components/DynamicRenderingReviews/DynamicRenderingReviews';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import StaticSection from './components/StaticSection/StaticSection';

function App() {
  return (
    <div className="App">
      <Header />
      <StaticSection />
      <DynamicRenderingReviews />
      <Footer />
    </div>
  );
}

export default App;
