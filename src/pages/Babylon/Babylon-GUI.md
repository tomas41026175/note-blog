- AdvancedDynamicTexture
    - 導入GUI
```
全螢幕
var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
紋理模式(後面加上寬,高)
var advancedTexture2 = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh("UI", 1024, 1024);
```

- Button語法
    - 參數
```
button.top
left
width
height
cornerRadius
thickness
children[i].color
children[i].fontsize
color
background
```
- 添加button
```
advancedTexture.addControl(button);
```
- button監聽事件
```
------------------------------------
button.onPointerClickObservable.add(()=>{
sth...
})
------------------------------------
onPointerMoveObservable	当光标移到控件上方时触发，仅在全屏模式下可用
onPointerEnterObservable	当光标进入控件时触发，仅在全屏模式下可用
onPointerOutObservable	当光标离开控件时触发，仅在全屏模式下可用
onPointerDownObservable	当指针在控件上向下时触发
onPointerUpObservable	当指针在控件上时触发
onPointerClickObservable	单击控件时触发
onClipboardObservable	触发剪贴板事件时触发
```
- button重製視角
```
    advancedTexture.addControl(button);
            button.onPointerClickObservable.add(()=>{
            camera.setPosition(new BABYLON.Vector3(0, 10, 40));
            camera.setTarget(BABYLON.Vector3.Zero())
        })
```
- p-17 online
```
https://playground.babylonjs.com/#RT5IJ4#1
```


