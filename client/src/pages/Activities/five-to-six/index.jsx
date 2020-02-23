import React, { Component } from 'react';
import { Navigations } from '../../../components/Navigations';

class FiveToSix extends Component {
    render() {
        return (


            <div className="five-to-six-months">
                <Navigations/>
                <div className="pagetitle"><h2>Activities for Ages Five to Six Months</h2></div>
                  
                <div className="five-to-six-month-heading">
                </div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxqR8QOwzS-m3BtDHSTnQv2U1C48V-Or8LHt5Pk45M7yOx8jGR' id="c-1-2-i" width="25%" height="10%"></img>

                <div className="activites-for-five-to-six-months">
                    <div className="cognitive">
                        <div className="h-c">
                            <h2 className="h-c1">Cognitive Activities</h2>
                        </div>
                        <div className="c-1">
                            <h5>Texture Books:</h5>
                            <h6>Cloth books with textures and sounds are great motivators for young babies to touch and feel. If you don’t have these types of books you can use cut up pieces of cloth, sponges or any household items with texture. Use these items supervised and help your baby open her hands to pat, rub, touch, grab and feel the items.</h6>
                        </div>
                        <div className="c-2">
                            <h5>Visual Tracking:</h5>
                            <h6>Use your face, different size rattles and toys, both noisy and quiet and slowly move them from left to right, right to left and upward and downward and in an arc. Encourage your baby to first fixate visually on the face or toy and then visually follow it without losing sight of it. Noisy toys will be easier than quiet toys to start.</h6>
                        </div>
                        <div className="c-3">
                            <h5>Num Num:</h5>
                            <h6>Most babies begin spoon feeding between 4-6 months of age. This is a whole new experience for a baby. Don’t get discouraged if your baby turns away from the spoon, pushes the food out with her tongue or at first gags when presented with spoon feeding. Most babies just need a bit of daily practice to get the hang of it, and remember at this age their formula or breast milk is still their main source of nutrition. If by 6 months your baby is continuing to have difficulty with spoon feeding, do consult your pediatrician or early intervention provider for support.</h6>
                        </div>
                    </div>
                    <img src='data:image/jpeg;base64,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' id="c-1-2-i2" width="25%" height="10%"></img>

                    <div className="Motor">
                        <div className="h-m">
                            <h2 className="h-c1">Motor Activities</h2>
                        </div>
                        <div className="v-1">
                            <h5>Prop to Sit:</h5>
                            <h6>Your baby will begin to strengthen his/her neck & trunk muscles in order to learn to sit with support from you and then soon he/she will be able to sit for small periods propping on his/her hands. You can place your baby on the floor and place pillows around her or use a Boppy pillow for support. Help her open her hands and place them on the floor in front or beside her so she can prop herself up and maintain a sitting position on her own. Gradually fade your support.</h6>
                        </div>
                        <div className="v-2">
                            <h5>Supported Stand:</h5>
                            <h6>Allow your baby to straddle your leg and gently place the baby in a standing position as he attempts to bear some weight on his feet.</h6>
                        </div>
                        <div className="v-3">
                            <h5>Baby Push Ups:</h5>
                            <h6>Since your baby has hopefully been practicing tummy time since birth, he is now ready to begin to push up on extended arms to lift his chest off the floor and/or reach for toys while on his tummy. Use favorite noisy toys, a mirror and fun sounds to encourage your baby to look up and push up while on his tummy. If he has trouble with this at first, you can roll up a small receiving blanket and place it under his armpits and place his arms/elbow in front of his shoulders over the blanket. This will encourage your baby to first prop on elbows and eventually push up on hands and lift his chest off the floor.</h6>
                        </div>
                    </div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSczf1yqtNKvEG8GUxe4VORb7xGRZ8hIkQUmZaI3_zXrsoF5UyM' id="c-1-2-i3" width="25%" height="10%"></img>

                    <div className="verbal">
                        <div className="h-v">
                            <h3 className="h-c1">Verbal Activities</h3>
                        </div>
                        <div className="v-1">
                            <h5>Let’s Babble:</h5>
                            <h6>Your baby will start to move from cooing open vowel sounds to babbling consonant-vowel sounds as she approaches 6 months. When you are face to face with your baby, babble consonant-vowel sounds (mamama, dadada, bababa) and wait 15 seconds to see if she will attempt to imitate you. Repeat any sounds your baby makes whether she is cooing or babbling. You can do this while looking into a mirror with your baby too. </h6>
                        </div>
                        <div className="v-2">
                            <h5>So Big!:</h5>
                            <h6>When your baby is lying on his back or seated supported on your lap or a baby seat, gently grasp his arms and lift them above his head in a game of “So Big”. As he gets older he will begin to imitate this motor movement on his own in response to you verbally saying “How big are you?”, “So Big!”.</h6>
                        </div>
                        <div className="v-3">
                            <h5>Talk, Talk, Talk:</h5>
                            <h6>Even though your baby cannot talk back yet, she is absorbing and taking in everything you say to her. Talk to her ALL the time about anything and everything you are doing. She may coo back or be silent, but one this is for sure, she is learning from your speech even at this early age!</h6>
                        </div>
                    </div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeLLYP44Ifdhf3NwFwpUS7u4oiVr2qdMy1qHTw6zkC7wgcbb9d' id="c-1-2-i2" width="25%" height="10%"></img>

                    <div className="social">
                        <div className="h-s">
                            <h3 className="h-c1">Social Activities</h3>
                        </div>
                        <div className="s-1">
                            <h5>Shake and Bang:</h5>
                            <h6>Babies love toys that shake & rattle. Demonstrate shaking toys or use hand over hand guidance to help them shake. See if they imitate you and repeat “shake, shake, shake”. When seated in a high chair they also like to bang toys on their trays. Repeat “bang, bang, bang” & encourage them to imitate you or use hand over hand help.</h6>
                        </div>
                        <div className="s-2">
                            <h5>Frolic Play:</h5>
                            <h6>Once a baby has good head/trunk control they often enjoy simple frolic play games such as bouncing on your knee or being lifted over your head into the air like an “airplane”. When baby smiles and laughs it means “more”; if baby cries, take a break until baby feels secure again.</h6>
                        </div>
                        <div className="s-3">
                            <h5>Diaper Changes:</h5>
                            <h6>Change your baby’s diaper in different locations or different ends of the changing table. This will give her something new to look at and make her comfortable when in new environments.</h6>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-copyright-act">
                        <h7 id="src"> Information Sourced from the Center for Disease Control and The World Health Organization</h7>
                        <br></br>
                        <h8 id="cop"> &copy; 2020 Copyright: Mushroom</h8>
                    </div>
                </div>
            </div>
        )
    }
}
export default FiveToSix;