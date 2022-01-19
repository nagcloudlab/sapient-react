import React, { Component } from 'react';

// UnControlled Component
class ReviewForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault();
        console.log("form submitted..");
        const reviewFormData = {
            name: this.refs.name.value,
            stars: this.refs.stars.value,
            body: this.refs.body.value
        }
        console.log(reviewFormData);
    }
    render() {
        return (
            <div className='card'>
                <div className='card-header'>
                    Review Form
                </div>
                <div className='card-body'>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <div className='form-group'>
                            <label>Name</label>
                            <input ref="name" className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>stars</label>
                            <select ref="stars" className='form-control'>
                                {[1, 2, 3, 4, 5].map(n => {
                                    return <option key={n}>{n}</option>
                                })}
                            </select>
                        </div>
                        <div className='form-group'>
                            <label>Body</label>
                            <textarea ref="body" className='form-control'></textarea>
                        </div>
                        <br />
                        <button className='btn btn-primary'>submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

// Controlled Component

class NewReviewForm extends React.Component {
    constructor(props) {
        super()
        this.state = {
            name: '',
            stars: 5,
            body: ''
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log("form submitted..");
        console.log(this.state);
    }
    handleChange(e) {
        let { id, value } = e.target
        this.setState({
            [id]: value
        })
    }
    render() {
        let { name, stars, body } = this.state
        return (
            <div className='card'>
                <div className='card-header'>
                    Review Form
                </div>
                <div className='card-body'>
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <div className='form-group'>
                            <label>Name</label>
                            <input id="name" onChange={e => this.handleChange(e)} value={name} className='form-control' />
                        </div>
                        <div className='form-group'>
                            <label>stars</label>
                            <select id="stars" onChange={e => this.handleChange(e)} value={stars} className='form-control'>
                                {[1, 2, 3, 4, 5].map(n => {
                                    return <option key={n}>{n}</option>
                                })}
                            </select>
                            <div className='text text-danger'>
                                {stars < 3 ? 'expected atleast 3 stars' : ''}
                            </div>
                        </div>
                        <div className='form-group'>
                            <label>Body</label>
                            <textarea id="body" onChange={e => this.handleChange(e)} value={body} className='form-control'></textarea>
                        </div>
                        <br />
                        <button className='btn btn-primary'>submit</button>
                    </form>
                </div>
            </div>
        )
    }
}


class Byte7 extends Component {
    render() {
        return (
            <div>
                <NewReviewForm />
            </div>
        );
    }
}

export default Byte7;