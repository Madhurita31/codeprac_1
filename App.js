import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

    const sortedArticlesByVotes=(copy) => {return copy.sort((a,b) => b.upvotes - a.upvotes)};

    const [data, setData] = useState(sortedArticlesByVotes(articles));

    const sortData= () =>{
        const copy = [...articles];
        const sortedData = sortedArticlesByVotes(copy);
        setData(sortedData);
    }

    const sortByDate=() => {
        const copy = [...articles];
        const sortedData = copy.sort((a,b) => new Date(b.date) - new Date(a.date));
        setData(sortedData);
    }


    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={() => sortData()}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={() => sortByDate()}>Most Recent</button>
            </div>
            <Articles articles={data}/>
        </div>
    );

}

export default App;
