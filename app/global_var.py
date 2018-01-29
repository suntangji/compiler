#!/usr/bin/python3
#-*- coding:utf8 -*-
#author: suntangji 2018-01-29 17:06:53

user_input = ""
language = 'c'
def get_global():
    global user_input
    return user_input
def set_global(var):
    global user_input
    user_input = var
