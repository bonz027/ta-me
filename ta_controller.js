var Ta = require('./ta_model')

var taController = {
    all: function( req, res ) {
        ta.find({}, function(error, donuts){
            if( error ) {
                console.error('ERROR finding tas:', error)
            } else {
                res.json( donuts )
            }
        })
    },
    create: function( req, res ) {
        var newTa = new Ta( req.body )

        newTA.save(function(error, donut){
            if( error ) {
                console.error('ERROR saving newTa:', error)
            } else {
                res.json( Ta )
            }
        })
    },
    single: function( req, res ) {
        var id = req.params.id

        Ta.findById(id, function(error, donut){
            if( error ) {
                console.error('ERROR finding TaById:', error)
            } else {
                res.json( donut )
            }
        })
    },
    update: function( req, res ) {
        var id = req.params.id

        // { new: true } we use this third argument so that we get the updated object back in the callback
        Ta.findByIdAndUpdate(id, req.body, { new: true }, function( error, upDonut ){
            if( error ) {
                console.error('ERROR finding updating Ta:', error)
            } else {
                res.json( upDonut )
            }
        })
    },
    destroy: function( req, res ) {
        var id = req.params.id

        Ta.findByIdAndRemove(id, function( error ){
            if( error ) {
                console.error('ERROR removing Ta!', id)
            } else {
                res.json({
                    success: true,
                    message: "Deleted Ta with id: "+ id
                })
            }
        })
    }
}

module.exports = taController
