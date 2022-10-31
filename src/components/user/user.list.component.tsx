import { useCallback, useEffect, useState } from "react"
import * as userService from '../../api/user/user.service';
import Loader from '../navigation/loading';
import ErrorMessage from "../navigation/error";
import { User } from "../../api/user/model/user.model";
import UserListItemComponent from "./user.list.item.component";


export default function UserListComponent() {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<Error>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await userService.getAll();
      setUsers(data);
    } catch (error) {
      console.error(error);
      setError(new Error(error.response.data.message));
    } finally {
      setLoading(false);
    };
  },[])

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers],);

  return (
    <div>
      <Loader loading={loading} />
      <ErrorMessage error={error} />
      {!loading && !error ?
        <div>
          <h1 className="text-light">Overzicht van alle users</h1>
          <div className="row justify-content-center p-4">
            <div className="col-6">
              <table className="table table-bordered table-striped table-dark table-hover">
                <thead>
                  <tr>
                  <td>Naam</td>
                  <td>Rollen</td>
                  <td>Admin Opties</td>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => <UserListItemComponent key={user.id} {...user} ></UserListItemComponent>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        : null}
    </div>
  )
}