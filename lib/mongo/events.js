import clientPromise from ".";
var ObjectId = require('mongodb').ObjectId; 

let events
let db
let client
async function init() {
  if(db) return
  try {
    client = await clientPromise
    db = client.db()
    events = db.collection('events')
  } catch(e) {
    console.error('Failed to connect to MongoDB:', e)
  }
};

(async () => {
  await init()
})();

export async function addEvent({title, description, place, date, pdfUrl }) {
  try {
    if(!events) await init()
    const result = await events.insertOne({ title, description, place, date, pdfUrl  })
  console.log(result)
  return result
  } catch(e) {
    console.error('Failed to insert event:', e)
    return {error: e}
  }
}

export async function getEvents(eventId) {
  try {
    if(!events) await init()
    const result = await events.find().toArray()
    return result
  } catch(e) {
    console.error('Failed to get events:', e)
    return {error: e}
  }
}

export async function getEvent(eventId) {
  console.log(eventId, 'EVENTID')
  try {
    if(!events) await init()
      const oid = new ObjectId(eventId)
    const result = await events.findOne({ _id: oid })
  console.log(result, 'EVENT')
    return result
  } catch(e) {
    console.error('Failed to get event:', e)
    return {error: e}
  }
}