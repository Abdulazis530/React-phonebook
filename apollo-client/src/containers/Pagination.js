import React, { Component } from 'react'
import { connect } from 'react-redux';
import { loadPhone, nextPage, prevPage,switchPage } from '../actions'

class Pagination extends Component {

    handlePrevious

    handleClick = async(event) => {
        const { currentPage, limit } = this.props.stateFromMaps
        if (event.target.name === "previousPage") {
            const offset = (currentPage - 2) * limit
            await  this.props.clickPrevPage(offset)
            await  this.props.loadPhone(offset)


        } else if (event.target.name === "nextPage") {
            const offset = currentPage * limit
           await this.props.clickNextPage(offset)
           await this.props.loadPhone(offset)


        } else {
            console.log('test ja',typeof event.target.id)
            console.log(event.target.id-1)
            const offset = (event.target.id - 1) * limit

            const switchToPage=Number(event.target.id)
            await this.props.switchPage(offset,switchToPage)
            await this.props.loadPhone(offset)
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
}
const mapDispatchToProps = (dispatch) => {

    return {
        loadPhone: (offset) => dispatch(loadPhone(offset)),
        clickNextPage: (offset) => dispatch(nextPage(offset)),
        clickPrevPage: (offset) => dispatch(prevPage(offset)),
        switchPage:(offset,switchToPage)=>dispatch(switchPage(offset,switchToPage))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pagination)
