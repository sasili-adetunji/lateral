import React from 'react'
import moment from 'moment'; // to make the date human readable

function Data(props) {
    const result = props.documents.map(document => {
        return (
            <tr key={document.published}>
                <td>{document.title}</td>
                <td><a href={document.url}>{document.source_name}</a></td>
                <td>{moment(document.published).format('MM/DD/YYYY')}</td>
                <td>{document.summary}</td>
                <td><img src={document.thumbnail.toString()} alt={document.source_slug} width="42" height="42"/></td>
            </tr>
        )
    })

    return (
        <div>
            { props.documents.length > 0 ?
                (
                    <div className="container">
                    <div className="row">
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
                ): null
            }
        </div>
    )
}

export default Data;