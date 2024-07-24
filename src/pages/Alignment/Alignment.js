import {
    Labels,
    MSAViewer,
    OverviewBar,
    PositionBar,
    SequenceOverview,
    SequenceViewer,
  } from '@plotly/react-msa-viewer';
  
  function MSA() {
    const options = {
      sequences: [
        {
          name: "seq.1",
          sequence: "MEEPQSDPSIEP-PLSQETFSDLWKLLPENNVLSPLPS-QA-VDDLMLSPDDLAQWLTED"
        },
        {
          name: "seq.2",
          sequence: "MEEPQSDLSIEL-PLSQETFSDLWKLLPPNNVLSTLPS-SDSIEE-LFLSENVAGWLEDP"
        },
        {
          name: "seq.3",
          sequence: "MEEPQSDLSIEL-PLSQETFSDLWKLLPPNNVLSTLPS-SDSIEE-LFLSENVAGWLEDP"
        },
      ],
    };
    return (
      <MSAViewer {...options}>
        <SequenceOverview method="information-content"/>
        <div style={{display: "flex"}} >
          <div>
            <SequenceViewer/>
            <br/>
            <OverviewBar/>
            <PositionBar/>
          </div>
          <Labels/>
        </div>
      </MSAViewer>
    );
  }

  export  default MSA;