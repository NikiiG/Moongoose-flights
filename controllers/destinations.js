const Flight = require('../models/flight');

module.exports = {
  create
};

async function create(req, res) {
    //find movie to attach review to
    const flight = await Flight.findById(req.params.id);
    // We can push (or unshift) subdocs into Mongoose subdoc arrays
    // the schema in our array makes sure that anything being pushed has the same shape as it
    flight.destinations.push(req.body);
    try {
      // Save any changes made to the parent flight doc
      await flight.save();
    } catch (err) {
      console.log(err);
    }
    // Respond to req with a redirect back to flights show page
    res.redirect(`/flights/${flight._id}`);
  }