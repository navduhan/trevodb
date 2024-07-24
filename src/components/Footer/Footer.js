import React from "react";



export default class Footer extends React.Component {
    render(){
        return(
            <div className="row flex-lg-row justify-content-center g-2 my-2">
              
            <p>
              &copy; 2024 |&nbsp;{" "}
              <a
                href="http://naveenduhan.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Naveen Duhan
              </a>
              &nbsp; |&nbsp;{" "}
              <a href="https://www.sdstate.edu/animal-disease-research-and-diagnostic-laboratory" target="_blank" rel="noopener noreferrer">
              Animal Disease Research and Diagnostic Laboratory
              </a>
            </p>
          </div>
        )
    }
}