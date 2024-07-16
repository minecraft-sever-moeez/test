const bedrock = require('bedrock-protocol')
const client = bedrock.createClient({
  host: 'Hellomoeez.aternos.me',   // optional
  port: 51159,         // optional, default 19132
  username: 'Notch',   // the username you want to join as, optional if online mode
  offline: false
})
  
  // optional, default false. if true, do not login with Xbox Live. You will not be asked to sign-in if set to true
  function moveRandomly() {
    setInterval(() => {
      if (!client.entity || !client.entity.position) {
        console.log('');
        return;
      }
  
      const directions = ['forward', 'back', 'left', 'right'];
      const direction = directions[Math.floor(Math.random() * directions.length)];
      const time = Math.floor(Math.random() * 1000) + 500; // Durasi gerakan antara 500ms hingga 1500ms
  
      client.queue('move_player', {
        position: {
          x: client.entity.position.x + (Math.random() * 0 - 0),
          y: client.entity.position.y,
          z: client.entity.position.z + (Math.random() * 0 - 0),
          yaw: Math.random() * 360,
          pitch: Math.random() * 360
        },
        mode: 0,
        onGround: true,
        entityRuntimeId: client.entity.runtimeId,
        tick: 0,
      });
    })
  }
