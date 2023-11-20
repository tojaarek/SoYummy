import { Footer } from 'components/Footer/Footer';
import Header2 from 'components/Header/Header2';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer } from 'react-toastify';

export const Layout = () => {
  return (
    <div className={css.layoutContainer}>
      <Header2 />
      <div className={css.mainContent}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
      <ToastContainer autoClose={4000} />
    </div>
  );
};
