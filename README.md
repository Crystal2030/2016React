# React_demos


##查看端口号被占用命令
```
mac下：
sudo lsof -i :8080
sudo kill -9 2301

windows:
1.输入命令：netstat -ano，列出所有端口的情况。在列表中我们观察被占用的端口，比如是8080，首先找到它。
2.查看被占用端口对应的PID，输入命令：netstat -aon|findstr "8080"，回车，记下最后一位数字，即PID,这里是3540
3.继续输入tasklist|findstr "3540"，回车，查看是哪个进程或者程序占用了2720端口，结果是：node.exe
4. 结束该进程：在任务管理器中选中该进程点击”结束进程“按钮，或者是在cmd的命令窗口中输入：taskkill /f /t /im Tencentdl.exe。
```