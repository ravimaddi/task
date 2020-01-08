import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import {setData} from './actions/table'

const store=configureStore()
console.log(store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})
const data={   "columnHeaders": [ {  "id": "firstName",  "label": "First Name",  "sortable": "true",  "filterable": "true" }, {  "id": "lastName",  "label": "Last Name",  "sortable": "true",  "filterable": "true" }, {  "id": "dateOfBirth",  "label": "Date of Birth",  "sortable": "false",  "filterable": "true" }, {  "id": "designation",  "label": "Designation",  "sortable": "true",  "filterable": "true" }, {  "id": "department",  "label": "Department",  "sortable": "true",  "filterable": "true" }   ],   "rowData": [ {  "id": "user_id_1",  "data": [  {  "id": "firstName",  "value": "John"  },  {  "id": "lastName", 
"value": "Smith"  },  {  "id": "dateOfBirth",  "value": "07-11-1992"  },  {  "id": "designation",  "value": "Software Engineer"  },  {  "id": "department",  "value": "Web"  }   ] }, {  "id": "user_id_2",  "data": [  {  "id": "firstName",  "value": "Jane"  },  {  "id": "lastName",  "value": "Doe"  },  {  "id": "dateOfBirth",  "value": "07-11-1995"  },  {  "id": "designation",  "value": "Intern"  },  {  "id": "department",  "value": "Mobile"  }   ] }   ] }

store.dispatch(setData(data))


ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
