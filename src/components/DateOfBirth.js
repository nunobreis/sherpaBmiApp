import React from 'react';

const DateOfBirth = () => {
  return (
    <div
      id="card"
      className="container my-5 py-5"
    >
      <div
        className="container my-5"
      >
        <div className="well">
            <div className="form-group">
            <h1>Date of Birth:</h1>
            <input
              type="date"
              className="form-control"
              id="exampleInputDOB1"
              placeholder="Date of Birth"
            />
          </div>
        </div>

        <div className="well">
        </div>
      </div>
    </div>

  );
}

export default DateOfBirth;
