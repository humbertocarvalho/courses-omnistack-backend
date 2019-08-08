const Dev = require('../models/Dev');
module.exports = {
  async store(request, response) {
    const { user } = request.headers;
    const { devId } = request.params;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    if (!targetDev) {
      return response.status(400).json('Dev not found');
    }

    if (targetDev.likes.includes(loggedDev._id)) {
      console.log('Deu match');
    }

    loggedDev.likes.push(targetDev._id);
    await loggedDev.save();

    return response.json(loggedDev);
  }
};