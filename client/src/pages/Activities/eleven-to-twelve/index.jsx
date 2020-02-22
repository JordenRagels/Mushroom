import React, { Component } from 'react';
import "./eltotw.css"
import { Navigations } from '../../../components/Navigations';
class ElevenToTwelve extends Component {
    render() {
        return (
            <div className="eleven-to-twelve-months">
                <Navigations/>
                <div className="eleven-to-twelve-month-heading">

                </div>
                <div className="activites-for-eleven-to-twelve-months">

                    <div className="cognitive">
                        <div className="h-c">
                            <h2>Cognitive Activities</h2>
                        </div>
                        <div className="c-1">
                            <h5>In and Out:</h5>
                            <h6>Let your child practice putting a variety of sizes and shapes of toys into boxes, bags, baskets, etc with various size openings. Also let them dump the containers back out and refill them again.</h6>
                        </div>
                        <div className="c-2">
                            <h5>Sink or float:</h5>
                            <h6>Use different types of toys in the tub, one that both sink and float. Encourage your child to reach for and grasp toys both floating and under the water.</h6>
                        </div>
                        <div className="c-3">
                            <h5>Yours & Mine:</h5>
                            <h6>Once your child knows and can point to a few body parts you can begin to work on having her identify your body parts and learn the words “yours” and “mine”. Says “Where is your nose?” and encourage them to point to their own nose and then say “Where is my nose?” and see if they point to your nose.</h6>
                        </div>
                    </div>

                    <div className="Motor">
                        <div className="h-m">
                            <h3>Motor Activities</h3>
                        </div>
                        <div className="m-1">
                            <h5>Laundry Basket Stroll</h5>
                            <h6>Fill a laundry basket with heavy items such as book and allow your child to push it around the floor on a smooth surface to practice supported walking.</h6>
                        </div>
                        <div className="m-2">
                            <h5>Over/Under:</h5>
                            <h6>Let your child crawl and/or walk over cushions, pillows and under tables, chairs, etc to challenge their balance and body in space awareness.</h6>
                        </div>
                        <div className="m-3">
                            <h5>Poke, Push, Point:</h5>
                            <h6>Encourage finger isolation by using toys with buttons that require pushing and poking. Cell photos work too.</h6>
                        </div>
                    </div>

                    <div className="verbal">
                        <div className="h-v">
                            <h3>Verbal Activities</h3>
                        </div>
                        <div className="v-1">
                            <h5>Baby Signs:</h5>
                            <h6>Babies learn language by involving gestural cues. You can communicate with your baby and they can communicate back to you using gestures such as pointing. You can build in actual signs from American Sign Language to help your baby learn language. Babies as young as 6-7 months can sign such things as “eat, drink, more, hat, all done”. You can Google baby signs to come up with gestures that may be helpful to your child’s communication.</h6>
                        </div>
                        <div className="v-2">
                            <h5>Bounce:</h5>
                            <h6>Hold your child’s hands and let him bounce by bending his knees and returning to stand. You can repeat “bounce, bounce, bounce” or “jump, jump, jump” for him. </h6>
                        </div>
                        <div className="v-3">
                            <h5>Nursery Rhymes/Finger Plays:</h5>
                            <h6>Begin to recite nursery rhymes such as Humpty Dumpty, This Little Piggy, etc to your child on a daily basis. Build in gestures with your words as you recite the rhymes and use inflection in your voice to hold your child’s attention.</h6>
                        </div>
                    </div>

                    <div className="social">
                        <div className="h-s">
                            <h3>Social Activities</h3>
                        </div>
                        <div className="s-1">
                            <h5>Sock Puppets:</h5>
                            <h6>Use an old pair of socks to make hand puppets. Color or sew on a face and make the puppet talk to your child and watch them giggle. Allow them to place the puppets on their own hands.</h6>
                        </div>
                        <div className="s-2">
                            <h5>Joint Attention:</h5>
                            <h6>By now your child should be starting to gesture or point toward people or objects he wants or to show you something or gain your attention. She should also be following your gesture or point to look toward things you show her. For example, a child hear an airplane and looks around and then looks up and points to the sky. She may not be able to say “airplane” yet, but she is indicating to you that she sees the plane and wants you to know that she saw it, thus gaining your attention for what she is interested in. Or she is looking for her ball and you say, “Your ball is behind you” and you point toward her back and she looks around, finds the ball and then smiles at you, showing that she understands your gesture/words.</h6>
                        </div>
                        <div className="s-3">
                            <h5>Little Helper:</h5>
                            <h6>Allow your child to assist various people. For example, Grandma would like a napkin, let’s bring her one. Reinforce these positive social interactions with smiling and a thank you!</h6>
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
export default ElevenToTwelve;