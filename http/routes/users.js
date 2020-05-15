let NeDB = require('nedb')
let db = new NeDB({
    filename: 'users.db',
    autoload: true
})

module.exports = (app) => {

    const route = app.route('/users')

    route.get((req, res) => {

        db.find({}).sort({name:1}).exec((err, users) => {
            if (err) {
                app.utils.error.send(err, req, res)
            } else {
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.json({
                    users
                })
            }
        })
    })

    app.get('/users/admin', (req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json({
            users: []
        })
    })

    route.post((req, res) => {

        req.assert('nome', 'O nome é obrigatório.').notEmpty();
        req.assert('email', 'O e-mail está inválido.').notEmpty().isEmail()

        let errors = req.validationErrors()
        if ( errors ){
            app.utils.error.send(errors, req, res)
            return false
        }

        db.insert(req.body, (err, user) => {
            if ( err ) {
                app.utils.error.send(err, req, res)
            } else {
                res.status(200).json(user)
            }
        })
    })


    const routeId = app.route('/users/:id')

    routeId.get((req, res) => {
        db.findOne({ _id: req.params.id}).exec((err, user) => {
            if ( err ) {
                app.utils.error.send(err, req, res)
            } else {
                res.status(200).json(user)
            }
        })
    })

    routeId.put((req, res) => {
        db.update({ _id: req.params.id}, req.body, (err, numReplaced) => {
            if ( err ) {
                app.utils.error.send(err, req, res)
            } else {
                res.status(200).json({
                    numReplaced: numReplaced, 
                    user: Object.assign(req.params, req.body)})
            }
        })
    })

    routeId.delete((req, res) => {
        db.remove({ _id: req.params.id},{}, (err, numRemoved) => {
            if ( err ) {
                app.utils.error.send(err, req, res)
            } else {
                res.status(200).json({
                    numRemoved: numRemoved,
                    user: Object.assign(req.params)})
            }
        })
    })

}