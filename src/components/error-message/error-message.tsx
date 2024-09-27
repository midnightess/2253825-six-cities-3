import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';


function ErrorMessage (): JSX.Element {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>
        <p>Перейти на главную страницу</p>
      </Link>
    </div>
  );
}


export default ErrorMessage;
