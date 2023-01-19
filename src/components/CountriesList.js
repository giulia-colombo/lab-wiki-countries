/* 
This component should render a list of Links, each having the country's alpha3Code embedded in the URL. 
Click on a Link should render the country details component.
*/
import { Link } from "react-router-dom";

function CountriesList(props) {
    const {countries} = props;

    return(
        {countries.map((country) => {
            return(
                <Link key={country.alpha3Code} to={country.alpha3Code}>
                </Link>
            );
        })}
    )

}

export default CountriesList;