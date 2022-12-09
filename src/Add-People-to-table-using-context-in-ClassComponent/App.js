import React from 'react'
import DataContext from './DataContext'
import ReactModal from 'react-modal'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      addNewPerson: false,
      error: false,
      addedPerson: {
        id: '',
        name: '',
        age: '',
        gender: '',
      },
    }
  }
  static contextType = DataContext
  checkNull(val) {
    return val === null || val === undefined || val === ''
  }
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
    this.setState({ data: [...this.state.data, this.state.addedPerson] })
    this.handleCloseModal()
  }
  render() {
    return (
      <>
        <button onClick={() => this.setState({ addNewPerson: true })}>
          Add new Person
        </button>
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
          <br />
          <>
            <label>Id:</label>
            <input
              name='id'
              onChange={(e) => this.handleChange(e)}
              value={this.state.addedPerson.id}
            />
            <br />
            <br />
            <label>Name:</label>
            <input
              name='name'
              onChange={(e) => this.handleChange(e)}
              value={this.state.addedPerson.name}
            />
            <br />
            <br />
            <label>Age:</label>
            <input
              name='age'
              onChange={(e) => this.handleChange(e)}
              value={this.state.addedPerson.age}
            />
            <br />
            <br />
            <label>Gender:</label>
            <select
              name='gender'
              onChange={(e) => this.handleChange(e)}
              value={this.state.addedPerson.gender}
            >
              <option value=''></option>
              <option value='F'>Female</option>
              <option value='M'>Male</option>
            </select>
          </>
          <br />
          <br />
          <button
            disabled={
              this.checkNull(this.state.addedPerson.id) ||
              this.checkNull(this.state.addedPerson.name) ||
              this.checkNull(this.state.addedPerson.age) ||
              this.checkNull(this.state.addedPerson.gender)
            }
            onClick={this.submitData}
          >
            Submit
          </button>
        </ReactModal>
      </>
    )
  }
}
