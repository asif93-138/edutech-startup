import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="text-center py-5">
      <h1>404 <br />Page Not Found</h1>
      <h2 className="mb-4">Sorry, Link doesn't exist!</h2>
      <Link to="/" className=""><button type="butotn" className="btn btn-outline-dark w-auto card-btn rounded">Go Home</button></Link>
    </div>
  );
}
