#!/bin/bash
OUTPUT='./output'
TIMESTAMP=`date +%s`
FILENAME="${TIMESTAMP}_global_air_release.tar.bz2"


#! 调用webpack进行编译
function webpackRelease () {
    npm run build
}


#! 打包ta包
function toTar () {
    if [ -d ${OUTPUT} ]; then
        tar -cjf ${FILENAME} -C ${OUTPUT} ./
    else
        echo 'sorry,webpack have not result for file'
        exit 0
    fi
}

#! 打包前的提前处理
function preTarProcess () {
    echo 'tar ing! waiting!';
}

#! 打包后的处理
function afterTarProcess () {
    rm -rf ./output
}

#! 主要入口函数
function main () {
    webpackRelease
    preTarProcess
    toTar
    afterTarProcess
    exit 0
}

#! 启动函数
main



