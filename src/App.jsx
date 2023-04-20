import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import $ from 'jquery'
export default function App() {
    const [currentBodyType, setBodyType] = useState('bodyTypeModern')
    const [currentMaterial, setMaterial] = useState('wood')
    
    const handleBodyType = (event) => {
        setBodyType(event.target.value)
    }
    
    const handleMaterial = (event) => {
        setMaterial(event.target.value)
    }
    
    const handleBodyTypeFromClick = (val) => {
        setBodyType(val)
    }
    
    const handleMaterialFromClick = (val) => {
        setMaterial(val)
    }
    
    useEffect(() => {
        $( "div.bodyTypeCard" ).on( "click", function() {
            $(this).find('input').first().prop('checked', true);
            handleBodyTypeFromClick($(this).find('input').first().prop('value'))
        });
        
        $( "div.materialCard" ).on( "click", function() {
            $(this).find('input').first().prop('checked', true);
            handleMaterialFromClick($(this).find('input').first().prop('value'))
        });
    }, [])
    
    
    return (
        <>
            <Canvas className='experienceCanvas'
      camera={ {
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [ -3, 1.5, 4 ]
      } } >
        
          <Experience currentBodyType={currentBodyType} currentMaterial={currentMaterial} />
    </Canvas>
    <div id="wrapper">
          <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
              <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                      <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-guitar"></i></div>
                      <div className="sidebar-brand-text mx-3"><span>Make-A-Pick</span></div>
                  </a>
                  <hr className="sidebar-divider my-0"></hr>
                  <ul className="navbar-nav text-light" id="accordionSidebar">
                      <li className="nav-item"><a className="nav-link" href="index.html"><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></a></li>
                      <li className="nav-item"><a className="nav-link" href="profile.html"><i className="fas fa-user"></i><span>Profile</span></a></li>
                      <li className="nav-item"><a className="nav-link" href="table.html"><i className="fas fa-table"></i><span>Table</span></a></li>
                      <li className="nav-item"><a className="nav-link" href="login.html"><i className="far fa-user-circle"></i><span>Login</span></a></li>
                      <li className="nav-item"><a className="nav-link" href="register.html"><i className="fas fa-user-circle"></i><span>Register</span></a></li>
                  </ul>
                  <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
              </div>
          </nav>
          <div className="d-flex flex-column" id="content-wrapper">
              <div id="content">
                  <nav className="navbar navbar-light navbar-expand bg-white shadow topbar static-top">
                      <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                          <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                              <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..."></input><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                          </form>
                          <ul className="navbar-nav flex-nowrap ms-auto">
                              <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-search"></i></a>
                                  <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                      <form className="me-auto navbar-search w-100">
                                          <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..."></input>
                                              <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                          </div>
                                      </form>
                                  </div>
                              </li>
                              <li className="nav-item dropdown no-arrow mx-1">
                                  <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">3+</span><i className="fas fa-bell fa-fw"></i></a>
                                      <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                          <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#">
                                              <div className="me-3">
                                                  <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                                              </div>
                                              <div><span className="small text-gray-500">December 12, 2019</span>
                                                  <p>A new monthly report is ready to download!</p>
                                              </div>
                                          </a><a className="dropdown-item d-flex align-items-center" href="#">
                                              <div className="me-3">
                                                  <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                                              </div>
                                              <div><span className="small text-gray-500">December 7, 2019</span>
                                                  <p>$290.29 has been deposited into your account!</p>
                                              </div>
                                          </a><a className="dropdown-item d-flex align-items-center" href="#">
                                              <div className="me-3">
                                                  <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                                              </div>
                                              <div><span className="small text-gray-500">December 2, 2019</span>
                                                  <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                              </div>
                                          </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                      </div>
                                  </div>
                              </li>
                              <li className="nav-item dropdown no-arrow mx-1">
                                  <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">7</span><i className="fas fa-envelope fa-fw"></i></a>
                                      <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                          <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#">
                                              <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assets/img/avatars/avatar4.jpeg"></img>
                                                  <div className="bg-success status-indicator"></div>
                                              </div>
                                              <div className="fw-bold">
                                                  <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                                                  <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                              </div>
                                          </a><a className="dropdown-item d-flex align-items-center" href="#">
                                              <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assets/img/avatars/avatar2.jpeg"></img>
                                                  <div className="status-indicator"></div>
                                              </div>
                                              <div className="fw-bold">
                                                  <div className="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                                                  <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                                              </div>
                                          </a><a className="dropdown-item d-flex align-items-center" href="#">
                                              <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assets/img/avatars/avatar3.jpeg"></img>
                                                  <div className="bg-warning status-indicator"></div>
                                              </div>
                                              <div className="fw-bold">
                                                  <div className="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                                                  <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                              </div>
                                          </a><a className="dropdown-item d-flex align-items-center" href="#">
                                              <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assets/img/avatars/avatar5.jpeg"></img>
                                                  <div className="bg-success status-indicator"></div>
                                              </div>
                                              <div className="fw-bold">
                                                  <div className="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                                                  <p className="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                                              </div>
                                          </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                      </div>
                                  </div>
                                  <div className="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown"></div>
                              </li>
                              <div className="d-none d-sm-block topbar-divider"></div>
                              <li className="nav-item dropdown no-arrow">
                                  <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="d-none d-lg-inline me-2 text-gray small">Valerie Luna</span><img className="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg"></img></a>
                                      <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile</a><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Settings</a><a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Activity log</a>
                                          <div className="dropdown-divider"></div><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</a>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </nav>
                  <div className="container-fluid pt-3" id="mainConfigOptions">
                    <div id="accordion-1" className="accordion pb-5" role="tablist">
                      <div className="accordion-item">
                          <h2 className="accordion-header" role="tab"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="true" aria-controls="accordion-1 .item-1">Body Type</button></h2>
                          <div className="accordion-collapse collapse show item-1" role="tabpanel" data-bs-parent="#accordion-1">
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-md-6 col-xl-3 mb-4">
                                      <div className="card bodyTypeCard shadow border-start-primary py-2">
                                          <div className="card-body">
                                              <div className="row align-items-center no-gutters">
                                                  <div className="col me-2">
                                                      <h6 className="text-uppercase mb-1 fw-bold"><span>Classic</span></h6>
                                                      <div className="row g-0 align-items-center">
                                                        <input className="form-check-input col-auto m-0" type="radio" name="exampleRadios" id="bodyTypeClassic" value="bodyTypeClassic" defaultChecked 
                                                        onChange={handleBodyType}></input>
                                                        <div className="col-auto ms-2">
                                                            <div className="text-dark fw-bold h6 mb-0 me-3"><span>$20</span></div>
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-auto"><img alt="classic" src="./assets/img/picks/classic_pick.png" width="32" height="auto"/></div>
                                              </div>
                                              <div className="row">
                                                <div className="col">
                                                  <label className="small form-check-label" htmlFor="bodyTypeClassic">Sides tapered slightly rounded. Classic.</label>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6 col-xl-3 mb-4">
                                      <div className="card bodyTypeCard shadow border-start-success py-2">
                                          <div className="card-body">
                                              <div className="row align-items-center no-gutters">
                                                  <div className="col me-2">
                                                      <h6 className="text-uppercase fw-bold mb-1"><span>Modern</span></h6>
                                                      <div className="row g-0 align-items-center">
                                                        <input className="form-check-input col-auto m-0" type="radio" defaultChecked name="exampleRadios" id="bodyTypeModern" value="bodyTypeModern" onChange={handleBodyType}></input>
                                                        <div className="col-auto ms-2">
                                                            <div className="text-dark fw-bold h6 mb-0 me-3"><span>$25</span></div>
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-auto"><img alt="classic" src="./assets/img/picks/modern_pick.png" width="32" height="auto"/></div>
                                              </div>
                                              <div className="row">
                                                <div className="col">
                                                  <label className="small form-check-label" htmlFor="bodyTypeModern">Sides tapered straight. Modern design.</label>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6 col-xl-3 mb-4">
                                      <div className="card bodyTypeCard shadow border-start-info py-2">
                                          <div className="card-body">
                                              <div className="row align-items-center no-gutters">
                                                  <div className="col me-2">
                                                      <h6 className="text-uppercase fw-bold  mb-1"><span>Cyber</span></h6>
                                                      <div className="row g-0 align-items-center">
                                                        <input className="form-check-input col-auto m-0" type="radio" name="exampleRadios" id="bodyTypeCyber" value="bodyTypeCyber" onChange={handleBodyType}></input>
                                                          <div className="col-auto ms-2">
                                                              <div className="text-dark fw-bold h6 mb-0 me-3"><span>$30</span></div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="col-auto"><img alt="classic" src="./assets/img/picks/cyber_pick.png" width="32" height="auto"/></div>
                                              </div>
                                              <div className="row">
                                                <div className="col">
                                                  <label className="small form-check-label" htmlFor="bodyTypeCyber">Sharp edges, sharp looks. EDM riffs!</label>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6 col-xl-3 mb-4">
                                      <div className="card bodyTypeCard shadow border-start-warning py-2">
                                          <div className="card-body">
                                              <div className="row align-items-center no-gutters">
                                                  <div className="col me-2">
                                                      <h6 className="text-uppercase  fw-bold mb-1"><span>Egg</span></h6>
                                                      <div className="row g-0 align-items-center">
                                                        <input className="form-check-input col-auto m-0" type="radio" name="exampleRadios" id="bodyTypeEgg" value="bodyTypeEgg" onChange={handleBodyType}></input>
                                                        <div className="col-auto ms-2">
                                                            <div className="text-dark fw-bold h6 mb-0 me-3"><span>$5</span></div>
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-auto"><img alt="classic" src="./assets/img/picks/egg_pick.png" width="32" height="auto"/></div>
                                              </div>
                                              <div className="row">
                                                <div className="col">
                                                  <label className="small form-check-label" htmlFor="bodyTypeEgg">Hatch a tune with an egg-shaped pick!</label>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              </div>
                          </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="false" aria-controls="accordion-1 .item-2">Material</button></h2>
                        <div className="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-1">
                            <div className="accordion-body">
                                <div className="row">
                                    
                                    <h1>Woods</h1>
                                    
                                <div className="col-md-6 col-xl-3 mb-4">
                                      <div className="card materialCard shadow border-start-primary py-2">
                                          <div className="card-body">
                                              <div className="row align-items-center no-gutters">
                                                  <div className="col me-2">
                                                      <h6 className="text-uppercase mb-1 fw-bold"><span>Wood</span></h6>
                                                      <div className="row g-0 align-items-center">
                                                        <input className="form-check-input col-auto m-0" type="radio" name="exampleRadios" value="wood" defaultChecked 
                                                        onChange={handleMaterial}></input>
                                                        <div className="col-auto ms-2">
                                                            <div className="text-dark fw-bold h6 mb-0 me-3"><span>$5</span></div>
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-auto"><img alt="classic" className='material-preview-image' src="./assets/img/textures/wood.jpg" width="40" height="40"/></div>
                                              </div>
                                              <div className="row">
                                                <div className="col">
                                                  <label className="small form-check-label" >Wood. Good tone, good old natural sound.</label>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="col-md-6 col-xl-3 mb-4">
                                      <div className="card materialCard shadow border-start-primary py-2">
                                          <div className="card-body">
                                              <div className="row align-items-center no-gutters">
                                                  <div className="col me-2">
                                                      <h6 className="text-uppercase mb-1 fw-bold"><span>Light Wood</span></h6>
                                                      <div className="row g-0 align-items-center">
                                                        <input className="form-check-input col-auto m-0" type="radio" name="exampleRadios" value="light-wood" defaultChecked 
                                                        onChange={handleMaterial}></input>
                                                        <div className="col-auto ms-2">
                                                            <div className="text-dark fw-bold h6 mb-0 me-3"><span>$15</span></div>
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-auto"><img alt="classic" className='material-preview-image' src="./assets/img/textures/light-wood.jpg" width="40" height="40"/></div>
                                              </div>
                                              <div className="row">
                                                <div className="col">
                                                  <label className="small form-check-label" >Light Wood. Lighter than normal and lighter tone.</label>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="col-md-6 col-xl-3 mb-4">
                                      <div className="card materialCard shadow border-start-primary py-2">
                                          <div className="card-body">
                                              <div className="row align-items-center no-gutters">
                                                  <div className="col me-2">
                                                      <h6 className="text-uppercase mb-1 fw-bold"><span>Sunburst</span></h6>
                                                      <div className="row g-0 align-items-center">
                                                        <input className="form-check-input col-auto m-0" type="radio" name="exampleRadios" value="sunburst" defaultChecked 
                                                        onChange={handleMaterial}></input>
                                                        <div className="col-auto ms-2">
                                                            <div className="text-dark fw-bold h6 mb-0 me-3"><span>$25</span></div>
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-auto"><img alt="classic" className='material-preview-image' src="./assets/img/textures/sunburst.jpg" width="40" height="40"/></div>
                                              </div>
                                              <div className="row">
                                                <div className="col">
                                                  <label className="small form-check-label" >Sunburst. Sunny tone. Here comes the sun...</label>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <h1>Minerals</h1>
                                  
                                  <div className="col-md-6 col-xl-3 mb-4">
                                      <div className="card materialCard shadow border-start-primary py-2">
                                          <div className="card-body">
                                              <div className="row align-items-center no-gutters">
                                                  <div className="col me-2">
                                                      <h6 className="text-uppercase mb-1 fw-bold"><span>Stone</span></h6>
                                                      <div className="row g-0 align-items-center">
                                                        <input className="form-check-input col-auto m-0" type="radio" name="exampleRadios" value="stone" defaultChecked 
                                                        onChange={handleMaterial}></input>
                                                        <div className="col-auto ms-2">
                                                            <div className="text-dark fw-bold h6 mb-0 me-3"><span>$2</span></div>
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-auto"><img alt="classic" className='material-preview-image' src="./assets/img/textures/stone.jpg" width="40" height="40"/></div>
                                              </div>
                                              <div className="row">
                                                <div className="col">
                                                  <label className="small form-check-label" >Stone. This one is a bit rough around the edges.</label>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="col-md-6 col-xl-3 mb-4">
                                      <div className="card materialCard shadow border-start-primary py-2">
                                          <div className="card-body">
                                              <div className="row align-items-center no-gutters">
                                                  <div className="col me-2">
                                                      <h6 className="text-uppercase mb-1 fw-bold"><span>Granite</span></h6>
                                                      <div className="row g-0 align-items-center">
                                                        <input className="form-check-input col-auto m-0" type="radio" name="exampleRadios" value="granite" defaultChecked 
                                                        onChange={handleMaterial}></input>
                                                        <div className="col-auto ms-2">
                                                            <div className="text-dark fw-bold h6 mb-0 me-3"><span>$50</span></div>
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-auto"><img alt="classic" className='material-preview-image' src="./assets/img/textures/granite.jpg" width="40" height="40"/></div>
                                              </div>
                                              <div className="row">
                                                <div className="col">
                                                  <label className="small form-check-label" >Granite. Good for countertops and picks.</label>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                    
                                  <div className="col-md-6 col-xl-3 mb-4">
                                      <div className="card materialCard shadow border-start-primary py-2">
                                          <div className="card-body">
                                              <div className="row align-items-center no-gutters">
                                                  <div className="col me-2">
                                                      <h6 className="text-uppercase mb-1 fw-bold"><span>Opal</span></h6>
                                                      <div className="row g-0 align-items-center">
                                                        <input className="form-check-input col-auto m-0" type="radio" name="exampleRadios" value="opal" defaultChecked 
                                                        onChange={handleMaterial}></input>
                                                        <div className="col-auto ms-2">
                                                            <div className="text-dark fw-bold h6 mb-0 me-3"><span>$5000</span></div>
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-auto"><img alt="classic" className='material-preview-image' src="./assets/img/textures/opal.jpg" width="40" height="40"/></div>
                                              </div>
                                              <div className="row">
                                                <div className="col">
                                                  <label className="small form-check-label" >Solid Opal. This is one expen$ive pick!</label>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                    
                                  <h1>Metalics</h1>
                                    
                                <div className="col-md-6 col-xl-3 mb-4">
                                      <div className="card materialCard shadow border-start-primary py-2">
                                          <div className="card-body">
                                              <div className="row align-items-center no-gutters">
                                                  <div className="col me-2">
                                                      <h6 className="text-uppercase mb-1 fw-bold"><span>Chrome</span></h6>
                                                      <div className="row g-0 align-items-center">
                                                        <input className="form-check-input col-auto m-0" type="radio" name="exampleRadios" value="chrome" defaultChecked 
                                                        onChange={handleMaterial}></input>
                                                        <div className="col-auto ms-2">
                                                            <div className="text-dark fw-bold h6 mb-0 me-3"><span>$50</span></div>
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-auto"><img alt="classic" className='material-preview-image' src="./assets/img/matcaps/C7C7D7_4C4E5A_818393_6C6C74-256px.png" width="40" height="auto"/></div>
                                              </div>
                                              <div className="row">
                                                <div className="col">
                                                  <label className="small form-check-label" >Slick chrome. Reflects light 1000 miles.</label>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>   
                                    
                                <div className="col-md-6 col-xl-3 mb-4">
                                      <div className="card materialCard shadow border-start-primary py-2">
                                          <div className="card-body">
                                              <div className="row align-items-center no-gutters">
                                                  <div className="col me-2">
                                                      <h6 className="text-uppercase mb-1 fw-bold"><span>Gold</span></h6>
                                                      <div className="row g-0 align-items-center">
                                                        <input className="form-check-input col-auto m-0" type="radio" name="exampleRadios" value="gold" defaultChecked 
                                                        onChange={handleMaterial}></input>
                                                        <div className="col-auto ms-2">
                                                            <div className="text-dark fw-bold h6 mb-0 me-3"><span>$100</span></div>
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-auto"><img alt="classic" className='material-preview-image' src="./assets/img/matcaps/E6BF3C_5A4719_977726_FCFC82-256px.png" width="40" height="auto"/></div>
                                              </div>
                                              <div className="row">
                                                <div className="col">
                                                  <label className="small form-check-label" >Go for the gold. 24 karats.</label>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                
                                  
                                  <div className="col-md-6 col-xl-3 mb-4">
                                      <div className="card materialCard shadow border-start-primary py-2">
                                          <div className="card-body">
                                              <div className="row align-items-center no-gutters">
                                                  <div className="col me-2">
                                                      <h6 className="text-uppercase mb-1 fw-bold"><span>Plasma</span></h6>
                                                      <div className="row g-0 align-items-center">
                                                        <input className="form-check-input col-auto m-0" type="radio" name="exampleRadios" value="plasma" defaultChecked 
                                                        onChange={handleMaterial}></input>
                                                        <div className="col-auto ms-2">
                                                            <div className="text-dark fw-bold h6 mb-0 me-3"><span>$200</span></div>
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-auto"><img alt="classic" className='material-preview-image' src="./assets/img/matcaps/2E763A_78A0B7_B3D1CF_14F209-256px.png" width="40" height="auto"/></div>
                                              </div>
                                              <div className="row">
                                                <div className="col">
                                                  <label className="small form-check-label" >New-age plasma, lab developed.</label>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="col-md-6 col-xl-3 mb-4">
                                      <div className="card materialCard shadow border-start-primary py-2">
                                          <div className="card-body">
                                              <div className="row align-items-center no-gutters">
                                                  <div className="col me-2">
                                                      <h6 className="text-uppercase mb-1 fw-bold"><span>Fire</span></h6>
                                                      <div className="row g-0 align-items-center">
                                                        <input className="form-check-input col-auto m-0" type="radio" name="exampleRadios" value="fire" defaultChecked 
                                                        onChange={handleMaterial}></input>
                                                        <div className="col-auto ms-2">
                                                            <div className="text-dark fw-bold h6 mb-0 me-3"><span>$300</span></div>
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-auto"><img alt="classic" className='material-preview-image' src="./assets/img/matcaps/FBB43F_FBE993_FB552E_FCDD65-256px.png" width="40" height="auto"/></div>
                                              </div>
                                              <div className="row">
                                                <div className="col">
                                                  <label className="small form-check-label" >Hot to the touch. Firey tone.</label>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="col-md-6 col-xl-3 mb-4">
                                      <div className="card materialCard shadow border-start-primary py-2">
                                          <div className="card-body">
                                              <div className="row align-items-center no-gutters">
                                                  <div className="col me-2">
                                                      <h6 className="text-uppercase mb-1 fw-bold"><span>Futuristic</span></h6>
                                                      <div className="row g-0 align-items-center">
                                                        <input className="form-check-input col-auto m-0" type="radio" name="exampleRadios" value="futuristic" defaultChecked 
                                                        onChange={handleMaterial}></input>
                                                        <div className="col-auto ms-2">
                                                            <div className="text-dark fw-bold h6 mb-0 me-3"><span>$400</span></div>
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-auto"><img alt="classic" className='material-preview-image' src="./assets/img/matcaps/463F37_ACCFBB_818B78_91A494-256px.png" width="40" height="auto"/></div>
                                              </div>
                                              <div className="row">
                                                <div className="col">
                                                  <label className="small form-check-label" >Futuristic. Made using space-age polymers.</label>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <div className="col-md-6 col-xl-3 mb-4">
                                      <div className="card materialCard shadow border-start-primary py-2">
                                          <div className="card-body">
                                              <div className="row align-items-center no-gutters">
                                                  <div className="col me-2">
                                                      <h6 className="text-uppercase mb-1 fw-bold"><span>Water</span></h6>
                                                      <div className="row g-0 align-items-center">
                                                        <input className="form-check-input col-auto m-0" type="radio" name="exampleRadios" value="water" defaultChecked 
                                                        onChange={handleMaterial}></input>
                                                        <div className="col-auto ms-2">
                                                            <div className="text-dark fw-bold h6 mb-0 me-3"><span>$5</span></div>
                                                        </div>
                                                    </div>
                                                  </div>
                                                  <div className="col-auto"><img alt="classic" className='material-preview-image' src="./assets/img/matcaps/1C70C6_09294C_0F3F73_52B3F6-256px.png" width="40" height="auto"/></div>
                                              </div>
                                              <div className="row">
                                                <div className="col">
                                                  <label className="small form-check-label">Blue water color. Neat.</label>
                                              </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <div className="accordion-item">
                      <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3" aria-expanded="false" aria-controls="accordion-1 .item-3">Pattern</button></h2>
                      <div className="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-1">
                          <div className="accordion-body">
                              <p className="mb-0">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                          </div>
                      </div>
                  </div> */}
                  {/* <div className="accordion-item">
                    <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-4" aria-expanded="false" aria-controls="accordion-1 .item-4">Decal</button></h2>
                    <div className="accordion-collapse collapse item-4" role="tabpanel" data-bs-parent="#accordion-1">
                        <div className="accordion-body">
                            <p className="mb-0">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                        </div>
                    </div>
                </div> */}
                  </div>
                  
                </div>
              </div>
              
          </div>
      </div>
        </>
    )
}