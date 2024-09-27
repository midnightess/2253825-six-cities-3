import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';


function Logotype (): JSX.Element {
  return (
    <div className="header__left">
      <a className="header__logo-link header__logo-link--active">
        <Link to={AppRoute.Main}>
          <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
        </Link>
      </a>
    </div>
  );
}


export default Logotype;
