import clientPromise from ".";

let assistant
let db
let client
async function init() {
  if(db) return
  try {
    client = await clientPromise
    db = client.db()
    assistant = db.collection('events')
  } catch(e) {
    console.error('Failed to connect to MongoDB:', e)
  }
};

(async () => {
  await init()
})();

export async function addevent({name, comeFrom, mail, phone, totalOfPeople, message, eventId='1' }) {
  try {
    if(!event) await init()
    const result = await event.insertOne({ name, comeFrom, mail, phone, totalOfPeople, message,eventId })
  console.log(result)
  return {result}
  } catch(e) {
    console.error('Failed to insert event:', e)
    return {error: e}
  }
}

export async function getevents(eventId) {
  try {
    if(!event) await init()
    const result = await event.find({eventId}).toArray()
    return {result}
  } catch(e) {
    console.error('Failed to get events:', e)
    return {error: e}
  }
}