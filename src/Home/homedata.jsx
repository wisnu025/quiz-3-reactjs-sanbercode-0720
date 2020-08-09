import React, { Component, Fragment } from 'react'
// import Buah from './tabel.js';
import axios from 'axios';
import Home from './home.jsx';
import Navi from "../Comp/nav";
import "../App.css"


class Homedata extends Component {
    state = {
        film: []
    }

    getfilm = () => {
        axios.get('http://backendexample.sanbercloud.com/api/movies')
            .then((result) => {
                console.log(result.data);
                this.setState({
                    film: result.data
                })
            })
    }
    componentDidMount() {
        this.getfilm();
    }

    render() {
        return (
            <Fragment>
                <Navi />
                <section className="content">
                    <div className="cardcenter">
                        <div className="card">

                            <div id="article-list">
                                <div className="tittle">
                                </div>
                                <center>
                                    <h1>Daftar film Terbaik</h1>
                                </center>
                                {
                                    this.state.film.map(film => {
                                        return <Home key={film.id} data={film} />
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </section>
            </Fragment>
        )
    }
}
export default Homedata