import React from 'react';

const Measure = () => {
  return (
    <div
      id="card"
      className="container my-5 py-5"
    >
      <div className="container my-5">
        <h1>Measures:</h1>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Height:</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="175 cm" />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Weight:</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="56 kg" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Measure;
