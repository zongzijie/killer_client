var appInstance = getApp();
var cards = require('../../components/common/cards.js');
var _ = require("../../resource/libs/underscore/underscore.js");
var playercount = wx.getStorageSync("playcount");
var cardsUrl = "\/pages\/cards\/cards";
var gameType = "LRS";
var pageData = {
    data: {
        "album1": {
            "style": "background-color:rgba(0, 0, 0, 0);color:rgba(0,0,0);font-size:28.125rpx;opacity:1;text-align:center;margin-left:auto;",
            "players": [],
            "itemType": "album",
            "itemIndex": "album1",
        },
        "btn1": {
            "type": "button",
            "style": "background-color:rgb(60, 60, 61);border-color:rgb(34, 34, 34);border-radius:16.40625rpx;border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:32.8125rpx;height:70.3125rpx;line-height:70.3125rpx;margin-left:auto;margin-right:auto;margin-top:21.09375rpx;opacity:1;text-align:center;width:234.375rpx;",
            "content": "重置",
            "customFeature": {
                "boxColor": "rgb(0, 0, 0)",
                "boxR": "5px",
                "boxStyle": false,
                "boxX": "0",
                "boxY": "0",
                "action": "refresh-page",
                "inner-page-link": "prePage"
            },
            "animations": [],
            "page_form": "",
            "compId": "btn1"
        },
        "btn_reset": {
            "type": "button",
            "style": "background-color:rgb(255, 255, 255);border-color:rgb(34, 34, 34);border-radius:16.40625rpx;border-style:none;border-width:4.6875rpx;color:rgb(0, 0, 0);font-size:32.8125rpx;height:70.3125rpx;line-height:70.3125rpx;margin-left:auto;margin-right:auto;margin-top:51.5625rpx;opacity:1;text-align:center;width:234.375rpx;",
            "content": "重置",
            "customFeature": {
                "boxColor": "rgb(0, 0, 0)",
                "boxR": "5px",
                "boxStyle": false,
                "boxX": "0",
                "boxY": "0",
                "action": "refresh-page"
            },
            "animations": [],
            "page_form": "",
            "compId": "btn_reset",
            "eventHandler": "btn_resetClick",
            "eventParams": ""
        },
        "button4": {
            "type": "button",
            "style": "background-color:rgb(108, 82, 4);border-color:rgb(34, 34, 34);border-radius:50%;border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:32.8125rpx;height:140.625rpx;line-height:140.625rpx;margin-left:564.84375rpx;margin-right:0;margin-top:-145.3125rpx;opacity:1;text-align:center;width:140.625rpx;",
            "content": "下一步",
            "customFeature": {
                "boxColor": "rgb(0, 0, 0)",
                "boxR": "5px",
                "boxStyle": false,
                "boxX": "0",
                "boxY": "0"
            },
            "animations": [],
            "page_form": "",
            "compId": "button4"
        },
        "button5": {
            "type": "button",
            "style": "background-color:rgb(108, 82, 4);border-color:rgb(34, 34, 34);border-radius:50%;border-style:none;border-width:4.6875rpx;color:rgb(255, 255, 255);font-size:32.8125rpx;height:140.625rpx;line-height:140.625rpx;margin-left:39.84375rpx;margin-right:auto;margin-top:-140.625rpx;opacity:1;text-align:center;width:140.625rpx;",
            "content": "上一步",
            "customFeature": {
                "boxColor": "rgb(0, 0, 0)",
                "boxR": "5px",
                "boxStyle": false,
                "boxX": "0",
                "boxY": "0"
            },
            "animations": [],
            "page_form": "",
            "compId": "button5"
        }
    },
    page_router: 'killground',
    page_form: 'none',
    palyerClickEvent: function(event) {

    },
    btn_resetClick: function(e) {
        this.init(true);
        this.setData(this.data);
    },
    init: function(isReset) {
        var me = this;
        var cds = cards(gameType);
        var players = wx.getStorageSync("players");
        //有缓存且不是重置则读取缓存
        if ((players && players.length) && !isReset) {
            me.useCache();
            return;
        }
        me.data["album1"]["players"] = [];
        for (var i = 0; i < playercount; i++) {
            me.data["album1"]["players"].push({
                "src": cds[4].src,
                "id": "player" + (i + 1),
                "cards": _.pluck(cds, "name"),
                "cardIndex": "0"
            });
        }
        //写入缓存
        me.setCache();
    },
    setCache: function() {
        var me = this;
        //写入缓存
        wx.setStorageSync("players", me.data["album1"]["players"]);
    },

    useCache: function() {
        var me = this;
        //使用缓存
        me.data["album1"]["players"] = wx.getStorageSync("players");

    },
    onLoad: function(e) {
    },
    onShow: function(e) {
        this.init();
        this.setData(this.data);

    },
    bindPickerChange: function(e) {
        var me = this;
        console.log(e);
        var value = e.detail.value ? e.detail.value : 0;
        var card = cards(gameType)[value];
        var playerIndex = e.currentTarget.id.replace("picker_", "");
        me.data["album1"]["players"][playerIndex]["src"] = card["src"];
        me.setData(me.data);
        //写入缓存
        me.setCache();
    }
};
pageData.init();
Page(pageData);
