import { Router } from 'express';
import { ClubMemberController } from '../Controllers/ClubMemberController';
// The file is responsible to process the api requests and call the required middleware, validator and controller in a centralized place

//@Route: /auth
//@AUTH not required
//@FUNCTIONS all auth related work

class ClubMemberRoutes {
  public router: Router;
  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.putRoutes();
    this.deleteRoutes();
  }
  getRoutes(): void {
    // add all get routes here
  }
  postRoutes(): void {
    this.router.post('/new/member', ClubMemberController.addNewMember);
    // add all post routes here
  }
  putRoutes(): void {
    // add all get routes here
    // this.router.put()
  }
  deleteRoutes(): void {
    // add all get routes here
  }
}
export default new ClubMemberRoutes().router;
