```
var createScene = function() {
    // 創建一個基本的BABYLON場景（舞台）對象。
    var scene = new BABYLON.Scene(engine);

    // 創建一個FreeCamera，並將其位置設置為（x：0，y：5，z：-10）。
    var camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5,-10), scene);

    // 將相機的焦點指向場景的原點。
    camera.setTarget(BABYLON.Vector3.Zero());

    // 將相機連接到畫布，這樣畫布才知道渲染什麽。
    camera.attachControl(canvas, false);

    // 創造一個燈光，指向(0,1,0)方向  - 意思是指向天空。
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);

    // 創建一個內置的“球體”形狀。
    var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {segments:16, diameter:2}, scene);

    // 將球體向上移動1個單位。
    sphere.position.y = 1;

    // 創建一個內置的“地面”形狀。
    var ground = BABYLON.MeshBuilder.CreateGround('ground1', {height:6, width:6, subdivisions: 2}, scene);

    // 返回創建的場景。
    return scene;
}
```
### 實例如下HTML
```
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html" charset="utf-8" />
    <title>Babylon - Getting Started</title>
    <!--- Link to the last version of BabylonJS --->
    <script src="https://cdn.babylonjs.com/babylon.js"></script>
    
    //添加樣式
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
  </head>
  <body>
    <canvas id="renderCanvas"></canvas>
    <script>
      window.addEventListener("DOMContentLoaded", function () {
      
        // 抓取畫布位置
        const canvas = document.getElementById("renderCanvas");
        
        // 引入引擎，這邊兩項參數分別為(畫布,是否反鋸齒)
        const engine = new BABYLON.Engine(canvas, true);
        
        // 創建場景(舞台)
        const createScene = () => {
        
          // 創建基本場景
          const scene = new BABYLON.Scene(engine);
          
          // 創建相機，定位於(0,5,-10)，('名稱',位置,場景位置)
          const camera = new BABYLON.FreeCamera(
            "camera1",
            new BABYLON.Vector3(0, 5, -10),
            scene
          );
          
          //使用setTarget方式將相機焦點指向原點
          camera.setTarget(BABYLON.Vector3.Zero());
          
          // 將相機連接到畫布
          camera.attachControl(canvas, false);
          
          // 建立燈光(HemisphericLight = 半球光),(0,1,0) = 指向天空
          const light = new BABYLON.HemisphericLight(
            "light1",
            new BABYLON.Vector3(0, 1, 0),
            scene
          );
          
          // 使用內建的球體物件(名稱,半徑,位置) 這方法有6個參數(name, segment, diameter, scene, updatable, sideOrientation)
          
          const sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
         
          // 將球體向上移動
          sphere.position.y = 1;
          
          // 使用內建的地面物件 subdivisions:細分,分支
          const ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
          
          // 返回(執行)場景
          return scene;
        };
        // call the createScene function
        const scene = createScene();

        // 渲染循環
        engine.runRenderLoop(function () {
          scene.render();
        });

        // 監控resize事件 == 視窗變化
        window.addEventListener("resize", function () {
          engine.resize();
        });
        
      });
    </script>
  </body>
</html>
