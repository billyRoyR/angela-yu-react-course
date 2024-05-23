import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

function Card(props) {

  return (
    <div>
      <h1>My Contacts</h1>
      <h2>{props.name}</h2>
      <p>+123 456 789</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
    <App />
    <Card  name="Beyonce"/>

    <input id="
    fName" placeholder="Enter your first name" value="Angela Yu"/>
	</React.StrictMode>
);

reportWebVitals();
