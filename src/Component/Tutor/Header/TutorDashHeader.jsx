import React from 'react'
import "./TutorDashHeader.css"
import Tile1 from "./TileComponent/Tile1";
function TutorDashHeader() {
    return (
        <React.Fragment>
            <div className="tutor-header-component">
                <div className="section-header">Overview Dashboard. </div>
               <div className="tutor-header-container">
                   <div className="container-row">
                       <div className="tile-component">
                           <Tile1 name={"Student Count"} price={"$10"}/>
                       </div>
                       <div className="tile-component">
                           <Tile1 name={"Student Count"} price={"$10"}/>
                       </div>
                       <div className="tile-component">
                           <Tile1 name={"Student Count"} price={"$10"}/>
                       </div>
                   </div>
                   <div className="container-row">
                       <div className="tile-component">
                           <Tile1 name={"Student Count"} price={"$10"}/>
                       </div>
                       <div className="tile-component">
                           <Tile1 name={"Student Count"} price={"$10"}/>
                       </div>
                       <div className="tile-component">
                           <Tile1 name={"Student Count"} price={"$10"}/>
                       </div>
                   </div>
               </div>
            </div>
        </React.Fragment>
    )
}
export default TutorDashHeader
