import { Navigate } from "react-router-dom";
import { useSession } from "../../contexts/AuthProvider";

export function RequireAuth({ children, requiredRole }: { children: JSX.Element, requiredRole:string }) {
  const { isAuthed, hasRoles }: { isAuthed: boolean, hasRoles: string[] } = useSession();
  let forbidden: boolean

  if (requiredRole) {
    if (!hasRoles.includes(requiredRole))
      forbidden = true;
  } else {
    forbidden = false;
  }

  if (isAuthed && forbidden) {
    return <Navigate to="/forbidden" />
  }

  if (!isAuthed) {
    return <Navigate to="/login" />;
  }
  return children;
}
