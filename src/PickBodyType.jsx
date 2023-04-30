export default function PickBodyType({name, tag, price, summary, path, handleBodyType, currentBodyType}) {
    
    return (
        <>
            <div className="col-md-6 col-xl-3 mb-4">
                <div className="card bodyTypeCard shadow border-start-primary py-2" onClick={() => handleBodyType(tag, price)}>
                    <div className="card-body">
                        <div className="row align-items-center no-gutters">
                            <div className="col me-2">
                                <h6 className="text-uppercase mb-1 fw-bold"><span>{ name }</span></h6>
                                <div className="row g-0 align-items-center">
                                <input className="form-check-input col-auto m-0" type="radio" name="exampleRadios" id={ tag } value={ tag } onChange={() => handleBodyType(tag, price)} checked={currentBodyType === tag}></input>
                                <div className="col-auto ms-2">
                                    <div className="text-dark fw-bold h6 mb-0 me-3"><span>${ price }</span></div>
                                </div>
                            </div>
                            </div>
                            <div className="col-auto"><img alt="classic" src={ path } width="32" height="auto"/></div>
                        </div>
                        <div className="row">
                        <div className="col">
                            <label className="small form-check-label" htmlFor={ tag }>{ summary }</label>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}