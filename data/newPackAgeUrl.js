
module.exports = (req, res) => {
    let mod = {
        dataList: [{
            name:'1',
            date:12
        }],
        success: true,
        message: null,
        data: {},
        pageNum: 1,
        pageSize: 10,
        totalNum: 30
    }
    return res.json(mod);
}