export default function PickThickness({name, tag, price, summary, handleThickness, currentThickness}) {
    return (
        <>
        <div className="col-md-6 col-xl-3 mb-4">
            <div className="card materialCard shadow border-start-primary py-2" onClick={() => handleThickness(tag, price)}>
                <div className="card-body">
                    <div className="row align-items-center no-gutters">
                        <div className="col me-2">
                            <h6 className="text-uppercase mb-1 fw-bold"><span>{ name }</span></h6>
                            <div className="row g-0 align-items-center">
                            <input className="form-check-input col-auto m-0" type="radio" name="thickness" value={ tag }  
                            onChange={() => handleThickness(tag, price)} checked={currentThickness === tag}></input>
                            <div className="col-auto ms-2">
                                <div className="text-dark fw-bold h6 mb-0 me-3"><span>${ price }</span></div>
                            </div>
                        </div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-text-width fa-2x" style={{color: "gray"}}></i>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col">
                        <label className="small form-check-label" >{ summary }</label>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}