import "../App.css"
import React, { Fragment } from "react"

// import Time from '../Tugas12/tugas12';

const Home = (props) => {
    return (
       <Fragment>
        
        
                            <h3>{props.data.title}</h3>
                            <label><b>Rating : </b>{props.data.rating}</label> <br />
                            <label><b>Durasi : </b>{props.data.duration}</label> <br />
                            <label><b>Tahun : </b>{props.data.year}</label> <br />
                            <label><b>Gentre : </b>{props.data.genre}</label><p/>
                            <label><b>description : </b></label><label>{props.data.description} </label>
                            <hr />

                       
        </Fragment>
        



    )
}



export default Home;