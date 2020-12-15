import dotenv from 'dotenv';
dotenv.config();

// Create a file named ".env" and put corresponding proces.env values

// database configs
export const dbconfig = {
    protocol:   process.env.PROTOCOL || 'mongodb',
    host:       process.env.HOST || 'localhost',
    port:       process.env.DBPORT || '27017',
    database:   process.env.DATABASE,
    mongoose:   {
        useNewUrlParser:    true,
        useUnifiedTopology: true,
        useCreateIndex:     true,
        useFindAndModify:   false
    }
};

// api configs
export const apiconfigs = {
    port:       process.env.APIPORT || 3000
}