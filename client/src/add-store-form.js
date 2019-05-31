import React from 'react';

const AddStoreForm = ({submit}) => (
    <form onSubmit={submit}>
        <label htmlFor="name">Store name</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="location">Location</label>
        <input type="text" id="location" name="location" />
        <label htmlFor="manager">Manager Name</label>
        <input type="text" id="manager" name="manager" />
        <label htmlFor="openDate">Open Date</label>
        <input type="date" id="openDate" name="openDate" />
        <button type="submit">Submit</button>
    </form>
)

export default AddStoreForm;