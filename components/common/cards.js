
//狼人杀卡片
var LRS = [{
    "src": "http://img.weiye.me/zcimgdir/album/file_585fd7875f442.jpg",
    "name": "狼人",
    "remark": "",
}, {
    "src": "http://img.weiye.me/zcimgdir/album/file_585fd78fdc860.jpg",
    "name": "预言家",
    "remark": "",
}, {
    "src": "http://img.weiye.me/zcimgdir/album/file_585fd78ae5e31.jpg",
    "name": "女巫",
    "remark": "",
}, {
    "src": "http://img.weiye.me/zcimgdir/album/file_585fd78a52ed6.jpg",
    "name": "猎人",
    "remark": "",
},  {
    "src": "http://img.weiye.me/zcimgdir/album/file_585fd78b3b48a.jpg",
    "name": "普通村民",
    "remark": "",
},{
    "src": "http://img.weiye.me/zcimgdir/album/file_585fd78c451ac.jpg",
    "name": "守卫",
    "remark": "",
}, {
    "src": "http://img.weiye.me/zcimgdir/album/file_585fd78314ae8.jpg",
    "name": "白狼王",
    "remark": "",
}, {
    "src": "http://img.weiye.me/zcimgdir/album/file_585fd78300bee.jpg",
    "name": "白痴",
    "remark": "",
}, {
    "src": "http://img.weiye.me/zcimgdir/album/file_585fd78c04202.jpg",
    "name": "丘比特",
    "remark": "",
}, {
    "src": "http://img.weiye.me/zcimgdir/album/file_585fd78465d6b.jpg",
    "name": "盗贼",
    "remark": "",
}, {
    "src": "http://img.weiye.me/zcimgdir/album/file_585fd78691f42.jpg",
    "name": "警长",
    "remark": "",
}, ];
//警匪杀卡片
var JFS=[{
    "src": "../../resource/img/langren.jpg",
    "name": "警察",
    "remark": "",
}, {
    "src": "../../resource/img/putongcunming.jpg",
    "name": "杀手",
    "remark": "",
}, {
    "src": "../../resource/img/putongcunming.jpg",
    "name": "平民",
    "remark": "",
}];

var cards=function(type){
    if (type=="LRS") {
        return LRS;
    }
    if (type=="JFS") {
        return JFS;
    }
}

module.exports = cards;