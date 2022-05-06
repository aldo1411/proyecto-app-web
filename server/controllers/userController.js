const User = require('../Schemas/user')

const findAll = async (req, res) => {
    const result = await User.find()
    res.json(result)
}

const save  = async (req, res) => {
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    }
    
    if (!req.body.name || !req.body.email || !req.body.phone) {
        return res.status(400).json( { msg: 'Please include all data' });
    }
    
    const user = new User(newUser)
    const result = await user.save()
    res.status(201).json({ msg: 'User created', user: result })
}

async function deleteById(req, res) {
    const exist = await User.findById(req.params.id);

    if (exist) {
        await User.deleteMany({_id: req.params.id});
        res.json( { msg: 'User deleted', Users: await User.find() });
    } else {
        res.status(400).json({ msg: `No user with the id ${req.params.id}`});
    }
}

async function update(req, res) {
    const exist = await User.findById(req.params.id);
    const newUser = {
        name: req.body.name ? req.body.name : exist.name,
        email: req.body.email ? req.body.email : exist.email,
        phone: req.body.phone ? req.body.phone : exist.phone
    }

    if (exist) {
        await User.findOneAndUpdate({
            _id: req.params.id
        }, newUser);
        res.status(201).json({ msg: 'User updated', user: await User.findById(req.params.id)});
    } else {
        res.status(400).json({ msg: `No user with the id ${req.params.id}`});
    }
};

module.exports = {
    findAll,
    save,
    deleteById,
    update
}

