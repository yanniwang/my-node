var fibonacci = function (n) {
    if (typeof n !== 'number') {
        throw new Error('n should be a Number');
    }
    if (n < 0) {
        throw new Error('n should >= 0')
    }
    if (n > 10) {
        throw new Error('n should <= 10');
    }
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
};

exports.fibonacci = fibonacci;

if (require.main === module) {
    // 如果是直接执行 main.js，则进入此处
    // 如果 main.js 被其他文件 require，则此处不会执行。
    //process 对象是一个全局变量，它提供当前 Node.js 进程的有关信息，以及控制当前 Node.js 进程。 因为是全局变量，所以无需使用 require()
    //process.argv 属性返回一个数组，这个数组包含了启动Node.js进程时的命令行参数
    //数组的第一个元素process.argv[0]——返回启动Node.js进程的可执行文件所在的绝对路径
    //第二个元素process.argv[1]——为当前执行的JavaScript文件路径
    var n = Number(process.argv[2]);
    console.log('fibonacci(' + n + ') is', fibonacci(n));
}