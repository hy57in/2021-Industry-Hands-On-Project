const util = require('../../../lib/util');
const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const db = require('../../../db/db');
const { userDB } = require('../../../db');
const jwtHandlers = require('../../../lib/jwtHandlers');
const bcrypt = require('bcryptjs');



module.exports = async (req, res) => {
  const { id, password, name, phone } = req.body;

  if (!id || !password || !name || !phone) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  
  // password 암호화
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  let client;

  try {
    client = await db.connect(req);

    const alreadyId = await userDB.getUserById(client, id);
    
    // 이미 존재하는 아이디면
    if(alreadyId) {
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_ID));
        return;
    }

    const alreadyPhone = await userDB.getUserByPhone(client, phone);

    // 이미 존재하는 아이디면
    if(alreadyPhone) {
        res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_PHONE));
        return;
    }
    
    const user = await userDB.addUser(client, id, hashPassword, name, phone);
    console.log("user:", user);
    const { accesstoken } = jwtHandlers.sign(user);

    const resUser = {
      id: user.id,
      name: user.nickname,
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.CREATED_USER, { user: resUser, accesstoken }));
    
  } catch (error) {
    console.log(error);

    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  } finally {
    client.release();
  }
};
