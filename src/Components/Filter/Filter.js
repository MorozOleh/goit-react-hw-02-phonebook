import React from 'react';
import s from './Filter.module.css';


const Filter = ({value, onChange}) => {
  return (
    <label
      className={s.label}>
      Filter by name:
       
      <input
        className={s.input}
        placeholder="search by name"
        type="text"
        value={value}
        onChange={onChange}/>
    </label> );
}
 
export default Filter;