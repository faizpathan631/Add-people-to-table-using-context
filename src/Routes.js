import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './Add-People-to-table-using-context-in-ClassComponent/App'
import { DataProvider } from './Add-People-to-table-using-context-in-ClassComponent/DataContext'
import data from './Add-People-to-table-using-context-in-ClassComponent/Data'

function Routing() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/App'>
              Add people to table using context in class component
            </Link>
          </li>
        </ul>
        <hr />
        <DataProvider value={data}>
          <Route path='/App' component={App} />
        </DataProvider>
      </div>
    </Router>
  )
}

export default Routing
