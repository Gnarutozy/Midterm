import React from 'react';
import { useForm } from 'react-hook-form';
import './SignUpUser.css';

function SignUpUser() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch('password', '');

  const onSubmit = data => {
    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(JSON.stringify(data));
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-column1">
      <input
        {...register('FirstName', { required: true })}
        placeholder="First Name"
      />
      {errors.firstName && <span className="error-message">First name is required</span>}

      <input
        {...register('LastName', { required: true })}
        placeholder="Last Name"
      />
      {errors.lastName && <span className="error-message">Last name is required</span>}

      <input
        {...register('UserName', { required: true })}
        placeholder="User Name"
      />
      {errors.userName && <span className="error-message">User name is required</span>}

      <input
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        placeholder="Email"
      />
      {errors.email && <span className="error-message">Invalid email address</span>}

      <input
        {...register('Password', { required: true })}
        type="password"
        placeholder="Password"
      />
      {errors.password && <span className="error-message">Password is required</span>}

      <input
        {...register('ConfirmPassword', { required: true })}
        type="password"
        placeholder="Confirm Password"
      />
      {errors.confirmPassword && <span className="error-message">Confirm Password is required</span>}

      <div className="form-buttons1">
        <button type="submit" className="submit-button1">Submit</button>
        <button type="button" className="cancel-button" onClick={() => console.log('Cancel button clicked')}>Cancel</button>
      </div>
    </form>
  );
}

export default SignUpUser;
