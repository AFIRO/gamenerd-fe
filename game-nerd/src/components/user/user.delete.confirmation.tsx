import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { User } from "../../api/user/model/user.model";
import * as userService from '../../api/user/user.service';
import ErrorMessage from "../navigation/error";
import Loader from "../navigation/loading";

export default function UserDeleteConfirmationComponent() {
  const [error, setError] = useState<Error>(null);
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const userId = useParams().id;
  const navigate = useNavigate()

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        setError(null)
        const data = await userService.getByIdWithRoles(userId)
        setUser(data)      
      }
      catch (error) {
        console.log(error);
        setError(error)
      } finally {
        setLoading(false);
      }
    }
    getUser()
  }, [userId])

  const handleDelete = useCallback(async () => {
    try {
      await userService.deleteById(userId);
      navigate('/users', { replace: true })
    } catch (error) {
      console.log(error);
      setError(error)
    }
  }, [userId, navigate])

    return (
      <div>
        <Loader loading={loading} />
        <ErrorMessage error={error} />
        {!loading && !error ? 
        !user.roles.includes("ADMIN")? 
        <div className="m-5">
        <h1 className="text-light">Je staat op het punt om {user.name} te verwijderen.</h1>
        <button className="btn btn-danger m-5" onClick={handleDelete}>Bevestigen</button>
        <Link to={`/games`}><button className="btn btn-warning">Annuleren</button></Link>
      </div> : <ErrorMessage error={new Error("Het is niet toegestaan om een admin te verwijderen")}></ErrorMessage>
      : null}
      </div>
    )
}