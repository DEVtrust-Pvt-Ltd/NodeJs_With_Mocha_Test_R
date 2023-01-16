import auth from "../middleware/auth";
import listings from "../controllers/Listings";
import ListingValidator from "../validators/ListingValidator";



export default (app) => {
    /* Route for Listings API  */
   
    app.route("/listings/getListingsForSlider").get(listings.getListingsForSlider);

    return app;
};