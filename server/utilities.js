//
// To broadcast message to all client
//
exports.broadcast = function(io, evt, data) {
    io.clients(function(err, clients) {
        for (var clientId in clients) {
            io.to(clients[clientId]).emit(evt, data);
        }
    });
}