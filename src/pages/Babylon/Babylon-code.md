- 3D engine
```
const engine = new BABYLON.Engine(canvas, true);
```

- scene
```
const scene = new BABYLON.Scene(engine);
```

- camera
```         
// create a FreeCamera, and set its position to (x:0, y:5, z:-10)
          var camera = new BABYLON.FreeCamera(
            "camera1",
            new BABYLON.Vector3(0, 5, -10),
            scene
          );
```

- reset carema positon
```
// target the camera to scene origin
camera.setTarget(BABYLON.Vector3.Zero());
```

- attachControl 附加控制
    - 控制鏡頭到canvas
```
(場景,反鋸齒是否啟用)
camera.atttachControl(canvas,false)
```

- 建立地面
```
const ground = BABYLON.MeshBuilder('ground',{
width:10,height:10,
});
```

- box
```
const box = BABYLON.MeshBuilder.CreateBox("box", {
            width: 2,
            height: 1.5,
            depth: 3,
          });
```

- 球體
```
6個參數(6 params: name, segment, diameter, scene, updatable, sideOrientation)
const sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene)
const sphere = BABYLON.MeshBuilder.CreateSphere('sphere',16,2,scene
)
```

- 移動物件
```
向上移動100%
objName.position.y = 1
```

- Plane 平面
```
const plane = BABYLON.MeshBuilder.CreatePlane('plane',{},scence)
```

- 渲染循環
```
engine.runRenderLoop(()=>{
    scene.render()
})
```

- 監控resize事件(視窗變化)
```
window.addEventListener('resize',()=>{
    engine.resize()
})
```

- 物件轉向
    - ToRadians:數值轉為角度
        - ToRadians(45)轉向45度
```
objName.rotation.y = BABYLON.Tools.ToRadians(45)
```

- 規模 = 大小
```
objName.scaling.x = 1;
```

- 屋頂
```
const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {
diameter(直徑): 1.3, 
height: 1.2,
tessellation(鑲嵌): 3,
});
```

- 流程
    - https://hackmd.io/2Hf7a3dUQzORp_gFOcnALw
    - html 中创建 canvas>初始化 3d 引擎>场景>相機>光源>渲染 loop
<!--     抓取DOM位置>導入引擎>建立場景>於場景scene中導入引擎>建立相機>相機重置到場景中心>加上相機控制附件>加入燈光>建立各項物件(調整物件)>回傳場景scene>執行scene>執行渲染迴圈>監控resize事件,執行engine.resize() -->

    
    
* 邊界框 bounding box
* https://doc.babylonjs.com/typedoc/classes/BABYLON.BoundingBox
    * Oriented Bounding Box，简称OBB，又称为定向边界框
    * Babylon引擎会在对象周围创建一个 边界框
    ![](https://i.imgur.com/5HPQbRW.png)

    * Properties
        * center 取得model中心區域座標
        * centerWorld - 取得相對於整體的model中心位置
        * extendSize - 取得邊界座標
        * extendSizeWorld - 取得相對於整體的邊界座標

- 素材引入
```
// .gltf 等文件全放在一个文件夹，比如 /assets/apple
BABYLON.SceneLoader.Append("/assets/apple", "apple.gltf", scene, (newScene) => {
    ...
})
// 单个 .glb 文件
BABYLON.SceneLoader.ImportMesh("", "", "www.abc.com/apple.glb", scene, (meshes, particleSystems, skeletons) => {
    ...
})
// promise 版本的
BABYLON.SceneLoader.AppendAsync("/assets/apple", "apple.gltf", scene).then(newScene => {
    ...
})
```

