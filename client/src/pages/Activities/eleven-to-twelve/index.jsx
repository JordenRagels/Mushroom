import React, { Component } from 'react';
import "./eltotw.css"
import { Navigations } from '../../../components/Navigations';
class ElevenToTwelve extends Component {
    render() {
        return (
            <div className="eleven-to-twelve-months">
                <Navigations/>
                <div className="pagetitle"><h2>Activities for Ages Eleven to Twelve Months</h2></div>
                  
                <div className="eleven-to-twelve-month-heading">
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNpEF7R0pMzXMOG36ZLlaabz0ga5xQWZEW01kk96b2EWWZYVM9' id="c-1-2-i" width="25%" height="10%"></img>

                </div>
                <div className="activites-for-eleven-to-twelve-months">
         
                    <div className="cognitive">
                        <div className="h-c">
                            <h2 className="h-c1">Cognitive Activities</h2>
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
                    <img src='data:image/jpeg;base64,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' id="c-1-2-i2" width="25%" height="10%"></img>

                    <div className="motor">
                        <div className="h-m">
                            <h3 className="h-c1">Motor Activities</h3>
                        </div>
                        <div className="v-1">
                            <h5>Laundry Basket:</h5>
                            <h6>Babies learn language by involving gestural cues. You can communicate with your baby and they can communicate back to you using gestures such as pointing. You can build in actual signs from American Sign Language to help your baby learn language. Babies as young as 6-7 months can sign such things as “eat, drink, more, hat, all done”. You can Google baby signs to come up with gestures that may be helpful to your child’s communication.</h6>
                        </div>
                        <div className="v-2">
                            <h5>Over & Under</h5>
                            <h6>Let your child crawl and/or walk over cushions, pillows, and under tables, chairs, ect. to challenge their balance and spacial awareness </h6>
                        </div>
                        <div className="v-3">
                            <h5>Poke, Push, Point:</h5>
                            <h6>Encourage finger isolation by using toys with buttons that require pushing and poking. Cell phones also work!</h6>
                        </div>
                    </div>
                    <img src='data:image/jpeg;base64,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' id="c-1-2-i3" width="25%" height="10%"></img>

                    <div className="verbal">
                        <div className="h-v">
                            <h3 className="h-c1">Verbal Activities</h3>
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
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx1UZxfCAz_k2bdE_xC4pnY82d8T5oiEIfnmWBAQY8OoiATMVj' id="c-1-2-i2" width="25%" height="10%"></img>

                    <div className="social">
                        <div className="h-s">
                            <h3 className="h-c1">Social Activities</h3>
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