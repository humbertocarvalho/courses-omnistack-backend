const axios = require('axios');
module.exports = {
  async store(request, response) {
    const { username } = request.body;

    const apiresponse = await axios.get(
      `https://api.github.com/users/${username}`
    );

    return response.json(apiresponse.data);
  }
};
