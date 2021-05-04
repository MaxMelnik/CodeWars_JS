function bind(contextObj, func) {
    return function (...args) {
        return func.call(contextObj, args);
    }
}

module.exports = bind;
