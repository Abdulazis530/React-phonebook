import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadPhone } from '../actions'

class Pagination extends Component {
    render() {
        console.log('PAGINATION PAGE')
        console.log(this.props.stateFromMaps)
        const { currentPage, pages } = this.props.stateFromMaps

        const iterator = []

        for (let i = 0; i < pages; i++) {
            iterator.push(i)
        }

        console.log(iterator)


        return (
            <div>
                <nav aria-label="...">
                    <ul className="pagination justify-content-center">
                        <li className={currentPage ===1 ? "page-item disabled" :"page-item"}>
                            <span className="page-link">Previous</span>
                        </li>

                        {iterator.map((e, index) => {
                            return (<li className={currentPage === index+1 ? "page-item active" :"page-item"} aria-current="page" key={index+1}>
                                <a className="page-link" href="#"> {index +1} </a>
                            </li>)
                        })}

                        <li className={currentPage === pages ? "page-item disabled" :"page-item"}>
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>

        )
    }

}


const mapStateToProps = ({ phones }) => {
    return { stateFromMaps: phones }
    //word users taken from reducer/index.js
    // export default combineReducers({
    //   phones
    // })

}
const mapDispatchToProps = (dispatch) => {

    return {
        loadPhoneFormMap: () => dispatch(loadPhone())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination)
