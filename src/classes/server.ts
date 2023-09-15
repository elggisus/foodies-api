import express, { application } from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload';

import {InversifyExpressServer} from 'inversify-express-utils';
// import NotificationsSocket from '../websockets/notifications.websocket';
import Websocket from './websocket';
import container from '../config/dependency/dependency';


export class ServerExpress {

    app: express.Application;
    port: number;
    server: InversifyExpressServer;
    // io: any;

    constructor() {

        this.app = express();
        this.server = new InversifyExpressServer(container);
        // this.io = Websocket.getInstance(this.server);
        this.port = 3000;
        // this.initizalizateSockets();
    }

    startServer(callback: VoidFunction) {
        this.server.setConfig((application: express.Application) => {
            application.use(cors());
            application.use(bodyParser.json());
            application.use(fileUpload({
                createParentPath: true
            }));
        });
        this.app = this.server.build();
        this.app.listen(this.port,callback);

    }

     

    //  private initizalizateSockets() {        
    //     this.io.initializeHandlers([
    //         { path: 'notifications', handler: new NotificationsSocket() }
    //     ]);
    // }
}