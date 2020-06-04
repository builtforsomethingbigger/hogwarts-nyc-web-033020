import React from 'react'
import PigCard from './PigCard'

class PigIndex extends React.Component{

    
    render(){
        const allHogs = this.props.hogData

        return(
            <div className="ui grid container">
                {
                allHogs.map((hog, index) => <PigCard
                    key={index}
                    id={index}
                    name={hog.name}
                    specialty={hog.specialty}
                    greased={hog.greased}
                    weight={hog.weight}
                    />)
                }
            </div>
        )
    }
}
export default PigIndex