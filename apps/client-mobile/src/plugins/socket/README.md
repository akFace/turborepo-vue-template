### 封装的 WebSocket

- 为了便于使用，统一封装了一个 WebSocket 库

#### -简单使用方法

```JavaScript
// 第一个连接
const WS = new Ws('ws://localhost:6050', {
    protocols: 'echo-protocol-1',
    hasHeartBeat: true // 是否需要心跳(保持长连接)
})
WS.send('conent success')
const handleChat = data => console.log(data)
WS.subscribe('message', handleChat)
```

```JavaScript
// 第二个连接
const WS2 = new Ws('ws://localhost:6050', {
    protocols: 'echo-protocol-2'
})
WS2.send('conent success')
const handleChat2 = data => console.log(data)
WS2.subscribe('message', handleChat2)
```
