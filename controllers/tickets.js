
const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
	new: newTicket,
    create

};

async function newTicket(req, res) {
   const flight= await Flight.findById(req.params.id)
	res.render('tickets/new', { title: "add ticket",flight });
}

async function create(req, res) {
	req.body.flight = req.params.id ;
   try{
	await Ticket.create(req.body) ;
    } catch (err) {
        console.log(err);
    }
		res.redirect(`/flights/${req.params.id}`);
	};

