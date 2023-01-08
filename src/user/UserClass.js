import React from 'react';

export default class UserClass extends React.Component {

    handleChange = (e) => {
        this.props.onNameChange(2, e.target.value);
    }

  render() {
    const { name, years } = this.props;

    return (
        <>
            <p>
                Pozdrav, moje ime je {name} i imam {years} godina.
            </p>
            <label htmlFor="name">Ime nije točno? Promijeni ga!</label>
            <input type="text" value={name} id="name" onChange={this.handleChange}></input>
        </>    
    );
  }
}
