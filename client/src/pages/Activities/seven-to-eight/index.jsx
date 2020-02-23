import React, { Component } from 'react';
import { Navigations } from '../../../components/Navigations';

class SevenToEight extends Component {
    render() {
        return (

            <div className="seven-to-eight-months">
                <Navigations/>
                <div className="pagetitle"><h2>Activities for Ages Seven to Eight Months</h2></div>
                  
                <div className="seven-to-eight-month-heading">

                </div>
                <img src='data:image/jpeg;base64,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' id="c-1-2-i" width="25%" height="10%"></img>

                <div className="activites-for-seven-to-eight-months">
                    <div className="cognitive">\
                    <div className="h-c">
                            <h3 className="h-c1">Cognitive Activities</h3>
                        </div>
                        <div className="c-1">
                            <h5>Cause/Effect:</h5>
                            <h6>When babies begin to understand cause/effect relationships, it means they know that their action causes a reaction and they are apt to repeat it. This is when your baby begins to push a button on a pop up box and toy pops up & he repeats it again and again. Or he finds the button on your phone that makes noise, or notices that flipping the light switch makes the lights go off.</h6>
                        </div>
                        <div className="c-2">
                            <h5>Pull the String:</h5>
                            <h6>Tie a ring or small toy to a string or use a store bough pull toy (supervised). Place the toy within sight of the child and demonstrate pulling the string to bring the toy closer to the child. See if he can do it on his own.</h6>
                        </div>
                        <div className="c-3">
                            <h5>Textured objects:</h5>
                            <h6>Let him play with different texture objects and hold them—to enhance his grasp: plastic things from the kitchen, pots and pans, sponges, paper, empty tins with lids, velvet, fur, lace, toweling, cardboard, fine sandpaper etc.</h6>
                        </div>
                    </div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS171Jv-ztPnqHZh-25oAd9aoKi8JlKF6HpqkMgZ1FfHGXEuNXp' id="c-1-2-i2" width="25%" height="10%"></img>

                    <div className="Motor">
                        <div className="h-m">
                            <h3 className="h-c1">Motor Activities</h3>
                        </div>
                        <div className="v-1">
                            <h5>I Can Sit:</h5>
                            <h6>By about 8 months many babies can sit independently with their hands free to play. Help your baby to get into and out of a sitting position by rolling your baby to his side and placing your one hand under his shoulder and your other hand on his opposite hip and guide him upwards into sitting instead of picking him straight up. This is easy to do after each diaper change. To get out of sitting have your baby rotate to the side and put both hands on the floor as if to go into a hand-knee crawling position and guide him gently to the floor.</h6>
                        </div>
                        <div className="v-2">
                            <h5>Pick it Up:</h5>
                            <h6>Babies are starting to use their fingers and thumb to secure tiny objects, working toward a neat pincer grasp. Place single puffs or Cheerios on their high chair tray and encourage them to use fingers and thumb to secure them.</h6>
                        </div>
                        <div className="v-3">
                            <h5>Reach Across:</h5>
                            <h6>Instead of presenting toys always directly in front of your child present toys to either side and encourage him to reach across his body with his left hands to grasp a toy on the right and vice versa.</h6>
                        </div>
                    </div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsBhUr73GhxlzIGIei4fTSeFdmocAd_bTziko2-yLE7BQcJaxc' id="c-1-2-i3" width="25%" height="10%"></img>

                    <div className="verbal">
                        <div className="h-v">
                            <h3 className="h-c1">Verbal Activities</h3>
                        </div>
                        <div className="v-1">
                            <h5>Uh Oh:</h5>
                            <h6>Babies attention is held by fun sounds and environmental sounds, one of the first sounds sometimes repeated by babies is “uh oh”. When playing with your baby and he drops something exclaim “uh oh!” or if he topples over while sitting or pulling to stand say “uh oh!” and eventually your baby will begin to repeat this fun sound.</h6>
                        </div>
                        <div className="v-2">
                            <h5>Push and crawl:</h5>
                            <h6>Use large trucks or toys on wheels and show your baby how to push the toy while crawling along beside it. Make car or animal sounds as you play.</h6>
                        </div>
                        <div className="v-3">
                            <h5>This Little Piggy:</h5>
                            <h6>Use this nursery rhyme while you play with and massage baby’s toes and feet.</h6>
                        </div>
                    </div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvfIdNe5MSO9Ihf_IQBnTnEd8l8MFNSUitCTTKsBTV-WFL_KnU' id="c-1-2-i2" width="25%" height="10%"></img>

                    <div className="social">
                        <div className="h-s">
                            <h3 className="h-c1">Social Activities</h3>
                        </div>
                        <div className="s-1">
                            <h5>Mom’s Still Here:</h5>
                            <h6>Babies at 7-9 months often go through separation anxiety and like to be in constant sight and hearing of their parents. You can help your baby with separation while at home by leaving the room for a minute and then returning and happily reassuring your infant that you are still here and did not leave them.</h6>
                        </div>
                        <div className="s-2">
                            <h5>Hats on/off:</h5>
                            <h6>Use different sizes and types of hats & place them onto your baby’s head. He can pull them off or let them slide down over his eyes as a way of playing peek a boo.</h6>
                        </div>
                        <div className="s-3">
                            <h5>Arms Up/Legs Up:</h5>
                            <h6>Encourage your baby to cooperate with dressing and undressing by lifting arms above head or lifting legs up in the air. Talk about body parts and make it fun and silly.</h6>
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
export default SevenToEight;