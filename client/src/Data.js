import React from 'react'
import './Data.css';
import moment from 'moment'

function Data(props) {
    const result = props.documents.map(document => {
        return (
            <tr key={document.published}>
                <td>{document.title}</td>
                <td> <a href={document.url}>{document.source_name}</a> </td>
                <td>{moment(document.published).format('MM/DD/YYYY')}</td>
                <td>{document.summary}</td>
                <td> <img src={document.thumbnail} alt={document.source_slug} width="42" height="42"/></td>
            </tr>
        )
    })

    return (
        <div>
            { props.documents.length > 0 ?
                    (
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Documents </h3>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Source</th>
                                        <th>Published Date</th>
                                        <th>Summary</th>
                                        <th>Thumbnail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result}
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