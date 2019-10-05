const Notion = require('../../models/notion')

module.exports = {
    index,
    show,
    create,
    // delete: deleteOne,
    // update
}

async function index(req, res) {
    const notions = await Notion.find({});
    res.status(200).json(notions);
}

async function show(req, res) {
    const notion = await Notion.findById(req.params.id);
    res.status(200).json(notion);
}

async function create(req, res) {
    const notion = await Notion.create(req.body);
    res.status(201).json(notion);

}

// async function deleteOne(req, res) {
//     const deleteNotion = await Notion.findByIdAndRemove(req.params.id);
//     res.status(201).json(deleteNotion);

// }

// async function update(req, res) {
//     const updatedNotion = await Notion.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json(updatedNotion);

// }