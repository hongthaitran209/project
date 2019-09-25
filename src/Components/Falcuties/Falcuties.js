import React, { Component } from 'react'

export default class Falcuties extends Component {
    render() {
        return (
            <div className="falcuties">
                <h1>Our Faculties</h1>
                <span>Contrary to popular belief, Lorem Ipsum is not simply random text</span>
                <div className="falcuties__item">
                    <div className="card myCard" style={{width:"400px"}}>
                        <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
                        <div className="card-body">
                            <p className="card-text">Some example text.</p>
                            <h4 className="card-title">John Doe</h4>
                        </div>
                    </div>

                    <div className="card myCard" style={{width:"400px"}}>
                        <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
                        <div className="card-body">
                            <p className="card-text">Some example text.</p>
                            <h4 className="card-title">John Doe</h4>
                        </div>
                    </div>

                    <div className="card myCard" style={{width:"400px"}}>
                        <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
                        <div className="card-body">
                            <p className="card-text">Some example text.</p>
                            <h4 className="card-title">John Doe</h4>
                        </div>
                    </div>

                    <div className="card myCard" style={{width:"400px"}}>
                        <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
                        <div className="card-body">
                            <p className="card-text">Some example text.</p>
                            <h4 className="card-title">John Doe</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
