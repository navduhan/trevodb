import React from "react";
// import { env } from '../../env';
import "./Home.scss";
import Card from "react-bootstrap/Card";
import hpinet from "./reo.png";
import genome from "./turkey_reovirus_genome_image.png";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  openModel = () => this.setState({ isOpen: true });
  closeModel = () => this.setState({ isOpen: false });
  render() {
    return (
      <div className="container main">
        <div className="separator">
          <h1>About trevoDB</h1>
          <div className="divider">&nbsp;</div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="purpose">
              <p>
                Avian reoviruses persistently afflict chickens and turkeys,
                varying in tissue tropism and pathogenicity, posing a challenge
                to the poultry industry. Turkey hepatitis reovirus (THRV),
                turkey arthritis reovirus (TARV), and turkey enteric reovirus
                (TERV) are prevalent types affecting turkeys, each linked to
                specific infection sites. Reports suggest emergence of new
                strains causing neurological symptoms. The severity of hepatitis
                and arthritis from mild enteric illness highlights the need for
                ongoing surveillance of emerging strains, crucial for economic
                reasons. Selecting vaccine strains for turkey reoviruses
               (TRVs) is challenging due to their genomic variability
                and distribution. To address this, trevoDB, a comprehensive
                database, facilitates TRV classification, comparative genomics,
                and phylogenetics analysis. It offers easy access to genetic
                sequences, metadata, and analytical tools, aiding researchers
                and industry professionals in understanding TRV diversity and
                evolution. By enhancing knowledge and informing interventions,
                trevoDB is poised to support disease management in poultry,
                benefiting veterinary science practitioners.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={hpinet} alt="" width={500} />
          </div>
        </div>

        <div className="separator">
          <div className="divider">&nbsp;</div>
          <div className="row justify-content-around  mt-2">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <Card>
                    <Card.Body>
                      <Card.Text>
                        <legend>
                          <strong>TAXONOMY</strong>
                        </legend>
                        <a href="https://viralzone.expasy.org/293" target="_blank" rel="noreferrer">Group III: dsRNA viruses</a>
                        <br />
                        Family:{" "}
                        <i>
                          <a href="https://viralzone.expasy.org/104"target="_blank" rel="noreferrer" >Spinareoviridae</a>
                        </i>
                        <br />
                        Genus:{" "}
                        <i>
                          {" "}
                          <strong>Orthoreovirus</strong>
                        </i>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="col-md-6">
                  <Card>
                    <Card.Body>
                      <Card.Text>
                     
<legend><strong>ETYMOLOGY</strong></legend>
<strong>Ortho</strong>: from Greek, 'straight'
<br/>
<b>reovirus</b>: from <b>r</b>espiratory <b>e</b>nteric <b>o</b>rphan <b>virus</b>

                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={genome} alt="" width={500} />
            </div>
          </div>
        </div>
        <div className="divider">&nbsp;</div>
      </div>
    );
  }
}
