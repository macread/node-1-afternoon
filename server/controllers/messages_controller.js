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
        const messageIdx = messages.findIndex( function (message) { 
            return message.id == req.params.id 
        })
        messages[messageIdx] = {
            id: messages[messageIdx].id,
            text: req.body.text || message.text,
            time: messages[messageIdx].time
        }
        res.status(200).send(messages);
    },

    delete: (req, res)=> {
        const messageIdx = messages.findIndex( function (message) { 
            return message.id == req.params.id 
        })
        messages.splice(messageIdx,1);
        res.status(200).send(messages)
    }
}