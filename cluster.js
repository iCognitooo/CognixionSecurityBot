const { ClusterManager } = require('discord-hybrid-sharding');
const config = require('./configuration/config.js');  // Asumiendo que ahí tienes el token

const manager = new ClusterManager('./index.js', {
  totalClusters: 1,
  totalShards: 'auto',
  token: config.token,  // Aquí pasas el token obligatorio
  mode: 'process',
});

manager.on('clusterCreate', cluster => {
  console.log(`Cluster ${cluster.id} spawned!`);
});

manager.spawn();
