- html中創建canvas

```
<canvas id="renderCanvas"></canvas>
```
- 初始化 3d 引擎
```
const canvas = document.getElementById('renderCanvas');
engine = new BABYLON.Engine(canvas, true); // 第二個選項是是否開啟平滑（anti-alias）
engine.enableOfflineSupport = false; // 除非你想做離線體驗，這里可以設為 false
```
- 場景
```
scene = new BABYLON.Scene(engine);
```

- 相機
```
// 最常用的是兩種相機:
// UniversalCamera, 可以自由移動和轉向的相機，兼容三端
const camera = new BABYLON.UniversalCamera(
  'FCamera',
  new BABYLON.Vector3(0, 0, 0),
  scene
)
camera.attachControl(this.canvas, true)
// 以及ArcRotateCamera, 360度“圍觀”一個場景用的相機
// 參數分別是alpha, beta, radius, target 和 scene
const camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene)
camera.attachControl(canvas, true)
```

- 光源
    - 可以自用使用多個光源達到覆合效果，比如一個點光源加一個環境光就是不錯的組合。

```
四種光類型// 點光源
const light1 = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(1, 10, 1), scene)
// 方向光
const light2 = new BABYLON.DirectionalLight("DirectionalLight", new BABYLON.Vector3(0, -1, 0), scene)
// 聚光燈
const light3 = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 30, -10), new BABYLON.Vector3(0, -1, 0), Math.PI / 3, 2, scene)
// 環境光
const light4 = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 1, 0), scene)
覆制代碼a. 聚光燈的參數用於描述一個錐形的光束
聚光燈demo
b. 環境光模擬一種四處都被光照射到的環境
環境光demo
光的色彩// 所有光源都有 diffuse 和 specular
// diffuse 代表光的主體顏色
// specular 代表照在物體上高亮部分的顏色
light.diffuse = new BABYLON.Color3(0, 0, 1)
light.specular = new BABYLON.Color3(1, 0, 0)
// 只有環境光有groundColor，代表地上反射光的顏色
light.groundColor = new BABYLON.Color3(0, 1, 0)
```


- 渲染 loop
```
engine.runRenderLoop(() => {
    scene.render()
})
覆制代碼這段代碼確保場景的每幀更新渲染
```


- 基本例子：
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Babylonjs 基礎</title>
  <style>
    html,
    body {
      overflow: hidden;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
    }

    #renderCanvas {
      width: 100%;
      height: 100%;
      touch-action: none;
    }
  </style>
  <script src="https://cdn.babylonjs.com/babylon.js"></script>
  <script src="https://preview.babylonjs.com/loaders/babylonjs.loaders.min.js"></script>
</head>

<body>
  <canvas id="renderCanvas"></canvas>
  <script>
    const canvas = document.getElementById("renderCanvas")
    const engine = new BABYLON.Engine(canvas, true)
    engine.enableOfflineSupport = false
    /******* 創建場景 ******/
    const createScene = function () {
      // 實例化場景
      const scene = new BABYLON.Scene(engine)
      // 創建相機並添加到canvas
      const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0, 0, 5), scene)
      camera.attachControl(canvas, true)
      // 添加光
      const light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene)
      const light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene)
      // 創建內容，一個球
      const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene)
      return scene
    }
    /******* 結束創建場景 ******/
    const scene = createScene()
    // loop
    engine.runRenderLoop(function () {
      scene.render()
    })
    // resize
    window.addEventListener("resize", function () {
      engine.resize()
    })
  </script>
</body>
```