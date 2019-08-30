module.exports = (req, res) =>
  res.json({
    otherButton: [
      { actionKey: 'O_getPassportInfo', url: 'getPassportInfo.do' },
      { actionKey: 'O_listContract', url: 'listContract.do' },
      { actionKey: 'O_addContract', url: 'addContract.do' }
    ],
    gridButton: [
      { actionKey: 'O_deleteContract', url: 'deleteContract.do' },
      { actionKey: 'O_updateContract', url: 'updateContract.do' }
    ]
  })
