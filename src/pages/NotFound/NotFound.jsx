import { useEffect } from "react";

function NotFound() {
  useEffect(() => {
    document.title = "Brainflix - Not Found";
  }, []);

  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Sorry, there is nothing to see here.</p>
    </div>
  );
}

export default NotFound;
