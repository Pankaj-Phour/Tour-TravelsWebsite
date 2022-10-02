import React from 'react';
import { NavLink } from 'react-router-dom';
import './Island.css';
import Footer from './Footer';

const Island=() =>
{
    return(
        <div className="body-island">
            <br/>
            <h1 className="h1-island">Traveler's Guide : Island Exploring</h1>
            <p className="p1-india">
            Islands conjure dreams of paradise: an escape from the rat race and a perfect patch of sand where you can relax under rustling palms and gaze at a serene blue sea.

But not all islands are created the same. The beauty of some is defined more by the sea that surrounds them, which can captivate connoisseurs with its crystalline clarity and thriving coral kingdoms.

Other islands feature luxuriant jungles and velvety peaks, and some enchant travelers with their cultural jewels. Whether it's sublime beaches, stunning topography, or exotic cultures you seek, these islands lie far from the workaday clamor but close to creature comforts.

From the Seychelles to Santorini and the Caribbean to Capri, find your very own Shangri-la in
            </p>
            <br/>
            <p className="p3-india">
                <img className="image1-india" src="https://www.planetware.com/photos-large/SEY/best-islands-maldives.jpg" alt="Island-Exploring"/>
                The Maldives are home to some of the world's most ravishing islands, but it's the sea, which truly makes these islands shine. Luminous aquamarine waters with a crystal clarity lap upon these dazzling white shores, which barely peek above the Indian Ocean.

Consisting of 26 natural atolls, the Maldives archipelago is the planet's lowest lying nation, rising no more than three meters above the sea at its highest point, a measurement that shrinks every year.

Beneath the mesmerizing waters, coral reefs flourish, luring divers and snorkelers from around the world. Surfers also flock here to ride the uncrowded breaks.

Back on land, luxury resorts provide the perfect launching points for adventures focused upon the sea, the archipelago's greatest asset, but also, as the planet's climate changes, its single greatest threat.
Shaped like a giant sombrero, this lush volcanic island stars in countless South Pacific fantasies. The focal point and best asset of this tropical beauty is its ravishing lagoon in technicolor turquoise. Fish, turtles, sharks, and rays swim in the clear waters, and tiny islets or motus dot the lagoon.
The island, of course, is distinctly French, with mouthwatering cuisine to match. Diving and snorkeling are excellent in the surrounding reefs, and hiking trails weave through the palm-studded forests.

If you can afford it, hide out here in a luxurious over-the-water bungalow and bask in your good fortune as you fall asleep to the gentle slosh of the sea.
                </p>
                <br/>
                <p className="p1-india">
                Palawan is the Philippine's answer to paradise. This island province stretches southwest to Borneo, with lush limestone peaks rising from a jewel-like sea so clear, that you can almost see the expressions on the fish from above the surface.

Slivers of gleaming white-sand beaches fringed with rustling palms rim many of these jungle-clad islands, while under the water, coral reefs teem with an impressive diversity of tropical fish, offering some of the best diving in the world.

Other attractions include the islands' unique wildlife, emerald lakes, and quaint fishing villages. Coron is home to plush resorts, and El Nido drips with natural beauty and is one of the most alluring islands in the chain. From here, you can island hop around the spectacular Bacuit archipelago.
</p>
<h2 className="h2-island">Islands : Pure Beauty of Nature</h2>
<p className="p1-india">
Pristine and picture-perfect, the Seychelles are worth traveling for. East of Kenya, this relatively unspoiled archipelago of 115 coral and granite islands is packed with attractions, from UNESCO-listed jungles and thriving coral reefs to palm-lined, powdery beaches flanked by giant boulders.

Almost half the total land area of these equatorial isles is protected, and many of the islands lie within fish-rich marine sanctuaries with excellent diving and snorkeling.

The Seychelles also feature some of the planet's richest fishing grounds, making this a top destination for anglers. Add some spicy Créole cuisine into the mix, as well as the plush resorts of Mahé, Praslin, and La Digue, and it's easy to understand the Seychelles' allure.
Encircling a sea-filled caldera, spectacular Santorini scores top points for its dramatic beauty. Bleached white villas tumble down volcanic cliffs. Blue-domed churches rise against the sparkling sea, and bright sprays of bougainvillea add to the eye-popping palette of color.

Perched atop the black lava cliffs, the settlements of Firá and Oia are the island's most picturesque — and pricey, destinations — and Oia ranks among the most photographed locations in the world.

Other highlights of Santorini include Akrotíri Archaeological Site, Ancient Thira, the black sand beach of Perissa, and of course, the sublime sunsets. Sailing into this stunning caldera surrounded by soaring sea cliffs makes an unforgettable first impression.
</p>
            <div className="row">
<div className="card col-md-4 col-sm-6 india-card">
                            <img className="card-img-top" src="https://www.planetware.com/photos-large/SEY/best-islands-palawan.jpg" alt="" width="100%"/>
                            <div className="card-body">
                                <h4 className="card-title">
                                    Philippines
                                </h4>
                                <NavLink to="/Booking.js" className="btn btn-outline-warning">Book Now</NavLink>
                                <NavLink to="/Singapore.js" className="btn btn-success">See more</NavLink>
                            </div>
                        </div>
                        <div className="card col-md-4 col-sm-6 india-card">
                            <img className="card-img-top" src="https://www.planetware.com/photos-large/SEY/best-islands-maldives.jpg" alt="" width="100%"/>
                            <div className="card-body">
                                <h4 className="card-title">
                                    Maldives
                                </h4>
                                <NavLink to="/Booking.js" className="btn btn-outline-warning">Book Now</NavLink>
                                <NavLink to="/Singapore.js" className="btn btn-success">See more</NavLink>
                            </div>
                        </div>
                        <div className="card col-md-4 col-sm-6 india-card">
                            <img className="card-img-top" src="https://www.planetware.com/photos-large/SEY/best-islands-st-barts.jpg" alt="" width="100%"/>
                            <div className="card-body">
                                <h4 className="card-title">
                                    Bali,Indonesia
                                </h4>
                                <NavLink to="/Booking.js" className="btn btn-outline-warning">Book Now</NavLink>
                                <NavLink to="/Singapore.js" className="btn btn-success">See more</NavLink>
                            </div>
                        </div>
                        <div className="card col-md-4 col-sm-6 india-card">
                            <img className="card-img-top" src="https://www.planetware.com/photos-large/SEY/best-islands-dalmatian-islands.jpg" alt="" width="100%"/>
                            <div className="card-body">
                                <h4 className="card-title">
                                    Dalmatian Islands
                                </h4>
                                <NavLink to="/Booking.js" className="btn btn-outline-warning">Book Now</NavLink>
                                <NavLink to="/Singapore.js" className="btn btn-success">See more</NavLink>
                            </div>
                        </div>
                        <div className="card col-md-4 col-sm-6 india-card">
                            <img className="card-img-top" src="https://www.planetware.com/photos-large/SEY/best-islands-fiji.jpg" alt="" width="100%"/>
                            <div className="card-body">
                                <h4 className="card-title">
                                    Fizi
                                </h4>
                                <NavLink to="/Booking.js" className="btn btn-outline-warning">Book Now</NavLink>
                                <NavLink to="/Singapore.js" className="btn btn-success">See more</NavLink>
                            </div>
                        </div>
                        <div className="card col-md-4 col-sm-6 india-card">
                            <img className="card-img-top" src="https://www.planetware.com/photos-large/SEY/best-islands-kauai.jpg" alt="" width="100%"/>
                            <div className="card-body">
                                <h4 className="card-title">
                                    Palawan
                                </h4>
                                <NavLink to="/Booking.js" className="btn btn-outline-warning">Book Now</NavLink>
                                <NavLink to="/Singapore.js" className="btn btn-success">See more</NavLink>
                            </div>
                        </div>
                        <div className="card col-md-4 col-sm-6 india-card">
                            <img className="card-img-top" src="https://www.planetware.com/photos-large/SEY/best-islands-st-lucia.jpg" alt="" width="100%"/>
                            <div className="card-body">
                                <h4 className="card-title">
                                    St. Lucia
                                </h4>
                                <NavLink to="/Booking.js" className="btn btn-outline-warning">Book Now</NavLink>
                                <NavLink to="/Singapore.js" className="btn btn-success">See more</NavLink>
                            </div>
                        </div>
                        <div className="card col-md-4 col-sm-6 india-card">
                            <img className="card-img-top" src="https://www.planetware.com/wpimages/2020/04/world-most-beautiful-islands-whitsunday-islands-australia.jpg" alt="" width="100%"/>
                            <div className="card-body">
                                <h4 className="card-title">
                                    Capri,Italy
                                </h4>
                                <NavLink to="/Booking.js" className="btn btn-outline-warning">Book Now</NavLink>
                                <NavLink to="/Singapore.js" className="btn btn-success">See more</NavLink>
                            </div>
                        </div>
                        <div className="card col-md-4 col-sm-6 india-card">
                            <img className="card-img-top" src="https://www.planetware.com/photos-large/SEY/best-islands-sardinia.jpg" alt="" width="100%"/>
                            <div className="card-body">
                                <h4 className="card-title">
                                    Sardinia,Italy
                                </h4>
                                <NavLink to="/Booking.js" className="btn btn-outline-warning">Book Now</NavLink>
                                <NavLink to="/Singapore.js" className="btn btn-success">See more</NavLink>
                            </div>
                        </div>
                        <div className="card col-md-4 col-sm-6 india-card">
                            <img className="card-img-top" src="https://www.planetware.com/photos-large/SEY/best-islands-bali.jpg" alt="" width="100%"/>
                            <div className="card-body">
                                <h4 className="card-title">
                                    St. Barts
                                </h4>
                                <NavLink to="/Booking.js" className="btn btn-outline-warning">Book Now</NavLink>
                                <NavLink to="/Singapore.js" className="btn btn-success">See more</NavLink>
                            </div>
                        </div>
                        <div className="card col-md-4 col-sm-6 india-card">
                            <img className="card-img-top" src="https://www.planetware.com/wpimages/2020/04/world-most-beautiful-islands-the-bahamas.jpg" alt="" width="100%"/>
                            <div className="card-body">
                                <h4 className="card-title">
                                    Bahamas
                                </h4>
                                <NavLink to="/Booking.js" className="btn btn-outline-warning">Book Now</NavLink>
                                <NavLink to="/Singapore.js" className="btn btn-success">See more</NavLink>
                            </div>
                        </div>
                        <div className="card col-md-4 col-sm-6 india-card">
                            <img className="card-img-top" src="https://www.planetware.com/wpimages/2020/04/world-most-beautiful-islands-whitsunday-islands-australia.jpg" alt="" width="100%"/>
                            <div className="card-body">
                                <h4 className="card-title">
                                    Whitsunday Islands
                                </h4>
                                <NavLink to="/Booking.js" className="btn btn-outline-warning">Book Now</NavLink>
                                <NavLink to="/Singapore.js" className="btn btn-success">See more</NavLink>
                            </div>
                        </div>
</div>
<h2 className="h2-island">Excited For Adventures : <NavLink to="/Booking.js" className="link-island">Travel Now</NavLink></h2>
<p className="p3-india">
Blissful white-sand beaches, rugged coastal peaks, mouthwatering cuisine, a unique blend of cultures, and ancient archeological treasures: What's not to love about this saucy Italian isle?

Most travelers have heard of the glamorous Costa Smeralda, or Emerald Coast, with its craggy coves and clear green seas, but this large and diverse Mediterranean isle also lays claim to many other attractions. Sardinia is home to the largest canyon in Europe, Gola su Gorropu; prehistoric archaeological sites; the captivating Catalan-tinged town of Alghero; and the medieval streets of Cagliari, the capital.

Stay awhile at one of the many pampering hotels and resorts, and while you're here, be sure to cruise along some of the scenic coastal drives and soak up the spectacular views.

Stunningly beautiful, yet understated, St. Barts lures movie stars and moguls from around the world, and for good reason. This pretty island offers a luscious taste of France in the tropics, with a relaxed charm that discerning travelers love.

One of St. Barts' top attractions are its glamorous blond beaches, which curve around its coastline, backed by rolling green hills. Privacy and seclusion are the island's other top selling points, but of course all this comes at a price. This alluring island is one of the Caribbean's most expensive, but if money's no object, you can ensconce yourself in a private villa or boutique hotel, dine on gourmet French cuisine until your heart's content, and live the lifestyle of the rich and famous.
    </p>
            {/* <marquee>You can send your complaints or suggestions on our official email id: <NavLink to="/Contact.js" className="help">pankaj.phour70@gmail.com</NavLink>. Or you can call us at :- <NavLink to="/Contact.js" className="help"><strong>9518455298</strong></NavLink></marquee> */}
            < Footer/>
        </div>
    )
};
export default Island;
