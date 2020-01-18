import React, { Component } from 'react';
import App from '../../App';

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
    if (dps == 0) return msign + m;
    while (m.length <= dps) m = "0" + m;
    return msign + m.substring(0, m.length - dps) + "." + m.substring(m.length - dps);
}
var currenttimeout;

n = new Array;
var L = 0;
var M = 0;
var S = 0;

n[0] = 50;
n[1] = 50.399;
n[2] = 50.798;
n[3] = 51.197;
n[4] = 51.595;
n[5] = 51.994;
n[6] = 52.392;
n[7] = 52.79;
n[8] = 53.188;
n[9] = 53.586;
n[10] = 53.983;
n[11] = 54.38;
n[12] = 54.776;
n[13] = 55.172;
n[14] = 55.567;
n[15] = 55.962;
n[16] = 56.356;
n[17] = 56.749;
n[18] = 57.142;
n[19] = 57.535;
n[20] = 57.926;
n[21] = 58.317;
n[22] = 58.706;
n[23] = 59.095;
n[24] = 59.483;
n[25] = 59.871;
n[26] = 60.257;
n[27] = 60.642;
n[28] = 61.026;
n[29] = 61.409;
n[30] = 61.791;
n[31] = 62.172;
n[32] = 62.552;
n[33] = 62.93;
n[34] = 63.307;
n[35] = 63.683;
n[36] = 64.058;
n[37] = 64.431;
n[38] = 64.803;
n[39] = 65.173;
n[40] = 65.542;
n[41] = 65.91;
n[42] = 66.276;
n[43] = 66.64;
n[44] = 67.003;
n[45] = 67.364;
n[46] = 67.724;
n[47] = 68.082;
n[48] = 68.439;
n[49] = 68.793;
n[50] = 69.146;
n[51] = 69.497;
n[52] = 69.847;
n[53] = 70.194;
n[54] = 70.54;
n[55] = 70.884;
n[56] = 71.226;
n[57] = 71.566;
n[58] = 71.904;
n[59] = 72.24;
n[60] = 72.575;
n[61] = 72.907;
n[62] = 73.237;
n[63] = 73.565;
n[64] = 73.891;
n[65] = 74.215;
n[66] = 74.537;
n[67] = 74.857;
n[68] = 75.175;
n[69] = 75.49;
n[70] = 75.804;
n[71] = 76.115;
n[72] = 76.424;
n[73] = 76.73;
n[74] = 77.035;
n[75] = 77.337;
n[76] = 77.637;
n[77] = 77.935;
n[78] = 78.23;
n[79] = 78.524;
n[80] = 78.814;
n[81] = 79.103;
n[82] = 79.389;
n[83] = 79.673;
n[84] = 79.955;
n[85] = 80.234;
n[86] = 80.511;
n[87] = 80.785;
n[88] = 81.057;
n[89] = 81.327;
n[90] = 81.594;
n[91] = 81.859;
n[92] = 82.121;
n[93] = 82.381;
n[94] = 82.639;
n[95] = 82.894;
n[96] = 83.147;
n[97] = 83.398;
n[98] = 83.646;
n[99] = 83.891;
n[100] = 84.134;
n[101] = 84.375;
n[102] = 84.614;
n[103] = 84.849;
n[104] = 85.083;
n[105] = 85.314;
n[106] = 85.543;
n[107] = 85.769;
n[108] = 85.993;
n[109] = 86.214;
n[110] = 86.433;
n[111] = 86.65;
n[112] = 86.864;
n[113] = 87.076;
n[114] = 87.286;
n[115] = 87.493;
n[116] = 87.698;
n[117] = 87.9;
n[118] = 88.1;
n[119] = 88.298;
n[120] = 88.493;
n[121] = 88.686;
n[122] = 88.877;
n[123] = 89.065;
n[124] = 89.251;
n[125] = 89.435;
n[126] = 89.617;
n[127] = 89.796;
n[128] = 89.973;
n[129] = 90.147;
n[130] = 90.32;
n[131] = 90.49;
n[132] = 90.658;
n[133] = 90.824;
n[134] = 90.988;
n[135] = 91.149;
n[136] = 91.308;
n[137] = 91.466;
n[138] = 91.621;
n[139] = 91.774;
n[140] = 91.924;
n[141] = 92.073;
n[142] = 92.22;
n[143] = 92.364;
n[144] = 92.507;
n[145] = 92.647;
n[146] = 92.785;
n[147] = 92.922;
n[148] = 93.056;
n[149] = 93.189;
n[150] = 93.319;
n[151] = 93.448;
n[152] = 93.574;
n[153] = 93.699;
n[154] = 93.822;
n[155] = 93.943;
n[156] = 94.062;
n[157] = 94.179;
n[158] = 94.295;
n[159] = 94.408;
n[160] = 94.52;
n[161] = 94.63;
n[162] = 94.738;
n[163] = 94.845;
n[164] = 94.95;
n[165] = 95.053;
n[166] = 95.154;
n[167] = 95.254;
n[168] = 95.352;
n[169] = 95.449;
n[170] = 95.543;
n[171] = 95.637;
n[172] = 95.728;
n[173] = 95.818;
n[174] = 95.907;
n[175] = 95.994;
n[176] = 96.08;
n[177] = 96.164;
n[178] = 96.246;
n[179] = 96.327;
n[180] = 96.407;
n[181] = 96.485;
n[182] = 96.562;
n[183] = 96.638;
n[184] = 96.712;
n[185] = 96.784;
n[186] = 96.856;
n[187] = 96.926;
n[188] = 96.995;
n[189] = 97.062;
n[190] = 97.128;
n[191] = 97.193;
n[192] = 97.257;
n[193] = 97.32;
n[194] = 97.381;
n[195] = 97.441;
n[196] = 97.5;
n[197] = 97.558;
n[198] = 97.615;
n[199] = 97.67;
n[200] = 97.725;
n[201] = 97.778;
n[202] = 97.831;
n[203] = 97.882;
n[204] = 97.932;
n[205] = 97.982;
n[206] = 98.03;
n[207] = 98.077;
n[208] = 98.124;
n[209] = 98.169;
n[210] = 98.214;
n[211] = 98.257;
n[212] = 98.3;
n[213] = 98.341;
n[214] = 98.382;
n[215] = 98.422;
n[216] = 98.461;
n[217] = 98.5;
n[218] = 98.537;
n[219] = 98.574;
n[220] = 98.61;
n[221] = 98.645;
n[222] = 98.679;
n[223] = 98.713;
n[224] = 98.745;
n[225] = 98.778;
n[226] = 98.809;
n[227] = 98.84;
n[228] = 98.87;
n[229] = 98.899;
n[230] = 98.928;
n[231] = 98.956;
n[232] = 98.983;
n[233] = 99.01;
n[234] = 99.036;
n[235] = 99.061;
n[236] = 99.086;
n[237] = 99.111;
n[238] = 99.134;
n[239] = 99.158;
n[240] = 99.18;
n[241] = 99.202;
n[242] = 99.224;
n[243] = 99.245;
n[244] = 99.266;
n[245] = 99.286;
n[246] = 99.305;
n[247] = 99.324;
n[248] = 99.343;
n[249] = 99.361;
n[250] = 99.379;
n[251] = 99.396;
n[252] = 99.413;
n[253] = 99.43;
n[254] = 99.446;
n[255] = 99.461;
n[256] = 99.477;
n[257] = 99.492;
n[258] = 99.506;
n[259] = 99.52;
n[260] = 99.534;
n[261] = 99.547;
n[262] = 99.56;
n[263] = 99.573;
n[264] = 99.585;
n[265] = 99.598;
n[266] = 99.609;
n[267] = 99.621;
n[268] = 99.632;
n[269] = 99.643;
n[270] = 99.653;
n[271] = 99.664;
n[272] = 99.674;
n[273] = 99.683;
n[274] = 99.693;
n[275] = 99.702;
n[276] = 99.711;
n[277] = 99.72;
n[278] = 99.728;
n[279] = 99.736;
n[280] = 99.744;
n[281] = 99.752;
n[282] = 99.76;
n[283] = 99.767;
n[284] = 99.774;
n[285] = 99.781;
n[286] = 99.788;
n[287] = 99.795;
n[288] = 99.801;
n[289] = 99.807;
n[290] = 99.813;
n[291] = 99.819;
n[292] = 99.825;
n[293] = 99.831;
n[294] = 99.836;
n[295] = 99.841;
n[296] = 99.846;
n[297] = 99.851;
n[298] = 99.856;
n[299] = 99.861;
n[300] = 99.865;
n[301] = 99.869;
n[302] = 99.874;
n[303] = 99.878;
n[304] = 99.882;
n[305] = 99.886;
n[306] = 99.889;
n[307] = 99.893;
n[308] = 99.896;
n[309] = 99.9;

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

