const ws = new WebSocket('wss://rpc.testnet.near.org');

ws.on('open', () => {
  console.log('Connected to NEAR WebSocket API');
});

ws.on('message', (data) => {
  console.log('Received:', data);
});

ws.on('close', () => {
  console.log('Disconnected from NEAR WebSocket API');
});
