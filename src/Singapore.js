import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import './Singapore.css';
const Singapore=() => {

    return(
        <div className="body-singapore">
    <div className="home-image-singapore">
        <div className="home-text-singapore">
            <h3>Welcome to our Website</h3>
            <p>We give you the opportunity t explore  the beauty of nature</p>
     <NavLink to="/Contact.js" className="btn btn-outline-success">Travel Now</NavLink>      
        </div>
    </div>
    <br/>
    <h1>Travelling to Singapore ? Know Some things about it.</h1>
    <p className="p-singapore">
    Singapore: Officially the Republic of Singapore, is a sovereign island city-state in maritime Southeast Asia. It lies about one degree of latitude (137 kilometres or 85 miles) north of the equator, off the southern tip of the Malay Peninsula, bordering the Straits of Malacca to the west, the Riau Islands (Indonesia) to the south, and the South China Sea to the east. The country's territory is composed of one main island, 63 satellite islands and islets, and one outlying islet, the combined area of which has increased by 25% since the country's independence as a result of extensive land reclamation projects. It has the second greatest population density in the world. With a multicultural population and recognising the need to respect cultural identities, Singapore has four official languages; English, Malay, Mandarin, and Tamil. English is the lingua franca. Multiracialism is enshrined in the constitution and continues to shape national policies in education, housing, and politics.

Modern Singapore was founded in 1819 by Sir Stamford Raffles as a trading post of the British Empire. In 1867, the colonies in Southeast Asia were reorganised and Singapore came under the direct control of Britain as part of the Straits Settlements. During the Second World War, Singapore was occupied by Japan in 1942, and returned to British control as a separate crown colony following Japan's surrender in 1945. Singapore gained self-governance in 1959 and in 1963 became part of the new federation of Malaysia, alongside Malaya, North Borneo, and Sarawak. Ideological differences led to Singapore being expelled from the federation two years later and it became an independent country.
</p>
<h2>Singapore :- The city of Lights <NavLink to="/Contact.js" className="btn btn-outline-warning"> Travel Now</NavLink></h2>
<p className="p2-singapore">
Singapore has the world's highest percentage of millionaires, with one out of every six households having at least one million US dollars in disposable wealth. This excludes property, businesses, and luxury goods, which if included would increase the number of millionaires, especially as property in Singapore is among the world's most expensive. In 2016, Singapore was rated the world's most expensive city for the third consecutive year by the Economist Intelligence Unit, and this remained true in 2018. The government provides numerous assistance programmes to the homeless and needy through the Ministry of Social and Family Development, so acute poverty is rare. Some of the programmes include providing between S$400 and S$1000 of financial assistance per month to needy households, providing free medical care at government hospitals, and paying for children's tuition. Other benefits include compensation for gym fees to encourage citizens to exercise, up to S$166,000 as a baby bonus for each citizen, heavily subsidised healthcare, financial aid for the disabled, the provision of reduced-cost laptops for poor students, rebates for costs such as public transport and utility bills, and more. As of 2018 Singapore's ranking in the Human Development Index is 9th in the world.
</p>
 < Footer/>
        </div>
    );
}
export default Singapore;