import { Link } from "react-router-dom";

export default function PageNotFound() {
    return(
        <div>
            <h1>Error:404 - Page Not Found!</h1>
             <Link to = {"/"}>Back to home</Link>    
        </div>
    );
}