import { NavLink } from 'react-router-dom';
import Loader from './Loader/Loader';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/cars/selectors';
import { Toaster } from 'react-hot-toast';

const Navigation = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/catalog">Catalog</NavLink>

      <NavLink to="/favorites">Favorites</NavLink>

      {isLoading && <Loader />}
      <Toaster />
    </nav>
  );
};

export default Navigation;
