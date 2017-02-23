module.exports = function() {
    var dishRouter = require('express').Router();

    dishRouter.use(require('body-parser').json());

    dishRouter.route('/')
       .all(function(req, res, next) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            next();
        })
        .get(function(req, res, next) {
            res.end('Will send all the dishes to you!');
        })
        .post(function(req, res, next) {
            res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
        })
        .delete(function(req, res, next) {
            res.end('Deleting all dishes');
        });

    dishRouter.route('/:dishId')
        .all(function(req, res, next) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            next();
        })
        .delete(function(req, res, next) {
            res.end('Deleting the dish: ' + req.params.dishId);
        })
        .get(function(req, res, next) {
            res.end('Getting dish ' + req.params.dishId + ' information.');
        })
        .put(function(req, res, next) {
            res.write('Updating dish ' + req.params.dishId + ' information.\n');
            res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
        });

    return dishRouter;
}
