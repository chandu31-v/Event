const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = String(process.env.MONGODB_URL)

async function mongoData(req, res) {

    //connect to the mongo atlas database
    let client
    try {
        client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

    } catch (err) {
        res.status(400).json({ status: "failed", message: "connection failed" })
        return
    }

    //request to get comments
    if (req.method === "GET") {

        try {
            //connect to mongo Database
            await client.connect()

            //connect to database
            const db = client.db("event")

            console.log(req.query.mongo)

            if (req.query.mongo === "allEvents") {
                const data = await db.collection("eventDetails").find().toArray()
                client.close()
                res.status(200).json({ status: "success", data: data, message: "Data sent successfully" })

            }
            else if (req.query.mongo === "isFeatured") {
                const data = await db.collection("eventDetails").find({ "isFeatured": true }).toArray()
                client.close()
                res.status(200).json({ status: "success", data: data, message: "Data sent successfully" })
            }
            else {
                //use connected database(db) to access desired collections
                let split = req.query.mongo.split(",")
                if (split.length > 1) {
                    const data = await db.collection("eventDetails").find({ "date": `${split[0]}-0${split[1]}-12` }).toArray()
                    client.close()
                    res.status(200).json({ status: "success", data: data, message: "Data sent successfully" })
                } else {
                    const data = await db.collection("eventDetails").find({ "_id": req.query.mongo }).toArray()
                    client.close()
                    res.status(200).json({ status: "success", data: data, message: "Data sent successfully" })
                }
            }


        } catch (err) {
            console.log(err)
            res.status(404).send({ message: `sending data failed:${err}`, status: "error" })
        }

    }
    else if (req.method === 'POST') {
        try {
            console.log("POST")
            //connect to mongo Database
            await client.connect()

            //connect to database
            const db = client.db("event")

            //use connected database(db) to access desired collections
            await db.collection(`${req.query.mongo}`).insertOne(JSON.parse(req.body))
            client.close()
            //console.log(req.body)
            res.status(200).json({ status: "success" })

        } catch (err) {
            console.log(err)
            res.status(404).send({ error: err, status: "error" })
        }
    }
}

export default mongoData
