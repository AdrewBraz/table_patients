const oracledb = require('oracledb');
const config = require('./dbconfig')

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
async function run() {

  let connection,
  result;
  const {user, password, connectString } = config;
  try {
    connection = await oracledb.getConnection( {
      user,
      password,
      connectString
    });

    result = await connection.execute(
      `SELECT * FROM voms_st`
    );

  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
  console.log(result.rows)
}

run();