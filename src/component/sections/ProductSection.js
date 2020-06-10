import React, { Component } from 'react';

class ProductSection extends Component {
    render() {
        return (
            <section className="product-section" id="product-section">
                <h2>Product</h2>
                <div className="row">
                </div>
                <div className="row">
                <div className="col span-1-of-3">
                    <div className="product-box">
                    <h3>Pronunciation class</h3>
                    <p className="product-price">19$ <span>/month</span></p>
                    <ul>
                        <li><i className="fas fa-check small-icon" />Native Voices</li>
                        <li><i className="fas fa-check small-icon" />Master IPA</li>
                    </ul>
                    <a className="btn" href="#">Join</a>
                    </div>
                </div>
                <div className="col span-1-of-3">
                    <div className="product-box">
                    <h3>Pronunciation class</h3>
                    <p className="product-price">19$ <span>/month</span></p>
                    <ul>
                        <li><i className="fas fa-check small-icon" />Native Voices</li>
                        <li><i className="fas fa-check small-icon" />Master IPA</li>
                    </ul>
                    <a className="btn" href="#">Join</a>
                    </div>
                </div>
                <div className="col span-1-of-3">
                    <div className="product-box">
                    <h3>Pronunciation class</h3>
                    <p className="product-price">19$ <span>/month</span></p>
                    <ul>
                        <li><i className="fas fa-check small-icon" />Native Voices</li>
                        <li><i className="fas fa-check small-icon" />Master IPA</li>
                    </ul>
                    <a className="btn" href="#">Join</a>
                    </div>
                </div>
                </div>
            </section>
        );
    }
}

export default ProductSection;