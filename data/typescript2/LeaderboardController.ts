/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express';
import { LeaderboardAPI } from '../API/LeaderboardApi';
import { ApiConstants } from '../Constants/ApiConstants';
import MemberDetails from '../Models/ClubMembers';
export class LeaderboardController {
  static async getLeaderboard(req: Request, res: Response, next: NextFunction) {
    try {
      // fetch user list area
      const mems = await MemberDetails.find({}, { handle: 1 });
      // fetch leaderboard area
      // preparing the query to be fired. FInd all member details and sort based on rating
      let query: string = ApiConstants.getMemberRatings;
      // add all handles separated by a ; to the above list. Note that only 10,000 handles are supported
      mems.forEach((member) => (query += member.handle + ';'));
      const response = await LeaderboardAPI.getMemberRatingsApiCall(query);
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
}
