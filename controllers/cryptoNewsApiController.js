const axios = require('axios').default;

const fetchNewsData = async (req, res) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://newscatcher.p.rapidapi.com/v1/search',
      params: {
        q: req.query.q,
        lang: 'en',
        sort_by: 'relevancy',
        page: '1',
        media: 'True',
      },
      headers: {
        'x-rapidapi-host': 'newscatcher.p.rapidapi.com',
        'x-rapidapi-key': '103c4f49b6msh4e19359526c2f79p1ceb74jsn59cc64fc64a8',
      },
    };

    const data = await (await axios(options)).data;
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = fetchNewsData;
