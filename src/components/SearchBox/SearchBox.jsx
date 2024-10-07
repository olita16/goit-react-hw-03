import React from 'react';
import { Field } from 'formik';
import css from "./SearchBox.module.css"


function SearchBox({ value, setFilter }) {
    return (
        <div>
            <label className={css.formLabel}>
            <span>Find contacts by name</span>
            <input className={css.formLabel} type="text" value={value} onChange={(e) => setFilter(e.target.value) } />
            </label>
        </div>
    );
}

export default SearchBox;