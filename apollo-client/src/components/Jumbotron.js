import React from 'react'


export default function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-1">Phone Book</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                <button type="submit" className="btn btn-primary float-left">Tambah</button>
            </div>
        </div>
    )

}