const mongoose = require("mongoose");

const PreferenceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            maxLength: 50,
            default: "No Name",
        },

        value: {
            type: Number,
            require: true,
            maxLength: 3,
            default: null,
        },
    },
);

const PreferenceModel = mongoose.model("PreferenceModel", PreferenceSchema);
module.exports = PreferenceModel;