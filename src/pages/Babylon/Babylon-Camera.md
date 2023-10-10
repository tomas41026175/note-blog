- Universal Camera
    - 可用於第一人稱視角
```
UniversalCamera(name: string, position: Vector3, scene: Scene)
```
- Free Camera
    - 自相相機 >> 你可以使用鼠标和光标键将之在场景中移动
    - 自由 >> 你可以使用鼠标和光标键将之在场景中移动
```
// 参数: 名称，位置，场景
    var camera = new BABYLON.FreeCamera("FreeCamera", new BABYLON.Vector3(0, 1, -15), scene);

```