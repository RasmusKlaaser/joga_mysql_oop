const BaseSQLModel = require('./base')

class AuthorModel extends BaseSQLModel {
    constructor() {
        super('author');
    } 

    async findAll() {
        const authors = await super.findAll()
        return authors
    } 

    async findOne(id) {
        const author = await super.findOne(id)
        return author 
    } 
} 
module.exports = AuthorModel;