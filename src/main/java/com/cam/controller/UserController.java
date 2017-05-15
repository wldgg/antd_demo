package com.cam.controller;

import com.cam.model.User;
import com.cam.service.UserService;
import com.cam.utils.Result;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
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
    public String userLogin(HttpServletRequest request, HttpServletResponse response,String username, String password) throws IOException {
        Map<String,Object> params=new HashMap<String, Object>();
        params.put("username",username);
        params.put("password",password);
        User user=new User();
        user.setUserName(username);
        user.setUserPwd(password);
        ObjectMapper objMapper=new ObjectMapper();
        objMapper.setSerializationInclusion(JsonInclude.Include.NON_NULL);
        String jsonstr=objMapper.writeValueAsString(user);
        User user1=objMapper.readValue(jsonstr,User.class);
        if(userService.checkUserPwd(params)){
            //登录成功
            return Result.success();
        }else {
            //登录失败
            return Result.fail();
        }
    }

}
