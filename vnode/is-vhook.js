module.exports = isHook

function isHook(hook) {
    return hook && hook._vdomIsHook;
}
