import React from 'react'

class PigCard extends React.Component{

    state = {
        style: {
            display: 'none'
        }
    }
    
    handleCardClick = event => {
        if (this.state.style.display === 'none'){
            this.setState({
                style:{
                    display: 'block'
                }
            })
        }else{
            this.setState({
                style:{
                    display: 'none'
                }
            })
        }
        console.log(this.state.style.display)
    }

    renderDetails = () => {

    }

    render(){
        const pigImg = require(`../hog-imgs/${this.props.name.toLowerCase().replace(/ /g, '_')}.jpg`)
        let pigInfoDisplay = this.state.style

        return(
            <div className="ui eight wide column" onClick={this.handleCardClick}>
                <div>NAME: {this.props.name} 
                    <br/>
                    <img src={pigImg}/>
                </div>
                <div className="hogDescription" style={pigInfoDisplay}>
                    <P>SPECIALTY: {this.props.specialty}</P>
                    <P>WEIGHT: {this.props.weight}</P>
                    <P>GREASED: {this.props.greased}</P>
                </div>
            </div>
        )
    }
}
export default PigCard