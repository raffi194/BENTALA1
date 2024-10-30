import React from "react";
import { ArrowDownward } from "./ArrowDownward";
import BENTALA from "./BENTALA.svg";
import { Language } from "./Language";
import { Mail } from "./Mail";
import { Recycling } from "./Recycling";
import { StyleOutlined } from "./StyleOutlined";
import header from "./header.png";
import image10 from "./image-10.png";
import image11 from "./image-11.png";
import image2 from "./image-2.png";
import image3 from "./image-3.png";
import image4 from "./image-4.png";
import image5 from "./image-5.png";
import image6 from "./image-6.png";
import image7 from "./image-7.png";
import image8 from "./image-8.png";
import image9 from "./image-9.png";
import line1 from "./line-1.svg";
import line2 from "./line-2.svg";
import "./style.css";

export const Home = () => {
    return (
        <div className="home">
            <div className="div">
                <div className="frame">
                    <footer className="footer">
                        <div className="group">
                            <div className="overlap-group">
                                <img className="BENTALA" alt="Bentala" src={BENTALA} />
                                <div className="ellipse" />
                            </div>
                        </div>
                        <div className="frame-2">
                            <div className="frame-3">
                                <div className="text-wrapper">Product</div>
                                <div className="frame-4">
                                    <div className="text-wrapper-2">Jackets</div>
                                    <div className="text-wrapper-3">Tees</div>
                                    <div className="text-wrapper-3">Dresses</div>
                                    <div className="text-wrapper-3">Outwear</div>
                                </div>
                            </div>
                            <div className="frame-3">
                                <div className="text-wrapper">Market</div>
                                <div className="frame-4">
                                    <div className="text-wrapper-2">Shop</div>
                                    <div className="text-wrapper-3">Terms of Use</div>
                                    <div className="text-wrapper-3">Privacy</div>
                                    <div className="text-wrapper-3">Customer Service</div>
                                </div>
                            </div>
                            <div className="frame-3">
                                <div className="text-wrapper">Social</div>
                                <div className="frame-4">
                                    <div className="text-wrapper-2">Instagram</div>
                                    <div className="text-wrapper-3">Facebook</div>
                                    <div className="text-wrapper-3">Twitter</div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-5">
                            <div className="text-wrapper">Join our Comunity</div>
                            <div className="overlap-group-wrapper">
                                <div className="overlap-group-2">
                                    <div className="text-wrapper-4">Email Address</div>
                                    <div className="overlap">
                                        <StyleOutlined className="send" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    <div className="frame-6">
                        <div className="group-2">
                            <div className="hero">
                                <div className="overlap-2">
                                    <div className="overlap-wrapper">
                                        <div className="overlap-3">
                                            <div className="text-wrapper-5">Learn More</div>
                                            <div className="arrow-downward-wrapper">
                                                <ArrowDownward className="style-outlined" color="#F2F2F3" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-wrapper">
                                        <div className="overlap-4">
                                            <div className="text-wrapper-6">Contact Us</div>
                                            <div className="mail-wrapper">
                                                <Mail className="style-outlined" color="#161616" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="group-3">
                                    <div className="overlap-group-3">
                                        <p className="p">Timeless fashion and thoughtful choices to join us in making a difference.</p>
                                    </div>
                                </div>
                                <img className="image" alt="Image" src={image2} />
                                <img className="img" alt="Image" src={image3} />
                            </div>
                            <div className="bio">
                                <div className="group-4">
                                    <div className="overlap-group-4">
                                        <div className="rectangle" />
                                        <p className="we-creates-eco">
                                            <span className="span">We creates </span>
                                            <span className="text-wrapper-7">eco-friendly products</span>
                                            <span className="span">
                                                {" "}
                                                using sustainable materials like kenaf canvas, recycled plastic leather, and rubber soles. With
                                                solar-powered, water-saving production, they offer modern, casual shoes, bags, sandals, and
                                                clothing for all activities.
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shop">
                            <div className="title">
                                <div className="frame-wrapper">
                                    <div className="frame-7">
                                        <div className="frame-8">
                                            <div className="text-wrapper-8">All</div>
                                            <div className="text-wrapper-9">14</div>
                                        </div>
                                        <div className="frame-9">
                                            <div className="text-wrapper-10">Men</div>
                                            <div className="text-wrapper-11">8</div>
                                        </div>
                                        <div className="frame-8">
                                            <div className="text-wrapper-8">Woman</div>
                                            <div className="text-wrapper-9">5</div>
                                        </div>
                                        <div className="frame-8">
                                            <div className="text-wrapper-8">New Arrival</div>
                                            <div className="text-wrapper-9">7</div>
                                        </div>
                                        <div className="frame-8">
                                            <div className="text-wrapper-8">Sustainable</div>
                                            <div className="text-wrapper-9">6</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="group-5">
                                    <div className="text-wrapper-12">Our Latest Product</div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="group-6">
                                    <div className="ellipse-2" />
                                    <div className="ellipse-3" />
                                    <div className="overlap-group-5">
                                        <div className="ellipse-4" />
                                        <div className="ellipse-5" />
                                    </div>
                                    <div className="text-wrapper-13">Knit Sweater</div>
                                    <div className="text-wrapper-14">Rp299.000</div>
                                    <img className="image-2" alt="Image" src={image4} />
                                </div>
                                <div className="group-6">
                                    <div className="overlap-group-5">
                                        <div className="ellipse-4" />
                                        <div className="ellipse-6" />
                                    </div>
                                    <div className="ellipse-2" />
                                    <div className="ellipse-7" />
                                    <div className="text-wrapper-13">Oversize Tees</div>
                                    <div className="text-wrapper-14">Rp99.000</div>
                                    <img className="image-2" alt="Image" src={image5} />
                                </div>
                                <div className="group-7">
                                    <div className="overlap-group-5">
                                        <div className="ellipse-4" />
                                        <div className="ellipse-8" />
                                    </div>
                                    <div className="ellipse-9" />
                                    <div className="ellipse-10" />
                                    <div className="text-wrapper-13">Jersey Polo</div>
                                    <div className="overlap-5">
                                        <div className="text-wrapper-15">Rp225.000</div>
                                        <img className="line" alt="Line" src={line2} />
                                    </div>
                                    <div className="text-wrapper-16">Rp225.000</div>
                                    <img className="image-2" alt="Image" src={image6} />
                                </div>
                            </div>
                            <div className="card-2">
                                <div className="group-6">
                                    <div className="overlap-group-5">
                                        <div className="ellipse-4" />
                                        <div className="ellipse-11" />
                                    </div>
                                    <div className="ellipse-12" />
                                    <div className="ellipse-13" />
                                    <div className="text-wrapper-17">Striped Long-Sleeve Shirt</div>
                                    <div className="text-wrapper-14">Rp199.000</div>
                                    <img className="image-2" alt="Image" src={image7} />
                                </div>
                                <div className="group-6">
                                    <div className="overlap-group-5">
                                        <div className="ellipse-4" />
                                        <div className="ellipse-14" />
                                    </div>
                                    <div className="ellipse-15" />
                                    <div className="ellipse-16" />
                                    <div className="text-wrapper-18">Jacket Long-Sleeve</div>
                                    <div className="text-wrapper-14">Rp299.000</div>
                                    <img className="image-2" alt="Image" src={image8} />
                                </div>
                                <div className="group-8">
                                    <div className="overlap-group-5">
                                        <div className="ellipse-4" />
                                        <div className="ellipse-17" />
                                    </div>
                                    <div className="ellipse-15" />
                                    <div className="ellipse-18" />
                                    <div className="text-wrapper-19">Sweater Polo Long-Sleeve</div>
                                    <div className="text-wrapper-14">Rp255.000</div>
                                    <img className="image-2" alt="Image" src={image9} />
                                </div>
                            </div>
                            <div className="page">
                                <div className="ellipse-19" />
                                <div className="ellipse-20" />
                            </div>
                        </div>
                        <div className="description">
                            <div className="overlap-6">
                                <img className="line-2" alt="Line" src={line1} />
                                <p className="we-re-here-to-make">
                                    We’re here to make difference
                                    <br />
                                    to your daily amenities.
                                </p>
                                <div className="recycling-wrapper">
                                    <Recycling className="recycling-instance" />
                                </div>
                                <div className="language-wrapper">
                                    <Language className="style-outlined-instance" color="#F2F2F3" />
                                </div>
                                <div className="text-wrapper-20">Waste Reduction</div>
                                <div className="text-wrapper-21">Sustainable Innovation</div>
                                <p className="text-wrapper-22">
                                    Committed to reducing waste across the product lifecycle through effective waste management and
                                    recycling programs.
                                </p>
                                <p className="text-wrapper-23">
                                    Developing innovative fashion products that are both stylish and high-quality, made from recycled
                                    materials to reduce environmental impact.
                                </p>
                            </div>
                            <img className="image-3" alt="Image" src={image10} />
                            <img className="image-4" alt="Image" src={image11} />
                        </div>
                    </div>
                </div>
                <img className="header" alt="Header" src={header} />
            </div>
        </div>
    );
};
