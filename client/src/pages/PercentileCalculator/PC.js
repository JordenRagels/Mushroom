import React from 'react'

export class Per extends React.Component {
    render() {
        var x = 0;
        var i=0;
        var y=0;
        function log(i) {
            return Math.log(i) * Math.LOG10E;
        }
       
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


        function fixDP(r, dps) {
            if (isNaN(r)) return "NaN";
            var msign = '';
            if (r < 0) msign = '-';
            x = Math.abs(r);
            if (x > Math.pow(10, 21)) return msign + x.toString();
            var m = Math.round(x * Math.pow(10, dps)).toString();
            if (dps === 0) return msign + m;
            while (m.length <= dps) m = "0" + m;
            return msign + m.substring(0, m.length - dps) + "." + m.substring(m.length - dps);
            console.log(m);
            console.log(dps);
        }

        var currenttimeout;

        var n = [50, 50.399, 50.798, 51.197, 51.595, 52.392, 52.79, 53.188, 53.586, 53.983,
            54.38, 54.776, 55.172, 55.567, 55.962, 56.358, 56.749, 57.142, 57.535, 57.926,
            58.317, 58.706, 59.095, 59.483, 59.871, 60.257, 60.642, 61.026, 61.409, 61.791, 62.172, 62.552, 62.93, 63.307, 63.683, 64.058, 64.431, 64.803, 65.173, 65.542, 65.91, 66.276, 66.64, 67.003, 67.364, 67.724, 68.082, 68.439, 68.793, 69.146, 69.497, 69.847, 70.194, 70.54, 70.884, 71.226, 71.566, 71.904, 72.24, 72.575, 72.907, 73.237, 73.565, 73.891, 74.215, 74.537, 74.857, 75.175, 75.49, 75.804, 76.115, 76.424, 76.73, 77.035, 77.337, 77.637, 77.935, 78.23, 78.524, 78.814, 79.103, 79.389, 79.673, 79.955, 80.234, 80.511, 80.785, 81.057, 81.327, 81.594, 81.859, 82.121, 82.381, 82.639, 82.894, 83.147, 83.398, 83.646, 83.891, 84.134, 84.375, 84.614, 84.849, 85.083, 85.314, 85.543, 85.769, 85.993, 86.214, 86.433, 86.65, 86.864, 87.076, 87.286, 87.493, 87.698, 87.9, 88.1, 88.298, 88.493, 88.686, 88.877, 89.065, 89.251, 89.435, 89.617, 89.796, 89.973, 90.147, 90.32, 90.49, 90.658, 90.824, 90.988, 91.149, 91.308, 91.466, 91.621, 91.774, 91.924, 92.073, 92.22, 92.364, 92.507, 92.647, 92.785, 92.922, 93.056, 93.189, 93.319, 93.448, 93.574, 93.699, 93.822, 93.943, 94.062, 94.179, 94.295,
            94.295, 94.408, 94.52, 94.63, 94.738, 94.845, 94.95, 95.053, 95.154, 95.254, 95.352, 95.449, 95.543, 95.637, 95.728, 95.818, 95.907, 95.994, 96.08, 96.164, 96.246, 96.327, 96.407, 96.485, 96.562, 96.638, 96.712, 96.784, 96.856, 96.926, 96.995, 97.062, 97.128, 97.193, 97.257, 97.32, 97.381, 97.441, 97.5, 97.558, 97.615, 97.67, 97.725, 97.778, 97.831, 97.882, 97.932, 97.982, 98.03, 98.077, 98.124, 98.169, 98.214, 98.257, 98.3, 98.341, 98.382, 98.422, 98.461, 98.5, 98.537, 98.574, 98.61, 98.645, 98.679, 98.713, 98.745, 98.778, 98.809, 98.84, 98.87, 98.899, 98.928, 98.956, 98.983, 99.01, 99.036, 99.061, 99.086, 99.111, 99.134, 99.158, 99.18, 99.202, 99.224, 99.245, 99.266, 99.286, 99.305, 99.324, 99.343, 99.361, 99.379, 99.396, 99.413, 99.43, 99.446, 99.461, 99.477, 99.492, 99.506, 99.52, 99.534, 99.54, 99.56, 99.573, 99.585, 99.598, 99.609, 99.621, 99.632, 99.643, 99.653, 99.664, 99.674, 99.683, 99.693, 99.702, 99.711, 99.72, 99.728, 99.736, 99.744, 99.752, 99.76, 99.767, 99.774, 99.781, 99.788, 99.795, 99.801, 99.807, 99.813, 99.819, 99.825, 99.831, 99.836, 99.841, 99.846, 99.851, 99.856, 99.861, 99.865, 99.869, 99.874, 99.878, 99.882, 99.886, 99.889, 99.893, 99.896, 99.99
        ];
        
        var S = 0;
        var L = 0;
        var M = 0;

        var ILA = document.CDCInfantLengthForAge_form;
        var az = 0;
        var thispercentile = 0;

        function ZtoPercentile(z, ILA) {
            az = Math.abs(z);
            if (z < -3.09) return 0.1;
            if (z > 3.09) return 99.9;
            thispercentile = n[Math.round(az * 100)];
            if (z >= 0) { return thispercentile }
            else { return 100 - thispercentile }
        }

        var calctxt = "";
        var xmltxt = "";
        var htmtxt = "";
        var Sex_radio = [0, 1, 2];
        var Sex = 0;
        var Age_param = "";
        var param_value = " ";
        var unit_parts = 0;
        var Age_unit = 0;
        var Length_param = 0;
        var Age = 0;
        var Length_unit = 0;
        var Length = 0;
        var decpts = '';

        function CDCInfantLengthForAge_fx() {

            var doCalc = true;
            if (Sex_radio[0].checked) { Sex = 1; }
            if (Sex_radio[1].checked) { Sex = 2; }
            if (Age_param.value.indexOf(',') >= 0) { Age_param.value = ''; doCalc = false; alert('Comma character not allowed'); }
            param_value = parseFloat(Age_param.value);
            if (isNaN(param_value)) { param_value = ""; doCalc = false; }
            unit_parts = Age_unit.options[Age_unit.selectedIndex].value.split('|');
            Age = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);
            if (Length_param.value.indexOf(',') >= 0) { Length_param.value = ''; doCalc = false; alert('Comma character not allowed'); }
            param_value = parseFloat(Length_param.value);
            if (isNaN(param_value)) { param_value = ""; doCalc = false; }
            unit_parts = Length_unit.options[Length_unit.selectedIndex].value.split('|');
            Length = param_value * parseFloat(unit_parts[0]) + parseFloat(unit_parts[1]);
            var dp = decpts.options[decpts.selectedIndex].text;

            if (Sex === 1) {
                if (Age >= 0 && Age < 1) { L = -0.809249882; M = 51.68358057; S = 0.046818545; };
                if (Age >= 1 && Age < 2) { L = -0.050782985; M = 55.28612813; S = 0.0434439; };
                if (Age >= 2 && Age < 3) { L = 0.476851407; M = 58.09381906; S = 0.041716103; };
                if (Age >= 3 && Age < 4) { L = 0.843299612; M = 60.45980763; S = 0.040705173; };
                if (Age >= 4 && Age < 5) { L = 1.097562257; M = 62.53669656; S = 0.040079765; };
                if (Age >= 5 && Age < 6) { L = 1.272509641; M = 64.40632762; S = 0.039686845; };
                if (Age >= 6 && Age < 7) { L = 1.390428859; M = 66.11841553; S = 0.039444555; };
                if (Age >= 7 && Age < 8) { L = 1.466733925; M = 67.70574419; S = 0.039304738; };
                if (Age >= 8 && Age < 9) { L = 1.512301976; M = 69.19123614; S = 0.03923711; };
                if (Age >= 9 && Age < 10) { L = 1.534950767; M = 70.59163924; S = 0.039221665; };
                if (Age >= 10 && Age < 11) { L = 1.540390875; M = 71.91961673; S = 0.039244672; };
                if (Age >= 11 && Age < 12) { L = 1.532852892; M = 73.1850104; S = 0.03929642; };
                if (Age >= 12 && Age < 13) { L = 1.51550947; M = 74.39564379; S = 0.039369875; };
                if (Age >= 13 && Age < 14) { L = 1.490765028; M = 75.5578544; S = 0.039459832; };
                if (Age >= 14 && Age < 15) { L = 1.460458255; M = 76.67685871; S = 0.039562382; };
                if (Age >= 15 && Age < 16) { L = 1.426006009; M = 77.75700986; S = 0.039674542; };
                if (Age >= 16 && Age < 17) { L = 1.388507095; M = 78.80198406; S = 0.03979401; };
                if (Age >= 17 && Age < 18) { L = 1.348818127; M = 79.81491852; S = 0.039918994; };
                if (Age >= 18 && Age < 19) { L = 1.307609654; M = 80.79851532; S = 0.040048084; };
                if (Age >= 19 && Age < 20) { L = 1.265408149; M = 81.75512092; S = 0.040180162; };
                if (Age >= 20 && Age < 21) { L = 1.222627732; M = 82.6867881; S = 0.04031434; };
                if (Age >= 21 && Age < 22) { L = 1.179594365; M = 83.59532461; S = 0.040449904; };
                if (Age >= 22 && Age < 23) { L = 1.136564448; M = 84.48233206; S = 0.040586283; };
                if (Age >= 23 && Age < 24) { L = 1.093731947; M = 85.34923624; S = 0.040723015; };
                if (Age >= 24 && Age < 25) { L = 1.051272912; M = 86.1973169; S = 0.040859727; };
                if (Age >= 25 && Age < 26) { L = 1.041951175; M = 87.09026318; S = 0.041142161; };
                if (Age >= 26 && Age < 27) { L = 1.012592236; M = 87.95714182; S = 0.041349399; };
                if (Age >= 27 && Age < 28) { L = 0.970541909; M = 88.7960184; S = 0.041500428; };
                if (Age >= 28 && Age < 29) { L = 0.921129988; M = 89.6055115; S = 0.041610508; };
                if (Age >= 29 && Age < 30) { L = 0.868221392; M = 90.38476689; S = 0.041691761; };
                if (Age >= 30 && Age < 31) { L = 0.81454413; M = 91.13341722; S = 0.04175368; };
                if (Age >= 31 && Age < 32) { L = 0.761957977; M = 91.8515436; S = 0.041803562; };
                if (Age >= 32 && Age < 33) { L = 0.711660228; M = 92.5396352; S = 0.041846882; };
                if (Age >= 33 && Age < 34) { L = 0.664323379; M = 93.19854429; S = 0.041887626; };
                if (Age >= 34 && Age < 35) { L = 0.620285102; M = 93.82945392; S = 0.041928568; };
                if (Age >= 35 && Age < 36) { L = 0.57955631; M = 94.43382278; S = 0.041971514; };
            }
            if (Sex === 2) {
                if (Age >= 0 && Age < 1) { L = 0.511237696; M = 52.6959753; S = 0.048692684; };
                if (Age >= 1 && Age < 2) { L = -0.45224446; M = 56.62842855; S = 0.04411683; };
                if (Age >= 2 && Age < 3) { L = -0.990594599; M = 59.60895343; S = 0.041795583; };
                if (Age >= 3 && Age < 4) { L = -1.285837689; M = 62.07700027; S = 0.040454126; };
                if (Age >= 4 && Age < 5) { L = -1.43031238; M = 64.2168641; S = 0.039633879; };
                if (Age >= 5 && Age < 6) { L = -1.47657547; M = 66.1253149; S = 0.039123813; };
                if (Age >= 6 && Age < 7) { L = -1.456837849; M = 67.8601799; S = 0.038811994; };
                if (Age >= 7 && Age < 8) { L = -1.391898768; M = 69.45908458; S = 0.038633209; };
                if (Age >= 8 && Age < 9) { L = -1.29571459; M = 70.94803912; S = 0.038546833; };
                if (Age >= 9 && Age < 10) { L = -1.177919048; M = 72.34586111; S = 0.038526262; };
                if (Age >= 10 && Age < 11) { L = -1.045326049; M = 73.6666541; S = 0.038553387; };
                if (Age >= 11 && Age < 12) { L = -0.902800887; M = 74.92129717; S = 0.038615501; };
                if (Age >= 12 && Age < 13) { L = -0.753908107; M = 76.11837536; S = 0.038703461; };
                if (Age >= 13 && Age < 14) { L = -0.601263523; M = 77.26479911; S = 0.038810557; };
                if (Age >= 14 && Age < 15) { L = -0.446805039; M = 78.36622309; S = 0.038931784; };
                if (Age >= 15 && Age < 16) { L = -0.291974772; M = 79.4273405; S = 0.039063356; };
                if (Age >= 16 && Age < 17) { L = -0.13784767; M = 80.45209492; S = 0.039202382; };
                if (Age >= 17 && Age < 18) { L = 0.014776155; M = 81.44383603; S = 0.039346629; };
                if (Age >= 18 && Age < 19) { L = 0.165304169; M = 82.40543643; S = 0.039494365; };
                if (Age >= 19 && Age < 20) { L = 0.313301809; M = 83.33938063; S = 0.039644238; };
                if (Age >= 20 && Age < 21) { L = 0.458455471; M = 84.24783394; S = 0.039795189; };
                if (Age >= 21 && Age < 22) { L = 0.600544631; M = 85.13269658; S = 0.039946388; };
                if (Age >= 22 && Age < 23) { L = 0.739438953; M = 85.9956488; S = 0.040097181; };
                if (Age >= 23 && Age < 24) { L = 0.875000447; M = 86.8381751; S = 0.04024706; };
                if (Age >= 24 && Age < 25) { L = 1.00720807; M = 87.66160934; S = 0.040395626; };
                if (Age >= 25 && Age < 26) { L = 0.837251351; M = 88.45247282; S = 0.040577525; };
                if (Age >= 26 && Age < 27) { L = 0.681492975; M = 89.22326434; S = 0.040723122; };
                if (Age >= 27 && Age < 28) { L = 0.538779654; M = 89.97549228; S = 0.040833194; };
                if (Age >= 28 && Age < 29) { L = 0.407697153; M = 90.71040853; S = 0.040909059; };
                if (Age >= 29 && Age < 30) { L = 0.286762453; M = 91.42907762; S = 0.040952433; };
                if (Age >= 30 && Age < 31) { L = 0.174489485; M = 92.13242379; S = 0.04096533; };
                if (Age >= 31 && Age < 32) { L = 0.069444521; M = 92.82127167; S = 0.040949976; };
                if (Age >= 32 && Age < 33) { L = -0.029720564; M = 93.49637946; S = 0.040908737; };
                if (Age >= 33 && Age < 34) { L = -0.124251789; M = 94.15846546; S = 0.040844062; };
                if (Age >= 34 && Age < 35) { L = -0.215288396; M = 94.80822923; S = 0.040758431; };
                if (Age >= 35 && Age < 36) { L = -0.30385434; M = 95.44636981; S = 0.040654312; };
            }

            var Z_Score_param = '';
            var Percentile_param = '';

            var Z_Score = (power((Length / M), L) - 1) / (L * S);

            if (doCalc) Z_Score_param.value = fixDP(Z_Score, dp);

            var Percentile = ZtoPercentile(Z_Score);

            if (doCalc) Percentile_param.value = fixDP(Percentile, dp);

        }

