import  React , {Component} from 'react'
import  Config from '../GlobalVar'
import  '../App.css'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addLocation, resetLocation} from '../action/locationsActionCreator'
import Link from "react-router-dom/es/Link";

const LocationDetail =  props => {
    return (<div className='Location'>
        <div className='CountryTitle'>{props.location.countryName}</div>
        {props.location.destinations.map((destination) => {
            return(<div > <Link to={`/excursions/${props.location.countryName}/${destination}`} className='LinkText'>{destination}</Link></div>);
        })}
    </div>);
};
class destinationListing extends  Component {
    constructor(props) {
        super(props);
        this.state  ={
            allLocation: []
        };
    }
    componentDidMount(){
        this.fetchAllDestination();
    }
    fetchAllDestination(){
        const DestinationUrl = Config.API_URL+'en/AllHotelDestinationList';
        fetch(DestinationUrl)
            .then(destinationResult => destinationResult.json())
            .then(response=> {
                this.props.resetLocation();
                const allLocation = response;
                allLocation.map((location) => {
                   this.props.addLocation(location);
                });
            });
    }
    createDestinationItem(){
        {console.log("Refresh location List");}
        return this.props.locations.map((location) => {
            return (
                <LocationDetail location={location}/>
            );
        });
    }
    render(){
        let DestinationValue = JSON.stringify(this.state.allDestination);
        return (
            <div className='Container'>
                <div className='BlueBox'>
                    <div className='TitleTag'> Select your destination to see available excursions</div>
                    <div className='Container'>
                        {this.createDestinationItem()}
                    </div>
                </div>
            </div>

        );
    }
}
function mapStateToProps(state){
    return {
        locations: state.locations
    };
}
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        addLocation,
        resetLocation
    },dispatch);

};
export default  connect(mapStateToProps,mapDispatchToProps)(destinationListing);