/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as express from 'express';
import { Response } from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
//server file imports
import { getEnvironmentVariables } from './environments/env';
import LeaderboardRoutes from './Routes/LeaderboardRoutes';
import ClubMemberRoutes from './Routes/ClubMemberRoutes';

export class Server {
  public app: express.Application = express();
  constructor() {
    // these scripts run at start up of the server
    this.setConfigurations();
    this.setRoutes();
    this.error404Handler();
    this.handleErrors();
  }

  setConfigurations() {
    // boilerplate configuration of the packages
    this.connectMongoDb();
    this.configureBodyParser();
    this.app.use(cors({
      origin: "*",
      credentials: true,
      optionSuccessStatus: 200
    }));
    console.log('Configurations have been successfully setup');
  }

  configureBodyParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    console.log('body-parser setup');
  }

  setRoutes() {
    this.app.use('/api/leaderboard', LeaderboardRoutes);
    this.app.use('/api/club/member', ClubMemberRoutes);

    // all the server api routes go here
  }

  connectMongoDb() {
    // establishing connection with mongodb
    const databaseUrl = getEnvironmentVariables().db_url;
    mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    mongoose.connection.on('open', () => {
      console.log('connection successfully made with database');
    });
  }

  error404Handler() {
    // Error when api request with invalid path is fired to the server
    this.app.use((req, res) => {
      res.status(404).json({
        message: 'Not Found',
        status_code: 404
      });
    });
  }

  handleErrors() {
    // Global Error Handling : All the errors that occur in the server are managed here
    this.app.use((error: any, req: any, res: Response) => {
      const errorStatus = req.errorStatus || 500;
      res.status(errorStatus).json({
        message: error.message || 'Something Went Wrong. Please Try Again',
        status_code: errorStatus,
        success: false
      });
    });
  }
}
