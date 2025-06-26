const mongoose= require("mongoose"); // we dont have to write connection again here //

const chatSchema= new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true

    },
    msg: {
        type: String,
        maxLength: 50
    },
    created_at: {
        type: Date,
        required: true
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

const Chat= mongoose.model("Chat", chatSchema);

module.exports= Chat;