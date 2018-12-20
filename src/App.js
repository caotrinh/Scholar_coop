import React, { Component } from 'react';
import {
  ReactiveBase,
  DataSearch,
  ResultList

} from '@appbaseio/reactivesearch';
class App extends Component {
  render() {
    return (
      <ReactiveBase
        app="scholarss"
        credentials="tF8GnvS6C:1a218373-91a1-4e5f-a2ee-aa9773a2ffa0"
      >
        <DataSearch
          componentId="mainSearch"
          dataField={["abstract", "abstract.search"]}
          queryFormat="and"
          iconPosition="left"
        />

        cd ..

            <ResultList
              componentId="results"
              dataField="abstract"
              react={{
                "and": ["mainSearch", "abstract"]}}
              pagination={true}
              size={10}
              onData={(res)=>(
                {

                  "titles": res.title || " ",
                  "description":
                  "</span><br/><br/><div class='result-author' Title='" + res.title
                }
              )}
              className="result-data"
              innerClass={{
                "resultStats": "result-stats"
              }}
            />


      </ReactiveBase>
    );
  }
}
export default App;
