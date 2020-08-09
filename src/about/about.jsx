import React, { } from 'react'
import "../App.css"
import Navi from "../Comp/nav";



function About() {
    return (
        <>
            <Navi />
            <section className="content">
                <div className="cardcenter">
                    <div className="card">
                        <center>
                            <h1>Data Peserta Sanbercode Bootcamp React JS</h1>
                            <hr />
                            <br />
                        </center>
                        <center>
                            <table className="table2">

                                <tr>
                                    <td>
                                        <p>
                                            1. <b>nama</b>            : Wisnu Pratama Ariyoga
                                             <br />
                                                2. <b>Email</b>   : wisnu.pratama.ariyoga@gmail.com
                                            <br />
                                                3. <b>Sistem Operasi yang Di gunakan</b>  : Windows
                                            <br />
                                                4. <b>Akun Github</b>   : https://github.com/wisnu025
                                             <br />
                                                5. <b>Akun Telegram</b>    : @wisnu_prayoga
                                             </p>
                                    </td>
                                </tr>
                            </table>
                            <br />
                        </center>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;


