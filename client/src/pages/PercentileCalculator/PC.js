import React, { useState } from "react";


export class Per extends React.Component {
    render() {

        function log(i) { return Math.log(i) * Math.LOG10E; }
        function ln(i) {
            return Math.log(i);
        }

        function sq(i) {
            return i * i;
        }

        function sqr(i) {
            return Math.sqrt(i);
        }


        function power(x, y) {
            return Math.pow(x, y);
        }

        function eTo(x) {
            return Math.exp(x);
        }
var x=0;
        function fixDP(r, dps) {
            if (isNaN(r)) return "NaN";
            var msign = '';
            if (r < 0) msign = '-';
            x = Math.abs(r);
            if (x > Math.pow(10, 21)) return msign + x.toString();
            var m = Math.round(x * Math.pow(10, dps)).toString();
            if (dps == 0) return msign + m;
            while (m.length <= dps) m = "0" + m;
            return msign + m.substring(0, m.length - dps) + "." + m.substring(m.length - dps);
        }

        var currenttimeout;

        var n = [50, 50.399, 50.798, 51.197, 51.595, 52.392, 52.79, 53.188, 53.586, 53.983,
            54.38, 54.776, 55.172, 55.567, 55.962, 56.358, 56.749, 57.142, 57.535, 57.926,
            58.317, 58.706, 59.095, 59.483, 59.871, 60.257, 60.642, 61.026, 61.409, 61.791, 62.172, 62.552, 62.93, 63.307, 63.683, 64.058, 64.431, 64.803, 65.173, 65.542, 65.91, 66.276, 66.64, 67.003, 67.364, 67.724, 68.082, 68.439, 68.793, 69.146, 69.497, 69.847, 70.194, 70.54, 70.884, 71.226, 71.566, 71.904, 72.24, 72.575, 72.907, 73.237, 73.565, 73.891, 74.215, 74.537, 74.857, 75.175, 75.49, 75.804, 76.115, 76.424, 76.73, 77.035, 77.337, 77.637, 77.935, 78.23, 78.524, 78.814, 79.103, 79.389, 79.673, 79.955, 80.234, 80.511, 80.785, 81.057, 81.327, 81.594, 81.859, 82.121, 82.381, 82.639, 82.894, 83.147, 83.398, 83.646, 83.891, 84.134, 84.375, 84.614, 84.849, 85.083, 85.314, 85.543, 85.769, 85.993, 86.214, 86.433, 86.65, 86.864, 87.076, 87.286, 87.493, 87.698, 87.9, 88.1, 88.298, 88.493, 88.686, 88.877, 89.065, 89.251, 89.435, 89.617, 89.796, 89.973, 90.147, 90.32, 90.49, 90.658, 90.824, 90.988, 91.149, 91.308, 91.466, 91.621, 91.774, 91.924, 92.073, 92.22, 92.364, 92.507, 92.647, 92.785, 92.922, 93.056, 93.189, 93.319, 93.448, 93.574, 93.699, 93.822, 93.943, 94.062, 94.179, 94.295,
            94.295, 94.408, 94.52, 94.63, 94.738, 94.845, 94.95, 95.053, 95.154, 95.254, 95.352, 95.449, 95.543, 95.637, 95.728, 95.818, 95.907, 95.994, 96.08, 96.164, 96.246, 96.327, 96.407, 96.485, 96.562, 96.638, 96.712, 96.784, 96.856, 96.926, 96.995, 97.062, 97.128, 97.193, 97.257, 97.32, 97.381, 97.441, 97.5, 97.558, 97.615, 97.67, 97.725, 97.778, 97.831, 97.882, 97.932, 97.982, 98.03, 98.077, 98.124, 98.169, 98.214, 98.257, 98.3, 98.341, 98.382, 98.422, 98.461, 98.5, 98.537, 98.574, 98.61, 98.645, 98.679, 98.713, 98.745, 98.778, 98.809, 98.84, 98.87, 98.899, 98.928, 98.956, 98.983, 99.01, 99.036, 99.061, 99.086, 99.111, 99.134, 99.158, 99.18, 99.202, 99.224, 99.245, 99.266, 99.286, 99.305, 99.324, 99.343, 99.361, 99.379, 99.396, 99.413, 99.43, 99.446, 99.461, 99.477, 99.492, 99.506, 99.52, 99.534, 99.54, 99.56, 99.573, 99.585, 99.598, 99.609, 99.621, 99.632, 99.643, 99.653, 99.664, 99.674, 99.683, 99.693, 99.702, 99.711, 99.72, 99.728, 99.736, 99.744, 99.752, 99.76, 99.767, 99.774, 99.781, 99.788, 99.795, 99.801, 99.807, 99.813, 99.819, 99.825, 99.831, 99.836, 99.841, 99.846, 99.851, 99.856, 99.861, 99.865, 99.869, 99.874, 99.878, 99.882, 99.886, 99.889, 99.893, 99.896, 99.99
        ];

                function ZtoPercentile(z) {
                    with (document.CDCInfantLengthForAge_form) {
                        az = Math.abs(z);
                        if (z < -3.09) return 0.1;
                        if (z > 3.09) return 99.9;
                        thispercentile = n[Math.round(az * 100)];
                        if (z >= 0) { return thispercentile }
                        else { return 100 - thispercentile }
                    }
                }
       
        

        ///SEX radio button
        var S = 0;


        return (
            <div>
                <form className="CDCInfantLengthForAge_form" id="CDCInfantLengthForAge_form" >
                    <h1>Infant Length for Age Percentile</h1>
                    <div id="calc_main">
                        <div id="calc_input">
                            <span className="medCalcFontIO"></span>
                            <div className="spacer"></div>
                            <table>
                                <tbody>
                                    <td><span>Sex</span></td>
                                    <td><span class="medCalcFontOne"><input id="input128" type="radio"
                                        className="Sex_radio" checked="checked" value="Female"
                                        onClick="CDCInfantLengthForAge_fx()" /> Female</span>
                                    </td>
                                    <td align="left"><br /></td>
                                    <td colspan="3" align="left"><span className="medCalcFontOne"><input id="input129" type="radio"
                                        name="Sex_radio" value="Male" onclick="CDCInfantLengthForAge_fx();" /> Male</span>
                                    </td>

                                    <td className="calc_firsttd"><span class="medCalcFontOneBold">Age</span> </td>
                                    <td className="calc_secondtd"> <input id="input" type="number" name="Age_param"
                                        className="calc_inputbox" onblur="CDCInfantLengthForAge_fx(); minMaxCheck();"
                                        onchange="CDCInfantLengthForAge_fx();" /></td>
                                    <td className="calc_thirdtd"></td>

                                    <select name="Age_unit" onchange="CDCInfantLengthForAge_fx();"
                                        className="medCalcFontSelect calc_unitSelect">
                                        <option value="1|0|mo" selected="selected">mo</option>
                                        <option value="12|0|yr">yr</option>
                                    </select>

                                    <td class="calc_firsttd"><span class="medCalcFontOneBold">Length</span> </td>
                                    <td className="calc_secondtd"> <input id="input131" type="number" name="Length_param"
                                        className="calc_inputbox"  onblur="CDCInfantLengthForAge_fx(); minMaxCheck();"
                                        onchange="CDCInfantLengthForAge_fx();" /></td>
                                    <td className="calc_thirdtd"></td>
                                </tbody>
                            </table>

                            <div id="calc_result">
                                <span class="medCalcFontIO">Results:</span>

                                <div className="spacer"></div>
                                <table summary="MedCalc 3000 Table" cellspacing="4">
                                    <tr>
                                        <td align="right"><span className="medCalcFontOneBold">Z Score</span></td>
                                        <td valign="top" nowrap="nowrap"> <input readonly="readonly" type="text" name="Z_Score_param"
                                            className="calc_inputbox" onfocus="blur();" /></td>
                                        <td align="left">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td align="right"><span className="medCalcFontOneBold">Percentile</span></td>
                                        <td valign="top" nowrap="nowrap"> <input readonly="readonly" type="text" name="Percentile_param"
                                            className="calc_inputbox" onfocus="blur();" /></td>
                                        <td align="left">&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td colspan="3">&nbsp;<br /></td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" align="center"><span className="medCalcFontOneBold">DecimalPrecision:</span>
                                            <select name="decpts" onchange="CDCInfantLengthForAge_fx();" className="medCalcFontSelect">
                                                <option>0</option>
                                                <option selected="selected">1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        )
    };
}

export default Per;