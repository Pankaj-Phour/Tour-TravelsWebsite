import React from 'react';
import { NavLink } from 'react-router-dom';
import './Videos.css';
import Footer from './Footer';

const Videos=() =>
{
    return(
        <div className="body-menu">
            <br/>
            <div className="row">
            <video src="https://static.videezy.com/system/resources/previews/000/046/957/original/boat_and_birds_in_the_sunset.mp4" className="col-sm-6 col-md-4 vid"  controls>
                </video>
                <video className="col-sm-6 col-md-4 vid" controls src="https://media.istockphoto.com/videos/beautiful-young-woman-in-a-swimsuit-holding-surfboard-walks-on-the-video-id883880678">
                </video>
                <video className="col-sm-6 col-md-4 vid" controls src="https://static.videezy.com/system/resources/previews/000/048/895/original/Nyaung_Oo_Phee15.mp4">
                </video>
                <video className="col-sm-6 col-md-4 vid" controls src="https://media.istockphoto.com/videos/skydiver-jump-over-the-paraty-beach-video-id1309786339">
                </video>
                <video className="col-sm-6 col-md-4 vid" controls src="https://media.istockphoto.com/videos/trail-walkers-crossing-river-bridge-in-natural-old-growth-forest-video-id697180428">
                </video>
                <video className="col-sm-6 col-md-4 vid" controls src="https://media.istockphoto.com/videos/back-view-of-happy-female-tourist-with-backpack-raising-arms-wide-at-video-id1027122254">
                </video>
                <video className="col-sm-6 col-md-4 vid" controls src="https://media.istockphoto.com/videos/slow-motion-cliff-jumping-backflip-athletic-young-man-jumping-from-video-id498044190">
                </video>
                <video className="col-sm-6 col-md-4 vid" controls src="https://media.istockphoto.com/videos/the-couple-with-camping-backpacks-walking-to-the-mountain-top-slow-video-id1151597371">
                </video>
                <video className="col-sm-6 col-md-4 vid" controls src="https://media.istockphoto.com/videos/cycling-at-sunset-video-id1219559746">
                </video>
                <video className="col-sm-6 col-md-4 vid" controls src="https://media.istockphoto.com/videos/kayak-rowing-in-couple-kayaker-woman-and-man-kayaking-in-beautiful-video-id1256255740">
                </video>
                <video className="col-sm-6 col-md-4 vid" controls src="https://media.istockphoto.com/videos/father-and-sun-surfing-video-id616137252">
                </video>
                <video className="col-sm-6 col-md-4 vid" controls src="https://static.videezy.com/system/resources/previews/000/034/618/original/Chair-Swing-Ride-Attraction-In-The-Mall-pz22-3349-C.mp4">
                </video>
            </div>
           <h2 className="h2-international">Excited For Adventures ! <NavLink to="/Sports.js" className="h2-link-international"> <u>Let's Do It</u> </NavLink></h2> 
           <p className="p3-india">
           Every traveler has their ultimate list of things to experience around the world—from eating street food in Singapore to seeing an opera in Vienna—but with much of our lives being spent outside these days, we’re beefing up your list with a slew of outdoor adventures. Consider these the ultimate trips for intrepid travelers, including a mix of epic hikes, extreme sports, and creative ways to see some of the planet’s most beautiful landscapes. Whether it’s hot air ballooning over Turkey or swimming with dolphins in the Atlantic, these 26 activities are guaranteed to thrill—and change your entire outlook on life.
           Divers and snorkelers everywhere need to experience the Great Barrier Reef at least once in their lifetime. Not only does the site have more than 400 different types of coral and 1,500 species of fish, but the natural wonder has been rapidly eroding, thanks to coral bleaching and global warming. That means it's more urgent than ever to see it in all its glory—and understand what we are losing. Australia has been strict about closing its borders during the pandemic, but since this is a trip you need to plan way in advance for, why not set your sights on 2022 and beyond.Mount Everest looms large, known around the world by hikers and non-hikers alike. But this is one behemoth that is best left to truly experienced travelers. According to alpinist Adrian Ballinger, who attempted the climb in 2016, “You need to climb at least three 20,000 peaks, one 23,000 peak, and one 26,000 peak before considering Everest.” But hey, if you're one of the lucky few who has the experience, time, and funds needed to reach Everest's summit, then by all means, do it. This year's climbing season (March to May) has already ended, but you'll need that extra year to prepare anyway.
           Going on safari in Africa is a no-brainer when it comes to seeking adventure, but where exact='true'ly do you start? Botswana's Okavango Delta is a must for first-timers and experienced safari-goers alike, thanks to its wealth of wildlife and topographical diversity. Hop on a mokoro canoe for the best, most intimate look at the roaming elephants, antelope, and cheetahs, among others. Stay at Xigera Safari Lodge, one of the most anticipated recent openings on the continent. You can expect 12 new elevated suites, a baobab tree house for sleeping under the stars, and tons of measures to make the property as eco-friendly as possible.
           </p>
            {/* <marquee>You can send your complaints or suggestions on our official email id: <NavLink to="/Contact.js" className="help">pankaj.phour70@gmail.com</NavLink>. Or you can call us at :- <NavLink to="/Contact.js" className="help"><strong>9518455298</strong></NavLink></marquee> */}
< Footer/>
        </div>
    )
};
export default Videos;
