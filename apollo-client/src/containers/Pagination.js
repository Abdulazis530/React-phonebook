import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadPhone, nextPage, prevPage } from '../actions'

class Pagination extends Component {

    handlePrevious

    handleClick = (event) => {
        const { currentPage, limit } = this.props.stateFromMaps
        console.log(limit)
        console.log(currentPage)
        if (event.target.name === "previousPage") {
            const offset = (currentPage - 2) * limit
            this.props.clickPrevPage()

        } else if (event.target.name === "nextPage") {
            console.log(this.props)
            const offset = currentPage * limit
            this.props.clickNextPage()

        } else {
            const offset = (event.target.id - 1) * limit
            console.log(offset)
        }
        event.preventDefault()


    }

    render() {
        const { currentPage, pages } = this.props.stateFromMaps
        const iterator = []
        for (let i = 0; i < pages; i++) {
            iterator.push(i)
        }
        return (
            <div id="pagination">
                <nav aria-label="...">
                    <ul className="pagination justify-content-center">
                        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
                            <a className="page-link" href="/#" name="previousPage" value={currentPage - 1} onClick={this.handleClick}>Previous</a>
                        </li>

                        {iterator.map((e, index) => {
                            return (<li className={currentPage === index + 1 ? "page-item active" : "page-item"} aria-current="page" key={index + 1}>
                                <a className="page-link" href="/#" id={index + 1} name="pagi" onClick={this.handleClick}> {index + 1} </a>
                            </li>)
                        })}

                        <li className={currentPage === pages ? "page-item disabled" : "page-item"}>
                            <a className="page-link" href="/#" name="nextPage" onClick={this.handleClick}>Next</a>
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
        loadPhoneFormMap: () => dispatch(loadPhone()),
        clickNextPage: () => dispatch(nextPage()),
        clickPrevPage: () => dispatch(prevPage())
        // switchPage:()=>dispatch(switchPage())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination)
