import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import * as ROUTES from '../../constants/routes';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found - Instagram';
  }, []);

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="mx-auto max-w-screen-lg">
        <p className="text-center text-2xl font-semibold">
          Sorry, this page isn't available.
        </p>
        <p className="text-center text-2sm my-6 font-normal">
          The link you followed may be broken, or the page may have been
          removed.
          <Link to={ROUTES.DASHBOARD} className="text-blue-medium">
            {' '}
            Go back to Instagram.
          </Link>
        </p>
      </div>
    </div>
  );
}
