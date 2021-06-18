import React, { useState } from 'react'
import './admin.css'
import { BiAddToQueue } from 'react-icons/bi'
import Galleryselect from './galleryselect'

function Admin() {

    const [galData, setgalData] = useState(0);
    const [drop, setdrop] = useState("Maternity");

    return (
        <>
            <div className="container">
                <div className="row top-heading">
                    <div className="col admin-heading"><h1>Welcome ADMIN!!</h1></div>
                    <div className="col site-info"></div>
                </div>
                <hr />

                <div className="row home-page-control-heading">
                    <div className="col"><h3>Home Page Data</h3></div>
                    <div className="col add-team-members" data-bs-toggle="modal" data-bs-target="#homeModal">
                        < BiAddToQueue size="2em" />
                    </div>
                </div>
                <div className="row">
                    {/* {write the code here to link the details} */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Kshitiz Lauda</th>
                                <th scope="col">Change details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>
                                    <button type="button" className="btn btn-outline-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="row about-team-heading">
                    <div className="col"><h3>About Team Data</h3></div>
                    <div className="col add-team-members" data-bs-toggle="modal" data-bs-target="#aboutModal">
                        < BiAddToQueue size="2em" />
                    </div>
                </div>
                <div className="row">
                    {/* {write the code here to link the details} */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Team Member Name</th>
                                <th scope="col"> Designation</th>
                                <th scope="col"> Change details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Developer</td>
                                <td>
                                    <button type="button" className="btn btn-outline-primary">Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="row about-team-heading">
                    <div className="col"><h3>Blogs Data</h3></div>
                    <div className="col add-team-members" data-bs-toggle="modal" data-bs-target="#blogsModal">
                        < BiAddToQueue size="2em" />
                    </div>
                </div>
                <div className="row">
                    {/* {write the code here to link the details} */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Blog Title</th>
                                <th scope="col"> Author</th>
                                <th scope="col"> Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Live Your Life</td>
                                <td>Shashwat</td>
                                <td>
                                    <button type="button" className="btn btn-outline-primary">Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="row about-team-heading">
                    <div className="col"><h3>Testimonials</h3></div>
                    <div className="col add-team-members" data-bs-toggle="modal" data-bs-target="#testimonialModal">
                        < BiAddToQueue size="2em" />
                    </div>
                </div>
                <div className="row">
                    {/* {write the code here to link the details} */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Video Title</th>
                                <th scope="col"> Link</th>
                                <th scope="col"> Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Live Your Life</td>
                                <td>Shashwat</td>
                                <td>
                                    <button type="button" className="btn btn-outline-primary">Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="row about-team-heading">
                    <div className="col"><h3>Products</h3></div>
                    <div className="col add-team-members" data-bs-toggle="modal" data-bs-target="#productModal">
                        < BiAddToQueue size="2em" />
                    </div>
                </div>
                <div className="row">
                    {/* {write the code here to link the details} */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product</th>
                                <th scope="col"> Price</th>
                                <th scope="col"> Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Bottle</td>
                                <td>300</td>
                                <td>
                                    <button type="button" className="btn btn-outline-primary">Edit</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="row about-team-heading">
                    <div className="col"><h3>Themes Data</h3></div>
                    <div className="col add-team-members" data-bs-toggle="modal" data-bs-target="#themesModal">
                        < BiAddToQueue size="2em" />
                    </div>
                </div>
                <div className="row">
                    {/* {write the code here to link the details} */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Theme Name</th>
                                <th scope="col"> Images </th>
                                <th scope="col">Change Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Janmashtmi</td>
                                <td>3</td>
                                <td>
                                    <button type="button" className="btn btn-outline-primary">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="row about-team-heading">
                    <div className="col"><h3>Gallery Data</h3></div>
                    <div className="col add-team-members" data-bs-toggle="modal" data-bs-target="#galleryModal">
                        < BiAddToQueue size="2em" />
                    </div>
                </div>
                <ul className="nav nav-pills nav-fill gallery-data-navs">
                    <li className="nav-item">
                        <a className="nav-link category-gallery" onClick={() => setgalData(0)} >Maternity</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link category-gallery" onClick={() => setgalData(1)}>Infant</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link category-gallery" onClick={() => setgalData(2)}>Newborn</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link category-gallery" onClick={() => setgalData(3)}>Sitter</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link category-gallery" onClick={() => setgalData(4)}>One Year</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link category-gallery" onClick={() => setgalData(5)}>Toddlers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link category-gallery" onClick={() => setgalData(6)}>Kids</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link category-gallery" onClick={() => setgalData(7)}>Birthday</a>
                    </li>
                </ul>
                {/* ---------------------------------------------------gallery Categories--------------------------------------------- */}
                <div className="gallery-area">
                    <Galleryselect index={galData} />
                </div>



            </div>

            {/* ----------------------------------------------------------MODALS--------------------------------------------------- */}

            <div className="modal fade" id="homeModal" tabindex="-1" aria-labelledby="homeModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="homeModalLabel">Home Modal</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="formFileMultiple" className="form-label">Multiple files input example</label>
                                <input className="form-control" type="file" id="formFileMultiple" multiple />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------- */}

            <div className="modal fade" id="aboutModal" tabindex="-1" aria-labelledby="aboutModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="aboutModalLabel">About Modal</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">


                            <input class="form-control" type="text" placeholder="Default input" aria-label="default input example" />
                            <input class="form-control" type="text" placeholder="Default input" aria-label="default input example" />
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Default file input example</label>
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------- */}

            <div className="modal fade" id="blogsModal" tabindex="-1" aria-labelledby="blogsModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="blogsModalLabel">Blogs Modal</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <input class="form-control" type="text" placeholder="Default input" aria-label="default input example" />
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Default file input example</label>
                                <input className="form-control" type="file" id="formFile" />
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Default file input example</label>
                                <input className="form-control" type="file" id="formFile" />
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------- */}

            <div className="modal fade" id="testimonialModal" tabindex="-1" aria-labelledby="testimonialModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="testimonialModalLabel">Testimonial title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input class="form-control" type="text" placeholder="Default input" aria-label="default input example" />
                            <input class="form-control" type="text" placeholder="Default input" aria-label="default input example" />
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------- */}

            <div className="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="productModalLabel">Products title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input class="form-control" type="text" placeholder="Default input" aria-label="default input example" />
                            <input class="form-control" type="text" placeholder="Default input" aria-label="default input example" />
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Default file input example</label>
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------- */}

            <div className="modal fade" id="themesModal" tabindex="-1" aria-labelledby="themesModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="themesModalLabel">Themes Data Modal</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input class="form-control" type="text" placeholder="Default input" aria-label="default input example" />
                            <div className="mb-3">
                                <label htmlFor="formFile" className="form-label">Default file input example</label>
                                <input className="form-control" type="file" id="formFile" />
                            </div>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <div className="mb-3">
                                <label htmlFor="formFileMultiple" className="form-label">Multiple files input example</label>
                                <input className="form-control" type="file" id="formFileMultiple" multiple />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className="modal fade" id="galleryModal" tabindex="-1" aria-labelledby="galleryModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="galleryModalLabel">Gallery Modal</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">


                            <div class="input-group mb-3">
                                <button type="button" class="btn btn-outline-secondary">{drop}</button>
                                <button type="button" class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" onClick={() => setdrop("Maternity")}>Maternity</a></li>
                                    <li><a class="dropdown-item" onClick={() => setdrop("Newborn")}>Newborn</a></li>
                                    <li><a class="dropdown-item" onClick={() => setdrop("Toddler")}>Toddler</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" onClick={() => setdrop("Infant")}>Infant</a></li>
                                    <li><a class="dropdown-item" onClick={() => setdrop("Sitter")}>Sitter</a></li>
                                    <li><a class="dropdown-item" onClick={() => setdrop("One Year")}>One Year</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" onClick={() => setdrop("Kids")}>Kids</a></li>
                                    <li><a class="dropdown-item" onClick={() => setdrop("Birthday Party")}>Birthday Party</a></li>

                                </ul>
                            </div>
                        </div>

                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="formFileMultiple" className="form-label">Multiple files input example</label>
                                <input className="form-control" type="file" id="formFileMultiple" multiple />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin