import {GlobalAcceptMimesMiddleware, ServerLoader, ServerSettings} from "@tsed/common";
import * as bodyParser from 'body-parser';
import * as compress from 'compression';
import * as cookieParser from 'cookie-parser';
import * as methodOverride from 'method-override';

const rootDir = __dirname;

@ServerSettings({
    rootDir,
    acceptMimes: ["application/json"],
    port: 3000
})
export class Server extends ServerLoader {
 public $beforeRoutesInit(): void | Promise<any> {
     this
         .use(GlobalAcceptMimesMiddleware)
         .use(cookieParser())
         .use(compress({}))
         .use(methodOverride())
         .use(bodyParser.json())
         .use(bodyParser.urlencoded({
             extended: true
         }))
 }
}


