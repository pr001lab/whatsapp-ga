import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoute } from './constant.ts';
import MainPage from './pages/MainPage/MainPage.tsx';
import AuthPage from './pages/AuthPage/AuthPage.tsx';
import { loadState } from './utils/utils.tsx';
import { RequireAuth } from './components/common/RequireAuth/RequireAuth.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

const router = createBrowserRouter([
  {
    path: AppRoute.Main,
    element: loadState('green-api') ? (
      <RequireAuth>
        <MainPage />
      </RequireAuth>
    ) : (
      <AuthPage />
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
