const { Messages } = require('../../models');

exports.getMessages = async (req, res) => {
  try {
    const data = await Messages.findAll({
      order: [['id', 'DESC']],
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    res.send({
      status: 'Success',
      data,
    });
  } catch (error) {
    res.send({
      status: 'Failed',
      message: "Server Error, Can't Get The Data",
    });
  }
};

exports.addMessage = async (req, res) => {
  try {
    const { name, messages } = req.body;

    const data = await Messages.create({ name, messages });

    res.send({
      status: 'Success',
      data,
    });
  } catch (error) {
    res.send({
      status: 'Failed',
      message: "Server Error, Can't Add The Data",
    });
  }
};
