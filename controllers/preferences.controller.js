const PreferenceModel = require("../models/preference.model")

const create_preference = (req, res) => {
    const incomingData = req.body;
    const newPreference = new PreferenceModel(incomingData);
    newPreference.save((err, doc) => {
        if (err) {
            res.status(500).send({
                err: err,
                message: "Error: Not able to save Preference!",
            });
        } else {
            res.status(200).send({
                message: "Successfully saved Preference!",
                document: doc,
            });
        };
    },

    )
};

const get_preference = (req, res) => {
    PreferenceModel.find({}, (err, preference) => {
        if (err) {
            res.status(500).send({
                status: 500,
                message: "No Preferences Found"
            });
        } else {
            res.status(200).send(preference)
        }
    })
}


module.exports = { create_preference, get_preference };