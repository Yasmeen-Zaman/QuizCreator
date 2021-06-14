import React , { useState } from 'react';
import ReactDOM from 'react-dom';

function quizForm()
{
return(<div className='container'>


<center><h1> Quiz App </h1></center>
  <form>
  <div className="form-group row">
     
      <label for="title" class="col-sm-2 col-form-label"><h4>Quiz Title</h4></label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="title"   placeholder="Title"/>
    </div>
  </div>
  <br></br>
  <div class="form-group row">
    <label for="points" class="col-sm-2 col-form-label"><h4>Total Points</h4></label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="points" placeholder="Points for quiz"/>
    </div>
  </div>
  <br></br>
  <div class="form-group row">
    <label for="time" class="col-sm-2 col-form-label"><h4>Duration</h4></label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="time" placeholder="Time for quiz"/>
    </div>
  </div>
  <br></br>
  <div class="form-group row">
    <label for="expire" class="col-sm-2 col-form-label"><h4>Expired</h4></label>
    <div class="col-sm-10">
      <input type="date" class="form-control" id="expire" placeholder="Expired"/>
    </div>
  </div>

  <br></br><center><h1>Add Questions</h1><br></br>

</center>
    </form>
</div>)
}
export default quizForm;