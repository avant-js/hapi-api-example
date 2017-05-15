const Music = require('../models/music');

const getAll = {
    method: 'GET',
    path: '/musics'
};
getAll.handler = (req, reply) => {
    reply(Music.find());
};

const get = {
    method: 'GET',
    path: '/musics/{id}'
};
get.handler = (req, reply) => {
    reply(Music.findById(req.params.id));
};

const post = {
    method: 'POST',
    path: '/musics'
};
post.handler = (req, reply) => {
    const newMusic = new Music(req.payload);
    reply(newMusic.save());
};

const put = {
    method: 'PUT',
    path: '/musics/{id}'
};
put.handler = (req, reply) => {
    const updatedValues = req.payload;

    // Avoid changes to mongo internal id and version
    if (updatedValues._id) delete updatedValues._id;
    if (updatedValues.__v) delete updatedValues.__v;

    reply(Music.update(req.params.id, updatedValues));
};

const del = {
    method: 'DELETE',
    path: '/musics/{id}'
};
del.handler = (req, reply) => {
    reply(Music.findOneAndRemove({_id: req.params.id}));
};

module.exports = [
    getAll,
    get,
    post,
    put,
    del
];