import React, { Component } from 'react';
import { Navigations } from '../../../components/Navigations';

class NineToTen extends Component {
    render() {
        return (
            <div className="nine-to-ten-months">
                <Navigations />
                <div className="nine-to-ten-month-heading">
                </div>
                <div className="activites-for-nine-to-ten-months">
                    <div className="cognitive">
                        <div className="h-c">
                            <h3>Cognitive Activities</h3>
                        </div>
                        <dvi className="c-1">
                            <h5>Object Permanence:</h5>
                            <h6>The understanding of object permanence is an important skill for babies. This means that something that is out of sight, is not out of mind, it still exists when it disappears. Very young babies do not understand this concept, as you will notice if you place a toy under their blanket, they will not search for it, but will simply turn to another toy that is within eye sight and reach. Older babies will start to know, when a ball rolls under the couch, it is still there and they will move toward the ball in an attempt to find it. You can help babies practice this skill by first partially hiding a toy beneath a cloth and helping them find it, and then eventually completely hiding a toy and encouraging them to find it. Remember the toy has to be motivating enough for a child to seek it out when it is hidden.</h6>
                        </dvi>
                        <div className="c-2">
                            <h5>Pots & Pans:</h5>
                            <h6>Babies love to make noise. In some low cupboard place pots, pans and wooden spoons that babies can use to bang on, stir in and make noise.</h6>
                        </div>
                        <div className="c-3">
                            <h5>Body Parts:</h5>
                            <h6>Touch, kiss, tickle or pop bubbles on your baby’s hands, feet, tummy, nose as you name body parts for him.</h6>
                        </div>
                    </div>

                    <div className="Motor">
                        <div className="h-m">
                            <h3>Motor Activities</h3>
                        </div>
                        <div className="m-1">
                            <h5>½ Kneeling:</h5>
                            <h6>Soon your baby will be wanting to pull up to stand at the furniture. You can get your baby ready for this skill by working on pulling up on low cardboard boxes or over turned laundry baskets and by helping your baby into a kneeling and then a half kneeling position, by bringing the left or right foot out in front in order to facilitate pulling to stand.</h6>
                        </div>
                        <div className="m-2">
                            <h5>Stepping:</h5>
                            <h6>When your baby is able to bear full weight on her legs, gently hold her at the hips and shift her weight by tipping her slightly to the left or right sides and see if she willingly takes a step. If she does, tip her to the other side and look for her to do the same stepping motion.</h6>
                        </div>
                        <div className="m-3">
                            <h5>Pull to Stand:</h5>
                            <h6>By now your baby is ready to start pulling up at low furniture. Use overturned cardboard boxes or an overturned laundry basket and place toys of interest on top and encourage your child to pull up on knees and eventually stand to obtain the toys.</h6>
                        </div>
                    </div>

                    <div className="verbal">
                        <div className="h-v">
                            <h3>Verbal Activities</h3>
                        </div>
                        <div className="v-1">
                            <h5>Turning Pages:</h5>
                            <h6>Using cardboard board books, help your child turn pages as you name pictures in books.</h6>
                        </div>
                        <div className="v-2">
                            <h5>Babble Time:</h5>
                            <h6>Play babbling games with your child face to face or while looking into a mirror together. Repeat sounds your baby currently makes and make new sounds to see if you baby can repeat you.</h6>
                        </div>
                        <div className="v-3">
                            <h5>Animal Sounds:</h5>
                            <h6>Sing songs like old MacDonald or make animal sounds in response to pictures in books or stuffed toys. Encourage your child to imitate these fun sounds.</h6>
                        </div>
                    </div>

                    <div className="social">
                        <div className="h-s">
                            <h3>Social Activities</h3>
                        </div>
                        <div className="s-1">
                            <h5>Bye Bye:</h5>
                            <h6>Whenever someone leaves the house, say and demonstrate waving “bye bye”. Use hand over hand assistance to help your child wave if needed until they can do it on their own.</h6>
                        </div>
                        <div className="s-2">
                            <h5>Making Music:</h5>
                            <h6>Use store bought or homemade instruments such as pianos, drums, tambourines, shakers, bells, etc to make music with your child. Sing, dance or simply make noise.</h6>
                        </div>
                        <div className="s-3">
                            <h5>Hooray I Did It!:</h5>
                            <h6>When your baby does something he is proud of, or completes a task, cheer for him and say “Hooray you did it!” and clap for him and show him how to clap for himself. Pretty soon he will be calling attention to himself by saying “yay” or clapping and wanting you to join in too.</h6>
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
export default NineToTen;