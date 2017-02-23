module.exports = function() {
    var leaderRouter = require('express').Router();

    leaderRouter.use(require('body-parser').json());

    leaderRouter.route('/')
       .all(function(req, res, next) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            next();
        })
        .get(function(req, res, next) {
            res.end('Will send all the leaderships to you!');
        })
        .post(function(req, res, next) {
            res.end('Will add the leadership: ' + req.body.name + ' with details: ' + req.body.description);
        })
        .delete(function(req, res, next) {
            res.end('Deleting all leaderships');
        });

    leaderRouter.route('/:leaderId')
        .all(function(req, res, next) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            next();
        })
        .delete(function(req, res, next) {
            res.end('Deleting the leadership: ' + req.params.leaderId);
        })
        .get(function(req, res, next) {
            res.end('Getting leadership ' + req.params.leaderId + ' information.');
        })
        .put(function(req, res, next) {
            res.write('Updating leadership ' + req.params.leaderId + ' information.\n');
            res.end('Will update the leadership: ' + req.body.name + ' with details: ' + req.body.description);
        });

    return leaderRouter;
}
