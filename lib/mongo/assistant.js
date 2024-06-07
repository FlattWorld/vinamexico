import clientPromise from ".";

let assistant
let db
let client
async function init() {
  if(db) return
  try {
    client = await clientPromise
    db = client.db()
    assistant = db.collection('assistant')
  } catch(e) {
    console.error('Failed to connect to MongoDB:', e)
  }
};

(async () => {
  await init()
})();

export async function addAssistant({name, comeFrom, mail, phone, totalOfPeople, message, eventId='1' }) {
  try {
    if(!assistant) await init()
    const result = await assistant.insertOne({ name, comeFrom, mail, phone, totalOfPeople, message,eventId })
  console.log(result)
  return {result}
  } catch(e) {
    console.error('Failed to insert assistant:', e)
    return {error: e}
  }
}

export async function getAssistants(eventId) {
  try {
    if(!assistant) await init()
    const result = await assistant.find({eventId}).toArray()
    return {result}
  } catch(e) {
    console.error('Failed to get assistants:', e)
    return {error: e}
  }
}