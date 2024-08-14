import React from "react";
import { Slider, Divider, Button, Radio } from "antd";
import { Form } from "react-bootstrap";
import '../../scss/components/buttons.scss';
import '../../scss/style.scss'
import FileInput from '../../components/FileInput/Fileinput';
import "./search.scss";
import test from './test.gif'
import { fetchBlast } from "./fetchBlast";
import { fetchPhylo } from "./fetchPhylo";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seqType: "nucl",
      segmentType: "M2",
      strainType: 'All',
      isOpen: false,
      atype: 'blast',
      msatool: 'mafft',
      phylomethod: 'ml',
      bprog: 'blastn',
      word: '20',
      target: '5',
      evalue: '0.01',
      filename: '',
      seqtxt: ''

    };
    this.seqHandler = this.seqHandler.bind(this);
    this.segmentHandler = this.segmentHandler.bind(this);
    this.strainHandler = this.strainHandler.bind(this);
    this.analysisTypeHandler = this.analysisTypeHandler.bind(this);
    this.msaToolHandler = this.msaToolHandler.bind(this);
    this.phyloMethodHandler = this.phyloMethodHandler.bind(this);
    this.blastToolHandler = this.blastToolHandler.bind(this);
    this.getWord = this.getWord.bind(this);
    this.getTarget = this.getTarget.bind(this);
    this.getEvalue = this.getEvalue.bind(this);
    this.fileSelected = this.fileSelected.bind(this);
    this.handleSeqChange = this.handleSeqChange.bind(this);
    this.getPhylogeny = this.getPhylogeny.bind(this);
    this.runBlast = this.runBlast.bind(this);
  }

  openModel = () => this.setState({ isOpen: true });
  closeModel = () => this.setState({ isOpen: false });

  seqHandler(e) {
    this.setState({
      seqType: e.target.value,
    });
  }
  segmentHandler(e) {
    this.setState({
      segmentType: e.target.value,
    });
  }
  strainHandler(e) {
    this.setState({
      strainType: e.target.value,
    });
  }

  analysisTypeHandler(e) {
    this.setState({
      atype: e.target.value,
    });
  }

  msaToolHandler(e) {
    this.setState({
      msatool: e.target.value,
    });
  }

  phyloMethodHandler(e) {
    this.setState({
      phylomethod: e.target.value,
    });
  }

  blastToolHandler(e) {
    this.setState({
      bprog: e.target.value,
    });
  }

  getWord = (value) => {
    this.setState({
      word: parseInt(value)}, () => {
    });
  }

  getTarget = (value) => {
    this.setState({
      target: parseInt(value)}, () => {
    });
  }

  getEvalue(event) {
    this.setState({
      evalue: event.target.value
    });
  }

  fileSelected(fileText) {
    this.setState({
      filename: fileText.target.files[0], seqtxt: ''
    });
  }

  handleSeqChange(e) {
    this.setState({
      seqtxt: e.target.value, filename: ''
    });
  }
  
  getPhylogeny() { 
    this.openModel();
    const data = new FormData()
    data.append('file', this.state.filename)
    data.append('genome', this.state.segmentType)
    data.append('seqtype', this.state.seqType)
    data.append('seqtxt', this.state.seqtxt)
    data.append('msatool', this.state.msatool)
    data.append('phylomethod', this.state.phylomethod)

    console.log(data.values())

    fetchPhylo(data)
    .then(res => {
      console.log(res)
      this.closeModel();
    })
   }

  runBlast() {
    this.openModel();
    const data = new FormData()
    data.append('file', this.state.filename)
    data.append('genome', this.state.segmentType)
    data.append('seqtype', this.state.seqType)
    data.append('seqtxt', this.state.seqtxt)
    data.append('word', this.state.word)
    data.append('target', this.state.target)
    data.append('evalue', this.state.evalue)
    data.append('program', this.state.bprog)

    console.log(data.values())
    
    fetchBlast(data)
    .then(res => { // then print response status
    console.log(res)
    this.closeModel();
    window.open("/trevodb/blastresults", "_blank");
    localStorage.setItem('resultb', JSON.stringify(res))
    })
  }


  render() {

    let geneSample = `>AY750052.1 Avian orthoreovirus clone 138 major outer capsid protein muB (M2) gene, complete cds
GCTTTTTCAGTGCCAGTCTTTCTCACAAGATGGGTAACGCGACGTCTGTTGTGCAGAACTTTAATATCCA
AGGTGATGGTAATCATTTTGCTCCATCTGCTGAGACTACCTCATCCGCGGTGCCGTCATTATCTCTGAAT
CCCGGACTGTTAAATCCAGGTGGTAAGGCGTGGGTCCTGATCGATCCATCTCTAAACGCTTCGGATCCTT
CATCACTACGTTTGATGACATCGGCTGATCTATCAACACTTTCTCAATCCGCTACTAGCAACTCGACCGG
ATTTCTTCCAACTTCTGGTATGTATGCCATCGCCACTAAAGAGACGTTAAGTGTAATAACCGAGCACGCA
ATTTCTCAGTTTGATAAGTTGCAAATGGCTTGTGAGTTGGACCGCGATTATCTGGACGCTAGAGGTGTTT
CTCCCGAGTCTGTGAACATTCATAATTATATAGTCTATGTTGATTGCTTTGTAGGTGTATCCGCAAGGCA
AGCTGCGTCGAATTTCAAGCAGCACGTGCCAGTCATTACTAAATCTCGTATGACACAATTCATGACGTCC
GCGCAAAATATGTTACAGGTGCTCGGACCCTGGGAACGTGACGTTCGTGAGTTACTCACTATTCTGCCCA
CTTCTACCACCGCTGGTAAGATCACATGTGACATGAAGTCTGTTGTCGCTTTTATCGATGATCAGCTCTC
TGATACCAGTTTGTGCCGTCTGTACCCGGACTGTGCTGCTGCGGCGGTGGCTAGACGTAATGGTGGCATT
CGGTGGAAGACACCTGACACCGATGAGGCTCCTTCGCTCGCAACTAATGATATTGCTGCCTCAACTATGG
GTACGCTTGCGAATACTACACCCCTGGCCGAGAAGTCGAATTCAGGTGAGGAGTCAATGCGCTTGGTGAG
TGACGTTGGTGTAGACATCGTGTGTTCTCGTGGCCCTATCAGCTCTTCGGTTTGGTCACGCACGGTTGAA
CCCAAATCGTATAATATTAGAACTCTTCGTGTCGAAGAAGCGCTTTGGTTGCGTGAGTGTCAAGCGACTA
CTGGCTTCGATGTACAGTACACGCTGCCTGACCAGACTACACATAAGCATTTCTGGCTTCAGAAGGGGTC
AGTTGTCATCAATCTTGAGCAAACGGGTAGTATGATGTTTGATGTGAACATAGCGGGTAAAGATTATAAG
AAGGGCACTTTTAATCCCGATAATCGTAAACTGGTCCTTTTGGTTATGCAGTCAAAAATCCCTTTCGAAT
CTTGGACTGTCGCTTCTCAGATTACTGGTATCGCCCAAGTAGCTGAAGTCACTGTGCATGCTGCTGACAG
TTCGACTCTTAATCAAAAGATAATCGGCGAGACTTCTCTGTCTTATTTGTTTGAGAGAGAAACAGTGACC
ACATCAAATACTGAAGTCAATACGTATCTACTATGCACTTGGCAACTTGATGAAAGCCAAAGCGATGACG
CTAATGCCTGGCCAGATGCATGGGATGGGATTACGACATTGACACCGCTCACTTCCGGTACCGTAACTAT
TAAGGGGACTTCGGTGGATTCTGTTGTGCCATCCGATTTAGTTGGCGCTTATACACCTGAGGCTTTGGCC
GCCGCGCTTCCTAATGACGCTGGGTTAATCTTGGCTAATAAGGCAACTAAATTGGCCGACGCTATCCAGA
AAGAGGATGATTCCGTGATTGATGAGTCTTCTCCCTTTAGCACTCCCATTCAAGGTGTTCTTGCTGTTCA
ACAACTCGATACCGTTGGGACGCGTGGTACACGTGTACTCCAGCCTCCGTCCATTCTGAAACGCATCGCC
TCACGAGCTCTTCACATGTTTCTTGGTGATCCAAAGTCTATTTTGAAACAGGCGACGCCCGTACTAAGGG
ACCCTGATGTCTGGACCGGTTTTGTTCAAGGTGTTAGAGATGGTATCCGGACTAAGTCGCTATCCGCGGG
GGTACGGTCGGTGTATAATAACGTTACCGCCACGCAATCTGTGCAAACGTGGAAGCAGGGATTTCTGACG
AAAATACAGACGTTGTTCAAGCCATCGTGAGGTGCTAAGGCCTCTCTCTGCGGCGGGTCGGTGGGCACGT
CGTGGTGACGCTGAATGCACGGGGAGGTGACGCTCCCTGGATTGGCACGTTATTCATC`;
    return (
      <div className="container">
        <div className="row flex-lg-row justify-content-center mt-2">
          <Divider />
          <h2 className="my-3">Search <i>trevoDB</i></h2>

          <Divider />
          <div className="col-md-3 my-3">
            <Radio.Group name="radiogroup" defaultValue={"nucl"}>
              <h5>Select Sequence Type</h5>
              <Radio value="nucl" onClick={this.seqHandler}>
                Nucleotide
              </Radio>
              <Radio value="prot" onClick={this.seqHandler}>
                Amino Acid
              </Radio>
            </Radio.Group>
          </div>

          <div className="col-md-6 mb-3">
            <Radio.Group name="radiogroup" defaultValue={"M2"}>
              <h5>Select Segment</h5>
              <Radio value="L1" onClick={this.segmentHandler}>
                L1
              </Radio>
              <Radio value="L2" onClick={this.segmentHandler}>
                L2
              </Radio>
              <Radio value="L3" onClick={this.segmentHandler}>
                L3
              </Radio>
              <Radio value="M1" onClick={this.segmentHandler}>
                M1
              </Radio>
              <Radio value="M2" onClick={this.segmentHandler}>
                M2
              </Radio>
              <Radio value="M3" onClick={this.segmentHandler}>
                M3
              </Radio>
              <Radio value="S1" onClick={this.segmentHandler}>
                S1
              </Radio>
              <Radio value="S2" onClick={this.segmentHandler}>
                S2
              </Radio>
              <Radio value="S3" onClick={this.segmentHandler}>
                S3
              </Radio>
              <Radio value="S4" onClick={this.segmentHandler}>
                S4
              </Radio>
              {this.state.seqType !== "prot" && (
                <Radio value="all" onClick={this.segmentHandler}>
                  All
                </Radio>
              )}
            </Radio.Group>
          </div>
          <Divider />
        </div>

        <div className="row flex-lg-row justify-content-center mt-3">
          <div className="col-md-9 my-3">
            <Radio.Group name="radiogroup" defaultValue={"TRV"}>
              <h5>Select Variant Type</h5>
              <Radio value="TRV" onClick={this.strainHandler}>
                Turkey reovirus  (TRV)
              </Radio>
              <Radio value="TERV" onClick={this.strainHandler}>
                Turkey enteric reovirus (TERV)
              </Radio>
              <Radio value="TARV" onClick={this.strainHandler}>
                Turkey arthritis reovirus (TARV)
              </Radio>
              <Radio value="THRV" onClick={this.strainHandler}>
                Turkey hepatitis reovirus (THRV)
              </Radio>
              <Radio value="All" onClick={this.strainHandler}>
                All
              </Radio>
            </Radio.Group>
          </div>
          <Divider />
        </div>

        <div className="row justify-content-center my-3">
          <Radio.Group name="radiogroup" defaultValue={"blast"}>
            <h5>Select a Analysis to Perform</h5>
            <Radio value="blast" onClick={this.analysisTypeHandler}>
              Similarity Search
            </Radio>
            <Radio value="phylo" onClick={this.analysisTypeHandler}>
              Phylogenetics Analysis
            </Radio>
          </Radio.Group>
        </div>

        <Divider />
        {this.state.atype === 'blast' && (
          <div className="row justify-content-center my-3">
            <div className="col-md-3 my-3">
              {this.state.seqType === 'nucl' && (
                <Radio.Group name="radiogroup" defaultValue={"blastn"}>
                  <h5>Select Blast Variant</h5>
                  <Radio value="blastn" onClick={this.blastToolHandler}>
                    blastn
                  </Radio>
                  <Radio value="blastx" onClick={this.blastToolHandler}>
                    blastx
                  </Radio>
                </Radio.Group>
              )}
              {this.state.seqType === 'prot' && (
                <Radio.Group name="radiogroup" defaultValue={"blastp"}>
                  <h5>Select Blast Variant</h5>
                  <Radio value="blastp" onClick={this.blastToolHandler}>
                    blastp
                  </Radio>
                </Radio.Group>
              )}
            </div>

            <div className="col-md-3">
              <label className='h5'>Maximum Target Sequences</label>
              <Slider defaultValue={5} marks={{ 1: '1', 50: '50' }} disabled={false} min={1} max={50} onChange={this.getTarget} />
            </div>

            <div className="col-md-3">
              <label className='h5'>Word Size</label>
              <Slider defaultValue={20} marks={{ 1: '1', 50: '50' }} disabled={false} min={1} max={50} onChange={this.getWord} />
            </div>

            <div className="col-md-3">
              <label className='h5'>Exprected Threshold value</label>
              <input className="form-control" type='text' placeholder="0.01" defaultValue={this.state.evalue} onChange={this.getEvalue}></input>
            </div>
          </div>
        )}

        <Divider />
        {this.state.atype !== 'blast' && (
          <div className="row justify-content-center">
            <div className="col-md-4 my-3">
              <Radio.Group name="radiogroup" defaultValue={"mafft"}>
                <h5>Select Multiple Alignment Tool</h5>
                <Radio value="mafft" onClick={this.msaToolHandler}>
                  Mafft
                </Radio>
                <Radio value="muscle" onClick={this.msaToolHandler}>
                  Muscle
                </Radio>
                <Radio value="clustalw" onClick={this.msaToolHandler}>
                  ClustalW
                </Radio>
              </Radio.Group>
            </div>

            <div className="col-md-4 my-3">
              <Radio.Group name="radiogroup" defaultValue={"ml"}>
                <h5>Select Phylogeny Method</h5>
                <Radio value="ml" onClick={this.phyloMethodHandler}>
                  Maximum likelihood
                </Radio>
                <Radio value="nj" onClick={this.phyloMethodHandler}>
                  Neighbor Joining
                </Radio>
              </Radio.Group>
            </div>
            <Divider />
          </div>
        )}


        <div className="row justify-content-center my-3">
          <div className="col-md-5">
            <h5>Enter Nucleotide or Protein FASTA Sequences here.</h5>
            <Form.Control className="kbl-form mb-4" as="textarea" rows={4} placeholder={"Paste FASTA Sequence "} onChange={this.handleSeqChange}
              value={this.state.seqtxt} spellCheck={false} />
            <Button className="kbl-btn-1 mx-3" onClick={e => {
              this.setState({ seqtxt: geneSample });
            }}>Sample Data</Button>
            <Button className="kbl-btn-3" onClick={e => {
              this.setState({ seqtxt: "" })
            }}>Clear Data</Button>
          </div>
          <div className="col-md-1 mt-5"><b>OR</b></div>
          <div className="col-md-3 mb-5">
            <h5 className="mt-5 pl-2"> Upload Sequence File</h5>
            <FileInput handler={this.fileSelected} />
          </div>
        </div>

        <Divider />
        <div className="row flex-lg-row justify-content-center g-2 my-5">
          {this.state.isOpen && (
            <div className="col-md-8">
              <h5 className="mb-3">Please wait your query is processing</h5>
              <img
                src={test}
                className="loading"
                height="50px"
                alt=""
              ></img>
            </div>
          )}
          {this.state.isOpen === false && (
            <div className="col-md-2">
              <Button
                className="kbl-btn-1  mx-3"
                size="lg"
                onClick={this.runBlast}
              >Run Analysis{" "}
              </Button>
            </div>
          )}
        </div>
        <Divider />
      </div>
    );
  }
}