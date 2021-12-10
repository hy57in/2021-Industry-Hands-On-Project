const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');


  const getUserById = async (client, id) => {
    const { rows } = await client.query(
      `
      SELECT * FROM "user" u
      WHERE id = $1
      `,
      [id],
    );

    return convertSnakeToCamel.keysToCamel(rows[0]);
  };
  
  const getUserByPhone = async (client, phone) => {
    const { rows } = await client.query(
      `
      SELECT * FROM "user" u
      WHERE phone = $1
      `,
      [phone],
    );

    return convertSnakeToCamel.keysToCamel(rows[0]);
  };

  const addUser = async (client,id, hashPassword, name, phone) => {
    const { rows } = await client.query(
        `
        INSERT INTO "user" (id, password, name, phone)
        VALUES ($1, $2, $3, $4)
        RETURNING id, name, phone
        `,
        [id, hashPassword, name, phone],
      );
  
      return convertSnakeToCamel.keysToCamel(rows[0]);
  }


module.exports = { getUserById, getUserByPhone, addUser };
