const getHours = () => new Date().getHours();
const getMinutes = () => new Date().getMinutes();
const getYear = () => new Date().getFullYear();
const getMonth = () => new Date().getMonth() + 1;
const getDate = () => new Date().getDate();

const formatNumber = (n) => {
    n = n.toString();
    return n[1] ? n : '0' + n;
}

module.exports = {
    getCurrentTime() {
        return [getHours(), getMinutes()].map(formatNumber).join(':');
    },
    getCurrentDate() {
        return [getYear(), getMonth(), getDate()].map(formatNumber).join('-');
    },
};