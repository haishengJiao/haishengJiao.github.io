(function(){"use strict";let e;const a=function(){e=setInterval(()=>{postMessage(new Date)},1e3)};onmessage=function(t){t.data.type==="pause"?clearInterval(e):t.data.type==="start"&&a()}})();
