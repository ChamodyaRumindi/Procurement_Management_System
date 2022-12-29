import React, { Component } from "react";
import "./footer.css";

/**
 * @author
 * @class footer
 **/

export default class footer extends Component {
    state = {};
    render() {
        return (
            <div className="jumbotron">
                <footer class="footer-distributed">
                    <div class="footer-left">
                        <h3>
                            P M S<span> |Procurement Management System</span>
                        </h3>

                        <p class="footer-company-name">P M S © 2022</p>
                    </div>

                    <div class="footer-center">
                        <div>
                            <i class="fa fa-map-marker"></i>
                            <p>
                                <span>444 S. Cedros Ave</span> Negambo, Sri
                                Lanka
                            </p>
                        </div>

                        <div>
                            <i class="fa fa-phone"></i>
                            <p>011 1498220</p>
                        </div>

                        <div>
                            <i class="fa fa-envelope"></i>
                            <p>
                                <a href="mailto:support@company.com">
                                    support@pms.com
                                </a>
                            </p>
                        </div>
                    </div>

                    <div class="footer-right">
                        <div class="footer-icons">
                            <a href="#">
                                <i class="fa fa-facebook"></i>
                            </a>
                            <a href="#">
                                <i class="fa fa-twitter"></i>
                            </a>
                            <a href="#">
                                <i class="fa fa-linkedin"></i>
                            </a>
                            <a href="#">
                                <i class="fa fa-github"></i>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
