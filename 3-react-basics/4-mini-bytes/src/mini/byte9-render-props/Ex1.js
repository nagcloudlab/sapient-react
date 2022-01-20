
import React, { Component } from 'react';

class Profile extends Component {
    render() {
        let { name, age, render } = this.props
        return (
            <div className='card'>
                <div className='card-header bg-warning'>Profile</div>
                <div className='card-body'>
                    {render(name, age)}
                </div>
            </div>
        )
    }
}

class Ex1 extends Component {
    render() {
        return (
            <div className='card card-body'>
                <Profile
                    name="Nag" age={39}
                    render={(name, age) => {
                        return (
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td>Name:</td>
                                        <td>{name}</td>
                                    </tr>
                                    <tr>
                                        <td>Age:</td>
                                        <td>{age}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    }}
                />

                <br />

                <Profile
                    name="Mani"
                    age={25}
                    render={(name, age) => {
                        return (
                            <div>
                                Name : {name}
                                <br />
                                Age : {age}
                            </div>
                        )
                    }}
                />


            </div>
        );
    }
}

export default Ex1;