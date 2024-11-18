import Header from './components/Header/Header.js';
import ImageSlider from './components/ImageSlider/ImageSlider.js';
import GetQuoteBlock from './components/GetQuoteBlock/GetQuoteBlock.js';
import ServicesOverview from './components/ServicesOverview/ServicesOverview.js';
import WhyChooseUsBlock from './components/WhyChooseUsBlock/WhyChooseUsBlock.js';
import Products from './components/Products/Products.js';


function App() {
  return (
    <>
      <Header></Header>
      <ImageSlider></ImageSlider>
      <GetQuoteBlock></GetQuoteBlock>
      <ServicesOverview></ServicesOverview>
      <WhyChooseUsBlock></WhyChooseUsBlock>
      <Products></Products>
    </>
  );
}

export default App;
