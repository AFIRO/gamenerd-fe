import { Navigate, useLocation } from "react-router-dom";
import { useSession } from "../../contexts/AuthProvider";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { isAuthed} = useSession();
  let location = useLocation();

  if (!isAuthed) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
