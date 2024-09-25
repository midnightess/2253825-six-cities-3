import MainPage from './pages/main-page/main-page';


type AppOfferProps = {
  offerCount: number;
}

function App({offerCount}: AppOfferProps): JSX.Element {
  return (
    <MainPage offerCount={offerCount} />
  );
}


export default App;


