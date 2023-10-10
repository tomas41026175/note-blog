- 加入場景
    - 使用Async function + .then/.catch的方式 
    - 放在CreateSence裡面
    - 使用scene.getMeshByName("detached_house")取得素材
    - 使用name.position.x/y/z更改座標
    - 使用name.rotation.x/y/z旋轉
```
BABYLON.SceneLoader.ImportMeshAsync(model name, folder path, file name, scene).then((result) => {
    result.meshes[1].position.x = 20;
    const myMesh1 = scene.getMeshByName("myMesh_1");
    myMesh1.rotation.y = Math.PI / 2;
});

-------------------------------------------------------------------------
BABYLON.SceneLoader.ImportMeshAsync(
        "",
        "https://assets.babylonjs.com/meshes/",
        "both_houses_scene.babylon"
      ).then((result) => {
       console.log(result);
        const house1 = scene.getMeshByName("detached_house");
        house1.position.y = 0.5;
        const house2 = result.meshes[2];
        house2.position.y = 1;
        house2.rotation.y = Math.PI/3
      });
```

- 加入材質

```
//先定義材質名稱 並綁定Material => new BABYLON.StandardMaterial
//透過材質名稱綁定顏色 => name.diffuseColor
//最後將場景的材質綁定是先定義的材質名稱
     const groundMat = new BABYLON.StandardMaterial("groundMat");
      groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0);
      ground.material = groundMat;

      const roofMat = new BABYLON.StandardMaterial("roofMat");
      roofMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/roof.jpg", scene);
      
      const boxMat = new BABYLON.StandardMaterial("boxMat");
      boxMat.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/floor.png");
      roof.material = roofMat
      box.material = boxMat
```
- 加入門窗(UV貼圖)
    - UV為一組Array

```

const faceUV = [];
    faceUV[0] = new BABYLON.Vector4(0.6, 0.0, 1.0, 1.0); //rear face
    faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.4, 1.0); //front face
    faceUV[2] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //right side
    faceUV[3] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0);
const box = BABYLON.MeshBuilder.CreateBox("box", {width: 2, faceUV: faceUV, wrap: true});
const boxMat = new BABYLON.StandardMaterial("boxMat");
    boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/semihouse.png")
```

- 將兩組物件合併成一組

```
//box和屋顶合併成一組
 const house = BABYLON.Mesh.MergeMeshes([box, roof], true, false, null, false, true)
```
- 複製 / 實例化
    - 複製 : 脫離原先的資料綁定
    - 實例化 : 會受到原先的資料影響 
```
clonedHouse = house.clone("clonedHouse")
instanceHouse = house.createInstance("instanceHouse")
```