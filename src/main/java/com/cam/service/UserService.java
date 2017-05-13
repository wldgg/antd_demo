package com.cam.service;

import com.cam.model.User;

import java.util.Map;

/**
 * Created by Zhangxq on 2016/7/15.
 */
public interface UserService {

    public boolean checkUserPwd(Map<String,Object> params);

    public void addUser(User user);
}
