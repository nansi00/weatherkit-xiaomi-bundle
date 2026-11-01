// 心跳自检：每分钟打一条日志。cron 不依赖 MITM，
// 只要「脚本任务」里能看到这条，就说明插件的 [Script] 已注册且脚本能下载。
console.log("XiaomiWeather 心跳 " + new Date().toISOString() + " v1.0.0-beta.4");
$done({});
