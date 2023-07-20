import line from '../atoms/images/line.svg';

function ButtonCatalog(props) {
    return(
        <button type="button" className="btn btn-secondary rounded-0 d-flex flex-row align-items-center me-2" style={{width: "120px"}}>
          <div className="d-flex flex-column" style={{marginRight: 10 + '%'}}>
            <img src={line} className="rounded" style={{paddingBottom: 10 + '%'}}></img>
            <img src={line} className="rounded" style={{paddingBottom: 10 + '%'}}></img>
            <img src={line} className="rounded"></img>
          </div>
          <p className="text-light" style={{margin: 0, textTransform: 'uppercase'}}>Каталог</p>
        </button>
    )
}

export default ButtonCatalog;
