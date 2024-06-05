import { MongoClient, ServerApiVersion } from "mongodb"

const uri = String(process.env.MONGODB_URL)


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
    console.log(err)
}

export {client}
