import React from 'react'
import './Data.css';

function Data(props) {
    const f = props.data.map(i => {
        return (
            <tr key={i.published}>
                <td>{i.document_id}</td>
                <td>{i.image}</td>
                <td>{i.published}</td>
                <td>{i.similarity}</td>
                <td>{i.source_name}</td>
                <td>{i.source_slug}</td>
                <td>{i.summary}</td>
                <td>{i.thumbnail}</td>
                <td>{i.title}</td>
                <td>{i.url}</td>
            </tr>
        )
    })

    return (
        <div>
            { props.data.length > 0 ?
                    (
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel-heading">
                                <h3 className="panel-title">Documents </h3>
                            </div>
                            <table className="table table-hover" id="task-table">
                                <thead>
                                    <tr>
                                        <th>Document ID</th>
                                        <th>Image</th>
                                        <th>Published Date</th>
                                        <th>Similarity</th>
                                        <th>Source Name</th>
                                        <th>Source Slug</th>
                                        <th>Summary</th>
                                        <th>Thumbnail</th>
                                        <th>Title</th>
                                        <th>Url</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {f}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> )
                : null
            }
        </div>
    )
}

export default Data;