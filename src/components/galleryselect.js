import React from 'react'
import { BiAddToQueue } from 'react-icons/bi'

function Galleryselect(props) {
    return (
        <>

            <div className="row about-team-heading">
                <div className="col"><h4>{props.index}</h4></div>
            </div>
            <div className="row">
                {/* {write the code here to link the details} */}
                <table class="table">
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
                                <button type="button" class="btn btn-outline-primary">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Galleryselect
