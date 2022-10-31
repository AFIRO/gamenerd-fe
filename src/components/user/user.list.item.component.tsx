import { Link } from "react-router-dom";
import { User } from "../../api/user/model/user.model";

export default function UserListItemComponent(props: User) {

      return (
        <tr className="align-middle">
          <td>{props.name}</td>
          <td>{props.roles.join(', ')}</td>
          <td><Link to={`/users/update/${props.id}`}><button type="button" className="btn btn-warning m-4">EDIT</button></Link>
          {props.roles.includes("ADMIN")? null : <Link to={`/users/delete/${props.id}`}><button type="button" className="btn btn-danger">DELETE</button></Link>}
          </td>
        </tr>
      )
      
}