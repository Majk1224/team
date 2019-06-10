### promise对象的特点

    （1）对象的状态不受外界影响，promise对象代表一个异步操作，有三种状态，pending（进行中）、fulfilled（已成功）、rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态，这也是promise这个名字的由来“承若”；
    
    （2）一旦状态改变就不会再变，任何时候都可以得到这个结果，promise对象的状态改变，只有两种可能：从pending变为fulfilled，从pending变为rejected。这时就称为resolved（已定型）。如果改变已经发生了，你再对promise对象添加回调函数，也会立即得到这个结果，这与事件（event）完全不同，事件的特点是：如果你错过了它，再去监听是得不到结果的。
    
    （3）有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，Promise对象提供统一的接口，使得控制异步操作更加容易。

### 缺点

    Promise也有一些缺点。首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

> Promise的两个生成promise的静态方法：resolve，reject

>  Promise的两个控制时序的方法：all，race

==例子：==

```
function loadImg(src){
        return new Promise((resolve, reject)=>{
            let img = new Image();
            img.src = src;
            img.onload = function(){
                resolve(img);
            }
            img.onerror = function(e){
                reject(e);
            }
        })
    }
    var url = 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1560667201&di=d2ccb49f200d045f2628143df8a9db48&imgtype=jpg&src=http%3A%2F%2Femoji.cdn.bcebos.com%2Fyunying%2F20190521.jpg';
    loadImg(url).then(res=>{
        document.body.appendChild(res);
       // return 10000;
        //  return Promise.resolve(10000)
         return Promise.reject(new Error('我是一个错误'));
    }, err=>{
        console.log('err...', err);
    }).then(res1=>{
        console.log('res1...', res1);
    }, err1=>{
        console.log('err1...', err1);
    }).then(res2=>{
    }, err2=>{
        
    }).then(res3=>{
    }, err3=>{
        
    }).catch(()=>{
    }).finally(()=>{
        console.log('finally')
    })
```
### async/await
```

    async function load(){
        try{
            let img = await loadImg('http://'+url);
            let num = await 1000;
            console.log('num...', num);
            document.body.appendChild(img);
        }catch(e){
        }
    }
    load().then(res=>console.log('res..', res));
```

