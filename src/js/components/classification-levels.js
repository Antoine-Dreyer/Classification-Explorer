
import React, { Component } from 'react'
import { loadClassificationLevels } from '../actions/classification-levels'
import { viewClassificationLevels } from '../actions/app-state'
import { connect } from 'react-redux'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';




class ClassificationLevels extends Component {

  constructor(props) {
    super(props)
  }

  handleSelect(index, last) {
     //viewClassificationItemsForLevel(levels[index]);
   }

  componentWillMount() {
    this.props.loadClassificationLevels()
  }

  render() {
    const { loaded, levels, activeLevelUri, viewClassificationItemsForLevel } = this.props
    if (!loaded) return <span>loading levels</span>
    return (
      <div><Tabs
       onSelect={this.handleSelect}
     >
     <TabList>
            {
              levels.map(level =>
                <Tab>{level.name}</Tab>
              )
            }
     </TabList>
     {
       levels.map(level =>
         <TabPanel>

            </TabPanel>
       )
     }
      </Tabs>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loaded: true,
  levels: [{uri: 'uridenaf1', name: 'Group'}, {uri: 'uridenaf2', name: 'Division'}],
  activeLevelUri: 'uridenaf2'
})

const mapDispatchToProps = {
  loadClassificationLevels,
  //viewClassificationItems
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassificationLevels)