var calctxt = '';
var xmltxt = '';
var htmtxt = '';

function CDCInfantLengthForAge_fx() {

    currenttimeout = self.setTimeout('minMaxCheck();', 3000);

    with (document.CDCInfantLengthForAge_form) {
        doCalc = true;
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
        dp = decpts.options[decpts.selectedIndex].text;
        if (Sex == 1) {
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
        if (Sex == 2) {
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
        Z_Score = (power((Length / M), L) - 1) / (L * S);

        if (doCalc) Z_Score_param.value = fixDP(Z_Score, dp);



        Percentile = ZtoPercentile(Z_Score);

        if (doCalc) Percentile_param.value = fixDP(Percentile, dp);





    }

}
function minMaxCheck() {

    if (currenttimeout) self.clearTimeout(currenttimeout);

    with (document.CDCInfantLengthForAge_form) {

        if (Age_param.value && Age < 0) {
            Age = 0;
            Age_param.value = "";
            clrResults();
            doCalc = false;
            alert("The minimum value for Age is 0 mo.\nIf you are specifying a value with a different unit,\nchange the unit selector first.");
        }
        if (Age_param.value && Age > 35.99) {
            Age_param.value = "";
            clrResults();
            Age = 0;
            doCalc = false;
            alert("The maximum value for Age is 35.99 mo.\nIf you are specifying a value with a different unit,\nchange the unit selector first.");
        }
        if (Length_param.value && Length < 10) {
            Length = 0;
            Length_param.value = "";
            clrResults();
            doCalc = false;
            alert("The minimum value for Length is 10 cm.\nIf you are specifying a value with a different unit,\nchange the unit selector first.");
        }
        if (Length_param.value && Length > 300) {
            Length_param.value = "";
            clrResults();
            Length = 0;
            doCalc = false;
            alert("The maximum value for Length is 300 cm.\nIf you are specifying a value with a different unit,\nchange the unit selector first.");
        }


    }

}
function clrResults() {

    if (currenttimeout) self.clearTimeout(currenttimeout);

    with (document.CDCInfantLengthForAge_form) {

        Z_Score_param.value = '';
        Percentile_param.value = '';


    }

}

export default class Percentile extends Component {

    render() {
        return (
            <div>
                <form name="CDCInfantLengthForAge_form" id="CDCInfantLengthForAge_form" action="" onsubmit="return false;"
                    class="calc_title">
                    <h1>Infant Length for Age Percentiles</h1>
                    <div id="calc_main">
                        <div id="calc_input">
                            <span class="medCalcFontIO">
                            </span>
                            <div class="spacer"></div>
                            <table cellpadding="3" cellspacing="0" summary="MedCalc 3000 Table">
                                <tr>
                                    <td textalign="right"><span class="medCalcFontOneBold">Sex</span></td>
                                    <td colspan="3" textalign="left"><span class="medCalcFontOne"><input id="input128" type="radio"
                                        name="Sex_radio" checked="checked" value="Female"
                                        onclick="CDCInfantLengthForAge_fx();" /> Female</span></td>
                                </tr>
                                <tr>
                                    <td textalign="left"><br /></td>
                                    <td colspan="3" textalign="left"><span class="medCalcFontOne"><input id="input129" type="radio"
                                        name="Sex_radio" value="Male" onclick="CDCInfantLengthForAge_fx();" /> Male</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="calc_firsttd"><span class="medCalcFontOneBold">Age</span> </td>
                                    <td class="calc_secondtd"> <input id="input130" type="number" name="Age_param" class="calc_inputbox"
                                        value="" onblur="CDCInfantLengthForAge_fx(); minMaxCheck();"
                                        onchange="CDCInfantLengthForAge_fx();" /></td>
                                    <td class="calc_thirdtd">


                                        <select name="Age_unit" onchange="CDCInfantLengthForAge_fx();"
                                            class="medCalcFontSelect calc_unitSelect">
                                            <option value="1|0|mo" selected="selected">mo</option>
                                            <option value="12|0|yr">yr</option>
                                        </select>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="calc_firsttd"><span class="medCalcFontOneBold">Length</span> </td>
                                    <td class="calc_secondtd"> <input id="input131" type="number" name="Length_param"
                                        class="calc_inputbox" value="" onblur="CDCInfantLengthForAge_fx(); minMaxCheck();"
                                        onchange="CDCInfantLengthForAge_fx();" /></td>
                                    <td class="calc_thirdtd">
                                        <select name="Length_unit" onchange="CDCInfantLengthForAge_fx();"
                                            class="medCalcFontSelect calc_unitSelect">
                                            <option value="1|0|cm" selected="selected">cm</option>
                                            <option value="2.54|0|in">in</option>
                                            <option value="100|0|m">m</option>
                                        </select>
                                    </td>
                                </tr>
                            </table>


                        </div>
                    </div>
                </form>

                <div id="calc_result">
                    <span class="medCalcFontIO">Results:</span>

                    <div class="spacer"></div>
                    <table summary="MedCalc 3000 Table" cellspacing="4">
                        <tr>
                            <td textalign="right"><span class="medCalcFontOneBold">Z Score</span></td>
                            <td valign="top" nowrap="nowrap"> <input readonly="readonly" type="text" name="Z_Score_param"
                                class="calc_inputbox" onfocus="blur();" /></td>
                            <td textalign="left">&nbsp;</td>
                        </tr>

                        <tr>
                            <td textalign="right"><span class="medCalcFontOneBold">Percentile</span></td>
                            <td valign="top" nowrap="nowrap"> <input readonly="readonly" type="text" name="Percentile_param"
                                class="calc_inputbox" onfocus="blur();" /></td>
                            <td textalign="left">&nbsp;</td>
                        </tr>
                        <tr>
                            <td colspan="3">&nbsp;<br /></td>
                        </tr>
                        <tr>
                            <td colspan="3" textalign="center"><span class="medCalcFontOneBold">Decimal
                            Precision:</span>
                                <select name="decpts" onchange="CDCInfantLengthForAge_fx();" class="medCalcFontSelect">
                                    <option>0</option>
                                    <option selected="selected">1</option>
                                    <option>2</option>
                                    <option>3</option>

                                </select></td>
                        </tr>

                    </table>
                </div>
            </div>
        )
    }
}