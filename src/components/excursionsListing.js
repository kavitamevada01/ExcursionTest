import  React , {Component} from 'react'
import  '../App.css'
import  Config from '../GlobalVar'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {addExcursion,resetExcursion, addExcursionCategory,resetExcursionCategory,setExcursionVisibilityFilterByCategory} from '../action/excursionsActionCreator'
import  {getVisibleExcursions} from '../action/excursionsActionCreator'
import {SHOW_ALL} from "../action/actionType";
const ExcursionDetail =  props => {
    return props.excursion.subCategories.map((subCategories) => {
        return (
            <SubCatExcursionDetail categoryName={props.excursion.categoryName}  subCategories ={subCategories} />
        );
    });
};
const SubCatExcursionDetail =  props => {
    return props.subCategories.excursions.map((excursion) => {
        return (
            <FinalExcursionDetail categoryName={props.categoryName}  subCategoryName = {props.subCategories.subCategoryName}  excursion={excursion}/>
        );
    });
};

const FinalExcursionDetail =  props => {
     const ImagesExe = props.excursion.excursionImages;
     var ImagePath ="";

     if(ImagesExe != null && ImagesExe != undefined)
     {
         if(Object.keys(ImagesExe).length>0){
             const keyname = Object.keys(ImagesExe)[1];
             ImagePath = ImagesExe[keyname][0];
         }
     }
    //<img src={ImagesExe[0]} alt={props.excursion.name}  className="CarImage"/>
    return (
        <div className="excursionCategory">
            <div className="excursionHeader">
                <div className="excursionItem excursionName">{props.excursion.excursionFullName}</div>
                <div className="excursionItem excursionSubTitle">{props.categoryName}</div>
                <div className="excursionItem excursionSubTitle">{props.subCategoryName}</div>
            </div>

            <img src={ImagePath} alt={props.excursion.name}  className="excursionImage"/>
            <div className="excursionDesc">{props.excursion.excursionShortDescription}</div>
        </div>
    );
};

class excursionsListing extends  Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.fetchAllExcursionsDestination();
    }
    fetchAllExcursionsDestination (){
        const execursionUrl =  Config.API_URL+"1/en/excursionsCountryDestination/"+this.props.match.params.selectedCountry+"/"+this.props.match.params.selectedDestination;
        console.log(execursionUrl);
        fetch(execursionUrl)
            .then(ExcursionResult => ExcursionResult.json())
            .then(response => {
                this.props.resetExcursion();
                this.props.resetExcursionCategory();
                response.map((excursionData) => {
                    this.props.addExcursion(excursionData);
                    console.log(JSON.stringify(excursionData));
                    this.props.addExcursionCategory(excursionData.categoryName);
                });
            });
    }
    createExcursionListItems(){
        return this.props.excursions.map((excursion) => {
            return (
                <ExcursionDetail excursion={excursion}/>
            );
        });
    }
    render(){
        return (
            <div className='Container'>
                <div className='TitleTag'> Tours and attractions in {this.props.match.params.selectedDestination} , {this.props.match.params.selectedCountry}</div>
                <div className="excursionSection">
                    <nav class="filterNavigation">
                    <li
                    className={(this.props.excursionVisibilityFilterByCategory === SHOW_ALL ? 'active' : '') }
                    onClick={() => this.props.setExcursionVisibilityFilterByCategory(SHOW_ALL)}
                    >
                    All
                    </li>
                    {this.props.excursionCategories.map((category) => {
                        return (
                            <li
                                className={(this.props.excursionVisibilityFilterByCategory === category ? 'active' : '') }
                                onClick={() => this.props.setExcursionVisibilityFilterByCategory(category)}
                            >
                                {category}
                            </li>
                        );
                    })
                    }
                    </nav>
                    <div className="excursionList">
                        {this.createExcursionListItems()}
                    </div>
                </div>
            </div>

        );
    }


}
function mapStateToProps(state){
    return {
        excursions: getVisibleExcursions(state.excursions,state.excursionVisibilityFilterByCategory),
        excursionCategories: state.excursionCategories,
        excursionVisibilityFilterByCategory:state.excursionVisibilityFilterByCategory
    };
}
const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({
        addExcursion,
        resetExcursion,
        addExcursionCategory,
        resetExcursionCategory,
        setExcursionVisibilityFilterByCategory
    },dispatch);

};
export default  connect(mapStateToProps,mapDispatchToProps)(excursionsListing);