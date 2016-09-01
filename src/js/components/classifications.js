import React from 'react'
import { switchViewClassificationDetails } from '../actions/app-state'
import { sparqlConnect } from '../sparql/configure-sparql'
import { LOADING, LOADED, FAILED } from 'sparql-connect'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Loading from './loading.js'
import { URIToRoute } from '../router-mapping'

function Classifications({ loaded, classifications,
    switchViewClassificationDetails }) {
  if (loaded !== LOADED) {
    return( <Loading from="Classification" plural={false} />
          )
           } else {
  //we could also write something like
  //if (loaded === FAILED)
  //  return <span>error while retrieving clasifications/span>
  return (
    <div>
      <h1>Classifications</h1>
      <ul>
        { classifications.map(({ classification }) =>
            <li key={classification}>
              <Link to={`/details/${URIToRoute.classification(classification)}`}>
                {classification}
              </Link>
            </li>
          )}
      </ul>
    </div>
  )
}
}

const mapDispatchToProps = {
  switchViewClassificationDetails
}

export default connect(undefined, mapDispatchToProps)(
  sparqlConnect.classifications(Classifications))
