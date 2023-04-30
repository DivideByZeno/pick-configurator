import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import $ from 'jquery'
import PickMaterial from './PickMaterial.jsx'
import PickBodyType from './PickBodyType.jsx'
import PickThickness from './PickThickness.jsx'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function App() {
    const [currentBodyType, setBodyType] = useState('modern')
    const [currentMaterial, setMaterial] = useState('wood')
    const [currentThickness, setThickness] = useState('.01')
    
    const [currentCost, setCurrentCost] = useState(0.00)
    const [currentBodyTypeCost, setBodyTypeCost] = useState(0)
    const [currentMaterialCost, setMaterialCost] = useState(0)
    const [currentThicknessCost, setThicknessCost] = useState(0)

    const pickBodyTypes = [
        {
            "name": "Classic",
            "tag": "classic",
            "price": 20,
            "summary": "Sides tapered slightly rounded. Classic.",
            "path": "./assets/img/picks/classic_pick.png",
        },
        {
            "name": "Modern",
            "tag": "modern",
            "price": 25,
            "summary": "Sides tapered straight. Modern design.",
            "path": "./assets/img/picks/modern_pick.png",
        },
        {
            "name": "Cyber",
            "tag": "cyber",
            "price": 30,
            "summary": "Sharp edges, sharp looks. EDM riffs!",
            "path": "./assets/img/picks/cyber_pick.png",
        },
        {
            "name": "Egg",
            "tag": "egg",
            "price": 5,
            "summary": "Hatch a tune with an egg-shaped pick!",
            "path": "./assets/img/picks/egg_pick.png"
        }
    ]

    const pickMaterialTypes = [
        {
            "metallics": [
                {
                    "name": "Water",
                    "tag": "water",
                    "price": 5,
                    "summary": "Blue water color. Neat.",
                    "path": "./assets/img/matcaps/1C70C6_09294C_0F3F73_52B3F6-256px.png",
                },
                {
                    "name": "Chrome",
                    "tag": "chrome",
                    "price": 50,
                    "summary": "Slick chrome. Reflects light 1000 miles.",
                    "path": "./assets/img/matcaps/C7C7D7_4C4E5A_818393_6C6C74-256px.png",
                },
                {
                    "name": "Gold",
                    "tag": "gold",
                    "price": 100,
                    "summary": "Go for the gold. 24 karats.",
                    "path": "./assets/img/matcaps/E6BF3C_5A4719_977726_FCFC82-256px.png",
                },
                {
                    "name": "Plasma",
                    "tag": "plasma",
                    "price": 200,
                    "summary": "New-age holographic, lab developed.",
                    "path": "./assets/img/matcaps/2E763A_78A0B7_B3D1CF_14F209-256px.png",
                },
                {
                    "name": "Fire",
                    "tag": "fire",
                    "price": 300,
                    "summary": "Hot to the touch. Firey tone.",
                    "path": "./assets/img/matcaps/FBB43F_FBE993_FB552E_FCDD65-256px.png",
                },
                {
                    "name": "Futuristic",
                    "tag": "futuristic",
                    "price": 400,
                    "summary": "Futuristic. Made using space-age polymers.",
                    "path": "./assets/img/matcaps/463F37_ACCFBB_818B78_91A494-256px.png",
                }
            ],
            "minerals": [
                {
                    "name": "Stone",
                    "tag": "stone",
                    "price": 2,
                    "summary": "Stone. This one is a bit rough around the edges.",
                    "path": "./assets/img/textures/stone.jpg",
                },
                {
                    "name": "Quartz",
                    "tag": "quartz",
                    "price": 5,
                    "summary": "Quartz. Rock solid reliability.",
                    "path": "./assets/img/textures/quartz.jpg",
                },
                {
                    "name": "Sandstone",
                    "tag": "sandstone",
                    "price": 50,
                    "summary": "Sandstone.",
                    "path": "./assets/img/textures/sandstone.jpg",
                },
                {
                    "name": "Granite",
                    "tag": "granite",
                    "price": 50,
                    "summary": "Granite. Good for countertops and picks.",
                    "path": "./assets/img/textures/granite.jpg",
                },
                {
                    "name": "Petrified Wood",
                    "tag": "petrified",
                    "price": 500,
                    "summary": "Petrified wood. Ancient and valuable.",
                    "path": "./assets/img/textures/petrified.jpg",
                },
                {
                    "name": "Opal",
                    "tag": "opal",
                    "price": 5000,
                    "summary": "Solid Opal. This is one expen$ive pick!",
                    "path": "./assets/img/textures/opal.jpg",
                }
            ],
            "woods": [
                {
                    "name": "Wood",
                    "tag": "wood",
                    "price": 5,
                    "summary": "Wood. Good tone, good old natural sound.",
                    "path": "./assets/img/textures/wood.jpg",
                },
                {
                    "name": "Light Wood",
                    "tag": "light-wood",
                    "price": 15,
                    "summary": "Light Wood. Lighter than normal and lighter tone.",
                    "path": "./assets/img/textures/light-wood.jpg",
                },
                {
                    "name": "Sunburst",
                    "tag": "sunburst",
                    "price": 25,
                    "summary": "Sunburst. Sunny tone. Here comes the sun...",
                    "path": "./assets/img/textures/sunburst.jpg",
                },
                {
                    "name": "Grain",
                    "tag": "grain",
                    "price": 30,
                    "summary": "Wood grain. For a grainy tone.",
                    "path": "./assets/img/textures/grain.jpg",
                }
            ],

            "plastics": [
                {
                    "name": "Red",
                    "tag": "red",
                    "price": 2,
                    "summary": "Red. Sounds red.",
                    "path": "",
                },
                {
                    "name": "Green",
                    "tag": "green",
                    "price": 2,
                    "summary": "Green. Sounds green.",
                    "path": "",
                },
                {
                    "name": "Blue",
                    "tag": "blue",
                    "price": 2,
                    "summary": "Blue. Sounds blue.",
                    "path": "",
                },
                {
                    "name": "Yellow",
                    "tag": "yellow",
                    "price": 2,
                    "summary": "Yellow. Sounds yellow.",
                    "path": "",
                }
            ]
        }
    ]
    
    const pickThicknesses = [
        {
            "name":".5 mm",
            "tag":".005",
            "price":0.50,
            "summary":"Skinny pick. Super fast picking.",
        },
        {
            "name":"1 mm",
            "tag":".01",
            "price":0,
            "summary":"Standard thickness. Easy picking.",
        },
        {
            "name":"1.5 mm",
            "tag":".015",
            "price":1.50,
            "summary":"Thicker pick. Great picking.",
        },
        {
            "name":"2 mm",
            "tag":".02",
            "price":2,
            "summary":"Extra wide thickness. Super advanced!",
        },
    ]

    const handleBodyTypeChange = (val, price) => {
        setBodyType(val)
        setBodyTypeCost(price)
    }

    const handleMaterialChange = (val, price) => {
        setMaterial(val)
        setMaterialCost(price)
    }

    const handleThicknessChange = (val, price) => {
        setThickness(val)
        setThicknessCost(price)
    }
    
    useEffect(() =>
    {
        setCurrentCost(currentBodyTypeCost + currentMaterialCost + currentThicknessCost)
    }, [currentBodyTypeCost, currentMaterialCost, currentThicknessCost])

    return (
        <>
            <Canvas className='experienceCanvas'
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 2000,
                    position: [-3, 1.5, 4]
                }} >

                <Experience 
                    currentBodyType={currentBodyType} 
                    currentMaterial={currentMaterial} 
                    currentThickness={currentThickness}/>
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
                        <div className="card shadow border-start-success" id="configurationCostDisplay">
                            <div className="card-body">
                                <div className="row align-items-center no-gutters">
                                    <div className="col me-2 pb-2">
                                        <div className="text-uppercase text-success fw-bold text-xs mb-1"><span>Total Cost</span></div>
                                        <div className="text-dark fw-bold h5 mb-0"><span>{currentCost.toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                        })}</span></div>
                                    </div>
                                    <div className="col-auto"><i className="fas fa-dollar-sign fa-2x text-gray-300"></i></div>
                                </div>
                                <div className='row'>
                                    <h4 className="small fw-bold">Body: <span className="float-end">{currentBodyType}</span></h4>
                                    <h4 className="small fw-bold">Material: <span className="float-end">{currentMaterial}</span></h4>
                                    <h4 className="small fw-bold">Tickness: <span className="float-end">{currentThickness}</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid pt-3" id="mainConfigOptions">
                            <div id="accordion-1" className="accordion pb-5" role="tablist">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" role="tab"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="true" aria-controls="accordion-1 .item-1">Body Type</button></h2>
                                    <div className="accordion-collapse collapse show item-1" role="tabpanel" data-bs-parent="#accordion-1">
                                        <div className="accordion-body">
                                            <div className="row">
                                                {[...Array(pickBodyTypes.length)].map((val, index) => {
                                                    return <PickBodyType
                                                        currentBodyType={currentBodyType}
                                                        name={pickBodyTypes[index].name}
                                                        tag={pickBodyTypes[index].tag}
                                                        price={pickBodyTypes[index].price}
                                                        path={pickBodyTypes[index].path}
                                                        summary={pickBodyTypes[index].summary}
                                                        key={index}
                                                        handleBodyType={handleBodyTypeChange}></PickBodyType>
                                                })}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="false" aria-controls="accordion-1 .item-2">Material</button></h2>
                                    <div className="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-1">
                                        <div className="accordion-body">
                                            <div className="row">

                                                <h1>Metalics</h1>

                                                {[...Array(pickMaterialTypes[0]['metallics'].length)].map((val, index) => {
                                                    var category = "metallics"
                                                    return <PickMaterial
                                                        currentMaterial={currentMaterial}
                                                        name={pickMaterialTypes[0][category][index].name}
                                                        tag={pickMaterialTypes[0][category][index].tag}
                                                        price={pickMaterialTypes[0][category][index].price}
                                                        path={pickMaterialTypes[0][category][index].path}
                                                        summary={pickMaterialTypes[0][category][index].summary}
                                                        key={index}
                                                        handleMaterial={handleMaterialChange}></PickMaterial>
                                                })}

                                                <h1>Minerals</h1>

                                                {[...Array(pickMaterialTypes[0]['minerals'].length)].map((val, index) => {
                                                    var category = "minerals"
                                                    return <PickMaterial
                                                        currentMaterial={currentMaterial}
                                                        name={pickMaterialTypes[0][category][index].name}
                                                        tag={pickMaterialTypes[0][category][index].tag}
                                                        price={pickMaterialTypes[0][category][index].price}
                                                        path={pickMaterialTypes[0][category][index].path}
                                                        summary={pickMaterialTypes[0][category][index].summary}
                                                        key={index}
                                                        handleMaterial={handleMaterialChange}></PickMaterial>
                                                })}

                                                <h1>Woods</h1>

                                                {[...Array(pickMaterialTypes[0]['woods'].length)].map((val, index) => {
                                                    var category = "woods"
                                                    return <PickMaterial
                                                        currentMaterial={currentMaterial}
                                                        name={pickMaterialTypes[0][category][index].name}
                                                        tag={pickMaterialTypes[0][category][index].tag}
                                                        price={pickMaterialTypes[0][category][index].price}
                                                        path={pickMaterialTypes[0][category][index].path}
                                                        summary={pickMaterialTypes[0][category][index].summary}
                                                        key={index}
                                                        handleMaterial={handleMaterialChange}></PickMaterial>
                                                })}

                                                <h1>Plastics</h1>

                                                {[...Array(pickMaterialTypes[0]['plastics'].length)].map((val, index) => {
                                                    var category = "plastics"
                                                    return <PickMaterial
                                                        currentMaterial={currentMaterial}
                                                        name={pickMaterialTypes[0][category][index].name}
                                                        tag={pickMaterialTypes[0][category][index].tag}
                                                        price={pickMaterialTypes[0][category][index].price}
                                                        path={pickMaterialTypes[0][category][index].path}
                                                        summary={pickMaterialTypes[0][category][index].summary}
                                                        key={index}
                                                        handleMaterial={handleMaterialChange}></PickMaterial>
                                                })}
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3" aria-expanded="false" aria-controls="accordion-1 .item-3">Thickness</button></h2>
                                    <div className="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-1">
                                        <div className="accordion-body">
                                            <div className='row'>
                                                {[...Array(pickThicknesses.length)].map((val, index) => {
                                                        return <PickThickness
                                                            currentThickness={currentThickness}
                                                            name={pickThicknesses[index].name}
                                                            tag={pickThicknesses[index].tag}
                                                            price={pickThicknesses[index].price}
                                                            summary={pickThicknesses[index].summary}
                                                            key={index}
                                                            handleThickness={handleThicknessChange}></PickThickness>
                                                    })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}