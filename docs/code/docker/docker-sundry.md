---
title: dcoker-sundry

order: 1
author: zzys
date: 2025-01-6
category:
- 笔记
tag:
- docker
---

常见docker问题及命令记录

## 配置docker

### 安装

[Ubuntu | Docker Docs](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)

### 镜像

[🔥截止目前，国内仍然可用docker镜像加速器汇总（2025年1月） - Kelen](https://www.kelen.cc/dry/docker-hub-mirror)

[Docker/DockerHub 国内镜像源/加速列表（2月15日更新-长期维护） - gnuorg - 博客园](https://www.cnblogs.com/gnuorg/p/18570325)

```bash
docker run \
-p 6379:6379 \
--name redis \
-v /opt/redis/conf/redis.conf:/etc/redis/redis.conf  \
-v /opt/redis/data:/data \
-d redis redis-server /etc/redis/redis.conf \
--appendonly yes \
--requirepass 123456 
```

