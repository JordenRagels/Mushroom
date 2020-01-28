import "./eating.css";
import React, { Component } from 'react';
import { Navigations } from '../../../components/Navigations/index';

class Eating extends Component {
    render() {
        return (
            <div>
                <Navigations/>
                <table>
                    <thead>
                        <tr>
                            <th>Age in Months</th>
                            <br></br>
                            <br></br>
                            <th>Total Daily Ounces of Milk</th>                     <br></br>
                            <th>New Foods Introduced</th>
                            <br></br>
                            <th>Number of Feedings Per Day</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr >
                            <td className="months">1</td>
                            <br></br>
                            <br></br>
                            <td>16-24</td>
                            <br></br>
                            <br></br>
                            <td>N/A</td>
                            <br></br>
                            <br></br>
                            <td>6-8</td>
                        </tr>

                        <tr>
                            <td className="months">2</td>
                            <br></br>
                            <br></br>
                            <td>30</td>
                            <br></br>
                            <br></br>
                            <td>N/A</td>
                            <br></br>
                            <br></br>
                            <td>5-6</td>
                        </tr>

                        <tr>
                            <td className="months">3</td>
                            <br></br>
                            <br></br>
                            <td>32-36</td>
                            <br></br>
                            <br></br>
                            <td>N/A</td>
                            <br></br>
                            <br></br>
                            <td>5-6</td>
                        </tr>

                        <tr>
                            <td className="months">4</td>
                            <br></br>
                            <br></br>
                            <td>32-36</td>
                            <br></br>
                            <br></br>
                            <td>N/A</td>
                            <br></br>
                            <br></br>
                            <td>4-6</td>
                        </tr>

                        <tr>
                            <td className="months">5</td>
                            <br></br>
                            <br></br>
                            <td>32-36</td>
                            <br></br>
                            <br></br>
                            <td>N/A</td>
                            <br></br>
                            <br></br>
                            <td>4-6</td>
                        </tr>

                        <tr colSpan="2">
                            <td className="months">6</td>
                            <br></br>
                            <br></br>
                            <td>28-32</td>
                            <br></br>
                            <br></br>
                            <td>Half a cup of soft food 2-3 times a day</td>
                            <br></br>
                            <br></br>
                            <td>3-5</td>
                        </tr>

                        <tr>
                            <td className="months">7</td>
                            <br></br>
                            <br></br>
                            <td>30-32</td>
                            <br></br>
                            <br></br>
                            <td>Half a cup of soft food 2-3 times a day</td>
                            <br></br>
                            <br></br>
                            <td>3-5</td>
                        </tr>

                        <tr>
                            <td className="months">8</td>
                            <br></br>
                            <br></br>
                            <td>30-32</td>
                            <br></br>
                            <br></br>
                            <td>Half a cup of soft food 2-3 times a day</td>
                            <br></br>
                            <br></br>
                            <td>3-5</td>
                        </tr>

                        <tr>
                            <td className="months">9</td>
                            <br></br>
                            <br></br>
                            <td>30-32</td>
                            <br></br>
                            <br></br>
                            <td>Half a cup of soft food 3-4 times a day</td>
                            <br></br>
                            <br></br>
                            <td>3-5</td>
                        </tr>

                        <tr>
                            <td className="months">10</td>
                            <br></br>
                            <br></br>
                            <td>24-30</td>
                            <br></br>
                            <br></br>
                            <td>Half a cup of soft food 3-4 times a day</td>
                            <br></br>
                            <br></br>
                            <td>3-4</td>
                        </tr>

                        <tr>
                            <td className="months">11</td>
                            <br></br>
                            <br></br>
                            <td>24-30</td>
                            <br></br>
                            <br></br>
                            <td>Half a cup of soft food 3-4 times a day</td>
                            <br></br>
                            <br></br>
                            <td>3-4</td>
                        </tr>

                        <tr>
                            <td className="months">12</td>
                            <br></br>
                            <br></br>
                            <td>24-30</td>
                            <br></br>
                            <br></br>
                            <td>Half a cup of soft food 3-4 times a day</td>
                            <br></br>
                            <br></br>
                            <td>3-4</td>
                        </tr>
                       
                    </tbody>
                </table>

            </div>
        )
    }
}

export default Eating;