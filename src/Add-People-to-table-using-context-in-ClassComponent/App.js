import React from 'react'
import DataContext from './DataContext'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  static contextType = DataContext

  componentDidMount() {
    const dataContext = this.context
    this.setState({ data: dataContext })
  }
  render() {
    return (
      <>
        <button onClick={() => this.setState({ addNewPerson: true })}>
          Add new Person to table{' '}
        </button>
        {console.log(this.state)}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((d) => (
              <tr key={d.id}>
                <td>{d.name}</td>
                <td>{d.age}</td>
                <td>{d.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}
