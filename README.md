# compiler
> 在线编译网站

### Preview
[Online Compiler](http://compiler.suntangji.me)

### 功能
#### 支持的语言
- c
- cpp
- pyhton2
- python3
#### 即将支持的语言
- go
- java
- php
- swift
#### 支持把代码保存到本地
#### 支持输入输出
### 使用的技术和库

#### 前端
- Jquery
- Bootstrap
- Ace.js

#### 后端
- Python3
- Flask

#### 服务器
- nginx
- uwsgi
### 使用方法
#### 安装软件
- python3
- nginx
#### 下载源码
``` bash
$ git clone git@github.com:suntangji/compiler.git
$ cd compiler
```
#### 启用虚拟环境
``` bash
$ python3 -m venv venv
$ . venv/bin/activate
```
#### 安装依赖
``` bash
$ pip install -r requirements.txt
```
#### 新建文件夹
```bash
$ mkdir /tmp/compiler
```
#### 修改uwsgi配置文件
``` bash
[uwsgi] 
socket=/tmp/compiler/uwsgi.sock
manage-script-name=true 
wsgi-file = web.py
master=true
processes=4
threads=2
stats=127.0.0.1:9001
callable=app
virtualenv=/var/compiler/venv #你的项目地址虚拟环境
daemonize = /tmp/compiler/uwsgi.log
touch-chain-reload = true
pidfile = uwsgi.pid
```
#### 配置nginx服务器
```bash 
server {
        listen 80;
        server_name compiler.suntangji.me;
        charset utf-8;
        client_max_body_size 75M;
        location /{ try_files $uri @compiler; }
        location @compiler{
               include uwsgi_params;
               uwsgi_pass unix:/tmp/compiler/uwsgi.sock;
             }
      }
```
#### 重启nginx服务器
```bash
$ /usr/local/nginx/sbin/nginx -s reload #nginx安装地址
```
#### 启动项目
```bash
$ uwsgi uwsgi.ini
$ #停止uwsgi服务 uwsgi --stop uwsgi.pid
```
