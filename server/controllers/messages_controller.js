let messages = [];
let id = 0;

module.exports = {
    create: (req, res)=> {
        const { text, time } = req.body;
        messages.push({id, text, time});
        id++;
        res.status(200).send(messages);
    },

    read: (req, res)=> {
        res.status(200).send(messages);
    },

    update: (req, res)=> {
        const messageIdx = messages.findIndex( (message)=> { message.id == req.params.id })
        messages[messageIdx] = {
            id: message.id,
            text: req.body.text || message.text,
            time: message.time
        }
        res.status(200).send(messages);
    },

    delete: (req, res)=> {
        const messageIdx = messages.findIndex( (message)=> { message.id == req.params.id })
        messages.slice(messageIdx,1);
        res.status(200).send(messages)
    }

}