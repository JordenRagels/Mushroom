import React, { Component } from 'react';
import { Navigations } from '../../../components/Navigations';

class ThreeToFour extends Component {
    render() {
        return (
            <div>
                <div className="three-to-four-months">
                    <Navigations/>
                    <div className="three-to-four-month-heading">
                    </div>
                    <div className="activites-for-three-to-four-months">
                        <div className="cognitive">
                            <div className="h-c">
                                <h3>Cognitive Activities</h3>
                            </div>
                            <div className="c-1">
                                <h5>Peek-a-Boo:</h5>
                                <h6>You can begin this game with your baby at a young age, by covering your baby’s face gently with a cloth and then quickly pulling it off and smiling as you say “peek a boo!” As your baby gets older she will be able to pull the cloth off her face herself. You can also play by covering your own face with the cloth and then you or your baby can pull the cloth off. </h6>
                            </div>
                            <div className="c-2">
                                <h5>Help Me Self-Soothe:</h5>
                                <h6>Some babies take a pacifier which helps them soothe or calm themselves. Babies can learn to self-soothe by finding their own hands/fingers to suck on. Help your baby bring his hand to his mouth in a variety of positions, sidelying may be easiest because his hands will naturally come together and be closer to his face. Allow him to suck on his hand/fingers to calm himself or to get ready for feeding. Don’t worry about your baby being a thumb sucker at this point because bringing hands to mouth is an important developmental skill.</h6>
                            </div>
                            <div className="c-3">
                                <h5>Watch it Fall:</h5>
                                <h6>Hold a brightly colored, noisy toy in your hand and attract your baby’s attention with it. Drop it to the floor in front of them, but do not move your hand. See if your baby looks down to find the toy or continues to look at your hand. Following the toy indicates an early understanding of object permanence, while looking at your hand shows your baby has not quite grasped this concept yet.</h6>
                            </div>
                        </div>
                        <div className="Motor">
                            <div className="h-m">
                                <h3>Motor Activities</h3>
                            </div>
                            <div className="m-1">
                                <h5>Hold Me:</h5>
                                <h6>Hold your baby in a variety of positions such as facing you, outward, at the shoulder, tummy down, sideways, etc. This allows her to experience the feel of her body in space in a variety of positions, allows you to discover which positions she prefers the most & helps her work on head, trunk, neck control strength.</h6>
                            </div>
                            <div className="m-2">
                                <h5>Help Me Roll:</h5>
                                <h6>Place your baby on her tummy on a blanket on the floor, place toys to her side and attract her attention visually. If she does not attempt to roll off her tummy in order to reach toys, gently lift a corner of the blanket to give her the momentum she needs to roll from tummy to back. Most babies roll tummy to back first and it is usually accidental the first few times.</h6>
                            </div>
                            <div className="m-3">
                                <h5>Rock the Boat:</h5>
                                <h6>Place your baby in a hand/knee position over your lower leg, so your leg supports his tummy. Gently rock your baby back and forth in this position and sing “Row, Row, Row Your Boat” to get your baby used to weight bearing on his hands and knees which he will need for crawling.</h6>
                            </div>
                        </div>

                        <div className="verbal">
                            <div className="h-v">
                                <h3>Verbal Activities</h3>
                            </div>
                            <div className="v-1">
                                <h5>Locate the Sound:</h5>
                                <h6>As babies mature they can begin to locate or localize where a sound or voice is coming from. When you are not in your baby’s line of vision, make a soft sound or speak to them and then wait a few seconds to allow them the time to find you by hearing your voice or look toward the dog after they hear it bark.</h6>
                            </div>
                            <div className="v-2">
                                <h5>Raspberries:</h5>
                                <h6>Babies like to stick out their tongues and make noise. Stick out your tongue and make “raspberry” sounds for your baby and see if she tries to repeat this sound.</h6>
                            </div>
                            <div className="v-3">
                                <h5>Anticipation game:</h5>
                                <h6>To get your baby to reach toward you when coming to pick them up, give them verbal & gestural cues, such as “I am coming to get you” and reach toward your baby giving her a few seconds to try to reach towards you before you pick her up.</h6>
                            </div>
                        </div>

                        <div className="social">
                            <div className="h-s">
                                <h3>Social Activities</h3>
                            </div>
                            <div className="s-1">
                                <h5>Neighborhood stroll:</h5>
                                <h6>Take your baby out for a stroll often, either carrying her or in a stroller. Be sure that your attention is focused on your child (no texting or phone calls!) and talk to your baby about anything and everything you see on your walk. She will most likely be wide-eyed as she gazes at her new big world. She will get exposure to new people, animals and objects she has never seen before.</h6>
                            </div>
                            <div className="s-2">
                                <h5>Explore Faces:</h5>
                                <h6>Young babies learn by exploration, so let your baby touch your face, hair, glasses, jewelry, beard, clothing.</h6>
                            </div>
                            <div className="s-3">
                                <h5>Mirrors:</h5>
                                <h6>Hang mirrors where he can easily see himself and others during playtime.</h6>
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
export default ThreeToFour;