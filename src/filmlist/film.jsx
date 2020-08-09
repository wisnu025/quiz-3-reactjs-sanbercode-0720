import React, { useState, useEffect } from "react"
import axios from "axios"
import "./film.css"
import Navi from "../Comp/nav"

const FilmData = () => {

    const [daftarFilm, setDaftarFilm] = useState(null)
    const [input, setInput] = useState({ title: "", rating: 0, duration: 0, year: 0, genre: "", description: "" })
    const [selectedId, setSelectedId] = useState(0)
    const [statusForm, setStatusForm] = useState("create")

    useEffect(() => {
        if (daftarFilm === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/movies`)
                .then(res => {
                    setDaftarFilm(res.data.map(el => {
                        return {
                            id: el.id,
                            title: el.title,
                            rating: el.rating,
                            duration: el.duration,
                            year: el.year,
                            genre: el.genre,
                            description: el.description
                        }
                    }))
                })
        }
    }, [daftarFilm])

    const handleDelete = (event) => {
        let idDataFilm = parseInt(event.target.value)

        let newdaftarFilm = daftarFilm.filter(el => el.id !== idDataFilm)

        axios.delete(`http://backendexample.sanbercloud.com/api/movies/${idDataFilm}`)
            .then(res => {
                console.log(res)
            })

        setDaftarFilm([...newdaftarFilm])

    }

    const handleEdit = (event) => {
        let idDataFilm = parseInt(event.target.value)
        let dataFilm = daftarFilm.find(x => x.id === idDataFilm)
        setInput({
            title: dataFilm.title,
            rating: dataFilm.rating,
            duration: dataFilm.duration,
            year: dataFilm.year,
            genre: dataFilm.genre,
            description: dataFilm.description
        })
        setSelectedId(idDataFilm)
        setStatusForm("edit")
    }

    const handleChange = (event) => {
        let typeOfInput = event.target.name

        switch (typeOfInput) {
            case "title":
                {
                    setInput({ ...input, title: event.target.value });
                    break
                }
            case "rating":
                {
                    setInput({ ...input, rating: event.target.value });
                    break
                }
            case "duration":
                {
                    setInput({ ...input, duration: event.target.value });
                    break
                }
            case "year":
                {
                    setInput({ ...input, year: event.target.value });
                    break
                }
            case "genre":
                {
                    setInput({ ...input, genre: event.target.value });
                    break
                }
            case "description":
                {
                    setInput({ ...input, description: event.target.value });
                    break
                }
            default:
                { break; }
        }
    }

    const handleSubmit = (event) => {
        // menahan submit
        event.preventDefault()

        let title = input.title
        let year = input.year.toString()


        if (title.replace(/\s/g, '') !== "" && year.replace(/\s/g, '') !== "") {
            if (statusForm === "create") {
                axios.post(`http://backendexample.sanbercloud.com/api/movies`, { title: input.title, rating: input.rating, duration: input.duration, year: input.year, genre: input.genre, description: input.description })
                    .then(res => {
                        setDaftarFilm([
                            ...daftarFilm,
                            {
                                id: res.data.id,
                                title: input.title,
                                rating: input.rating,
                                duration: input.duration,
                                year: input.year,
                                genre: input.genre,
                                description: input.description,
                            }])
                    })
            } else if (statusForm === "edit") {
                axios.put(`http://backendexample.sanbercloud.com/api/movies/${selectedId}`, { title: input.title, rating: input.rating, duration: input.duration, year: input.year, genre: input.genre, description: input.description })
                    .then(() => {
                        let dataFilm = daftarFilm.find(el => el.id === selectedId)
                        dataFilm.title = input.title
                        dataFilm.rating = input.rating
                        dataFilm.duration = input.duration
                        dataFilm.year = input.year
                        dataFilm.genre = input.genre
                        dataFilm.description = input.description
                        setDaftarFilm([...daftarFilm])
                    })
            }

            setStatusForm("create")
            setSelectedId(0)
            setInput({ title: "", rating: 0, duration: 0, year: 0, genre: "", description: "" })
        }

    }

    return (
        <>
            <Navi />
            <section className="content">
                <div className="cardcenter">
                    <div className="card">
                        <h1>Movie List Editor</h1>

                        <div style={{ width: "50%", margin: "0 auto", display: "block" }}>
                            <div style={{ border: "1px solid #aaa", padding: "70px" }}>
                                <form onSubmit={handleSubmit}>
                                    <label style={{ float: "left" }}>Judul film:</label>
                                    <input style={{ float: "right" }} type="text" name="title" value={input.title} onChange={handleChange} />
                                    <br />
                                    <br />

                                    <label style={{ float: "left" }}>Rating Film:</label>
                                    <input style={{ float: "right" }} min="1" max="10" type="number" name="rating" value={input.rating} onChange={handleChange} />
                                    <br />
                                    <br />

                                    <label style={{ float: "left" }}>Durasi (Dalam menit) :</label>
                                    <input style={{ float: "right" }} type="number" name="duration" value={input.duration} onChange={handleChange} />
                                    <br />
                                    <br />

                                    <label style={{ float: "left" }}>Tahun :</label>
                                    <input style={{ float: "right" }} type="number" name="year" value={input.year} onChange={handleChange} />
                                    <br />
                                    <br />
                                    <label style={{ float: "left" }}> Genre :</label>
                                    <input style={{ float: "right" }} type="text" name="genre" value={input.genre} onChange={handleChange} />
                                    <br />
                                    <br />
                                    <label style={{ float: "left" }}> Deskrisi </label>
                                    <textarea style={{ float: "right", height: "50px", width: "50%" }} type="text" name="description" value={input.description} onChange={handleChange} />
                                    <br />
                                    <br />
                                    <div style={{ float: "right", width: "100%", paddingBottom: "20px" }}>
                                        <br />
                                        <button style={{ float: "right" }}>submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <h1>Daftar Film</h1>
                        <table >
                            <thead>
                                <tr style={{ backgroundColor: "blue" }}>
                                    <th>No</th>
                                    <th>Judul</th>
                                    <th>Rating</th>
                                    <th>Durasi</th>
                                    <th>Tahun</th>
                                    <th>Genre</th>
                                    <th>Dekripsi</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    daftarFilm !== null && daftarFilm.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.title}</td>
                                                <td>{item.rating}</td>
                                                <td>{item.duration}  Menit</td>
                                                <td>{item.year}</td>
                                                <td>{item.genre}</td>
                                                <td>{item.description}</td>
                                                <td>
                                                    <button onClick={handleEdit} value={item.id}>Edit</button>
                      &nbsp;
                      <button onClick={handleDelete} value={item.id}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        {/* Form */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FilmData