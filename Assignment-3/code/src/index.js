import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
var status={
  1:'suspended',
  2:'completed',
  3:'cancelled'
}
var orderDetails={
  'name':'Allen Ford',
  'employeeid':123456789,
  'appointmenton':new Data(567812345567).toLocalString(),
  'email':'person@example.com',
  'phone':23456789,
  'status':status[i],
  'Door':'Mark',
  'Time':new Data(12345678).toLocalString(),
  'avatar':'https://www.w3schools.com/howto/img_avatar.png',
  'title':'hey this is the text',
  'description':'this is the text this this this this this this',
}
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
