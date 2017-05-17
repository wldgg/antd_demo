<%@page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<html>
<body>
<%--<script src="https://cdn.bootcss.com/jsencrypt/2.3.1/jsencrypt.min.js"></script>--%>
<script src="https://passport.jd.com/new/js/jsencrypt.min.js"></script>
<%--<script src="./jsencrypt.js"></script>--%>
<a href="<%=request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+request.getContextPath()+'/'+"user/login"%>">Hello World!</a>
<button onclick="doss()">show!</button>
</body>
<script type="text/javascript">
    //登陆操作
    function loginSubmit(callback) {
        $('#loginsubmit').text('正在登录...');
        if (window.location.href.indexOf("/popupLogin2013") != -1) {
            frameLoginSubmit(callback);
            return;
        }
        var loginUrl = "/uc/loginService";
        var uuid = $("#uuid").val();
        var chkRememberMe = "";
        if ($('#autoLogin').attr('checked')) {
            chkRememberMe = "on";
        }
        $.ajax({
            url: loginUrl + "?uuid=" + uuid + "&" + location.search.substring(1) + "&r=" + Math.random() + "&version=2015",
            type: "POST",
            dataType: "text",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            data: {
                uuid: $('#uuid').val(),
                eid: $('#eid').val(),
                fp: $('#sessionId').val(),
                _t: $('#token').val(),
                loginType: $('#loginType').val(),
                loginname: $('#loginname').val(),
                nloginpwd: getEntryptPwd($('#nloginpwd').val()),
                chkRememberMe: chkRememberMe,
                authcode: $('#authcode').val(),
                pubKey: $('#pubKey').val(),
                sa_token: $('#sa_token').val(),
                seqSid: window._jdtdmap_sessionId
            },
            error: function() {
                showMesInfo("网络超时，请稍后再试", "error");
            },
            success: function(result) {
                if (result) {
                    var obj = eval(result);
                    if (obj.success) {
                        Util.Cookie.setALCookie();
                        var isIE = !-[1, ];
                        if (isIE) {
                            var link = document.createElement("a");
                            link.href = obj.success;
                            link.style.display = 'none';
                            document.body.appendChild(link);
                            link.click();
                        } else {
                            window.location = obj.success;
                        }
                        return;
                    }
                    if (obj.transfer) {
                        window.location = obj.transfer + window.location.search;
                        return;
                    }
                    if (obj.venture) {
                        window.location = "//safe.jd.com/dangerousVerify/index.action?username=" + obj.venture + "&ReturnUrl=" + encodeURI(obj.ventureRet) + "&p=" + obj.p + "&t=" + new Date().getTime();
                        return;
                    }
                    if (obj.resetpwd) {
                        window.location = "//safe.jd.com/resetPwd/reset.action?username=" + obj.resetpwd;
                        return;
                    }
                    if (obj.rescue) {
                        window.location = obj.rescue;
                        return;
                    }
                    if (obj._t) {
                        $("#token").val(obj._t);
                    }
                    if (obj.verifycode || obj.authcode1 || obj.authcode2 || obj.emptyAuthcode) {
                        $("#o-authcode").show();
                    }
                    $("#JD_Verification1").click();
                    if (obj.authcode2) {
                        callback(obj.authcode2, "error", ["#authcode"]);
                    }
                    if (obj.username) {
                        initCountryCode(obj);
                        callback(obj.username, "error", ["#loginname"]);
                    }
                    if (obj.pwd) {
                        initCountryCode(obj);
                        callback(obj.pwd, "error", ["#nloginpwd"]);
                        clearPwd();
                    }
                    if (obj.emptyAuthcode) {
                        callback(obj.emptyAuthcode, "error", ["#authcode"]);
                    }
                }
                var input = $('.item-error').eq(0).find('input');
                var t = input.val();
                input.val("").focus().val(t);
                $("#loginsubmit").html("登&nbsp;&nbsp;&nbsp;&nbsp;录");
            }
        });
    }
</script>
</html>
