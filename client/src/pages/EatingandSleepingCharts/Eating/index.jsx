import "./eating.css";
import React, { Component } from 'react';

class Eating extends Component {
    render() {
        return (
            <div>
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
                    <br></br>
                    <tbody>
                        <tr>
                            <td>1</td>
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
                        <br></br>
                        <tr>
                            <td>2</td>
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
                        <br></br>
                        <tr>
                            <td>3</td>
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
                        <br></br>
                        <tr>
                            <td>4</td>
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
                        <br></br>
                        <tr>
                            <td>5</td>
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
                        <br></br>
                        <tr colSpan="2">
                            <td>6</td>
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
                        <br></br>
                        <tr>
                            <td>7</td>
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
                        <br></br>
                        <tr>
                            <td>8</td>
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
                        <br></br>
                        <tr>
                            <td>9</td>
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
                        <br></br>
                        <tr>
                            <td>10</td>
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
                        <br></br>
                        <tr>
                            <td>11</td>
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
                        <br></br>
                        <tr>
                            <td>12</td>
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
                <div className="weightCalc">
                <table>
                    <th>Weight Percentile Calculator</th>
                    <tbody>
                        <td>Age<input type="number"></input> Months</td>
                        <td>Weight<input type="number"></input>kg</td>
                        <td><input readOnly="readonly" type="text" name="PercentileResult"></input>Percentile</td>
                    </tbody>
                </table>
                
                </div>

            </div>
        )
    }
}

export default Eating;