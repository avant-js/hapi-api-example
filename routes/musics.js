'use strict'

const getAll = {
    method: 'GET',
    path: '/musics'
};
getAll.handler = (req, reply) => {
    reply('get all musics');
};

const get = { 
    method: 'GET',
    path: '/musics/{id}' 
};
get.handler = (req, reply) => {
    reply(`get music with id = ${req.params.id}`);
};

const post = {
    method: 'POST',
    path: '/musics'
};
post.handler = (req, reply) => {
    reply(`create new music with data = ${req.payload}`);
}

const put = { 
    method: 'PUT',    
    path: '/musics/{id}'
};
put.handler = (req, reply) => {
    reply(`update music with id = ${req.params.id}`);
}

const del = { 
    method: 'DELETE', 
    path: '/musics/{id}'
};
del.handler = (req, reply) => {
    reply(`delete music with id = ${req.params.id}`);
}

module.exports = [
    getAll,
    get,
    post,
    put,
    del
];