        var Percentile_param = "";
        var Z_Score_param = "";

        function clrResults(ILA) {

            if (currenttimeout) window.clearTimeout(currenttimeout); {

                Z_Score_param.value = '';
                Percentile_param.value = '';

            }
        }

        return (

            <form className="CDCInfantLengthForAge_form" id="CDCInfantLengthForAge_form" >
                <h1>Infant Length for Age Percentile</h1>
                <div id="calc_main">
                    <div id="calc_input">
                        <span className="medCalcFontIO"></span>
                        <div className="spacer"></div>
                        <div>

                            <span>Sex</span>
                            <div className="medCalcFontOne"><input id="input128" type="radio"
                                className="Sex_radio" checked="checked" value="Female"
                                onChange={CDCInfantLengthForAge_fx} /> Female</div>


                            <div colSpan="3"><span className="medCalcFontOne"><input id="input129" type="radio"
                                name="Sex_radio" value="Male" onChange={CDCInfantLengthForAge_fx} /> Male</span>

                                <br></br>
                                <br></br>
                                <div className="calc_firsttd"><span className="medCalcFontOneBold">Age</span> </div>
                                <div className="calc_secondtd"> <input id="input" type="number" name="Age_param"
                                    className="calc_inputbox" onBlur={CDCInfantLengthForAge_fx}
                                    onChange={CDCInfantLengthForAge_fx} /></div>
                                <div className="calc_thirdtd"></div>
                                <br></br>
                                <select name="Age_unit" onChange={CDCInfantLengthForAge_fx}
                                    className="medCalcFontSelect calc_unitSelect">
                                    <option value="1|0|mo" >mo</option>
                                    <option value="12|0|yr">yr</option>
                                </select>

                                <div className="calc_firsttd"><span className="medCalcFontOneBold">Length</span> </div>
                                <div className="calc_secondtd"> <input id="input131" type="number" name="Length_param"
                                    className="calc_inputbox" onBlur={CDCInfantLengthForAge_fx}
                                    onChange={CDCInfantLengthForAge_fx} /></div>
                                <div className="calc_thirdtd"></div>


                                <br></br>
                                <div id="calc_result">
                                    <span className="medCalcFontIO">Results:</span>

                                    <div className="spacer"></div>
                                    <div summary="MedCalc 3000 Table" cellSpacing="4">

                                        <div><span className="medCalcFontOneBold">Z Score</span></div>
                                        <div align="top"> <input readOnly="readonly" type="text" name="Z_Score_param"
                                            className="calc_inputbox" /></div>
                                        <div align="left">&nbsp;</div>

                                        <div><span className="medCalcFontOneBold">Percentile</span></div>
                                        <div align="top"> <input readOnly="readonly" type="text" name="Percentile_param"
                                            className="calc_inputbox" /></div>
                                        <div align="left">&nbsp;</div>

                                        <div colSpan="3" align="center"><span className="medCalcFontOneBold">DecimalPrecision:</span>
                                            <select name="decpts" onChange={CDCInfantLengthForAge_fx} className="medCalcFontSelect">
                                                <option>0</option>
                                                <option defaultValue>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    };
};


export default Per;