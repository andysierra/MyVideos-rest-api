import mongoose from 'mongoose';
import { dbconfig } from './config';

export default (async ()=>{
    try {
        let connStr:string = dbconfig.protocol+'://'+dbconfig.host+':'+dbconfig.port+'/'+dbconfig.database;
        await mongoose.connect(connStr, dbconfig.mongoose);
        console.log(`[now connected to DB: ${dbconfig.database} at port ${dbconfig.port}]`);
    } catch (error) {
        console.error('[ERROR at file db.ts]\n'+error);
        process.exit();
    }
})();