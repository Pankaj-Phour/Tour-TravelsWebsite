import React from 'react';
import './About.css';
import Footer from './Footer';

const About=() =>
{
    return(
        <div className="about-us">
           <h2>
               The Traveler's Guide
           </h2>
           <p className="p1">
           We enjoy the slow and peaceful breakfasts, the long walks, the new experiences, places, people and memories. They make us feel happy we are alive. No wonder! Travelling seems to combine most of the habits of healthy people.

What are the advantages of travelling? Why is travelling important?

Scientists have proven that travelling is good for both your body and your mind! Perhaps this is why we love it. Because we feel that a few minutes in the sun raise our vitamin D levels and improve our mood. Vitamin D has its health benefits too - it is good for our hearts.

The importance of travel ranges from lower chances of heart disease to relieving stress and anxiety. On top of the health benefits, travel can also enhance your creativity, your sense of happiness and satisfaction.
           </p>
           <br/>
           <br/>
           <h3>
               Dive inside The Beauty of Nature
           </h3>
           <p className="p2">
           Most of us live in the city. Our daily routine involves navigating through urban landscapes on crowded public transport in chase of our busy schedules. Gradually stress accumulates. Problems loom large, burnout makes us feel dissatisfied with out job, we never seem to find time for adventure.

Travel is your cure!

Travelling can disconnect you from your daily routine. Once you break the repetitive pattern, pack your bags and hit the road, your mind can reset. Seeing new places, meeting new people, overcoming various challenges may even help you appreciate what you have left behind. It can help you take a step back and think about things and people you miss. You can get a better perspective on your life and remember all the good things.

Travelling lets you live life for its own sake!
           </p>
           {/* <marquee>You can send your complaints or suggestions on our official email id: <NavLink to="/Contact.js" className="help">pankaj.phour70@gmail.com</NavLink>. Or you can call us at :- <NavLink to="/Contact.js" className="help"><strong>9518455298</strong></NavLink></marquee> */}
         < Footer/>
        </div>
    )
};
export default About;
