import MainPage from '../main-pages/main-page';


type AppOfferProps = {
  offerCounts: number;
}

function App({offerCounts}: AppOfferProps): JSX.Element {
  return (
    <MainPage offerCounts={offerCounts} />
  );
}


export default App;


