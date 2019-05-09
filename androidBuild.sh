#!/bin/bash
echo "请输入此版本更新的内容描述:"
read answer

cd android
echo "======正在清理======"

# rm -rf app/build
# ./gradlew clean

echo "======清理完成，开始编译======"

./gradlew assembleRelease


# API_KEY=d3b573cafc1d49503b1179dc04d9371f
# HOST=https://www.pgyer.com/apiv2/app/upload
# UKEY=f0c7566bac1bf63f19727640984678fd
# APK_PATH=./app/build/outputs/apk/app-release.apk

# if [ -e "$APK_PATH" ];
# then
  # echo "======ipa正式包完成，开始发布蒲公英======"
  # curl -F "file=@$APK_PATH" -F "uKey=$UKEY" -F "_api_key=$API_KEY" -F "updateDescription=$answer" $HOST >> responses.json
  cd ../
  echo  "本版本更新描述:  $answer " >> logfile.txt

  echo "=========😋打包上传蒲公英成功😀============"
# else
#   echo "======😢apk打包失败😢======"
# fi
