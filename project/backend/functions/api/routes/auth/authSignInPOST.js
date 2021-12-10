const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { userDB } = require('../../../db');
const jwtHandlers = require('../../../lib/jwtHandlers');
const bcrypt = require('bcryptjs');

module.exports = async (req, res) => {
  const { id, password } = req.body;

  if (!id || !password) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  let client;

  try {
    client = await db.connect(req);

    const user = await userDB.getUserById(client, id);
    
    if(!user) {
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
        return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    
    //password가 올바르지 않음
    if(!isMatch) {
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW));
        return;
    } 
    const { accesstoken } = jwtHandlers.sign(user);

    const resUser = {
      id: user.id,
      name: user.name
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, { user: resUser, accesstoken }));
  } catch (error) {
    console.log(error);

    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};
