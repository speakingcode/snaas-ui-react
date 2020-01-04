import React          from "react"
import { useLocation} from "react-router-dom"

export const PageNotFound = () => {
  let location = useLocation();

  return (
    <div>
      <h3>
        No page could be found  at <code>{location.pathname}</code>
      </h3>
    </div>
  )
}

export default PageNotFound
