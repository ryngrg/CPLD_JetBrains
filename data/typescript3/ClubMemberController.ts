/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response, NextFunction } from 'express';
import MemberDetails from '../Models/ClubMembers';
export class ClubMemberController {
  static async addNewMember(req: Request, res: Response, next: NextFunction) {
    try {
      // fetch user list area
      const newMem = new MemberDetails({
        handle: req.body.user.handle,
        rollNum: req.body.user.rollNum,
        year: req.body.user.year,
        branch: req.body.user.branch
      });
      await newMem.save();
      res.json({ status: 200, mssg: 'success' });
      // return leaderboard
    } catch (error) {
      next(error);
    }
  }
}
