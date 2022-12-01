import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './Add-people-to-table-using-context-in-class-component/App'

function Routing() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/ReminderApp'>
              Add people to table using context in class component
            </Link>
          </li>
        </ul>
        <hr />
        <Route path='/App' component={App} />
      </div>
    </Router>
  )
}

export default Routing
