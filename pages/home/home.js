var appInstance = getApp();

var pageData = {
    data: {
        "button1": {
            "type": "button",
            "style": "background-image:url(http:\/\/img.weiye.me\/zcimgdir\/thumb\/t_1481290487584ab2f7a9467.jpg);border-color:rgb(243, 243, 243);border-radius:50%;border-style:none;border-width:2.34375rpx;color:rgb(153, 0, 0);font-size:110.15625rpx;font-weight:bold;height:750rpx;line-height:750rpx;margin-left:-2.34375rpx;margin-right:auto;margin-top:112.5rpx;opacity:0.64;text-align:center;width:750rpx;",
            "content": "天黑请闭眼",
            "customFeature": { "boxColor": "rgb(0, 0, 0)", "boxR": "5px", "boxStyle": false, "boxX": "0", "boxY": "0", "action": "none", "inner-page-link": "page10001" },
            "animations": [],
            "page_form": "",
            "compId": "button1",
            "eventParams": "{\"inner-page-link\":\"\\\/pages\\\/killground\\\/killground\"}",
            "eventHandler":"tapInnerLinkHandler"
        },
        "album2": {
            "style": "background-color:rgba(0, 0, 0, 0);font-size:28.125rpx;margin-top:7.03125rpx;opacity:1;text-align:center;margin-left:auto;",
            "ul_style": "padding-left:117.1875rpx;padding-top:16.40625rpx;margin-left:auto;",
            "html_mode": "",
            "li": [ 
            // {
            //     "action": "inner-link",
            //     "li_class": "album-pic router",
            //     "pic": "http:\/\/img.weiye.me\/zcimgdir\/thumb\/t_1481288589584aab8def28c.jpg",
            //     "title": "开局",
            //     "router": "killground",
            //     "li_style": "width:199.21875rpx;margin-right:117.1875rpx;margin-bottom:16.40625rpx;margin-left:auto;",
            //     "img_style": "height:199.21875rpx;border-radius:50%;margin-left:auto;",
            //     "eventParams": "{\"inner-page-link\":\"\\\/pages\\\/killground\\\/killground\"}",
            //     "eventHandler": "tapInnerLinkHandler"
            // }
            ],
            "itemType": "album",
            "itemParentType": null,
            "itemIndex": "album2",
            "content": ""
        }
    },
    page_router: 'home',
    page_form: 'none',
    tapInnerLinkHandler: function(event) {
        wx.setStorageSync("playcount",20);
        if (event.currentTarget.dataset.eventParams) {
            var url = JSON.parse(event.currentTarget.dataset.eventParams)['inner-page-link'];
            if (url) {
                appInstance.turnToPage(url);
            }
        }
    },
    
};
Page(pageData);
