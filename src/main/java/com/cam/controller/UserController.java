package com.cam.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.cam.model.User;
import com.cam.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.json.Json;
import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by wangl on 2017/5/10.
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @Resource
    private UserService userService;


    @ResponseBody
    @RequestMapping("/login")
    public String userLogin(HttpServletRequest request, HttpServletResponse response,String username, String password){
        Map<String,Object> params=new HashMap<String, Object>();
        params.put("username",username);
        params.put("password",password);
        User user=new User();
        user.setUserName(username);
        user.setUserPwd(password);
        if(userService.checkUserPwd(params)){
            //登录成功
            return "success";
        }else {
            //登录失败
            return "false";
        }
    }

}
