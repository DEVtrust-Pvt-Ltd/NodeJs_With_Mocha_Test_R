import BaseAPIController from "./BaseAPIController";
import {
    validationResult
} from 'express-validator';


export class ListingController extends BaseAPIController {

/*Function to get the real estate listings from database, to show on slider on frontend*/

    getListingsForSlider = async (req, res, next) => {
        try {
                       
            let listingInfo = await this._db.Listings.getListingsForSlider();
            
            this.handleSuccessResponse(req, res, next, {
                status: 1,
                data: listingInfo
            })
        } catch (error) {
            this.handleErrorResponse(res, error, next)
        }
}





const controller = new ListingController();
export default controller;