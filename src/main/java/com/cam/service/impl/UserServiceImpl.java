package com.cam.service.impl;

import com.cam.dao.UserDao;
import com.cam.model.User;
import com.cam.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.Map;

/**
 * Created by Zhangxq on 2016/7/15.
 */

@Service
@Transactional(rollbackFor = Exception.class)
public class UserServiceImpl implements UserService {

    @Resource
    private UserDao userDao;

    public boolean checkUserPwd(Map<String,Object> params) {
        return userDao.selectByNamePwd(params)==1?true:false;
    }

    public void addUser(User user) {
        userDao.insertUser(user);
    }
}
