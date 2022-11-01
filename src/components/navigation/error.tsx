import { Link } from "react-router-dom";
import { useSession } from "../../contexts/AuthProvider";
import { ErrorIdentifier } from "./error.identifier";

export default function ErrorMessage({ error }) {
  const { hasRoles }: { hasRoles: string[] } = useSession();
  if (error) {
    switch (error.message) {

      case ErrorIdentifier.REVIEW_NOT_FOUND:
        return (
          <div className="text-light"> <h2>Er is nog geen review geschreven voor dit spel.</h2>
            <h4>Indien je een schrijver bent, schrijf er gerust eentje!</h4>
            {hasRoles.includes("WRITER") ? <Link to={`/reviews/create`}><button className="btn btn-secondary mt-3">Review aanmaken</button></Link> : null}
          </div>
        );

      case ErrorIdentifier.REVIEWS_NOT_FOUND_GAME:
        return (
          <div className="text-light"> <h2>Er is nog geen review geschreven voor dit spel.</h2>
            <h4>Indien je een schrijver bent, schrijf er gerust eentje!</h4>
            {hasRoles.includes("WRITER") ? <Link to={`/reviews/create`}><button className="btn btn-secondary mt-3">Review aanmaken</button></Link> : null}
          </div>
        );

      case ErrorIdentifier.NEWS_NOT_FOUND_GAME:
        return (
          <div className="text-light"> <h2>Er is nog geen nieuws geschreven voor dit spel.</h2>
            <h4>Indien je een schrijver bent, schrijf er gerust eentje!</h4>
            {hasRoles.includes("WRITER") ? <Link to={`/news/create`}><button className="btn btn-secondary mt-3">Nieuws item aanmaken</button></Link> : null}
          </div>
        );

      case ErrorIdentifier.NO_GAMES:
        return (
          <div className="text-light"> <h2>Er zijn geen games in de achterliggende databasis.</h2>
            <h4>Gelieve de administrator te contacteren of zelf eentje aan te maken.</h4>
            {hasRoles.includes("ADMIN") ? <Link to={`/games/create`}><button className="btn btn-secondary mt-3">Game aanmaken</button></Link> : null}
          </div>
        );

      case ErrorIdentifier.NO_NEWS:
        return (
          <div className="text-light"> <h2>Er zijn geen nieuws items in de achterliggende databasis.</h2>
            <h4>Gelieve de administrator te contacteren of zelf eentje aan te maken.</h4>
            {hasRoles.includes("WRITER") ? <Link to={`/news/create`}><button className="btn btn-secondary mt-3">Nieuws item aanmaken</button></Link> : null}
          </div>
        );

      case ErrorIdentifier.NO_REVIEWS:
        return (
          <div className="text-light"> <h2>Er zijn geen reviews in de achterliggende databasis.</h2>
            <h4>Gelieve de administrator te contacteren of zelf eentje aan te maken.</h4>
            {hasRoles.includes("WRITER") ? <Link to={`/reviews/create`}><button className="btn btn-secondary mt-3">Review aanmaken</button></Link> : null}
          </div>
        );

        case ErrorIdentifier.WRONG_CREDENTIALS:
          return (
            <div className="alert alert-danger">
              <h4 className="alert-heading">Login error</h4>
              Credentials invalid. Please try again.
            </div>
          );

      case ErrorIdentifier.USER_ALREADY_EXISTS:
        return (
          <div className="alert alert-danger">
            <h4 className="alert-heading">Registration error</h4>
            Username already exists. Please choose another name.
          </div>
        );

      default:
        return (
          <div className="alert alert-danger">
            <h4 className="alert-heading">An error occured</h4>
            {error.message || JSON.stringify(error)}
          </div>
        );
    }
  }

  return null;
}
