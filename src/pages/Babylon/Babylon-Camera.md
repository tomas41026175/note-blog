# Babylon-Camera
- Universal Camera
    - 可用於第一人稱視角
```
UniversalCamera(name: string, position: Vector3, scene: Scene)
```
- Free Camera
    - 自由相機 >> 你可以使用鼠標和光標鍵將之在場景中移動
```
// 參數: 名稱，位置，場景
    var camera = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(0, 1, -15), scene);

```