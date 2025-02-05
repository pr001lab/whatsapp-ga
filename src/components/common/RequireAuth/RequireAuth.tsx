import { Navigate } from 'react-router-dom';
import { IRequireAuthProps } from './RequireAuth.props.ts';
import { loadState } from '../../../utils/utils.tsx';
import { AppRoute } from '../../../constant.ts';

export const RequireAuth = ({ children }: IRequireAuthProps) => {
  const getLocalStorage = loadState('green-api');

  if (!getLocalStorage) {
    return <Navigate to={AppRoute.Main} replace />;
  }

  return children;
};
