package com.cam.dao;

import com.cam.model.User;
import org.springframework.stereotype.Repository;

import java.util.Map;

/**
 * Created by Zhangxq on 2016/7/15.
 */

@Repository
public interface UserDao {

    int selectByNamePwd(Map<String,Object> params);

    void insertUser(User user);

}
