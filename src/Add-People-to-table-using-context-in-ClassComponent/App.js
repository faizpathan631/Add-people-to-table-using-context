import React from 'react'
import DataContext from './DataContext'
import ReactModal from 'react-modal'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      addNewPerson: false,
      addedPerson: {
        id: `${data ? data.length++ : ''}`,
        name: '',
        age: '',
        gender: '',
      },
    }
  }
  static contextType = DataContext

  componentDidMount() {
    const dataContext = this.context
    this.setState({ data: dataContext })
  }
  handleCloseModal = () => {
    this.setState({ addNewPerson: false })
  }
  handleChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      addedPerson: {
        ...prevState.addedPerson,
        [e.target.name]: e.target.value,
      },
    }))
  }
  submitData = () => {
    this.setState({ data: this.state.data.concat(this.state.addedPerson) })
    this.handleCloseModal()
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

        <ReactModal
          isOpen={this.state.addNewPerson}
          onRequestClose={this.handleCloseModal}
          ariaHideApp={false}
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
          <br />
          <>
            <label>Id:</label>
            <input
              name='id'
              onChange={(e) => this.handleChange(e)}
              value={this.state.addedPerson.id}
            />
            <br />
            <label>Name:</label>
            <input
              name='name'
              onChange={(e) => this.handleChange(e)}
              value={this.state.addedPerson.name}
            />
            <br />
            <label>Age:</label>
            <input
              name='age'
              onChange={(e) => this.handleChange(e)}
              value={this.state.addedPerson.age}
            />
            <br />
            <label>Gender:</label>
            <input
              name='gender'
              onChange={(e) => this.handleChange(e)}
              value={this.state.addedPerson.gender}
            />
          </>
          <br />
          <button onClick={this.submitData}>Submit</button>
        </ReactModal>
      </>
    )
  }
}
