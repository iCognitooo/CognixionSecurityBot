/** @format */
console.log(`
░█████╗░░█████╗░██████╗░███████╗██╗░░██╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝╚██╗██╔╝
██║░░╚═╝██║░░██║██║░░██║█████╗░░░╚███╔╝░
██║░░██╗██║░░██║██║░░██║██╔══╝░░░██╔██╗░
╚█████╔╝╚█████╔╝██████╔╝███████╗██╔╝╚██╗
░╚════╝░░╚════╝░╚═════╝░╚══════╝╚═╝░░╚═╝`);

const { CodeX } = require('./src/client');
const client = new CodeX();
client.connect();
module.exports = client;
console.log(`Made By iCognitoo`)

console.log("📝 Variables de entorno:");
console.log("CLUSTER_MANAGER_MODE:", process.env.CLUSTER_MANAGER_MODE);
console.log("SHARD_LIST:", process.env.SHARD_LIST);
console.log("TOTAL_SHARDS:", process.env.TOTAL_SHARDS);
console.log("CLUSTER_COUNT:", process.env.CLUSTER_COUNT);
console.log("CLUSTER:", process.env.CLUSTER);

