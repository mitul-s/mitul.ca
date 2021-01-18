const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE_ID);

const table = base(process.env.AIRTABLE_TABLE_NAME);

const minifyRecords = (records) => {
  return records.map((record) => getMinifiedRecord(record));
};

const getMinifiedRecord = (record) => {
    if(!record.fields.title) {
        return;
    }

    return {
        id: record.id,
        fields: record.fields,
    }
}

const getShelves = (records) => {
    
    let completed = records.filter(record => record.fields.Status === 'Completed')
    let reading = records.filter(record => record.fields.Status === 'Reading');
    let toRead = records.filter(record => record.fields.Status === 'To Read');

    return {
        completed,
        reading,
        toRead,
    }
}



export default async (_, res) => {

    const records = await table.select({ view: "By Status" }).firstPage();
    const minifiedRecords = minifyRecords(records);
    const shelves = getShelves(minifiedRecords);

    res.statusCode = 200;
    res.json(shelves);

}