import { get } from '../../http';
import global from '../../globalService';

const storageNameDict = {
    // 查询收入列表、支出列表对应缓存的storage名
    income: 'incomeList',
    outgo: 'outgoList',

};

module.exports = {
    /**
     * 获取类别列表，包括收入和支出
     */
    async getCategoryList(type = 'outgo') {
        const storageName = storageNameDict[type];
        const listCache = global.get(storageName);

        if (listCache && listCache.length) {
            return listCache;
        }

        const list = await get(`/category/${type}`);
        global.set(storageName, list);

        return list;
    },
};