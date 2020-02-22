import React, { Component } from 'react';
import { Navigations } from '../../../components/Navigations';

class OneToTwo extends Component {
    render() {
        return (
            <div>
                <div className="one-to-two-months">
                    <Navigations/>
                    <div className="one-to-two-month-heading">
                    </div>

                    <div className="activites-for-one-to-two-months">
                        <div className="cognitive">
                            <div className="h-c">
                                <h3>Cognitive Activities</h3>
                            </div>
                            <div className="c-1">
                                <h5>Please Touch Game:</h5>
                                <h6> Support your baby in sitting in front of you or hold them on your lap facing you or lie down beside them on the floor when they are in a sidelying position. Encourage baby to reach toward and touch/explore your face, hair, etc by reaching and grabbing.</h6>
                            </div>
                            <div className="c-2">
                                <h5>Mobile Fun:</h5>
                                <h6>Use store bought mobiles or baby gyms with hanging toys, or make your own mobile using string & cut out bright shapes (always supervise this activity). Hold baby within reach of hanging toys and encourage him to reach toward & bat at the toys.</h6>
                            </div>
                            <div className="c-3">
                                <h5>Flashlight Game: </h5>
                                <h6>In a dimly lit or dark room, turn on a flashlight. Don’t shine it directly in baby’s eyes, but shine it to his left/right side and above his head or slowly move it across a wall to see if he fixates on it and tries to follow the light.</h6>
                            </div>
                        </div>
                        <div className="Motor">
                            <div className="h-m">
                                <h3>Motor Activities</h3>
                            </div>
                            <div className="m-1">
                                <h5>Tummy Time Play: </h5>
                                <h6>Place baby on the floor on a blanket or lie down with baby on your chest facing you. Encourage baby to raise his/her head/chest in response to the sound of your voice, the sight/sound of toys or the sight of himself/herself in a mirror.</h6>
                            </div>
                            <div className="m-2">
                                <h5>Symmetrical Development:</h5>
                                <h6>You should notice your baby moving his arms and legs symmetrically, meaning he will kick reciprocally and move hands /arms together. It is important at this age that babies are moving body parts equally. If you notice that your baby is using one arm/hand or one leg more so than the other, this can be a red flag for development and should be mentioned to your pediatrician. You can move your baby’s legs in a bicycle motion or gently bring hands/arms up over his head while singing or saying “So Big” to promote symmetrical movements.</h6>
                            </div>
                            <div className="m-3">
                                <h5>Bath Games:</h5>
                                <h6>Help baby kick feet and splash in tub or help her pop bubbles in the tub. Gently rub a warm washcloth over baby’s skin.</h6>
                            </div>
                        </div>
                        <div className="verbal">
                            <div className="h-v">
                                <h3>Verbal Activities</h3>
                            </div>
                            <div className="v-1">
                                <h5>Back and Forth Game: </h5>
                                <h6> Begin face to face with your baby and coo and babble at her. Wait, give her time to respond or imitate and then do it again experimenting with open vowel sounds “oooh, ahhh, eee” and moving to consonant vowel sounds “mamama, bababa, dadada” as baby gets older.</h6>
                            </div>
                            <div className="v-2">
                                <h5>Response to Sound Game: </h5>
                                <h6>Move to your baby’s left and right side and call his name, shake a rattle or squeak a toy. Encourage baby to look toward the sound. Younger babies may not be able to locate the source of the sound, but they will indicate they can hear it by widening their eyes, moving more or becoming still. Older babies will be able to find & locate the source of the sound.</h6>
                            </div>
                            <div className="v-3">
                                <h5>Story Time:</h5>
                                <h6>Start reading a bedtime story to your baby from birth onward. You can make up stories or read short books. It doesn’t matter what you say, your baby is absorbing every word, even though she cannot talk yet.</h6>
                            </div>
                        </div>

                        <div className="social">
                            <div className="h-s">
                                <h3>Social Activities</h3>
                            </div>
                            <div className="s-1">
                                <h5>I Know My Name: </h5>
                                <h6>Help your baby learn his name using it frequently. Make up songs using your baby’s name or insert his name into stories. Using a consistent name or nickname helps baby learn his name, using multiple names or nicknames can be confusing for a baby. </h6>
                            </div>
                            <div className="s-2">
                                <h5>I Smile, You Smile: </h5>
                                <h6>At first a baby’s smile may be reflexive, such as when sleeping . But soon she will begin to smile socially. Establish eye contact with your baby and smile often! When she smiles, you can help but smile back and call attention to it, which will help her learn to smile again!</h6>
                            </div>
                            <div className="s-3">
                                <h5>Imitation Game: </h5>
                                <h6>Hold your baby in front of you so he/she can clearly see your face. Stick out your tongue & be amazed at how even newborn infants can imitate this facial gesture!</h6>
                            </div>
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

export default OneToTwo;