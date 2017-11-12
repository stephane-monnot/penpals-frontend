import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../../actions';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    const { dispatch } = this.props;
    if (user.name && user.email && user.password && user.password_confirmation) {
      dispatch(userActions.register(user));
    }
  }

  render() {
    const { user, submitted } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={'form-group' + (submitted && !user.name ? ' has-error' : '')}>
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" name="name" value={user.name} onChange={this.handleChange} />
            {submitted && !user.name &&
            <div className="help-block">Name is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !user.email ? ' has-error' : '')}>
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" name="email" value={user.email} onChange={this.handleChange} />
            {submitted && !user.email &&
            <div className="help-block">Email is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={user.password} onChange={this.handleChange} />
            {submitted && !user.password &&
            <div className="help-block">Password is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !user.password_confirmation ? ' has-error' : '')}>
            <label htmlFor="password_confirmation">Password confirmation</label>
            <input type="password" className="form-control" name="password_confirmation" value={user.password_confirmation} onChange={this.handleChange} />
            {submitted && !user.password_confirmation &&
            <div className="help-block">Password confirmation is required</div>
            }
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>
            <Link to="/login" className="btn btn-link">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(RegisterScreen);
