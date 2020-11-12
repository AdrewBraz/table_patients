//@ts-check
process.env.ORA_SDTZ = 'UTC';
import oracledb from 'oracledb';
import dbconfig from './dbconfig'

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;


const requests = {
    '/': "SELECT * FROM OMS_LIST_V",
    '/vmp': "SELECT * FROM OMS_LIST_V WHERE COD LIKE '200%'"
}

const getRequestString = (path) => requests[path];

export default async(path) => {
    let connection,
        result;
    const requestString = getRequestString(path)
    console.log(dbconfig)
    try{
        connection = await oracledb.getConnection(dbconfig)
        result = await connection.execute(requestString)
    } catch(err){
        console.log(err)
    } finally{
        if(connection){
            try{
                await connection.close()
            } catch(err){
                console.log(err)
            }
        }
    return result.rows;
    }
}
