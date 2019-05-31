import React from 'react';

const StoreList = ({stores}) => (
    <div className="App">
        <h1>Dimity's Durians Stores &amp; Locations</h1>
        {stores.map(store => (
            <article key={store._id}>
                <h2>{store.name}</h2>
                <p>{store.location}</p>
                <p>{store.manager}</p>
            </article>
        ))}
    </div>
)

export default StoreList;