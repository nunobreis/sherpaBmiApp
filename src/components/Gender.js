import React from 'react';

const Gender = () => {
  return(
    <div
      id="card"
      className="container my-5 py-5"
    >
      <div className="container my-5">
        <h1>Gender:</h1>
          <div className="span2">
              <div className="btn-group pull-right" data-toggle="buttons-radio">
                  <button className="btn btn-primary active">Male</button>
                  <button className="btn btn-primary">Female</button>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Gender;
