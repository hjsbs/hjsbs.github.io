// sw.js 文件
 
// 安装
self.addEventListener('install', function (e) {
    // 缓存 App Shell 等关键静态资源和 html (保证能缓存的内容能在离线状态跑起来)
});
 
// 激活
self.addEventListener('activate', function (e) {
    // 激活的状态，这里就做一做老的缓存的清理工作
});
 
// 缓存请求和返回（这是个简单的缓存优先的例子）
self.addEventListener('fetch', function (e) {
    e.respondWith(caches.match(e.request)
        .then(function (response) {
            if (response) {
                return response;
            }
            // fetchAndCache 方法并不存在，需要自己定义，这里只是示意代码
            return fetchAndCache(e.request);
        })
    );
});
